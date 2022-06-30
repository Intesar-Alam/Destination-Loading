package learn.destinationLoading.domain;

import learn.destinationLoading.data.AppUserRepository;
import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.ValidationException;
import java.util.List;

//TODO implement user details
@Service
public class AppUserService implements UserDetailsService {

    private final AppUserRepository repository;
    private final PasswordEncoder encoder;

    public AppUserService(AppUserRepository repository, PasswordEncoder encoder) {
        this.repository = repository;
        this.encoder = encoder;
    }

//    //TODO swap constructors
    
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        AppUser appUser = repository.findByUsername(username);

        if (appUser == null || !appUser.isEnabled()) {
            throw new UsernameNotFoundException(username + " not found");
        }

        return appUser;
    }

    public AppUser create(String username, String password, int companyId) {
        validate(username);
        validatePassword(password);

        password = encoder.encode(password);

        AppUser appUser = new AppUser(0, companyId, username, password, false, List.of("User"));

        return repository.create(appUser);
    }

    private void validate(String username) {
        if (AppUtilities.blank(username)) {
            throw new ValidationException("username is required");
        }

        if (username.length() > 255) {
            throw new ValidationException("username must be less than 255 characters");
        }
    }

    private void validatePassword(String password) {
        if (!AppUtilities.notBlankMin(password, 8)) {
            throw new ValidationException("password must be at least 8 characters");
        }

        int digits = 0;
        int letters = 0;
        int others = 0;
        for (char c : password.toCharArray()) {
            if (Character.isDigit(c)) {
                digits++;
            } else if (Character.isLetter(c)) {
                letters++;
            } else {
                others++;
            }
        }

        if (digits == 0 || letters == 0 || others == 0) {
            throw new ValidationException("password must contain a digit, a letter, and a non-digit/non-letter");
        }
    }

}
