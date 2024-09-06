package com.nsbm.ecommerce.services;

import com.nsbm.ecommerce.entity.Cart;

public interface CartService {

    Cart addProductToCart(int userId, int productId, int quantity);

    Cart getCartByUserId(int userId);

    Cart updateProductQuantity(int userId, int productId, int quantity);

    Cart removeProductFromCart(int userId, int productId);

}
