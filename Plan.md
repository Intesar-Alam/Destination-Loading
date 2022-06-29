# Requirements
There are five required sections.
 
1) Prep
  - Setting up the project architecture
  - This includes Data layer interfaces and controller level Doubles
  - Split into branches main ->(main, development -> (data, domain/controller, front end))
 
2) Branch work
  - (Optional) You can create a new branch when you're working on your own code and merge back in to development when done.
 
3) Once all branches are merge and work we then start on security 
 
4) Once security is done we shift focus on design
 
5) Once all of those are done we shift to bugs and stretch goals
  
### 1. Pre Work Prep SQL (Sunday 6/26) 
Create a working Database in the back end
 
* [x] Create a Development Branch. 
* [x] Add resources folder
* [x] Use Annotation
* [x] Add annotation to all files (@Component, @Service, @Repository, @Value)
* [x] Design the SQL Schema.
* [x] Design the SQL Test Schema.
* [x] Generate Mock Data. (Users & reservations)
* [x] Test queries.
 
### 2. Pre Work Prep Models (Sunday 6/26) 
Create working models to use for data and domain layers
 
* [x] AppUser.java
* [x] AppRole.java (Enum)
* [ ] AppUserRole.java (Maybe unneeded)
* [x] Company.java
* [x] Reservation.java
* [x] TransportMode.java (Enum)
 
### 3. Pre Work Prep Controller Doubles (Sunday 6/26) 
Create working models to use for data and domain layers
 
* [ ] AppUserControllerDouble.java
* [ ] CompanyControllerDouble.java
* [ ] Reservation ControllerDouble.java
 
### 4. Weekend Prep (Sunday 6/26)
Find real world data and fix set up work environments for all developers
 
* [ ] Generate Real Data. (Over Weekend)(Companies)
* [x] Create frontEnd, service, data branches. 
* [ ] Create wireframes. 
* [ ] Type script resources.
* [ ] AppUtils.java (add check())
* [ ] Add Spring dependencies (Jdbc, security, mocking, j-unit)
* [ ] Review the requirements
* [ ] Identify any research that I need to do - TypeScript
 
### 5: Project Planning and Basic Setup (Sunday 6/26)
 
* [ ] Create Wireframes for page layouts
* [ ] Create basic HTML site/mock to make sure all components are present (will be able to copy/paste into react components)
* [ ] Choose Bootstrap/CSS Theme		
 
### 6. Validation AppUserService (Monday  6/27)
 
* [ ] findAll (void) -> (List <User>)
* [ ] findUser (id) -> (User)
* [ ] addUser (User) -> (Result)
* [ ] editUser (User) -> (Result)
* [ ] deleteUser (id) -> (Result)
* [ ] validate (User) -> (Result)
* [ ] checks to see if email is not null and unique.
* [ ] checks to see if the password is not null.
* [ ] check to see if the first name is not null.
* [ ] check to see if the last name is not null.
 
### 7. Validation CompanyService (Monday  6/27)
 
* [ ] findAll (void) -> (List <Company>)
* [ ] findCompany (id) -> (Company)
* [ ] addCompany (Company) -> (Result)
* [ ] editCompany (Company) -> (Result)
* [ ] deleteCompany (id) -> (Result)
* [ ] validate (Company) -> (Result)
* [ ] Company Name is not null and unique. 
* [ ] Company Mode is not null. 
* [ ] Company URL is not null. 
* [ ] Company URL is not null. 
 
### 8. Validation ReservationService (Monday 6/27)
 
* [ ] findAll (void) -> (List <Reservation>)
* [ ] findByReservation (id) -> (Reservation)
* [ ] findByReservation (id) -> (Reservation)
* [ ] addCompany (Reservation) -> (Result)
* [ ] editCompany (Reservation) -> (Result)
* [ ] deleteCompany (id) -> (Result)
* [ ] validate (Reservation) -> (Result)
	* [ ] User ID exists. 
* [ ] Company ID exists. 
* [ ] date is in the future. 
* [ ] reservation code is not null.
 
### 9. Project React Setup (Monday 6/27)
 
* [ ] Create a new React project with CRA (create-react-app)
  * [ ] Remove the cruft (refer back to the Components and JSX exercise for instructions)
 
* [ ] Add CSS folder to public
  * [ ] Insert BootStrap Theme/styling
 
* [ ] Setup Index.html
  * [ ] Clean-up unnecessary code
  * [ ] Add <div id="root">
 
* [ ] Add Images folder to src folder
  * [ ] Insert Images as needed
 
* [ ] Add Components folder to src folder
 
* [ ] Setup Index.js
  * [ ] Clean-up unnecessary code
 
* [ ] Setup App.js
  * [ ] Clean-up unnecessary code
 
* [ ] Add Bootstrap (or other CSS framework) to the `public/index.html` file
  * [ ] Add a link to the Bootstrap CSS using the [CDN from the official docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/#css)
  * [ ] Add the [`container` CSS class](https://getbootstrap.com/docs/4.6/layout/overview/#containers) to the `<div id="root"></div>` element
 
### 10: Stub Basic Components (Monday 6/27)
 
* [ ] Create `Home` component (stub)
  * [ ] Update `App` component to render `Home`
 
* [ ] Create `Contact` component (stub)
  * [ ] Update `App` component to render `Contact`
 
* [ ] Create `About` component (stub)
  * [ ] Update `App` component to render `About`
 
* [ ] Create `Login` component (stub)
  * [ ] Update `App` component to render `Login`
 
* [ ] Create `Menu` component (stub) (Navbar)
  * [ ] Update `App` component to render `Menu`
  * [ ] Look into Prop Drilling...
 
* [ ] Create `NotFound` component (stub)
  * [ ] Update `App` component to render `NotFound`
 
* [ ] Create `Errors` component (stub)
  * [ ] Update `App` component to render `Errors`
 
### 11. Data Layer (Tuesday 6/28)
* [x] Reservation Repository (interface)
* [ ] Reservation Jdbc Template Repository
	* [ ] FindAll
	* [ ] FindById (int id) -> (reservation object)
	* [ ] FindByDate (LocalDate) -> (List<reservations>)
	* [ ] FindByCompany (int company id) -> (List<reservations>)
	* [ ] add () -> (reservation)
	* [ ] update (int id) -> (boolean)
	* [ ] delete (int id) -> (boolean)
* [x] Company Repository (interface)
* [ ] Company Jdbc Template Repository 
	* [ ] FindAll
	* [ ] FindById (int id) -> (company object)
	* [ ] FindByName (String companyName) -> (company)
	* [ ] UpdateDetails (int id) -> (boolean)
* [x] AppUserMapper
	* [x] Constructor (List<String> roles)
	* [x] mapRow (ResultSet rs, int i)
rs.getInt(id), getString(email), getString(pass_hash), getBoolean(disabled), roles       
	
* [x] App User Repository (interface)
* [ ] App User Jdbc Template Repository
	* [ ] FindAll
	* [ ] FindByEmail (String email)
	* [ ] create (AppUser)
	* [ ] update (AppUser)
	* [ ] updateRoles (AppUser)
	* [ ] getRolesByEmail(String email)
	
* [x] ReservationMapper
	* [x] Constructor (List<String>)
	* [x] mapRow (ResultSet rs, int index)
* [x] CompanyMapper
	* [x] Constructor (List<String>)
	* [x] mapRow (ResultSet rs, int index)		
 
### 12. Validation AppUserService Testing (Tuesday 6/28)
Using Mockito 


* [ ] findAll (void) -> (List <User>)
* [ ] findUser (id) -> (User)
* [ ] addUser (User) -> (Result)
* [ ] checks to see if email is not null and unique/ null and duplicate.
* [ ] checks to see if the password is not null/is null.
* [ ] check to see if the first name is not null/is null.
* [ ] check to see if the last name is not null/is null.
* [ ] editUser (User) -> (Result)
* [ ] deleteUser (id) -> (Result)
 
 
### 13. Validation CompanyService Testing (Tuesday 6/28)
 
* [ ] findAll (void) -> (List <Company>)
* [ ] findCompany (id) -> (Company)
* [ ] addCompany (Company) -> (Result)
* [ ] Company Name is not null and unique/ null and duplicate. 
* [ ] Company Mode is not null/is null. 
* [ ] Company URL is not null/is null. 
* [ ] Company URL is not null/is null. 
* [ ] editCompany (Company) -> (Result) realId/fakeID
* [ ] deleteCompany (id) -> (Result) realId/fakeID
 
### 14. Validation ReservationService Testing (Tuesday 6/28)
 
* [ ] findAll (void) -> (List <Reservation>)
* [ ] findByReservation (id) -> (Reservation) realId/FakeID
* [ ] findByReservation (id) -> (Reservation) realId/FakeID
* [ ] addCompany (Reservation) -> (Result)
* [ ] User ID exists/not exists. 
* [ ] Company ID exists/not exists. 
* [ ] Company URL is not null/is null. 
* [ ] Company URL is not null/is null.
* [ ] editCompany (Reservation) -> (Result) realId/fakeID
* [ ] deleteCompany (id) -> (Result) realId/fakeID
 
### 15. User Reservation List (Tuesday 6/28) 
 
* [ ] Create `UserReservationList` component (stub)
  * [ ] Update `App` component to render `UserReservationList`
 
* [ ] Update `UserReservationList` to render list of an individual user's reservations
  * [ ] Use `fetch` to `GET` a list of reservations from the  API when the component is first loaded
  * [ ] Write JSX to render the reservation array
  * [ ] Stub out click event handlers ("Add Reservation", "Edit Reservation", "Delete Reservation") as necessary
 
 
 
### 16. Company Reservation List (Tuesday 6/28) 
 
* [ ] Create `CompanyReservationList` component (stub)
  * [ ] Update `App` component to render `CompanyReservationList`
 
* [ ] Update `CompanyReservationList` to render list of all reservations for a single company
  * [ ] Use `fetch` to `GET` a list of company's reservations from the  API when the component is first loaded
  * [ ] Write JSX to render the company reservation array
 
### 17: User List (Tuesday 6/28) 
 
* [ ] Create `AllUserList` component (stub)
  * [ ] Update `App` component to render `AllUserList`
 
* [ ] Update `AllUserList` to render list of all customers
  * [ ] Use `fetch` to `GET` a list of users from the  API when the component is first loaded
  * [ ] Write JSX to render the user array
  * [ ] Stub out click event handlers ("Edit Customer", "Disable Customer") as necessary
 
 
 
### 18: Company List (Tuesday 6/28) 
 
* [ ] Create `CompanyList` component (stub)
  * [ ] Update `App` component to render `CompanyList`
 
* [ ] Update `CompanyList` to render list of all companies
  * [ ] Use `fetch` to `GET` a list of companies from the  API when the component is first loaded
  * [ ] Write JSX to render the company array
  * [ ] Stub out click event handlers ("Edit Company") for Rep
  * [ ] Stub out click event handlers ("Add Company", "Edit Company", "Delete Company") for Admin
 
### 19. Merging day / Checkpoint Day (Wednesday 6/29)
 
* [ ] Merge frontEnd into development.
* [ ] Merge service into development.
* [ ] Merge data into development.
* [ ] resolve all merge conflicts.
* [ ] Evaluate progress and plan.
* [ ] Make necessary changes.
 
### 20: Add Customer (Thursday 6/30) 
 
* [ ] Create `CustomerForm` component (stub)
  * [ ] Update `App` component to render `CustomerForm`
 
* [ ] Create a form to add a Customer
  * [ ] Add form JSX
  * [ ] Decide between using individual state variables for input elements or a single object
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create customer object
  * [ ] Use `fetch` to `POST` the new customer's information to the  API
  * [ ] On success, update the customer array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
  * [ ] On success, create success message (landing page, with create new reservation button?)
 
### 21: Add Reservation (Thursday 6/30) 
 
* [ ] Create `ReservationForm` component (stub)
  * [ ] Update `App` component to render `ReservationForm`
 
* [ ] Create a form to add a Reservation
  * [ ] Add form JSX
  * [ ] Decide between using individual state variables for input elements or a single object
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create reservation object
  * [ ] Use `fetch` to `POST` the new customer's information to the  API
  * [ ] On success, update the reservation array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
  * [ ] Direct user to their Reservation List page
 
## 22: Delete Reservation (Thursday 6/30) 
 
* [ ] Support deleting Reservations
  * [ ] Confirm the deletion with the user
  * [ ] Use `fetch` to `DELETE` the reservation from the  API
  * [ ] On success, update the reservation array (don't modify the original array!)
 
* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
 
 
 
### 23: Edit Reservation (Thursday 6/30) 
 
* [ ] Support editing reservations
  * [ ] Store the "edit reservation ID" in a new state variable
  * [ ] Retrieve the reservation to edit
  * [ ] Update form state variable(s)
  * [ ] Add form JSX
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create reservation object
  * [ ] Use `fetch` to `PUT` the updated reservation's information to the  API
  * [ ] On success, update the reservation array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
 
* [ ] Apply Bootstrap styling (as needed)
  * [ ] Update the reservation list
  * [ ] Update the add reservation form
  * [ ] Update the edit reservation form
  * [ ] Update the delete reservation confirmation
 
 
 
### 24.  Add Company (Thursday 6/30) 
 
* [ ] Create `CompanyForm` component (stub)
  * [ ] Update `App` component to render `CompanyForm`
 
* [ ] Create a form to add a Company
  * [ ] Add form JSX
  * [ ] Decide between using individual state variables for input elements or a single object
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create company object
  * [ ] Use `fetch` to `POST` the new customer's information to the  API
  * [ ] On success, update the company array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
  * [ ] Direct user to their company List page
 
## 25. Disable Company (Friday 7/1) 
 
* [ ] Support disable Company
  * [ ] Confirm the disable with the user
  * [ ] Use `fetch` to `PUT` the company from the  API
  * [ ] On success, disable the company array (don't modify the original array!)
 
* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
 
 
 
### 26. Edit Company (Friday 7/1) 
 
* [ ] Support editing company
  * [ ] Store the "edit company ID" in a new state variable
  * [ ] Retrieve the company to edit
  * [ ] Update form state variable(s)
  * [ ] Add form JSX
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create company object
  * [ ] Use `fetch` to `PUT` the updated company's information to the  API
  * [ ] On success, update the company array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
 
* [ ] Apply Bootstrap styling (as needed)
  * [ ] Update the company list
  * [ ] Update the add company form (admin only)
  * [ ] Update the edit company form (rep, admin)
  * [ ] Update the disable company confirmation (admin only)
 
## 27: Disable Customer (Friday 7/1) 
 
* [ ] Support disable Customer
  * [ ] Confirm the disable with the user
  * [ ] Use `fetch` to `PUT` the customer from the  API
  * [ ] On success, disable the customer array (don't modify the original array!)
 
* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
 
### 28: Edit Customer (Friday 7/1) 
 
* [ ] Support editing Customers
  * [ ] Store the "edit customer ID" in a new state variable
  * [ ] Retrieve the customer to edit
  * [ ] Update form state variable(s)
  * [ ] Add form JSX
  * [ ] Add onChange event handlers to input elements
  * [ ] Add onSubmit event handler to form element (be sure to prevent the form from submitting!)
  * [ ] Create customer object
  * [ ] Use `fetch` to `PUT` the updated customer's information to the  API
  * [ ] On success, update the customer array (don't modify the original array!), or on failure, display any validation errors from the API in the UI
 
* [ ] Apply Bootstrap styling (as needed)
  * [ ] Update the customer list
  * [ ] Update the add customer form (user)
  * [ ] Update the edit customer form (user, admin)
  * [ ] Update the disable customer confirmation (admin)
 
### 29. Security (Tuesday 7/5) 
https://github.com/dev10-program/cohort-24/tree/main/M10/Day02/secured-solar-farm/server follow these steps on the read me.
 
* [ ] Add Bootstrap Dependencies (both)
* [ ] Add SecurityConfig.java in security.
* [ ] Add AuthController.java 
* [ ] Add JwtConverter.java
* [ ] Add JwtRequest.java
* [ ] Combine all code.
 
### 30. Client-Side Routes (Tuesday 7/5) 
 
* [ ] Implement the required client-side routes (#.# hours)
  * [ ] Install `react-router-dom`
  * [ ] Define the necessary client-side routes (see the list of routes below)
  * [ ] Stub out any components that are needed to support the client-side routes
  * [ ] Display a "Not Found" message if a route doesn't match one of the defined routes
 
### 31: User CRUD UI Component Refactoring (Tuesday 7/5) 
 
* [ ] Update the "User" list component (#.# hours)
  * [ ] Update the "Add Customer" button to redirect the user to the "Add Customer" route (if not already completed)
  * [ ] Update the individual user "Edit" buttons to redirect the user to the appropriate route (if not already implemented)
 
* [ ] Update the "Add Customer" form component (#.# hours)
  * [ ] After a successful `POST` to the  API, redirect the user to the "UserReservationList" route
 
* [ ] Update the "Edit Customer" form component (#.# hours)
  * [ ] Use the `useParams` hook to get the user's ID from the route
  * [ ] Use `fetch` to `GET` the user from the  API when the component is first loaded
  * [ ] After a successful `PUT` to the  API, redirect the user to the "UserReservationList" route
 
_Note: A single form component can be used for both "Add" and "Edit"._
 
### 32: Reservation CRUD UI Component Refactoring (Tuesday 7/5) 
 
* [ ] Update the "Reservation" list component (#.# hours)
  * [ ] Update the "Add Reservation" button to redirect the user to the "Add Reservation" route (if not already completed)
  * [ ] Update the individual reservation "Edit" buttons to redirect the user to the appropriate route (if not already implemented)
 
* [ ] Update the "Add Reservation" form component (#.# hours)
  * [ ] After a successful `POST` to the  API, redirect the user to the "UserReservationList" route
 
* [ ] Update the "Edit Reservation" form component (#.# hours)
  * [ ] Use the `useParams` hook to get the reservation's ID from the route
  * [ ] Use `fetch` to `GET` the reservation from the  API when the component is first loaded
  * [ ] After a successful `PUT` to the  API, redirect the user to the "UserReservationList" route
 
_Note: A single form component can be used for both "Add" and "Edit"._
 
### 33: Company CRUD UI Component Refactoring (Tuesday 7/5) 
 
* [ ] Update the "Company" list component (#.# hours)
  * [ ] Update the "Add Company" button to redirect the admin to the "Add Company" route (if not already completed)
  * [ ] Update the individual company "Edit" buttons to redirect the user to the appropriate route (if not already implemented)
 
* [ ] Update the "Add Company" form component (#.# hours)
  * [ ] After a successful `POST` to the  API, redirect the user to the "CompanyList" route
 
* [ ] Update the "Edit Company" form component (#.# hours)
  * [ ] Use the `useParams` hook to get the company's ID from the route
  * [ ] Use `fetch` to `GET` the company from the  API when the component is first loaded
  * [ ] After a successful `PUT` to the  API, redirect the user to the "CompanyList" route
 
_Note: A single form component can be used for both "Add" and "Edit"._
 
### 34: Login Component (Wednesday 7/6) 
 
* [ ] Prompt the user for their username and password onClick
* [ ] Propmt user for username and password when add/edit buttons are pressed without being logged in, to see their reservations
* [ ] Redirect the user to their user homepage (user, rep, admin) page (i.e. `/`) after they submit the form
 
### 35: Menu (Navbar) Component (Wednesday 7/6) 
 
* [ ] Include links to the "Home", "Solar Panels", "About", and "Contact" pages
* [ ] Within the component, define a `user` variable and initialize it to `null`
* [ ] If `user` is `null`, then display links to the "Login" and "Register" pages
* [ ] If `user` is not `null`, then display their username and a "Logout" button
 
### 36: Global State and Props (Wednesday 7/6) 
 
* [ ] Add a global `user` state property to the `App` component
* [ ] Define `login()` and `logout()` functions that update the `user` state property
* [ ] Pass an `auth` object literal containing `user`, `login`, and `logout` to the `Login` and `Menu` components
* [ ] Update the `Login` and `Menu` components to call the `login` and `logout` methods (respectively)
 
### 37: Protecting Routes
 
* [ ] Use conditional rendering to protect all of the related routes
 
### 38: Context API (Wednesday 7/6) 
* [ ] Create `AuthContext` in src folder (stub)
  * [ ] Update `App` component to import `AuthContext`
  * [ ] Wrap `Router` in `AuthContext.Provider`
  * [ ] Set the `AuthContext.Provider` component's `value` property to the `auth` object
  * [ ] Remove `auth` props from all other components (if exist)
 
_Now within individual components, you can use the `useContext` Hook to listening for changes to the global state._
 
### 39: Getting a Token (Wednesday 7/6)  
 
* [ ] Update the `Login` component to use the secured  API to authenticate the user
* [ ] `POST` the `username` and `password` values to the API's `/authenticate` endpoint
* [ ] On a successful response (`200 OK`), get the JWT token from the response body and pass it to the `auth.login()` method
* [ ] Redirect the user to the default route (`/`)
* [ ] On an unsuccessful response (`403 Forbidden`) display a "Login failed" message
 
### 40: Parsing the Token (`jwt-decode`) (Wednesday 7/6) 
 
* [ ] Install the `jwt-decode` npm package:
  * [ ] npm install jwt-decode
* [ ] Then use it to decode the token within the `App` component's `login()` function.
 
### 41: Passing the Token when Making HTTP Requests (Wednesday 7/6) 
 
- Now you need to set the `Authorization` header on your Fetch calls
  - If you don't add the JWT token to the request, the server will return a response with a `403 Forbidden` HTTP status code
- Here's an example of what the raw HTTP request needs to look like:
 
 
### 42: Conditionally Render Buttons (Wednesday 7/6) 
 
* [ ] Adding and updating requires the user to login
* [ ] Deleting requires an admin
 
_As a strategy, we can hide actions from users if they don't apply given their current state..._
 
### Part 43: BootStrap Styling (Wednesday 7/6) 
 
 
### Register Component (Stretch Goal)
 
- Add a `Register` component and an accompanying `/register` route to your React project
- The `Register` component is similar in form and function to the `Login` component
- The biggest difference is that you need to make two Fetch calls when the user submits the form
  - Use Fetch to create the account
  - If you get a `201` (i.e. "Success") then use Fetch to authenticate and get the token
  - After receiving the token from the server, pass the token to the `auth.login()` function to login the newly created user
 
## Client-Side Routes (Discuss this)
 
- "Home" `/` - Renders a component that displays a welcome message and a link to the "UserReservationList" route
  - Links to other parts of the website could be added in the future
  - Contact
  - About
  - Login
- "Users" `/users` - Renders a component that displays a list of users
- "Add Customer" `/users/add` - Renders a component that displays a form to add an user
- "Edit Customer" `/users/edit/:id` - Renders a component that displays a form to edit the user specified by the `:id` route parameter
- "Disable Customer" `/users/disable/:id` (optional) - Renders a component that displays a confirmation message to delete the agent specified by the `:id` route parameter
- "Reservations" `/reservations` - Renders a component that displays a list of users
- "Add Reservation" `/reservations/add` - Renders a component that displays a form to add an user
- "Edit Reservations" `/reservations/edit/:id` - Renders a component that displays a form to edit the user specified by the `:id` route parameter
- "Delete Reservation" `/reservations/delete/:id` (optional) - Renders a component that displays a confirmation message to delete the agent specified by the `:id` route parameter
  - _Note: If this route isn't implemented, handle agent deletion within the "Agents" route._
- "Companies" `/company` - Renders a component that displays a list of users
- "Add Company" `/company/add` - Renders a component that displays a form to add an user
- "Edit Company" `/company/edit/:id` - Renders a component that displays a form to edit the user specified by the `:id` route parameter
- "Disable Company" `/company/disable/:id` (optional) - Renders a component that displays a confirmation message to delete the agent specified by the `:id` route parameter
- "Not Found" - Renders a component that displays a friendly "not found" message if the requested route doesn't match one of the defined routes
 
### Debugging
As needed
 
### Stretch Goals
As needed

