package learn.destinationLoading.data;

import learn.destinationLoading.models.UserAccount;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.NONE)
class UserAccountJdbcTemplateRepositoryTest {

    final static int NEXT_ID = 7;

    @Autowired
    UserAccountJdbcTemplateRepository repository;

    @Autowired
    KnownGoodState knownGoodState;

    @BeforeEach
    void setup() {
        knownGoodState.set();
    }
    @Test
    void findAll () {
        List<UserAccount> all = repository.findAll();
        assertNotNull(all);
        assertTrue(all.size() >= 5 && all.size() <= 8);
    }

    @Test
    void findById () {
        UserAccount user = repository.findById(2);
        assertNotNull(user);
        assertEquals("bwoolerton1@seattletimes.com", user.getEmail());
        assertEquals("Woolerton", user.getLastName());

        user = repository.findById(10);
        assertNull(user);
    }

    @Test
    void add () {
        UserAccount userAccount = makeAccount();
        userAccount.setEmail("chip@fortnite.com");
        UserAccount actual = repository.add(userAccount);

        assertNotNull(actual);
        assertEquals(NEXT_ID, actual.getUserAccountId());
    }

    @Test
    void update () {
        UserAccount userAccount = makeAccount();
        assertTrue(repository.update(userAccount));

        userAccount.setUserAccountId(15);
        assertFalse(repository.update(userAccount));
    }

    @Test
    void deleteById () {
        assertTrue(repository.deleteById(3));
        assertFalse(repository.deleteById(15));
    }

    UserAccount makeAccount() {
        return new UserAccount(1, "chip@squid.com", "Chip", "Wim", null, "609-444-1389", null, 1);
    }
}