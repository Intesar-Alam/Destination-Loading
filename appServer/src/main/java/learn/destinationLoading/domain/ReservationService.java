package learn.destinationLoading.domain;

import learn.destinationLoading.data.CompanyRepository;
import learn.destinationLoading.data.ReservationRepository;
import learn.destinationLoading.data.UserAccountRepository;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ReservationService {

    private final ReservationRepository repository;
    private final UserAccountRepository userAccountRepository;
    private final CompanyRepository companyRepository;

    public ReservationService(ReservationRepository repository, UserAccountRepository userAccountRepository, CompanyRepository companyRepository) {
        this.repository = repository;
        this.userAccountRepository = userAccountRepository;
        this.companyRepository = companyRepository;
    }

    public List<Reservation> findAll(){
        List<Reservation> reservations = repository.findAll();
        for (Reservation reservation: reservations){
            reservation.setUserAccount(userAccountRepository.findById(reservation.getAppUserId()));
            reservation.setCompany(companyRepository.findById(reservation.getCompanyId()));
        }
        return reservations;

    }

    public Reservation findById(int reservationId){
        Reservation reservation = repository.findById(reservationId);
        if(reservation == null) return null;
        reservation.setUserAccount(userAccountRepository.findById(reservation.getAppUserId()));
        reservation.setCompany(companyRepository.findById(reservation.getCompanyId()));
        return reservation;
    }

    public List<Reservation> findByUserId(int userId){
        List<Reservation> reservations = repository.findByUserId(userId);
        for (Reservation reservation: reservations){
            reservation.setUserAccount(userAccountRepository.findById(reservation.getAppUserId()));
            reservation.setCompany(companyRepository.findById(reservation.getCompanyId()));
        }
        return reservations;
    }

    public List<Reservation> findByCompanyId(int companyId){
        List<Reservation> reservations = repository.findByCompanyId(companyId);
        for (Reservation reservation: reservations){
            reservation.setUserAccount(userAccountRepository.findById(reservation.getAppUserId()));
            reservation.setCompany(companyRepository.findById(reservation.getCompanyId()));
        }
        return reservations;
    }

    public Result<Reservation> add(Reservation reservation){
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

    public Result<Reservation> update(Reservation reservation){
        Result<Reservation> result = validate(reservation);

        if(!result.isSuccess()) return result;

        if(reservation.getReservationId() == 0){
            result.addMessage("Id is missing");
            return result;
        }

        if(repository.update(reservation)){
            result.setPayload(reservation);
        }else{
            result.addMessage("The reservation was not found", ResultType.NOT_FOUND);
        }

        return result;
    }

    public Result<Reservation> deleteById(int reservationId){
        if(repository.deleteById(reservationId)){
            return new Result<>();
        }else{
            Result<Reservation> result = new Result<>();
            result.addMessage("Reservation was not found", ResultType.NOT_FOUND);
            return result;
        }
    }

    private Result<Reservation> validate(Reservation reservation) {
        Result<Reservation> result = new Result<>();

        if(reservation == null){
            result.addMessage("Reservation is missing");
            return result;
        }

        if(reservation.getAppUserId() < 1){
            result.addMessage("User is missing");
        }else if(userAccountRepository.findById(reservation.getAppUserId()) == null){
            result.addMessage("User Account not found");
        }

        if(reservation.getCompanyId() < 1){
            result.addMessage("Company is missing");
        }else if(companyRepository.findById(reservation.getCompanyId()) == null){
            result.addMessage("Company Account not found");
        }

//        if(reservation.getReservationDate() == null ){
//            result.addMessage("Reservation date is missing");
//        }else if(reservation.getReservationDate().isBefore(LocalDate.now())){
//            result.addMessage("Reservation cannot be in the past");
//        }

        if(AppUtilities.blank(reservation.getReservationCode())){
            result.addMessage("Reservation code is missing");
        }

        if(AppUtilities.blank(reservation.getReservationTitle())){
            result.addMessage("Reservation title is missing");
        }

        return result;
    }
}
