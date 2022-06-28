package learn.destinationLoading.models;

import java.time.LocalDate;
import java.util.Objects;

public class Reservation {

    private int reservationId;
    private int userAccountId;
    private int companyId;
    private TransportationMode transportationMode;
    private LocalDate reservationDate;
    private String reservationCode;

    public Reservation() {
    }

    public Reservation(int reservationId, int userAccountId,
                       int companyId, TransportationMode transportationMode,
                       LocalDate reservationDate, String reservationCode) {
        this.reservationId = reservationId;
        this.userAccountId = userAccountId;
        this.companyId = companyId;
        this.transportationMode = transportationMode;
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

    public TransportationMode getTransportationMode () {
        return transportationMode;
    }

    public void setTransportationMode (TransportationMode transportationMode) {
        this.transportationMode = transportationMode;
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
        return userAccountId == that.userAccountId && companyId == that.companyId && transportationMode == that.transportationMode && reservationDate.equals(that.reservationDate) && reservationCode.equals(that.reservationCode);
    }

    @Override
    public int hashCode() {
        return Objects.hash(userAccountId, companyId, transportationMode, reservationDate, reservationCode);
    }
}
