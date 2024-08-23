package com.nsbm.ecommerce.services;

import com.nsbm.ecommerce.dto.obj.CartItemDto;

import java.util.List;

/**
 * Service interface for CartItem operations.
 */
public interface CartItemService {

    CartItemDto addNewCartItem(CartItemDto cartItemDto);

    CartItemDto getCartItemById(int id);

    List<CartItemDto> getAllCartItems();

    CartItemDto updateCartItem(int cartItemId, CartItemDto cartItemDto);

    void deleteCartItem(int id);
}
