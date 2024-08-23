package com.nsbm.ecommerce.dto.util;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResponseObject {
    private Object data;
    private HttpStatus status;

}
