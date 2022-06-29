package learn.destinationLoading.domain;

import learn.destinationLoading.data.UserAccountRepository;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.TransportationMode;
import learn.destinationLoading.models.UserAccount;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserAccountServiceTest {
    //Find methods tend to be a pass function and therefore only need to be tested in the domain

    @Autowired
    UserAccountService service;

    @MockBean
    UserAccountRepository repository;

    @Test
    void add() {
        UserAccount userAccount = new UserAccount(0, "email@email.com", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);
        UserAccount mock = new UserAccount(1, "email@email.com", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        when(repository.add(userAccount)).thenReturn(mock);

        Result<UserAccount> result = service.add(userAccount);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertEquals(mock, result.getPayload());
    }

    @Test
    void shouldNotAddInvalidId(){
        UserAccount userAccount = new UserAccount(1, "email@email.com", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        Result<UserAccount> result = service.add(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotValidateNull(){
        UserAccount userAccount = null;

        Result<UserAccount> result = service.add(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidEmail(){
        UserAccount userAccount = new UserAccount(0, "  ", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        Result<UserAccount> result = service.add(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());

        userAccount = new UserAccount(0, "not an email", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        result = service.add(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidFirstName(){
        UserAccount userAccount = new UserAccount(0, "email@email.com", null,
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        Result<UserAccount> result = service.add(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidLast(){
        UserAccount userAccount = new UserAccount(0, "email@email.com", "First",
                "", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        Result<UserAccount> result = service.add(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

//    @Test
//    void shouldNotAddInvalidDOB?(){
//        UserAccount userAccount = new UserAccount(0, "email@email.com", "First",
//                "Last", "123 Address St.", "123-456-7890",
//                LocalDate.of(2000,1,1), 1);
//
//        Result<UserAccount> result = service.add(userAccount);
//        assertEquals(ResultType.INVALID, result.getType());
//        assertNull(result.getPayload());
//    }

    @Test
    void shouldUpdate() {
        UserAccount userAccount = new UserAccount(1, "email@email.com", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        when(repository.update(userAccount)).thenReturn(true);

        Result<UserAccount> result = service.update(userAccount);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalid404() {
        UserAccount userAccount = new UserAccount(1, "email@email.com", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        when(repository.update(userAccount)).thenReturn(false);

        Result<UserAccount> result = service.update(userAccount);
        assertEquals(ResultType.NOT_FOUND, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalidId() {
        UserAccount userAccount = new UserAccount(0, "email@email.com", "First",
                "Last", "123 Address St.", "123-456-7890",
                LocalDate.of(2000,1,1), 1);

        Result<UserAccount> result = service.update(userAccount);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldDelete(){
        when(repository.deleteById(1)).thenReturn(true);
        assertTrue(service.deleteById(1).isSuccess());
    }

    @Test
    void shouldNotDelete(){
        when(repository.deleteById(1)).thenReturn(false);
        Result<UserAccount> result = service.deleteById(1);
        assertFalse(result.isSuccess());
        assertEquals(ResultType.NOT_FOUND, result.getType());
    }
}