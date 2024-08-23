package com.nsbm.ecommerce.exception;

/**
 * Custom exception class to handle generic exceptions.
 */
public class GenericException extends RuntimeException {
    public GenericException(String message) {
        super(message);
    }
}
