```
src
├───main
│   ├───java
│   │   └───learn
│   │       └───destinationLoading
│   │           │   App.java
│   │           │   AppConfig.java (security)
│   │           │   AppUtils.java 
│   │           │
│   │           ├───controller
│   │           │       AppUserController.java
│   │           │       AppUserControllerDouble.java (new)
│   │           │       AuthController.java
│   │           │       AuthControllerDouble.java (new)
│   │           │       CompanyController.java
│   │           │       CompanyControllerDouble.java (new)
│   │           │       ConsoleIO.java
│   │           │       ErrorResponse.java
│   │           │       GlobalExceptionHandler.java
│   │           │       Reservation Controller.java
│   │           │       Reservation ControllerDouble.java (new)
│   │           ├───data
│   │           │   └───mappers
│   │           │           AppUserMapper.java
│   │           │           CompanyMapper.java
│   │           │           ReservationMapper.java
│   │           │       AppUserRepository.java (Interface)
│   │           │       AppUserJdbcRepository.java
│   │           │       CompanyRepository.java (Interface)
│   │           │       CompanyJdbcRepository.java.java
│   │           │       ReservationRepository.java (Interface)
│   │           │       ReservationJdbcRepository.java
│   │           │
│   │           ├───domain
│   │           │       AppUserService.java
│   │           │       HashRank.java (Maybe unneeded)
│   │           │       CompanyService.java
│   │           │       ReservationService.java
│   │           │       Result.java
│   │           │       ResultType.java
│   │           │
│   │           ├───models
│   │           │       AppUser.java
│   │           │       AppRole.java (Enum)
│   │           │       AppUserRole.java (Maybe unneeded)
│   │           │       Company.java
│   │           │       Reservation.java
│   │           │       TransportMode.java (Enum)
│   │           │
│   │           └───security
│   │                   JwtConverter.java
│   │                   JwtRequestFilter.java
│   │                   SecurityConfig.java
│   │
│   └───resources
└───test
    └───java
        └───learn
            └───destinationLoading
                ├───data
                │       AppUserJdbcRepositoryTest.java
                │       CompanyJdbcRepositoryTest.java
                │       ReservationJdbcRepositoryTest.java
                │
                └───domain
                        AppUserServiceTest.java
                        CompanyService.java
                        ReservationServiceTest.java


react-client
├───public
│   └───css
│           (Choose bootstrap)
│       index.html
└───scource
    └───components
            About.js
            CompanyForm.js (Add/edit)
            Contact.js
            CompanyList.js
            CustomerForm.js (add/edit)
            CustomerReservation List.js
            CustomerList.js
            Errors.js
            Header.js (optional)
            Home.js
            Login.js
            Navbar.js
            NotFound.js
            ReservationForm.js (add/edit)
            ReservationList.js
        app.js
        authContext.js
        index.js
```