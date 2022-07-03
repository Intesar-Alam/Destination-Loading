package learn.destinationLoading.controller;

import learn.destinationLoading.domain.Result;
import learn.destinationLoading.domain.UserAccountService;
import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.UserAccount;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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

    // admin only
    @GetMapping
    public List<UserAccount> findAll(){
        return service.findAll();
    }

    @GetMapping("/user")
    public UserAccount findByUser(UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();
        return service.findById(appUser.getAppUserId());
    }
    // admin only
    @GetMapping("/{appUserId}")
    public UserAccount findById(@PathVariable int appUserId){
        return service.findById(appUserId);
    }

    //user only
    @PostMapping
    public ResponseEntity<Object> add(@RequestBody UserAccount userAccount, UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();
        userAccount.setAppUserId(appUser.getAppUserId());
        Result<UserAccount> result = service.add(userAccount);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }


    @PutMapping("/{appUserId}")
    public ResponseEntity<Object> update(@PathVariable int appUserId, @RequestBody UserAccount userAccount, UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();

        if (appUserId != userAccount.getAppUserId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }
        if (appUser.getAppUserId() != userAccount.getAppUserId() && !appUser.getRoles().get(0).equals("ADMIN")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        Result<UserAccount> result = service.update(userAccount);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    // admin only, at least for now
    @DeleteMapping("/{appUserId}")
    public ResponseEntity<Void> deleteById(@PathVariable int appUserId) {
        Result<UserAccount> result = service.deleteById(appUserId);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
