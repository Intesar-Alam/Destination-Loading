package learn.destinationLoading.controller;

import learn.destinationLoading.domain.CompanyService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.models.Company;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/company")
@CrossOrigin(origins = {"http://127.0.0.1:5500", "http://localhost:3000"})
public class CompanyContoller {

    private final CompanyService service;

    public CompanyContoller(CompanyService service) {
        this.service = service;
    }

    @GetMapping
    public List<Company> findAll(){
        return service.findAll();
    }

    @GetMapping("/{companyId}")
    public Company findById(@PathVariable int companyId){
        return service.findById(companyId);
    }

    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Company company){
        Result<Company> result = service.add(company);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    @PutMapping("/{companyId}")
    public ResponseEntity<Object> update(@PathVariable int companyId, @RequestBody Company company) {
        if (companyId != company.getCompanyId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        Result<Company> result = service.update(company);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    @DeleteMapping("/{companyId}")
    public ResponseEntity<Void> deleteById(@PathVariable int companyId) {
        Result<Company> result = service.deleteById(companyId);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
