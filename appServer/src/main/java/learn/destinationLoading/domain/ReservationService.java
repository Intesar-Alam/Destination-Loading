package learn.destinationLoading.domain;

import learn.destinationLoading.data.ReservationRepository;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationService {

    private final ReservationRepository repository;

    public ReservationService(ReservationRepository repository) {
        this.repository = repository;
    }

    List<Reservation> findAll(){
        return repository.findAll();
    }

    List<Reservation> findByUserId(int userId){
        return repository.findByUserId(userId);
    }

    List<Reservation> findByCompanyId(int companyId){
        return repository.findByCompanyId(companyId);
    }

    Result<Reservation> add(Reservation reservation){
        Result<Reservation> result = validate(reservation);

        if(!result.isSuccess()) return result;

        if(reservation.getReservationId() != 0){
            result.addMessage("Id cannot be preset");
            return result;
        }

        Reservation reserve = repository.add(reservation);
        if(reserve == null){
            result.addMessage("There was an issue and the reservation could not be added");
        }else{
            result.setPayload(reserve);
        }

        return result;
    }

    Result<Reservation> update(Reservation reservation){
        Result<Reservation> result = validate(reservation);

        if(!result.isSuccess()) return result;

        if(reservation.getCompanyId() == 0){
            result.addMessage("Id is missing");
        }

        if(!result.isSuccess()) return result;

        if(repository.update(reservation)){
            result.setPayload(reservation);
        }else{
            result.addMessage("The reservation was not found", ResultType.INVALID);
        }

        return result;
    }

    private Result<Reservation> validate(Reservation reservation) {
        Result<Reservation> result = new Result<>();

        if(reservation == null){
            result.addMessage("Reservation is missing");
            return result;
        }

        if(reservation.getUserAccountId() < 1){
            result.addMessage("User is missing");
        }

        if(reservation.getCompanyId() < 1){
            result.addMessage("Company is missing");
        }

        if(reservation.getTransportationMode() == null){
            result.addMessage("Transport mode Missing");
        }

        if(reservation.getReservationDate().isBefore(LocalDate.now())){
            result.addMessage("Reservation cannot be in the past");
        }

        if(AppUtilities.blank(reservation.getReservationCode())){
            result.addMessage("Reservation code is missing");
        }

        return result;
    }
}
