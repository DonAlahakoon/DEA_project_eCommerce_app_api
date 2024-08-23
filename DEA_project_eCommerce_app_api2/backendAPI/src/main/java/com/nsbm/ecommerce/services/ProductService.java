package com.nsbm.ecommerce.services;

import com.nsbm.ecommerce.dto.obj.ProductDto;

import java.util.List;

public interface ProductService {

    ProductDto addNewProduct(ProductDto productDto);

    ProductDto getProductById(int id);

    List<ProductDto> getAllProducts();

    ProductDto updateProduct(int productId,ProductDto product);

    void deleteProduct(int id);

}
