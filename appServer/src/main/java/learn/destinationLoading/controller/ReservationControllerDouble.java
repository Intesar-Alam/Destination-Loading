package learn.destinationLoading.controller;

import learn.destinationLoading.domain.ReservationService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.domain.ResultType;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/test/reservation")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:3000"})
public class ReservationControllerDouble {

    private final ReservationService service;

    public ReservationControllerDouble(ReservationService service) {
        this.service = service;
    }

    private final List<Reservation> reservations = List.of(
            new Reservation(1, 1, 1,
                    LocalDate.now().plusWeeks(2), "XXXXXX", "Summer Vacay"),
            new Reservation(2, 1, 2,
                    LocalDate.now().plusWeeks(3), "YYYYYY", "Summer Vacay 2"),
            new Reservation(3, 2, 3,
                    LocalDate.now().plusWeeks(1), "ZZZZZZ", "Train Ride"),
            new Reservation(4, 2, 3,
                    LocalDate.now().plusWeeks(2), "123ABC", "Amtrak Trip")
    );

    @GetMapping
    public List<Reservation> findAll(){
        return reservations;
    }

//    @GetMapping("/{reservationId}")
//    public List<Reservation> findByReservationId(@PathVariable int reservationId){
//        return service.findByReservationId(reservationId);
//    }

    @GetMapping("/useraccount/{userId}")
    public List<Reservation> findByUserId(@PathVariable int userId){
        return reservations.stream().filter(reservation -> reservation.getUserAccountId() == userId)
                .collect(Collectors.toList());
    }

    @GetMapping("/company/{companyId}")
    public List<Reservation> findByCompanyId(@PathVariable int companyId){
        return reservations.stream().filter(reservation -> reservation.getCompanyId() == companyId)
                .collect(Collectors.toList());
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Reservation reservation){
        if (AppUtilities.notBlank(reservation.getReservationCode())) {
            return new ResponseEntity<>(reservation, HttpStatus.CREATED);
        }
        Result<Reservation> result = new Result<>();
        result.addMessage("Reservation code is missing");
        return ErrorResponse.build(result);
    }

    @PutMapping("/{reservationId}")
    public ResponseEntity<Object> update(@PathVariable int reservationId, @RequestBody Reservation reservation){
        if(reservationId != reservation.getReservationId()){
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        if (reservationId == 0) {
            Result<Company> result = new Result<>();
            result.addMessage("Example error message", ResultType.NOT_FOUND);
            return ErrorResponse.build(result);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{reservationId}")
    public ResponseEntity<Void> deleteById(@PathVariable int reservationId) {
        if (reservationId > 0 && reservationId < 5) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
