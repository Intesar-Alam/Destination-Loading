package learn.destinationLoading.domain;

import learn.destinationLoading.data.UserAccountRepository;
import learn.destinationLoading.models.UserAccount;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserAccountService {

    private final UserAccountRepository repository;

    public UserAccountService(UserAccountRepository repository) {
        this.repository = repository;
    }

    public List<UserAccount> findAll(){
        return repository.findAll();
    }

    public UserAccount findById(int userId){
        return repository.findById(userId);
    }

    public Result<UserAccount> add(UserAccount userAccount){
        Result<UserAccount> result = validate(userAccount);

        if(!result.isSuccess()) return result;

//        if(userAccount.getAppUserId() != 0){
//            result.addMessage("Id cannot be preset");
//            return result;
//        }

        UserAccount account = repository.add(userAccount);
        if(account == null) {
            result.addMessage("Email is already in use");
        }else{
            result.setPayload(account);
        }
        return result;
    }

    public Result<UserAccount> update (UserAccount userAccount){
        Result<UserAccount> result = validate(userAccount);

        if(!result.isSuccess()) return result;

        if(userAccount.getAppUserId() == 0){
            result.addMessage("Id is missing");
        }

        if(!result.isSuccess()) return result;

        if(repository.update(userAccount)){
            result.setPayload(userAccount);
        }else{
            result.addMessage("The user was not found", ResultType.NOT_FOUND);
        }
        return result;
    }

    public Result<UserAccount> deleteById(int userId){
        if(repository.deleteById(userId)){
            return new Result<>();
        }else{
            Result<UserAccount> result = new Result<>();
            result.addMessage("Account not found", ResultType.NOT_FOUND);
            return result;
        }
    }

    private Result<UserAccount> validate(UserAccount userAccount){
        Result<UserAccount> result = new Result<>();

        if(userAccount == null){
            result.addMessage("Account is missing");
            return result;
        }

        if(AppUtilities.blank(userAccount.getEmail())){
            result.addMessage("Email cannot be blank");
        }else if(!userAccount.getEmail().contains("@") || !userAccount.getEmail().contains(".")) {
            result.addMessage("Email is invalid");
        }

        if(AppUtilities.blank(userAccount.getFirstName())){
            result.addMessage("First Name cannot be blank");
        }

        if(AppUtilities.blank(userAccount.getLastName())){
            result.addMessage("Last Name cannot be blank");
        }

        return result;
    }

}
