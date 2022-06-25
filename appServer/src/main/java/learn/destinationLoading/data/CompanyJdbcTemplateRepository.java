package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.CompanyMapper;
import learn.destinationLoading.models.Company;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CompanyJdbcTemplateRepository implements CompanyRepository {

    private final JdbcTemplate jdbcTemplate;

    public CompanyJdbcTemplateRepository(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public List<Company> findAll () {
        final String sql = "select company_id, company_name, company_url, company_icon, transportation_mode " +
                "from transport_company;";
        return jdbcTemplate.query(sql, new CompanyMapper());
    }

    @Override
    public Company findById (int companyId) {
        return null;
    }

    @Override
    public Company add (Company company) {
        return null;
    }

    @Override
    public boolean update (Company company) {
        return false;
    }

    @Override
    public boolean deleteById (int companyId) {
        return false;
    }
}
