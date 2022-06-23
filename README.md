# Destination-Loading

Our plan is to create a reservation/ticket manager, at the moment we're focusing on transportation and travel. Users will able to find and "store reservations" with established airlines and ground transport, such as Amtrak. We will also allow users to store benefits in a wallet, such as metro cards, airline miles, etc. If we have time, we'd like to maybe expand into other areas, or create a feature to potentially help users find people with similar interests to make plans with, using a simple algorithim.

Users can make an account that can hold their existing reservation. The user would manually add ticket reservations and select a company that they're choosing to travel with. They can view all their reservation in a view my reservations tab and it will sort by date (and future can be sorted by other catagories.). On their list of reservatiosn they can edit, delete, or jump to the travel companies website with the reservation number saved to their ciip board. An Admin can manage different comapnies that are supoorted, thsi includes finding companies adding them, deleting them, and modifying them. A user can click on a button to jump to the mange reservation page on their companies website. **We are also planning on using TypeScript in our IDE for our front-end development.** As a stretch goal we may add payment integration, or the ability to store payment methods on an account, via Stripe, depending on how meeting our base requirements go.


The website data structure will most likley resemble 

Users with a unique ID as well and a email and password 

Roles with a unique identifiers we try to support 3 type of users, 
- General user who can add existing reservation, update existing reservation, or delete reservations.
- Representative that has access to modify company data and see reservations are  
- Admins that can modify all companies and see all reservation.

A way to bridge users with their specific roles. 

A list of different modes of transport with unique ID's

A list of Unique travel operting companies with their information

A list of reservations that contain the reservation codes. 
