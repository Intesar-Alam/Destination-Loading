package learn.destinationLoading.data;

import learn.destinationLoading.models.UserAccount;

import java.util.List;

public interface UserAccountRepository {
    List<UserAccount> findAll();

    UserAccount findById(int userId);

    UserAccount add(UserAccount userAccount);

    boolean update(UserAccount userAccount);

    boolean deleteById(int userId);
}
