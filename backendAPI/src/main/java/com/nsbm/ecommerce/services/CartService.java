package com.nsbm.ecommerce.services;

import com.nsbm.ecommerce.entity.Cart;
import com.nsbm.ecommerce.entity.CartItem;
import com.nsbm.ecommerce.entity.Product;
import com.nsbm.ecommerce.repository.CartItemRepository;
import com.nsbm.ecommerce.repository.CartRepository;
import com.nsbm.ecommerce.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    public Cart addProductToCart(int userId, int productId, int quantity) {
        Cart cart = cartRepository.findByUserId(userId);

        if (cart == null) {
            cart = new Cart();
            cart.setUserId(userId);
        }

        Product product = productRepository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));

        CartItem cartItem = new CartItem();
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        cartItem.setCart(cart);

        cart.getItems().add(cartItem);
        cart.setTotalPrice(cart.getTotalPrice() + product.getPrice() * quantity);

        cartItemRepository.save(cartItem);
        return cartRepository.save(cart);
    }

    public Cart getCartByUserId(int userId) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new RuntimeException("Cart not found for user ID: " + userId);
        }
        return cart;
    }

    public Cart updateProductQuantity(int userId, int productId, int quantity) {
        Cart cart = cartRepository.findByUserId(userId);
        if (cart == null) {
            throw new RuntimeException("Cart not found for user ID: " + userId);
        }

        CartItem cartItem = cart.getItems().stream()
                .filter(item -> item.getProduct().getId() == productId)
                .findFirst()
                .orElseThrow(() -> new RuntimeException("Product not found in cart"));

        if (quantity == 0) {
            cart.getItems().remove(cartItem);
            cartItemRepository.delete(cartItem);
        } else {
            cartItem.setQuantity(quantity);
            cart.setTotalPrice(cart.getTotalPrice() + (quantity - cartItem.getQuantity()) * cartItem.getProduct().getPrice());
            cartItemRepository.save(cartItem);
        }

        return cartRepository.save(cart);
    }


}
