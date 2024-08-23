package com.nsbm.ecommerce.dto.obj;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ProductDto {
    private int id;
    private String name;
    private int categoryId;
    private String description;
    private int quantity;
    private String photoURL;
    private double price;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
