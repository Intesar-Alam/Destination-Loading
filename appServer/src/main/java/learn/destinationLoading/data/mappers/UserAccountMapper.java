package learn.destinationLoading.data.mappers;

import learn.destinationLoading.models.UserAccount;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

//TODO add setter for getting app_user_id fk, add field to model
public class UserAccountMapper implements RowMapper<UserAccount> {

    @Override
    public UserAccount mapRow(ResultSet rs, int i) throws SQLException {
        UserAccount userAccount = new UserAccount();
        userAccount.setUserId(rs.getInt("user_account_id"));
        userAccount.setEmail(rs.getString("email"));
        userAccount.setFirstName(rs.getString("first_name"));
        userAccount.setLastName(rs.getString("last_name"));
        if (rs.getString("address") != null) {
            userAccount.setAddress(rs.getString("address"));
        }
        if (rs.getString("phone") != null) {
            userAccount.setPhone(rs.getString("phone"));
        }
        if (rs.getDate("dob") != null) {
            userAccount.setDob(rs.getDate("dob").toLocalDate());
        }
        return userAccount;
    }

}
