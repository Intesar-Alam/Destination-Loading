package learn.destinationLoading.data;

import learn.destinationLoading.models.Reservation;

import java.util.List;

public interface ReservationRepository {
    List<Reservation> findAll();

    Reservation findById(int reservationId);

    Reservation findByUserId(int userId);

    Reservation findByCompanyId(int companyId);

    Reservation add(Reservation reservation);

    boolean update(Reservation reservation);

    boolean deleteById(int reservationId);
}
