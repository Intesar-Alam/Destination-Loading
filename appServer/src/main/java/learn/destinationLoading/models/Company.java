package learn.destinationLoading.models;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class Company {

    private int companyId;

    private TransportationMode transportationMode;

    private String companyName;

    private String url;

    private String icon;

    private List<Reservation> reservations = new ArrayList<>();
    public Company() {
    }

    public Company(int companyId, String companyName, String url, String icon, TransportationMode transportationMode) {
        this.companyId = companyId;
        this.transportationMode = transportationMode;
        this.companyName = companyName;
        this.url = url;
        this.icon = icon;
    }

    public int getCompanyId () {
        return companyId;
    }

    public void setCompanyId (int id) {
        this.companyId = id;
    }

    public TransportationMode getTransportationMode () {
        return transportationMode;
    }

    public void setTransportationMode (TransportationMode transportationMode) {
        this.transportationMode = transportationMode;
    }

    public String getCompanyName () {
        return companyName;
    }

    public void setCompanyName (String companyName) {
        this.companyName = companyName;
    }

    public String getUrl () {
        return url;
    }

    public void setUrl (String url) {
        this.url = url;
    }

    public String getIcon () {
        return icon;
    }

    public void setIcon (String icon) {
        this.icon = icon;
    }

    public List<Reservation> getReservations () {
        return reservations;
    }

    public void setReservations (List<Reservation> reservations) {
        this.reservations = reservations;
    }

    @Override
    public boolean equals (Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Company company = (Company) o;
        return companyId == company.companyId && transportationMode == company.transportationMode && Objects.equals(companyName, company.companyName) && Objects.equals(url, company.url) && Objects.equals(icon, company.icon);
    }

    @Override
    public int hashCode () {
        return Objects.hash(companyId, transportationMode, companyName, url, icon);
    }
}
