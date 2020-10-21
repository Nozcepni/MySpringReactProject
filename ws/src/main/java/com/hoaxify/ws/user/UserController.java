package com.hoaxify.ws.user;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import javax.validation.Valid;
import com.hoaxify.ws.shared.GenericResponse;
import org.springframework.web.bind.annotation.RestController;



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
	
	@GetMapping("/api/1.0/users/")
	//@JsonView(IViews.Base.class)
	Page<User> getUsers(Pageable page){

		return userService.getUsers(page);
	}
	

}
	

	
