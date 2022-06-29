package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.ReservationMapper;
import learn.destinationLoading.data.mappers.UserAccountMapper;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.UserAccount;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

@Repository
public class UserAccountJdbcTemplateRepository implements UserAccountRepository {

    private final JdbcTemplate jdbcTemplate;

    public UserAccountJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<UserAccount> findAll () {
        final String sql = "select app_user_id, email, first_name, last_name, address, phone, dob "
                + "from user_account;";
        return jdbcTemplate.query(sql, new UserAccountMapper());
    }

    @Override
    @Transactional
    public UserAccount findById (int appUserId) {
        final String sql = "select app_user_id, email, first_name, last_name, address, phone, dob "
                + "from user_account "
                + "where app_user_id = ?;";

        UserAccount userAccount = jdbcTemplate.query(sql, new UserAccountMapper(), appUserId).stream().findFirst().orElse(null);

        if (userAccount != null) {
            addReservations(userAccount);
        }

        return userAccount;

    }

    @Override
    public UserAccount add (UserAccount userAccount) {
        // not sure if app_user_id should actually be included here, since it should be automatically set for a standard user vs admin vs rep - might be able to do it here and then just not include it in the form
        final String sql = "insert into user_account (email, first_name, last_name, address, phone, dob) "
                + " values (?, ?, ?, ?, ?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            // UserAccount is identified by an appUserId as a primary key, which is made before the account, so it should be stored in the object already and passed right in
            ps.setInt(0, userAccount.getAppUserId());
            ps.setString(1, userAccount.getEmail());
            ps.setString(2, userAccount.getFirstName());
            ps.setString(3, userAccount.getLastName());
            ps.setString(4, userAccount.getAddress());
            ps.setString(5, userAccount.getPhone());
            ps.setDate(6, userAccount.getDob() == null ? null : Date.valueOf(userAccount.getDob()));
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        return userAccount;
    }

    @Override
    public boolean update (UserAccount userAccount) {
        final String sql = "update user_account set "
                + "email = ?, "
                + "first_name = ?, "
                + "last_name = ?, "
                + "address = ?, "
                + "phone = ?, "
                + "dob = ? "
                + "where app_user_id = ?;";
        return jdbcTemplate.update(sql,
                userAccount.getEmail(),
                userAccount.getFirstName(),
                userAccount.getLastName(),
                userAccount.getAddress(),
                userAccount.getPhone(),
                userAccount.getDob(),
                userAccount.getAppUserId()) > 0;
    }

    @Override
    @Transactional
    public boolean deleteById (int appUserId) {
        jdbcTemplate.update("delete from reservation where app_user_id = ?;", appUserId);
        return jdbcTemplate.update("delete from user_account where app_user_id = ?;", appUserId) > 0;
    }

    private void addReservations(UserAccount userAccount) {
        final String sql = "select r.reservation_id, r.app_user_id, r.company_id, r.reservation_date, r.reservation_code, r.reservation_title "
                + "from reservation r "
                + "where r.app_user_id = ?;";

        List<Reservation> userAccountReservations = jdbcTemplate.query(sql, new ReservationMapper(), userAccount.getAppUserId());
        userAccount.setReservations(userAccountReservations);
    }
}
