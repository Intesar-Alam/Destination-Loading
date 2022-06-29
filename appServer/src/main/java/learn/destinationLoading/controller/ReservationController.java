package learn.destinationLoading.controller;

import learn.destinationLoading.domain.ReservationService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.UserAccount;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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

//    @GetMapping("/{reservationId}")
//    public List<Reservation> findByReservationId(@PathVariable int reservationId){
//        return service.findByReservationId(reservationId);
//    }

    @GetMapping("/useraccount/{userId}")
    public List<Reservation> findByUserId(@PathVariable int userId){
        return service.findByUserId(userId);
    }

    @GetMapping("/company/{companyId}")
    public List<Reservation> findByCompanyId(@PathVariable int companyId){
        return service.findByCompanyId(companyId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Reservation reservation){
        Result<Reservation> result = service.add(reservation);
        if (result.isSuccess()) {
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
