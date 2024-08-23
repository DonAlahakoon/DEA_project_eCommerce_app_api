package com.nsbm.ecommerce.dto.mapper;

import com.nsbm.ecommerce.dto.obj.CartItemDto;
import com.nsbm.ecommerce.entity.CartItem;

public class CartItemMapper {

    /**
     * Converts a CartItem entity to a CartItemDto.
     *
     * @param cartItem - The CartItem entity.
     * @return CartItemDto
     */
    public static CartItemDto mapToCartItemDto(CartItem cartItem) {
        return new CartItemDto(
                cartItem.getId(),
                cartItem.getProductId(),
                cartItem.getQuantity(),
                cartItem.getCreatedAt(),
                cartItem.getUpdatedAt()
        );
    }

    /**
     * Converts a CartItemDto to a CartItem entity.
     *
     * @param cartItemDto - The CartItemDto.
     * @return CartItem entity
     */
    public static CartItem mapToCartItem(CartItemDto cartItemDto) {
        return new CartItem(
                cartItemDto.getId(),
                cartItemDto.getProductId(),
                cartItemDto.getQuantity(),
                cartItemDto.getCreatedAt(),
                cartItemDto.getUpdatedAt()
        );
    }
}
