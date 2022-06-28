package learn.destinationLoading.domain;

import learn.destinationLoading.data.ReservationRepository;
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
class ReservationServiceTest {
    //Find methods tend to be a pass function and therefore only need to be tested in the domain

    @Autowired
    ReservationService service;

    @MockBean
    ReservationRepository repository;

    @Test
    void shouldAdd(){
        Reservation reservation = new Reservation(0, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");
        Reservation mock = new Reservation(1, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

        when(repository.add(reservation)).thenReturn(mock);

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertEquals(mock, result.getPayload());
    }

    @Test
    void shouldNotAddInvalidId(){
        Reservation reservation = new Reservation(1, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

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
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidCompany(){
        Reservation reservation = new Reservation(0, 1, 0,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidDate(){
        Reservation reservation = new Reservation(0, 1, 1,
                TransportationMode.RAIL, LocalDate.now().minusDays(1), "XXXXXX");

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotAddInvalidCode(){
        Reservation reservation = new Reservation(0, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), null);

        Result<Reservation> result = service.add(reservation);
        assertEquals(ResultType.INVALID, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldUpdate() {
        Reservation reservation = new Reservation(2, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

        when(repository.update(reservation)).thenReturn(true);

        Result<Reservation> result = service.update(reservation);
        assertEquals(ResultType.SUCCESS, result.getType());
        assertNotNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalid404() {
        Reservation reservation = new Reservation(0, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

        when(repository.update(reservation)).thenReturn(false);

        Result<Reservation> result = service.update(reservation);
        assertEquals(ResultType.NOT_FOUND, result.getType());
        assertNull(result.getPayload());
    }

    @Test
    void shouldNotUpdateInvalidId() {
        Reservation reservation = new Reservation(0, 1, 1,
                TransportationMode.RAIL, LocalDate.now().plusWeeks(2), "XXXXXX");

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
}