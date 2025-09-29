package andreamaiolo.exceptions;

import java.util.List;

public class ValidationException extends RuntimeException {
    private List<String> errorList;

    public ValidationException(List<String> messages) {
        super("Errors in validation");
        this.errorList = messages;
    }

    public List<String> getErrorList() {
        return errorList;
    }
}
