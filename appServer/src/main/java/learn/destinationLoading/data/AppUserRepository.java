package learn.destinationLoading.data;

import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.models.UserAccount;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface AppUserRepository {

    AppUser findByUsername(String username);

    AppUser create(AppUser user);

    boolean update(AppUser user);

    boolean updateRoles(AppUser user);

    List<String> getRolesByUsername(String username);
}
