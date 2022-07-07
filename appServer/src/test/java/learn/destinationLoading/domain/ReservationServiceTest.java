package learn.destinationLoading.domain;

import learn.destinationLoading.data.CompanyRepository;
import learn.destinationLoading.data.ReservationRepository;
import learn.destinationLoading.data.UserAccountRepository;
import learn.destinationLoading.models.Company;
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
class ReservationServiceTest {
    //Find methods tend to be a pass function and therefore only need to be tested in the domain

    @Autowired
    ReservationService service;

    @MockBean
    ReservationRepository repository;

    @MockBean
    UserAccountRepository userAccountRepository;

    @MockBean
    CompanyRepository companyRepository;

    @Test
    void shouldAdd(){
        Reservation reservation = new Reservation(0, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");
        Reservation mock = new Reservation(1, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        when(repository.add(reservation)).thenReturn(mock);
        when(userAccountRepository.findById(1)).thenReturn(userAccount());
        when(companyRepository.findById(1)).thenReturn(company());

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertEquals(mock, result.getPayload());
    }

    @Test
    void shouldNotAddInvalidId(){
        Reservation reservation = new Reservation(1, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotValidateNull(){
        Reservation reservation = null;

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotValidateMissingUser(){
        Reservation reservation = new Reservation(0, 0, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotValidateNonExistentUser(){
        Reservation reservation = new Reservation(0, 1, 1,
                LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        when(companyRepository.findById(1)).thenReturn(null);

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidCompany(){
        Reservation reservation = new Reservation(0, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        when(userAccountRepository.findById(1)).thenReturn(userAccount());
        when(companyRepository.findById(1)).thenReturn(null);

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddNonExistentCompany(){
        Reservation reservation = new Reservation(0, 1, 0,
                LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        when(userAccountRepository.findById(1)).thenReturn(userAccount());

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidDate(){
        Reservation reservation = new Reservation(0, 1, 1,
                 LocalDate.now().minusDays(1), "XXXXXX", "trip");

        when(userAccountRepository.findById(1)).thenReturn(userAccount());
        when(companyRepository.findById(1)).thenReturn(company());

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidCode(){
        Reservation reservation = new Reservation(0, 1, 1,
                 LocalDate.now().plusWeeks(2), null, "trip");

        when(userAccountRepository.findById(1)).thenReturn(userAccount());
        when(companyRepository.findById(1)).thenReturn(company());

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldUpdate() {
        Reservation reservation = new Reservation(2, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        when(repository.update(reservation)).thenReturn(true);
        when(userAccountRepository.findById(1)).thenReturn(userAccount());
        when(companyRepository.findById(1)).thenReturn(company());

        Result<Reservation> result = service.update(reservation);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalid404() {
        Reservation reservation = new Reservation(2, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        when(repository.update(reservation)).thenReturn(false);
        when(userAccountRepository.findById(1)).thenReturn(userAccount());
        when(companyRepository.findById(1)).thenReturn(company());

        Result<Reservation> result = service.update(reservation);
        assertEquals(ResultType.NOT_FOUND, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalidId() {
        Reservation reservation = new Reservation(0, 1, 1,
                 LocalDate.now().plusWeeks(2), "XXXXXX", "trip");

        Result<Reservation> result = service.update(reservation);
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
        Result<Reservation> result = service.deleteById(1);
        assertFalse(result.isSuccess());
        assertEquals(ResultType.NOT_FOUND, result.getType());
    }

    Company company(){
        return new Company(1, "Company Name", "url", "icon", TransportationMode.GROUND);
    }

    UserAccount userAccount(){
        return new UserAccount(1, "email", "first", "last", "address", "phone", LocalDate.of(1999, 1, 1));
    }


}