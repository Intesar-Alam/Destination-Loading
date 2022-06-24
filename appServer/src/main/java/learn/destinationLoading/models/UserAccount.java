package learn.destinationLoading.models;


import java.time.LocalDate;

//TODO add userdetails security dependency and extend the class
public class UserAccount {
    private int userId;
    private String email;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private LocalDate dob;

    public UserAccount() {

    }

    public UserAccount (int userId, String email, String firstName, String lastName, String address, String phone, LocalDate dob) {
        this.userId = userId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.dob = dob;
    }

    public int getUserId () {
        return userId;
    }

    public void setUserId (int userId) {
        this.userId = userId;
    }

    public String getEmail () {
        return email;
    }

    public void setEmail (String email) {
        this.email = email;
    }

    public String getFirstName () {
        return firstName;
    }

    public void setFirstName (String firstName) {
        this.firstName = firstName;
    }

    public String getLastName () {
        return lastName;
    }

    public void setLastName (String lastName) {
        this.lastName = lastName;
    }

    public String getAddress () {
        return address;
    }

    public void setAddress (String address) {
        this.address = address;
    }

    public String getPhone () {
        return phone;
    }

    public void setPhone (String phone) {
        this.phone = phone;
    }

    public LocalDate getDob () {
        return dob;
    }

    public void setDob (LocalDate dob) {
        this.dob = dob;
    }


}
