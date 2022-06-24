package learn.destinationLoading.models;

public enum TransportationMode {
    AIR(1),
    RAIL(2),
    GROUND(3),
    WATER(4);

    private final int number;

    TransportationMode(int number) {
        this.number = number;

    }

    public int getNumber () {
        return number;
    }
}
