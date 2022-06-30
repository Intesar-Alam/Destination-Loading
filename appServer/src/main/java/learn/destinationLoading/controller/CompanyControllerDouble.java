package learn.destinationLoading.controller;

import learn.destinationLoading.domain.CompanyService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.domain.ResultType;
import learn.destinationLoading.models.Company;
import learn.destinationLoading.models.TransportationMode;
import learn.destinationLoading.utils.AppUtilities;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/test/company")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:3000"})
public class CompanyControllerDouble {

    private final List<Company> companies = List.of(
            new Company(1, "American Airlines","https://www.aa.com/",
                    "https://www.aa.com/favicon.ico", TransportationMode.AIR),
            new Company(2, "JetBlue","https://www.jetblue.com/",
                    "https://www.jetblue.com/ui-assets/favicon/favicon-32x32.png", TransportationMode.AIR),
            new Company(3, "Amtrak","https://www.amtrak.com/",
                    "https://www.amtrak.com/etc/designs/dotcom-assets/images/favicon.ico", TransportationMode.RAIL),
            new Company(4, "FlixBus","https://www.flixbus.com/",
                    "https://cdn-cf.cms.flixbus.com/drupal-assets/favicon/flixbus/favicon-32x32.png", TransportationMode.GROUND),
            new Company(5, "Norwegian","https://www.ncl.com/",
                    "https://www.ncl.com/assets/v1/images/favicon/favicon.png?v=1656015855742", TransportationMode.WATER)
    );
    private final CompanyService service;

    public CompanyControllerDouble(CompanyService service) {
        this.service = service;
    }

    @GetMapping
    public List<Company> findAll(){
        return companies;
    }

    @GetMapping("/{companyId}")
    public Company findById(@PathVariable int companyId){
        var result = companies.stream().filter(
                company -> company.getCompanyId() == companyId).findFirst();
        return result.orElse(null);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Company company){
        if(AppUtilities.notBlank(company.getCompanyName())){
            return new ResponseEntity<>(company, HttpStatus.CREATED);
        }
        Result<Company> result = new Result<>();
        result.addMessage("Name is missing");
        return ErrorResponse.build(result);
    }

    @PutMapping("/{companyId}")
    public ResponseEntity<Object> update(@PathVariable int companyId, @RequestBody Company company) {
        if (companyId != company.getCompanyId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        if (companyId == 0) {
            Result<Company> result = new Result<>();
            result.addMessage("Example error message", ResultType.NOT_FOUND);
            return ErrorResponse.build(result);
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);


    }

    @DeleteMapping("/{companyId}")
    public ResponseEntity<Void> deleteById(@PathVariable int companyId) {
        if (companyId > 0 && companyId < 6) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
