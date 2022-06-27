package learn.destinationLoading.models;


import java.time.LocalDate;
import java.util.List;


public class UserAccount {
    private int userAccountId;
    private String email;
    private String firstName;
    private String lastName;
    private String address;
    private String phone;
    private LocalDate dob;
    private int appUserId;

    private List<Reservation> reservations;

    public UserAccount() {

    }

    public UserAccount (int userId, String email, String firstName, String lastName, String address, String phone, LocalDate dob, int appUserId) {
        this.userAccountId = userId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.phone = phone;
        this.dob = dob;
        this.appUserId = appUserId;
    }

    public int getUserAccountId () {
        return userAccountId;
    }

    public void setUserAccountId (int userAccountId) {
        this.userAccountId = userAccountId;
    }

    public int getAppUserId () {
        return appUserId;
    }

    public void setAppUserId (int appUserId) {
        this.appUserId = appUserId;
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
