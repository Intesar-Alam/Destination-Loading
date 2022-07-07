package learn.destinationLoading.models;

import java.time.LocalDate;
import java.util.Objects;

public class Reservation {

    private int reservationId;
    private int appUserId;
    private int companyId;
    private LocalDate reservationDate;
    private String reservationCode;
    private String reservationTitle;
    private UserAccount userAccount;
    private Company company;

    public Reservation() {
    }

    public Reservation(int reservationId, int appUserId, int companyId,
                       LocalDate reservationDate, String reservationCode, String reservationTitle) {
        this.reservationId = reservationId;
        this.appUserId = appUserId;
        this.companyId = companyId;
        this.reservationDate = reservationDate;
        this.reservationCode = reservationCode;
        this.reservationTitle = reservationTitle;
    }

    public Reservation(int reservationId, int appUserId, int companyId, LocalDate reservationDate, String reservationCode, String reservationTitle, UserAccount userAccount, Company company) {
        this.reservationId = reservationId;
        this.appUserId = appUserId;
        this.companyId = companyId;
        this.reservationDate = reservationDate;
        this.reservationCode = reservationCode;
        this.reservationTitle = reservationTitle;
        this.userAccount = userAccount;
        this.company = company;
    }

    public int getReservationId () {
        return reservationId;
    }

    public void setReservationId (int reservationId) {
        this.reservationId = reservationId;
    }

    public int getAppUserId() {
        return appUserId;
    }

    public void setAppUserId(int userId) {
        this.appUserId = userId;
    }

    public int getCompanyId () {
        return companyId;
    }

    public void setCompanyId (int companyId) {
        this.companyId = companyId;
    }

    public LocalDate getReservationDate () {
        return reservationDate;
    }

    public void setReservationDate (LocalDate reservationDate) {
        this.reservationDate = reservationDate;
    }

    public String getReservationCode () {
        return reservationCode;
    }

    public void setReservationCode (String reservationCode) {
        this.reservationCode = reservationCode;
    }

    public String getReservationTitle () {
        return reservationTitle;
    }

    public void setReservationTitle (String reservationTitle) {
        this.reservationTitle = reservationTitle;
    }

    public UserAccount getUserAccount() {
        return userAccount;
    }

    public void setUserAccount(UserAccount userAccount) {
        this.userAccount = userAccount;
    }

    public Company getCompany() {
        return company;
    }

    public void setCompany(Company company) {
        this.company = company;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Reservation)) return false;
        Reservation that = (Reservation) o;
        return appUserId == that.appUserId && companyId == that.companyId && reservationDate.equals(that.reservationDate) && reservationCode.equals(that.reservationCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(appUserId, companyId, reservationDate, reservationCode);
    }
}
