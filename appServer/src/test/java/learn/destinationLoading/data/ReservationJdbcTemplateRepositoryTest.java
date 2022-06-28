package learn.destinationLoading.data;

import learn.destinationLoading.models.Reservation;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class ReservationJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 7;

    @Autowired
    ReservationJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }
    @Test
    void shouldFindAll () {
        List<Reservation> reservations = repository.findAll();
        assertNotNull(reservations);
        assertTrue(reservations.size() >= 5 && reservations.size() <= 8);
    }

    @Test
    void shouldFindById () {
         Reservation actual = repository.findById(2);
         assertEquals(2, actual.getReservationId());
         assertEquals(LocalDate.of(2023, 10, 23), actual.getReservationDate());
         assertEquals(2, actual.getCompanyId());
    }

    @Test
    void shouldFindByUserId () {
       List<Reservation> actual = repository.findByUserId(2);
       assertNotNull(actual);
       assertEquals(2, actual.get(0).getReservationId());
       assertEquals(6, actual.get(1).getReservationId());
       assertEquals(LocalDate.of(2023, 10, 23), actual.get(0).getReservationDate());

    }

    @Test
    void shouldFindByCompanyId () {
        List<Reservation> actual = repository.findByCompanyId(1);
        assertNotNull(actual);
        assertEquals(2, actual.size());
        assertEquals(1, actual.get(1).getReservationId());
        assertEquals(5, actual.get(0).getReservationId());
    }

    @Test
    void shouldAdd () {

    }

    @Test
    void shouldUpdate () {
    }

    @Test
    void shouldDeleteById () {
    }

    Reservation makeReservation() {
        return new Reservation();
    }
}