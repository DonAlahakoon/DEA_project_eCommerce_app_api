package com.nsbm.ecommerce.exception;

import org.springframework.http.HttpStatus;

public class InvalidRequestException extends RuntimeException{
    private HttpStatus status;

    public InvalidRequestException(String message,HttpStatus status) {
        super(message);
        this.status = status;

    }
    public HttpStatus getStatus() {
        return status;
    }
}
