### Part 1: Project Planning and Basic Setup (Sunday 6/26)
 
* [x] Create Wireframes for page layouts
* [ ] Create basic HTML site/mock to make sure all components are present (will be able to copy/paste into react components)
* [ ] Choose Bootstrap/CSS Theme
 
**Commit all changes and push to GitHub**
 
### Part 2: Project React Setup (Monday 6/27)
 
* [x] Create a new React project with CRA (create-react-app) and Typescript
  * [x] Remove the cruft (refer back to the Components and JSX exercise for instructions)
 
* [x] Add CSS folder to public
  * [ ] Insert BootStrap Theme/styling
 
* [x] Setup Index.html
  * [x] Clean-up unnecessary code
  * [x] Add <div id="root">
 
* [x] Add Images folder to src folder
  * [ ] Insert Images as needed
 
* [x] Add Components folder to src folder
 
* [x] Setup Index.js
  * [x] Clean-up unnecessary code
 
* [x] Setup App.js
  * [x] Clean-up unnecessary code
 
* [ ] Add Bootstrap (or other CSS framework) to the `public/index.html` file
  * [ ] Add a link to the Bootstrap CSS using the [CDN from the official docs](https://getbootstrap.com/docs/4.6/getting-started/introduction/#css)
  * [ ] Add the [`container` CSS class](https://getbootstrap.com/docs/4.6/layout/overview/#containers) to the `<div id="root"></div>` element
 
  **Commit all changes and push to GitHub**
 
### Part 3: Stub Basic Components (Monday 6/27)
 
* [x] Create `Home` component (stub)
  * [x] Update `App` component to render `Home`
 
* [x] Create `Contact` component (stub)
  * [x] Update `App` component to render `Contact`
 
* [x] Create `About` component (stub)
  * [x] Update `App` component to render `About`
 
* [x] Create `Login` component (stub)
  * [x] Update `App` component to render `Login`
 
* [x] Create `Menu` component (stub) (Navbar)
  * [x] Update `App` component to render `Menu`
  * [ ] Look into Prop Drilling...
 
* [x] Create `NotFound` component (stub)
  * [x] Update `App` component to render `NotFound`
 
* [x] Create `Errors` component (stub)
 
**Commit all changes and push to GitHub**
 
## List
 
### Part 4: User Reservation List (Tuesday 6/28) 
 
* [x] Create `UserReservationList` component (stub)
  * [x] Update `App` component to render `UserReservationList`
 
* [ ] Update `UserReservationList` to render list of an individual user's reservations
  * [ ] Use `fetch` to `GET` a list of reservations from the  API when the component is first loaded
  * [ ] Write JSX to render the reservation array
  * [ ] Stub out click event handlers ("Add Reservation", "Edit Reservation", "Delete Reservation") as necessary
 
**Commit all changes and push to GitHub**
 
### Part 5: Company Reservation List (Tuesday 6/28) 
 
* [ ] Create `CompanyReservationList` component (stub)
  * [ ] Update `App` component to render `CompanyReservationList`
 
* [ ] Update `CompanyReservationList` to render list of all reservations for a single company
  * [ ] Use `fetch` to `GET` a list of company's reservations from the  API when the component is first loaded
  * [ ] Write JSX to render the company reservation array
 
### Part 6: User List (Tuesday 6/28) 
 
* [ ] Create `AllUserList` component (stub)
  * [ ] Update `App` component to render `AllUserList`
 
* [ ] Update `AllUserList` to render list of all customers
  * [ ] Use `fetch` to `GET` a list of users from the  API when the component is first loaded
  * [ ] Write JSX to render the user array
  * [ ] Stub out click event handlers ("Edit Customer", "Disable Customer") as necessary
 
**Commit all changes and push to GitHub**
 
### Part 7: Company List (Tuesday 6/28) 
 
* [ ] Create `CompanyList` component (stub)
  * [ ] Update `App` component to render `CompanyList`
 
* [ ] Update `CompanyList` to render list of all companies
  * [ ] Use `fetch` to `GET` a list of companies from the  API when the component is first loaded
  * [ ] Write JSX to render the company array
  * [ ] Stub out click event handlers ("Edit Company") for Rep
  * [ ] Stub out click event handlers ("Add Company", "Edit Company", "Delete Company") for Admin
 
**Commit all changes and push to GitHub**
 
## Forms
 
### Part 8: Add Customer (Thursday 6/30) 
 
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
 
**Commit all changes and push to GitHub**
 
### Part 9: Add Reservation (Thursday 6/30) 
 
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
 
**Commit all changes and push to GitHub**
 
## Part 10: Delete Reservation (Thursday 6/30) 
 
* [ ] Support deleting Reservations
  * [ ] Confirm the deletion with the user
  * [ ] Use `fetch` to `DELETE` the reservation from the  API
  * [ ] On success, update the reservation array (don't modify the original array!)
 
* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
 
**Commit all changes and push to GitHub**
 
### Part 11: Edit Reservation (Thursday 6/30) 
 
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
 
**Commit all changes and push to GitHub**
 
### Part 12: Add Company (Thursday 6/30) 
 
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
 
**Commit all changes and push to GitHub**
 
## Part 13: Disable Company (Friday 7/1) 
 
* [ ] Support disable Company
  * [ ] Confirm the disable with the user
  * [ ] Use `fetch` to `PUT` the company from the  API
  * [ ] On success, disable the company array (don't modify the original array!)
 
* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
 
**Commit all changes and push to GitHub**
 
### Part 14: Edit Company (Friday 7/1) 
 
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
 
**Commit all changes and push to GitHub**
 
## Part 15: Disable Customer (Friday 7/1) 
 
* [ ] Support disable Customer
  * [ ] Confirm the disable with the user
  * [ ] Use `fetch` to `PUT` the customer from the  API
  * [ ] On success, disable the customer array (don't modify the original array!)
 
* [ ] Conditionally render sections of the component
  * [ ] Add state variable to track the current view
  * [ ] Add conditional logic to the JSX to display the appropriate view
 
**Commit all changes and push to GitHub**
 
### Part 16: Edit Customer (Friday 7/1) 
 
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
 
**Commit all changes and push to GitHub**
 
## Routing
 
### Part 17: Client-Side Routes
 
* [ ] Implement the required client-side routes
  * [x] Install `react-router-dom`
  * [ ] Define the necessary client-side routes 
  * [ ] Stub out any components that are needed to support the client-side routes
  * [ ] Display a "Not Found" message if a route doesn't match one of the defined routes
 
  **Commit all changes and push to GitHub**
 
### Part 18: User CRUD UI Component Refactoring (Tuesday 7/5) 
 
* [ ] Update the "User" list component 
  * [ ] Update the "Add Customer" button to redirect the user to the "Add Customer" route (if not already completed)
  * [ ] Update the individual user "Edit" buttons to redirect the user to the appropriate route (if not already implemented)
 
* [ ] Update the "Add Customer" form component 
  * [ ] After a successful `POST` to the  API, redirect the user to the "UserReservationList" route
 
* [ ] Update the "Edit Customer" form component 
  * [ ] Use the `useParams` hook to get the user's ID from the route
  * [ ] Use `fetch` to `GET` the user from the  API when the component is first loaded
  * [ ] After a successful `PUT` to the  API, redirect the user to the "UserReservationList" route
 
_Note: A single form component can be used for both "Add" and "Edit"._
 
**Commit all changes and push to GitHub**
 
### Part 19: Reservation CRUD UI Component Refactoring (Tuesday 7/5) 
 
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
 
**Commit all changes and push to GitHub**
 
### Part 19: Company CRUD UI Component Refactoring (Tuesday 7/5) 
 
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
 
**Commit all changes and push to GitHub**
 
## Security
 
### Part 20: Login Component (Wednesday 7/6) 
 
* [ ] Prompt the user for their username and password onClick
* [ ] Propmt user for username and password when add/edit buttons are pressed without being logged in, to see their reservations
* [ ] Redirect the user to their user homepage (user, rep, admin) page (i.e. `/`) after they submit the form
 
 
### Part 21: Menu (Navbar) Component (Wednesday 7/6) 
 
* [ ] Include links to the "Home", "Solar Panels", "About", and "Contact" pages
* [ ] Within the component, define a `user` variable and initialize it to `null`
* [ ] If `user` is `null`, then display links to the "Login" and "Register" pages
* [ ] If `user` is not `null`, then display their username and a "Logout" button
 
 
 
### Part 22: Global State and Props (Wednesday 7/6) 
 
* [ ] Add a global `user` state property to the `App` component
* [ ] Define `login()` and `logout()` functions that update the `user` state property
* [ ] Pass an `auth` object literal containing `user`, `login`, and `logout` to the `Login` and `Menu` components
* [ ] Update the `Login` and `Menu` components to call the `login` and `logout` methods (respectively)
 
### Part 23: Protecting Routes
 
* [ ] Use conditional rendering to protect all of the related routes
 
### Part 24: Context API (Wednesday 7/6) 
* [ ] Create `AuthContext` in src folder (stub)
  * [ ] Update `App` component to import `AuthContext`
  * [ ] Wrap `Router` in `AuthContext.Provider`
  * [ ] Set the `AuthContext.Provider` component's `value` property to the `auth` object
  * [ ] Remove `auth` props from all other components (if exist)
 
_Now within individual components, you can use the `useContext` Hook to listening for changes to the global state._
 
 
### Part 25: Getting a Token (Wednesday 7/6)  
 
* [ ] Update the `Login` component to use the secured  API to authenticate the user
* [ ] `POST` the `username` and `password` values to the API's `/authenticate` endpoint
* [ ] On a successful response (`200 OK`), get the JWT token from the response body and pass it to the `auth.login()` method
* [ ] Redirect the user to the default route (`/`)
* [ ] On an unsuccessful response (`403 Forbidden`) display a "Login failed" message
 
 
### Part 26: Parsing the Token (`jwt-decode`) (Wednesday 7/6) 
 
* [ ] Install the `jwt-decode` npm package:
  * [ ] npm install jwt-decode
* [ ] Then use it to decode the token within the `App` component's `login()` function.
 
 
### Part 27: Passing the Token when Making HTTP Requests (Wednesday 7/6) 
 
- Now you need to set the `Authorization` header on your Fetch calls
  - If you don't add the JWT token to the request, the server will return a response with a `403 Forbidden` HTTP status code
- Here's an example of what the raw HTTP request needs to look like:
 
 
### Part 28: Conditionally Render Buttons (Wednesday 7/6) 
 
* [ ] Adding and updating requires the user to login
* [ ] Deleting requires an admin
 
_As a strategy, we can hide actions from users if they don't apply given their current state..._
 
### Part 29: BootStrap Styling (Wednesday 7/6) 
 
 
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
