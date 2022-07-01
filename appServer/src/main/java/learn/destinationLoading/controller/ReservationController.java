package learn.destinationLoading.controller;

import learn.destinationLoading.domain.ReservationService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.UserAccount;
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
    public ResponseEntity<Object> update(@PathVariable int reservationId, @RequestBody Reservation reservation){
        if(reservationId != reservation.getReservationId()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Reservation> result = service.update(reservation);
        if(result.isSuccess()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity<Void> deleteById(@PathVariable int reservationId) {
        Result<Reservation> result = service.deleteById(reservationId);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
