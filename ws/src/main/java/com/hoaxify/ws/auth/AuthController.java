package com.hoaxify.ws.auth;

import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.shared.IViews;
import com.hoaxify.ws.user.IUserRepository;
import com.hoaxify.ws.user.User;


@RestController
public class AuthController {
	
	@Autowired
	IUserRepository userRepository;
	
	PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
	
	
	@PostMapping("/api/1.0/auth")
	@JsonView(IViews.Base.class)
	ResponseEntity<?> handleAuthentication(@RequestHeader(name="Authorization", required = false) String authorization) {
		
		if(authorization==null) {
			
			ApiError error = new ApiError(401, "Unathorized Request","/api/1.0/auth");
			
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
			
		}
		
		String base64encoded= authorization.split("Basic ")[1];
		
		String decoded = new String(Base64.getDecoder().decode(base64encoded)); //user1 : Password123
		
		String[] parts = decoded.split(":"); // [username,password]
		
		String username = parts[0];
		
		String password = parts[1];
	
		
		User inDB = userRepository.findByUsername(username);
		
		if(inDB==null) {
			
			ApiError error = new ApiError(401, "Unathorized Request","/api/1.0/auth");
			
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
			
			
		}
		
		String hashedPassowrd = inDB.getPassword();
		
		if(!passwordEncoder.matches(password, hashedPassowrd)) {
			
			ApiError error = new ApiError(401, "Unathorized Request","/api/1.0/auth");
			
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(error);
			
		}
		

		
		
		return ResponseEntity.ok(inDB );
		
		
	}
	
	

}
