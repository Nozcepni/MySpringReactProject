package com.hoaxify.ws.user;

import org.slf4j.LoggerFactory;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.Map;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.shared.GenericResponse;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	//private static final Logger Log = LoggerFactory.getLogger(UserController.class);

	@PostMapping("/api/1.0/users/")
	public GenericResponse createUser(@Valid @RequestBody User user) {
		
		userService.save(user);
		return (new GenericResponse("user created"));
	
	}
	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ApiError handleValidationException(MethodArgumentNotValidException exception) {
		System.out.println("sd");
		ApiError error = new ApiError(400,"Validation error","/api/1.0/users");
		Map<String,String> validationErrors = new HashMap<>();

		for(FieldError fieldError: exception.getBindingResult().getFieldErrors()) {
			validationErrors.put(fieldError.getField(), fieldError.getDefaultMessage());
		}
		
		error.setValidationErrors(validationErrors);

		return error;
		
	}
	

}
	

	
