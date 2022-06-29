package learn.destinationLoading.controller;

import learn.destinationLoading.domain.Result;
import learn.destinationLoading.domain.UserAccountService;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.UserAccount;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/useraccount")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:3000"})
public class UserAccountController {

    private final UserAccountService service;

    public UserAccountController(UserAccountService service) {
        this.service = service;
    }

    @GetMapping
    public List<UserAccount> findAll(){
        return service.findAll();
    }

    @GetMapping("/{userId}")
    public UserAccount findById(@PathVariable int userId){
        return service.findById(userId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody UserAccount userAccount){
        Result<UserAccount> result = service.add(userAccount);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{userId}")
    public ResponseEntity<Object> update(@PathVariable int userId, @RequestBody UserAccount userAccount) {
        if (userId != userAccount.getAppUserId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<UserAccount> result = service.update(userAccount);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{userId}")
    public ResponseEntity<Void> deleteById(@PathVariable int userId) {
        Result<UserAccount> result = service.deleteById(userId);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
