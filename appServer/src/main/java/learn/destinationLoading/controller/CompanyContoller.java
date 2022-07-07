package learn.destinationLoading.controller;

import learn.destinationLoading.domain.CompanyService;
import learn.destinationLoading.domain.Result;
import learn.destinationLoading.models.AppUser;
import learn.destinationLoading.models.Company;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
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
    public Object findById(@PathVariable int companyId){
        if (service.findById(companyId) == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return service.findById(companyId);
    }

    // admin only
    @PostMapping
    public ResponseEntity<Object> add(@RequestBody Company company){
        Result<Company> result = service.add(company);
        if (result.isSuccess()) {
            return new ResponseEntity<>(result.getPayload(), HttpStatus.CREATED);
        }
        return ErrorResponse.build(result);
    }

    // company rep or admin
    @PutMapping("/{companyId}")
    public ResponseEntity<Object> update(@PathVariable int companyId, @RequestBody Company company, UsernamePasswordAuthenticationToken principal) {
        AppUser appUser = (AppUser) principal.getPrincipal();

        if (companyId != company.getCompanyId()) {
            return new ResponseEntity<>(HttpStatus.CONFLICT);
        }

        if (appUser.getCompanyId() != company.getCompanyId() && !appUser.getRoles().get(0).equals("ADMIN")) {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }

        Result<Company> result = service.update(company);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }

        return ErrorResponse.build(result);
    }

    // admin only
    @DeleteMapping("/{companyId}")
    public ResponseEntity<Void> deleteById(@PathVariable int companyId) {
        Result<Company> result = service.deleteById(companyId);
        if (result.isSuccess()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
