package learn.destinationLoading.controller;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    // "Data integrity exceptions"
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponse> handleException(DataIntegrityViolationException ex) {
        return new ResponseEntity<>(
                new ErrorResponse("Sorry, something in the database went unexpected went wrong. Please contact IT"),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // "Catch all" handler
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception ex) {
//        System.out.println(ex.getClass() + ex.getMessage());
        if(ex instanceof HttpMessageNotReadableException){
            return new ResponseEntity<>(
                    new ErrorResponse("Sorry it seems you request was empty"),
                    HttpStatus.BAD_REQUEST);
        }
        if(ex instanceof HttpMediaTypeNotSupportedException){
            return new ResponseEntity<>(
                    new ErrorResponse("Sorry it seems you tried to submit an unsupported data type"),
                    HttpStatus.UNSUPPORTED_MEDIA_TYPE);
        }
        return new ResponseEntity<>(
                new ErrorResponse("Sorry, something unexpected went wrong. Please contact IT if this persists"),
                HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
