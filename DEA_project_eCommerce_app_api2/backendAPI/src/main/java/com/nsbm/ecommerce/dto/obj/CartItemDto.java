package com.nsbm.ecommerce.dto.obj;

import lombok.*;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Data
public class CartItemDto {
    private int id;
    private int productId;
    private int quantity;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
