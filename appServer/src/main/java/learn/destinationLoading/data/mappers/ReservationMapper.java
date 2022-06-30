package learn.destinationLoading.data.mappers;

import learn.destinationLoading.models.Reservation;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ReservationMapper implements RowMapper<Reservation> {

    @Override
    public Reservation mapRow(ResultSet rs, int i) throws SQLException {
        Reservation reservation = new Reservation();
        reservation.setReservationId(rs.getInt("reservation_id"));
        reservation.setappUserId(rs.getInt("app_user_id"));
        reservation.setCompanyId(rs.getInt("company_id"));
        reservation.setReservationDate(rs.getDate("reservation_date").toLocalDate());
        reservation.setReservationCode(rs.getString("reservation_code"));
        reservation.setReservationTitle(rs.getString("reservation_title"));

        return reservation;
    }
}
