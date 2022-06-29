package learn.destinationLoading.controller;

import learn.destinationLoading.domain.Result;
import learn.destinationLoading.domain.ResultType;
import learn.destinationLoading.domain.UserAccountService;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.UserAccount;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/test/useraccount")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:3000"})
public class UserAccountControllerDouble {

    private final UserAccountService service;

    public UserAccountControllerDouble(UserAccountService service) {
        this.service = service;
    }

    private final List<UserAccount> userAccounts = List.of(
            new UserAccount(1, "email1@email.com", "First", "Last",
                    "Address", "(123)-456-7890", LocalDate.of(2000, 1, 1), 1),
            new UserAccount(2, "email2@email.com", "Firsty", "McFirstFace",
                    "123 Address St", "(123)-111-2222", LocalDate.of(2000, 1, 1), 2)
    );
    @GetMapping
    public List<UserAccount> findAll(){
        return userAccounts;
    }

    @GetMapping("/{userId}")
    public UserAccount findById(@PathVariable int userId){
        var result = userAccounts.stream().filter(
                userAccount -> userAccount.getUserAccountId() == userId).findFirst();
        return result.orElse(null);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody UserAccount userAccount){
        if(AppUtilities.notBlank(userAccount.getEmail())){
            return new ResponseEntity<>(userAccount, HttpStatus.CREATED);
        }
        Result<UserAccount> result = new Result<>();
        result.addMessage("Email is missing");
        return ErrorResponse.build(result);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Object> update(@PathVariable int userId, @RequestBody UserAccount userAccount) {
        if (userId != userAccount.getUserAccountId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        if (userId == 0) {
            Result<UserAccount> result = new Result<>();
            result.addMessage("Example error message", ResultType.NOT_FOUND);
            return ErrorResponse.build(result);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteById(@PathVariable int userId) {
        if (userId > 0 && userId < 3) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
