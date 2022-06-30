package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.AppUserMapper;
import learn.destinationLoading.models.AppUser;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.transaction.annotation.Transactional;

import java.sql.PreparedStatement;
import java.sql.Statement;
import java.util.List;

  public class AppUserJdbcTemplateRepository  {

    private final JdbcTemplate jdbcTemplate;

    public AppUserJdbcTemplateRepository (JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

//    @Override
//    @Transactional
//    public AppUser findByUsername(String username) {
//        List<String> roles = getRolesByUsername(username);
//
//        final String sql = "select app_user_id, username, password_hash, disabled "
//                + "from app_user "
//                + "where username = ?;";
//
//        return jdbcTemplate.query(sql, new AppUserMapper(roles), username).stream().findFirst().orElse(null);

//}
//    @Override
//    @Transactional
//    public AppUser create(AppUser user) {
//
//        final String sql = "insert into app_user (username, password_hash) values (?, ?);";
//
//        GeneratedKeyHolder keyHolder = new GeneratedKeyHolder();
//        int rowsAffected = jdbcTemplate.update(connection -> {
//            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
//            ps.setString(1, user.getUsername());
//            ps.setString(2, user.getPassword());
//            return ps;
//        }, keyHolder);
//
//        if (rowsAffected <= 0) {
//            return null;
//        }
//
//        user.setAppUserId(keyHolder.getKey().intValue());
//
//        updateRoles(user);
//
//        return user;
//    }

}
