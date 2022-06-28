package learn.destinationLoading.data;

import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.TransportationMode;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class CompanyJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 11;
    @Autowired
    CompanyJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }

    @Test
    void shouldFindAll() {
        List<Company> companies = repository.findAll();
        assertNotNull(companies);

        assertTrue(companies.size() >= 9 && companies.size() <= 12);
    }

    @Test
    void shouldFindById() {
        Company company = new Company(1, TransportationMode.AIR, "American", "www.fortnite.com", "american.jpg");
        Company actual = repository.findById(1);
    }
}