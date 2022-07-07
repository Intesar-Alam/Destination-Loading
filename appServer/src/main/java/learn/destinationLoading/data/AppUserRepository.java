package learn.destinationLoading.data;

import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.models.UserAccount;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface AppUserRepository {
    @Transactional
    AppUser findByUsername(String username);

    @Transactional
    AppUser create(AppUser user);

    @Transactional
    void update(AppUser user);




}
