package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.UserAccountMapper;
import learn.destinationLoading.models.UserAccount;
import org.apache.catalina.User;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

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
    }

    @Override
    public UserAccount add (UserAccount userAccount) {
        return null;
    }

    @Override
    public boolean update (UserAccount userAccount) {
        return false;
    }

    @Override
    public boolean deleteById (int userId) {
        return false;
    }
}
