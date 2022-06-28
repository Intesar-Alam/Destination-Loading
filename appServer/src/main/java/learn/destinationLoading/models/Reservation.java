package learn.destinationLoading.models;

import java.time.LocalDate;

public class Reservation {

    private int reservationId;
    private int userAccountId;
    private int companyId;
    private TransportationMode transportationMode;
    private LocalDate reservationDate;
    private String reservationCode;


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
}
