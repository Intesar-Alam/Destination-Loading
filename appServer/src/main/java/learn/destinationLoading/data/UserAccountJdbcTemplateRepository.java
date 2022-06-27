package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.ReservationMapper;
import learn.destinationLoading.data.mappers.UserAccountMapper;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.UserAccount;
import org.apache.catalina.User;
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
        final String sql = "select user_account_id, email, first_name, last_name, address, phone, dob, app_user_id "
                + "from user_account;";
        return jdbcTemplate.query(sql, new UserAccountMapper());
    }

    @Override
    @Transactional
    public UserAccount findById (int userAccountId) {
        final String sql = "select user_account_id, email, first_name, last_name, address, phone, dob, app_user_id "
                + "from user_account "
                + "where user_account_id = ?;";

        UserAccount userAccount = jdbcTemplate.query(sql, new UserAccountMapper, userAccountId).stream().findFirst().orElse(null);

        if (userAccount != null) {
            addReservations(userAccount);
        }

        return userAccount;

    }

    @Override
    public UserAccount add (UserAccount userAccount) {
        // not sure if app_user_id should actually be included here, since it should be automatically set for a standard user vs admin vs rep - might be able to do it here and then just not include it in the form
        final String sql = "insert into user_account (email, first_name, last_name, address, phone, dob, app_user_id) "
                + " values (?, ?, ?, ?, ?, ?, ?);";

        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, userAccount.getEmail());
            ps.setString(2, userAccount.getFirstName());
            ps.setString(3, userAccount.getLastName());
            ps.setString(4, userAccount.getAddress());
            ps.setString(5, userAccount.getPhone());
            ps.setDate(6, userAccount.getDob() == null ? null : Date.valueOf(userAccount.getDob()));
            ps.setInt(7, userAccount.getAppUserId());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        userAccount.setUserAccountId(keyHolder.getKey().intValue());
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
                + "dob = ?, "
                + "app_user_id = ? "
                + "where user_account_id = ?;";
        return jdbcTemplate.update(sql,
                userAccount.getEmail(),
                userAccount.getFirstName(),
                userAccount.getLastName(),
                userAccount.getAddress(),
                userAccount.getPhone(),
                userAccount.getDob(),
                userAccount.getAppUserId(),
                userAccount.getUserAccountId()) > 0;
    }

    @Override
    public boolean deleteById (int userId) {
        return false;
    }

    private void addReservations(UserAccount userAccount) {
        final String sql = "select r.reservation_id, r.user_account_id, r.company_id, r.reservation_date, r.reservation_code "
                + "from reservation r "
                + "where r.user_account_id = ?;";

        List<Reservation> userAccountReservations = jdbcTemplate.query(sql, new ReservationMapper(), userAccount.getUserAccountId());
        userAccount.setReservations(userAccountReservations);
    }
}
