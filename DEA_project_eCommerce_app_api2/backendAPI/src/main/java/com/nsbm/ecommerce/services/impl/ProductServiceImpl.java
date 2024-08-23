package com.nsbm.ecommerce.services.impl;

import com.nsbm.ecommerce.dto.mapper.ProductMapper;
import com.nsbm.ecommerce.dto.obj.ProductDto;
import com.nsbm.ecommerce.entity.Product;
import com.nsbm.ecommerce.exception.ResourceNotFoundException;
import com.nsbm.ecommerce.repository.ProductRepository;
import com.nsbm.ecommerce.services.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private final ProductRepository productRepository;

    @Override
    public ProductDto addNewProduct(ProductDto productDto) {
        log.debug("Adding new product: {}",productDto);
        Product product = ProductMapper.mapToProduct(productDto);
        Product savedProduct = productRepository.save(product);
        log.debug("product saved: {}",savedProduct);
        return ProductMapper.mapToProductDto(savedProduct);
    }

    @Override
    public ProductDto getProductById(int productId) {
        log.debug("Fetching product by id: {}",productId);
        Product product = productRepository.findById(productId)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist for given id: " +productId));
        log.debug("product fetched: {}", product);
        return ProductMapper.mapToProductDto(product);
    }

    @Override
    public List<ProductDto> getAllProducts() {
        log.debug("Fetching all the products");
        List<Product> products = productRepository.findAll();
        log.debug("products fetched: {}",products);
        return products.stream().map(ProductMapper::mapToProductDto)
                .collect(Collectors.toList());
    }

    @Override
    public ProductDto updateProduct(int productId,ProductDto productDto) {
        log.debug("Updating product with id: {}, data: {}", productId, productDto);
        Product product  = productRepository.findById(productId)
                .orElseThrow(()-> new ResourceNotFoundException("Product not exist for given id: "+productId));

        product.setName(productDto.getName());
        product.setCategoryId(productDto.getCategoryId());
        product.setDescription(productDto.getDescription());
        product.setQuantity(productDto.getQuantity());
        product.setPhotoURL(productDto.getPhotoURL());
        product.setCreatedAt(productDto.getCreatedAt());
        product.setUpdatedAt(productDto.getUpdatedAt());

        Product updatedProductObj = productRepository.save(product);
        log.debug("product updated: {}",updatedProductObj);
        return ProductMapper.mapToProductDto(updatedProductObj);
    }

    @Override
    public void deleteProduct(int productId) {
        log.debug("Deleting product with id: {}",productId);
        Product product = productRepository.findById(productId)
                .orElseThrow(()-> new ResourceNotFoundException("Product not exist for given id: "+productId));
        productRepository.deleteById(productId);
        log.debug("Product deleted with id: {}",productId);
    }
}
