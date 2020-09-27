package com.hoaxify.ws.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	
	IUserRepository userRepository;
	

	public UserService(IUserRepository userRepository) {
		this.userRepository = userRepository;
	}


	public void save(User user) {
		userRepository.save(user);
	}
	
	

}
