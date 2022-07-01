package learn.destinationLoading.controller;

import learn.destinationLoading.domain.ReservationService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.domain.ResultType;
import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.UserAccount;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reservation")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:3000"})
public class ReservationController {

    private final ReservationService service;

    public ReservationController(ReservationService service) {
        this.service = service;
    }

    @GetMapping
    public List<Reservation> findAll(){
        return service.findAll();
    }

    @GetMapping("/{reservationId}")
    public Reservation findById(@PathVariable int reservationId) {
        return service.findById(reservationId);
    }

    @GetMapping("/user")
    public List<Reservation> findByUser(UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();
        int appUserId = appUser.getAppUserId();
        return service.findByUserId(appUserId);
    }

    @GetMapping("/useraccount/{userId}")
    public List<Reservation> findByUserId(@PathVariable int userId){
        return service.findByUserId(userId);
    }

    @GetMapping("/company/{companyId}")
    public List<Reservation> findByCompanyId(@PathVariable int companyId){
        return service.findByCompanyId(companyId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Reservation reservation, UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();
        int appUserId = appUser.getAppUserId();
        int companyId = appUser.getCompanyId();

        Result<Reservation> result = service.add(reservation);
        if (result.isSuccess()) {
            reservation.setAppUserId(appUserId);
            reservation.setCompanyId(companyId);
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{reservationId}")
    public ResponseEntity<Object> update(@PathVariable int reservationId, @RequestBody Reservation reservation, UsernamePasswordAuthenticationToken principal){
        if(reservationId != reservation.getReservationId()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        AppUser appUser = (AppUser) principal.getPrincipal();

        Reservation existingReservation = service.findById(reservationId);
        if (existingReservation.getAppUserId() != appUser.getAppUserId() || existingReservation.getCompanyId() != appUser.getCompanyId()
        || !appUser.getRoles().get(0).equals("ADMIN")) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        Result<Reservation> result = service.update(reservation);
        if(!result.isSuccess()) {
            if (result.getType() == ResultType.NOT_FOUND) {
                return new ResponseEntity<>(HttpStatus.NOT_FOUND);
            } else {
                return ErrorResponse.build(result);
            }
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity<Void> deleteById(@PathVariable int reservationId, UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();

        Reservation reservation = service.findById(reservationId);

        if (appUser.getAppUserId() != reservation.getAppUserId()) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
        Result<Reservation> result = service.deleteById(reservationId);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
