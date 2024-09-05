package com.nsbm.ecommerce.services.impl;

import com.nsbm.ecommerce.dto.mapper.ProductMapper;
import com.nsbm.ecommerce.dto.mapper.UserMapper;
import com.nsbm.ecommerce.dto.obj.ProductDto;
import com.nsbm.ecommerce.dto.obj.UserDto;

import com.nsbm.ecommerce.entity.Product;
import com.nsbm.ecommerce.entity.User;
import com.nsbm.ecommerce.exception.ResourceNotFoundException;
import com.nsbm.ecommerce.repository.UserRepository;
import com.nsbm.ecommerce.services.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@Service

public class UserServiceImpl implements UserService {

    @Autowired
    private final UserRepository userRepository;

    @Override
    public UserDto addNewUser (UserDto userDto) {
        log.debug("Adding new product: {}", userDto);
        User user = UserMapper.mapToUser(userDto);
        User savedUser = userRepository.save(user);
        log.debug("user saved: {}", savedUser);
        return UserMapper.mapToUserDto(savedUser);
    }

    @Override
    public UserDto getUserById(int userId){
        log.debug("Fetching user by id: {}",userId);
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not exist for given id: " +userId));
        log.debug("product fetched: {}", user);
        return UserMapper.mapToUserDto(user);
    }

    @Override
    public List<UserDto> getAllUsers() {
        log.debug("Fetching all the users");
        List<User> users = userRepository.findAll();
        log.debug("users fetched: {}",users);
        return users.stream().map(UserMapper::mapToUserDto)
                .collect(Collectors.toList());
    }

    @Override
    public UserDto updateUser(int userId,UserDto userDto) {
        log.debug("Updating user with id: {}, data: {}", userId, userDto);
        User user  = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("Product not exist for given id: "+userId));

        user.setName(userDto.getName());
        user.setPassword(userDto.getPassword());
        user.setFirstName(userDto.getFirstName());
        user.setLastName(userDto.getLastName());
        user.setEmail(userDto.getEmail());
        user.setCreatedAt(userDto.getCreatedAt());
        user.setUpdatedAt(userDto.getUpdatedAt());

        User updatedUserObj = userRepository.save(user);
        log.debug("product updated: {}",updatedUserObj);
        return UserMapper.mapToUserDto(updatedUserObj);
    }

    @Override
    public void deleteUser(int userId) {
        log.debug("Deleting user with id: {}",userId);
        User user = userRepository.findById(userId)
                .orElseThrow(()-> new ResourceNotFoundException("User not exist for given id: "+userId));
        userRepository.deleteById(userId);
        log.debug("User deleted with id: {}",userId);
    }





}
