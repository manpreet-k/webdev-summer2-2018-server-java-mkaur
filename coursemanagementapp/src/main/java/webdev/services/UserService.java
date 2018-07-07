package webdev.services;

import java.util.List;
import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import webdev.models.User;
import webdev.repositories.UserRepository;

@RestController
public class UserService {
	@Autowired
	UserRepository userRepository;

	@GetMapping("/api/user")
	public Iterable<User> findAllUsers(@RequestParam(name = "username", required = false) String username,
			@RequestParam(name = "password", required = false) String password) {
		if (username != null && password != null) {
			return userRepository.findUserByCredentials(username, password);
		}
		return userRepository.findAll();
	}

	@PostMapping("/api/login")
	public User login(@RequestBody User user, HttpSession session) {
		List<User> userRecord = (List<User>) userRepository.findUserByCredentials(user.getUsername(),
				user.getPassword());
		if (userRecord != null && userRecord.size() > 0) {
			session.setAttribute("currentUser", user);
			return user;
		}
		return new User();
	}

	@PostMapping("/api/user")
	public User createUser(@RequestBody User user) {
		return userRepository.save(user);
	}

	@DeleteMapping("/api/user/{userId}")
	public void deleteUser(@PathVariable Integer userId) {
		userRepository.deleteById(userId);
	}

	@GetMapping("/api/user/{userId}")
	public Optional<User> findById(@PathVariable Integer userId) {
		return userRepository.findById(userId);
	}

	@PutMapping("/api/user/{userId}")
	public User updateUser(@PathVariable Integer userId, @RequestBody User user) {
		user.setId(userId);
		return userRepository.save(user);
	}

	@PostMapping("/api/register")
	public User register(@RequestBody User user, HttpSession session) {
		List<User> userRecord = (List<User>) userRepository.findUserByUsername(user.getUsername());
		if (userRecord == null || userRecord.size() == 0) {
			session.setAttribute("currentUser", user);
			return userRepository.save(user);
		}
		return new User();
	}

	public Iterable<User> findUserByUsername(@RequestParam(name = "username") String username) {
		return userRepository.findUserByUsername(username);
	}

	@PutMapping("/api/profile")
	public User updateProfile(@RequestBody User user, HttpSession session) {
		User currentUser = (User) session.getAttribute("currentUser");
		if (currentUser.getUsername().equals(user.getUsername())) {
			user.setId(currentUser.getId());
			return userRepository.save(user);
		}
		return new User();
	}

	@PostMapping("/api/logout")
	public void logout(HttpSession session) {
		session.invalidate();
	}
}
