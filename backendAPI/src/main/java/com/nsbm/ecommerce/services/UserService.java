package com.nsbm.ecommerce.services;

import com.nsbm.ecommerce.dto.obj.UserDto;

import java.util.List;

public interface UserService {

    UserDto addNewUser(UserDto userDto);

    UserDto getUserById(int id);

    List<UserDto> getAllUsers();

    UserDto updateProduct(int userId,UserDto user);

    void deleteUser(int id);

}
