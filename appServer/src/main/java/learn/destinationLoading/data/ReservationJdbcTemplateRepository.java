package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.ReservationMapper;
import learn.destinationLoading.models.Reservation;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class ReservationJdbcTemplateRepository implements ReservationRepository{

    private final JdbcTemplate jdbcTemplate;

    public ReservationJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Reservation> findAll() {
        final String sql = "select reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title " +
                "from reservation " +
                "order by reservation_date asc;";
        return jdbcTemplate.query(sql, new ReservationMapper());
    }

    @Override
    public Reservation findById (int reservationId) {
        final String sql = "select reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title " +
                "from reservation " +
                "where reservation_id = ?;";
        return jdbcTemplate.query(sql, new ReservationMapper(), reservationId).stream().findFirst().orElse(null);
    }

    @Override
    public List<Reservation> findByUserId (int userId) {
        final String sql = "select reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title " +
                "from reservation " +
                "where user_account_id = ?;";
        return jdbcTemplate.query(sql, new ReservationMapper(), userId);
    }

    @Override
    public List<Reservation> findByCompanyId (int companyId) {
        final String sql = "select reservation_id, user_account_id, company_id, reservation_date, reservation_code, reservation_title " +
                "from reservation " +
                "where company_id = ? " +
                "order by reservation_date asc;";
        return jdbcTemplate.query(sql, new ReservationMapper(), companyId);
    }

    @Override
    public Reservation add (Reservation reservation) {
        final String sql = "insert into reservation (user_account_id, company_id, reservation_date, reservation_code, reservation_title) " +
                "values (?, ?, ?, ?, ?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement statement = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            statement.setInt(1, reservation.getUserAccountId());
            statement.setInt(2, reservation.getCompanyId());
            statement.setDate(3, Date.valueOf(reservation.getReservationDate()));
            statement.setString(4, reservation.getReservationCode());
            statement.setString(5, reservation.getReservationTitle());
            return statement;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        reservation.setReservationId(keyHolder.getKey().intValue());
        return reservation;
    }

    @Override
    public boolean update (Reservation reservation) {
       final String sql = "update reservation set "
               + "user_account_id = ?, "
               + "company_id = ?, "
               + "reservation_date = ?, "
               + "reservation_code = ?, "
               + "reservation_title = ? "
               + "where reservation_id = ?;";
       return jdbcTemplate.update(sql, reservation.getUserAccountId(), reservation.getCompanyId(),
               reservation.getReservationDate(), reservation.getReservationCode(), reservation.getReservationTitle(),
               reservation.getReservationId()) > 0;
    }

    @Override
    public boolean deleteById (int reservationId) {
        return jdbcTemplate.update("delete from reservation where reservation_id = ?;", reservationId) > 0;
    }
}
