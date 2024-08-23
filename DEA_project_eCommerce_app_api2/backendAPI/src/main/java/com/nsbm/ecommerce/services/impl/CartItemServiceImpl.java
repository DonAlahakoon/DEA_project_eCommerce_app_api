package com.nsbm.ecommerce.services.impl;

import com.nsbm.ecommerce.dto.mapper.CartItemMapper;
import com.nsbm.ecommerce.dto.obj.CartItemDto;
import com.nsbm.ecommerce.entity.CartItem;
import com.nsbm.ecommerce.exception.GenericException;
import com.nsbm.ecommerce.exception.ResourceNotFoundException;
import com.nsbm.ecommerce.repository.CartItemRepository;
import com.nsbm.ecommerce.services.CartItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@Service
public class CartItemServiceImpl implements CartItemService {

    @Autowired
    private final CartItemRepository cartItemRepository;

    @Override
    public CartItemDto addNewCartItem(CartItemDto cartItemDto) {
        log.debug("Adding new cart item: {}", cartItemDto);
        try {
            CartItem cartItem = CartItemMapper.mapToCartItem(cartItemDto);
            CartItem savedCartItem = cartItemRepository.save(cartItem);
            log.debug("Cart item saved: {}", savedCartItem);
            return CartItemMapper.mapToCartItemDto(savedCartItem);
        } catch (Exception e) {
            log.error("Failed to add cart item: {}", cartItemDto, e);
            throw new GenericException("Failed to add cart item.");
        }
    }

    @Override
    public CartItemDto getCartItemById(int cartItemId) {
        log.debug("Fetching cart item by id: {}", cartItemId);
        try {
            CartItem cartItem = cartItemRepository.findById(cartItemId)
                    .orElseThrow(() -> new ResourceNotFoundException("Cart item does not exist for the given id: " + cartItemId));
            log.debug("Cart item fetched: {}", cartItem);
            return CartItemMapper.mapToCartItemDto(cartItem);
        } catch (Exception e) {
            log.error("Failed to fetch cart item by id: {}", cartItemId, e);
            throw new GenericException("Failed to fetch cart item.");
        }
    }

    @Override
    public List<CartItemDto> getAllCartItems() {
        log.debug("Fetching all cart items");
        try {
            List<CartItem> cartItems = cartItemRepository.findAll();
            log.debug("Cart items fetched: {}", cartItems);
            return cartItems.stream().map(CartItemMapper::mapToCartItemDto)
                    .collect(Collectors.toList());
        } catch (Exception e) {
            log.error("Failed to fetch all cart items", e);
            throw new GenericException("Failed to fetch cart items.");
        }
    }

    @Override
    public CartItemDto updateCartItem(int cartItemId, CartItemDto cartItemDto) {
        log.debug("Updating cart item with id: {}, data: {}", cartItemId, cartItemDto);
        try {
            CartItem cartItem = cartItemRepository.findById(cartItemId)
                    .orElseThrow(() -> new ResourceNotFoundException("Cart item does not exist for the given id: " + cartItemId));

            cartItem.setProductId(cartItemDto.getProductId());
            cartItem.setQuantity(cartItemDto.getQuantity());
            cartItem.setCreatedAt(cartItemDto.getCreatedAt());
            cartItem.setUpdatedAt(cartItemDto.getUpdatedAt());

            CartItem updatedCartItem = cartItemRepository.save(cartItem);
            log.debug("Cart item updated: {}", updatedCartItem);
            return CartItemMapper.mapToCartItemDto(updatedCartItem);
        } catch (Exception e) {
            log.error("Failed to update cart item with id: {}", cartItemId, e);
            throw new GenericException("Failed to update cart item.");
        }
    }

    @Override
    public void deleteCartItem(int cartItemId) {
        log.debug("Deleting cart item with id: {}", cartItemId);
        try {
            CartItem cartItem = cartItemRepository.findById(cartItemId)
                    .orElseThrow(() -> new ResourceNotFoundException("Cart item does not exist for the given id: " + cartItemId));
            cartItemRepository.deleteById(cartItemId);
            log.debug("Cart item deleted with id: {}", cartItemId);
        } catch (Exception e) {
            log.error("Failed to delete cart item with id: {}", cartItemId, e);
            throw new GenericException("Failed to delete cart item.");
        }
    }
}
