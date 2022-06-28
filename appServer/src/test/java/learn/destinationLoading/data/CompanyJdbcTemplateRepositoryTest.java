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

    final static int NEXT_ID = 8;
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

        assertTrue(companies.size() >= 6 && companies.size() <= 8);
    }

    @Test
    void shouldFindById() {
        Company actual = repository.findById(1);
        assertEquals("Alaska Airlines", actual.getCompanyName());
        assertEquals(1, actual.getCompanyId());
        assertEquals("AIR", actual.getTransportationMode().toString());
    }

    @Test
    void shouldAdd() {
        Company company = makeCompany();
        Company actual = repository.add(company);
        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getCompanyId());
    }

    @Test
    void shouldUpdate() {
        Company company = makeCompany();
        company.setCompanyId(1);
        assertTrue(repository.update(company));

        company.setCompanyId(15);
        assertFalse(repository.update(company));
    }

    @Test
    void shouldDelete() {
        assertTrue(repository.deleteById(3));
        assertFalse(repository.deleteById(20));
    }

    Company makeCompany() {
        return new Company(1, "TestName", "TestUrl", "TestIcon", TransportationMode.AIR);

    }
}