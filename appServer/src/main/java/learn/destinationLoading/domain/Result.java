package learn.destinationLoading.domain;

import java.util.ArrayList;
import java.util.List;

public class Result<T> {

    private final ArrayList<String> messages = new ArrayList<>();
    private ResultType type = ResultType.SUCCESS;
    private T payload;

    public ResultType getType() {
        return type;
    }

    public boolean isSuccess() {
        return type == ResultType.SUCCESS;
    }

    public T getPayload() {
        return payload;
    }

    public void setPayload(T payload) {
        this.payload = payload;
    }

    public List<String> getMessages() {
        return new ArrayList<>(messages);
    }

    /**
     * Message addition
     * @param message message to be added
     * @param type type of error
     */
    public void addMessage(String message, ResultType type) {
        messages.add(message);
        this.type = type;
    }

    /**
     * Message addition, by default if a message type isn't added it will be Invalid
     * @param message message to be added
     */
    public void addMessage(String message) {
        messages.add(message);
        this.type = ResultType.INVALID;
    }

}
