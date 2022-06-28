package learn.destinationLoading.domain;

import learn.destinationLoading.data.CompanyRepository;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.Reservation;
import learn.destinationLoading.models.TransportationMode;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.time.LocalDate;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class CompanyServiceTest {
    //Find methods tend to be a pass function and therefore only need to be tested in the domain

    @Autowired
    CompanyService service;

    @MockBean
    CompanyRepository repository;


    @Test
    void shouldAdd(){
        Company company = new Company(0, TransportationMode.AIR,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");
        Company mock = new Company(1, TransportationMode.AIR,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");

        when(repository.add(company)).thenReturn(mock);

        Result<Company> result = service.add(company);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertEquals(mock, result.getPayload());
    }

    @Test
    void shouldNotAddInvalidId() {
        Company company = new Company(1, TransportationMode.AIR,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");

        Result<Company> result = service.add(company);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotValidateNull(){
        Company company = null;

        Result<Company> result = service.add(company);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidTransport() {
        Company company = new Company(0, null,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");

        Result<Company> result = service.add(company);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidName() {
        Company company = new Company(0, TransportationMode.AIR,
                null, "https://example.com/","https://example.com/favicon.ico");

        Result<Company> result = service.add(company);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidURL() {
        Company company = new Company(0, TransportationMode.AIR,
                "XXX Air", "","https://example.com/favicon.ico");

        Result<Company> result = service.add(company);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidIcon() {
        Company company = new Company(0, TransportationMode.AIR,
                "XXX Air", "https://example.com/","  ");

        Result<Company> result = service.add(company);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldUpdate() {
        Company company = new Company(2, TransportationMode.AIR,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");

        when(repository.update(company)).thenReturn(true);

        Result<Company> result = service.add(company);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalid404() {
        Company company = new Company(2, TransportationMode.AIR,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");

        when(repository.update(company)).thenReturn(false);

        Result<Company> result = service.update(company);
        assertEquals(ResultType.NOT_FOUND, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalidId() {
        Company company = new Company(0, TransportationMode.AIR,
                "XXX Air", "https://example.com/","https://example.com/favicon.ico");

        Result<Company> result = service.update(company);
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
        Result<Company> result = service.deleteById(1);
        assertFalse(result.isSuccess());
        assertEquals(ResultType.NOT_FOUND, result.getType());
    }
}