package learn.destinationLoading.data.mappers;

import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.TransportationMode;
import org.springframework.jdbc.core.RowMapper;


import java.sql.ResultSet;
import java.sql.SQLException;

public class CompanyMapper implements RowMapper<Company> {

    @Override
    public Company mapRow(ResultSet rs, int i) throws SQLException {
        Company company = new Company();
        company.setCompanyId(rs.getInt("company_id"));
        company.setCompanyName(rs.getString("company_name"));
        company.setUrl(rs.getString("company_url"));
        company.setIcon(rs.getString("company_icon"));

        TransportationMode transportationMode = TransportationMode.valueOf(rs.getString("transportation_mode"));
        company.setTransportationMode(transportationMode);

        return company;
    }
}
