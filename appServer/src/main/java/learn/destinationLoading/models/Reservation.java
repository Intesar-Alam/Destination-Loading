package learn.destinationLoading.models;

import java.time.LocalDate;
import java.util.Objects;

public class Reservation {

    private int reservationId;
    private int userAccountId;
    private int companyId;
    private LocalDate reservationDate;
    private String reservationCode;

    public Reservation() {
    }

    public Reservation(int reservationId, int userAccountId,
                       int companyId,
                       LocalDate reservationDate, String reservationCode) {
        this.reservationId = reservationId;
        this.userAccountId = userAccountId;
        this.companyId = companyId;
        this.reservationDate = reservationDate;
        this.reservationCode = reservationCode;
    }

    public int getReservationId () {
        return reservationId;
    }

    public void setReservationId (int reservationId) {
        this.reservationId = reservationId;
    }

    public int getUserAccountId () {
        return userAccountId;
    }

    public void setUserAccountId (int userId) {
        this.userAccountId = userId;
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

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Reservation)) return false;
        Reservation that = (Reservation) o;
        return userAccountId == that.userAccountId && companyId == that.companyId && reservationDate.equals(that.reservationDate) && reservationCode.equals(that.reservationCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userAccountId, companyId, reservationDate, reservationCode);
    }
}
