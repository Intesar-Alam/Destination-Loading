package learn.destinationLoading.data;

import learn.destinationLoading.data.mappers.CompanyMapper;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.TransportationMode;
import org.springframework.boot.rsocket.server.RSocketServer;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.sql.Statement;
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
        final String sql = "select company_id, company_name, company_url, company_icon, transportation_mode " +
                "from transport_company " +
                "where company_id = ?;";
        Company company = jdbcTemplate.query(sql, new CompanyMapper(), companyId).stream().findFirst().orElse(null);

        //TODO determine if we need methods similar to addAgencies and addAlias since company_id is a fk, or if that's only for primary keys
        return company;
    }

    //TODO ask jordan to look at database - do i need to specify the primary keys, and is there a better datatype to use than varchar for site and image links
    @Override
    public Company add (Company company) {
        final String sql = "insert into transport_company (company_name, company_url, company_icon, transportation_mode) "
                + " values (?, ?, ?, ?);";
        KeyHolder keyHolder = new GeneratedKeyHolder();
        int rowsAffected = jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(sql, Statement.RETURN_GENERATED_KEYS);
            ps.setString(1, company.getCompanyName());
            ps.setString(2, company.getUrl());
            ps.setString(3, company.getIcon());
            ps.setString(4, company.getTransportationMode().toString());
            return ps;
        }, keyHolder);

        if (rowsAffected <= 0) {
            return null;
        }

        company.setCompanyId(keyHolder.getKey().intValue());
        return company;
    }

    @Override
    public boolean update (Company company) {
        final String sql = "update company set "
                + "company_name = ?, "
                + "company_url = ?, "
                + "company_icon = ?, "
                + "transportation_mode = ? "
                + "where company_id = ?;";

        int rowsUpdated = jdbcTemplate.update(sql,
                company.getCompanyName(),
                company.getUrl(),
                company.getIcon(),
                company.getTransportationMode().toString(),
                company.getCompanyId());

        return rowsUpdated > 0;
    }

    @Override
    public boolean deleteById (int companyId) {
        return false;
    }
}
