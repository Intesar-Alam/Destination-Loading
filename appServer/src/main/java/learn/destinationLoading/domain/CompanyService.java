package learn.destinationLoading.domain;

import learn.destinationLoading.data.CompanyRepository;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CompanyService {

    private final CompanyRepository repository;

    public CompanyService(CompanyRepository repository) {
        this.repository = repository;
    }

    public List<Company> findAll(){
        return repository.findAll();
    }

    public Company findById(int id){
        return repository.findById(id);
    }

    public Result<Company> add(Company company){
        Result<Company> result = validate(company);

        if(!result.isSuccess()) return result;

        if(company.getCompanyId() != 0){
            result.addMessage("Id cannot be preset");
            return result;
        }

        Company comp = repository.add(company);
        if(comp == null){
            result.addMessage("There was an issue and the company could not be added");
        }else{
            result.setPayload(comp);
        }

        return result;
    }

    public Result<Company> update(Company company){
        Result<Company> result = validate(company);

        if(!result.isSuccess()) return result;

        if(company.getCompanyId() == 0){
            result.addMessage("Id is missing");
        }

        if(!result.isSuccess()) return result;

        if(repository.update(company)){
            result.setPayload(company);
        }else{
            result.addMessage("The company was not found", ResultType.NOT_FOUND);
        }

        return result;
    }

    public Result<Company> deleteById(int companyId){
        if(repository.deleteById(companyId)){
            return new Result<>();
        }else{
            Result<Company> result = new Result<>();
            result.addMessage("Company was not found", ResultType.NOT_FOUND);
            return result;
        }
    }

    private Result<Company> validate(Company company) {
        Result<Company> result = new Result<>();

        if(company == null){
            result.addMessage("Company is missing");
            return result;
        }

        if(company.getTransportationMode() == null){
            result.addMessage("Transport mode Missing");
        }

        if(AppUtilities.blank(company.getCompanyName())){
            result.addMessage("Company name Missing");
        }

        if(AppUtilities.blank(company.getUrl())){
            result.addMessage("Company website missing");
        }

        if(AppUtilities.blank(company.getIcon())){
            result.addMessage("Company icon Missing");
        }
        return result;
    }
}
