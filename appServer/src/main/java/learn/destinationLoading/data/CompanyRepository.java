package learn.destinationLoading.data;

import learn.destinationLoading.models.Company;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface CompanyRepository {
    List<Company> findAll();

    Company findById(int companyId);

    Company add(Company company);

    boolean update(Company company);

    boolean deleteById(int companyId);

}
