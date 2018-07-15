package webdev.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import webdev.models.Course;
import webdev.repositories.CourseRepository;

@RestController
public class CourseService {

	@Autowired
	CourseRepository courseRepository;

	@GetMapping("/api/course")
	public Iterable<Course> findAllCourses() {
		return courseRepository.findAll();
	}

	@PostMapping("/api/course")
	public Course createCourse(@RequestBody Course course) {
		return courseRepository.save(course);
	}

	@DeleteMapping("/api/course/{courseId}")
	public ResponseEntity<String> deleteCourse(@PathVariable Integer courseId) {
		courseRepository.deleteById(courseId);
		return new ResponseEntity<String>(HttpStatus.OK);
	}

	@GetMapping("/api/course/{courseId}")
	public Optional<Course> findCourseById(@PathVariable Integer courseId) {
		return courseRepository.findById(courseId);
	}

	@PutMapping("/api/course/{courseId}")
	public Course updateCourse(@PathVariable Integer courseId, @RequestBody Course course) {
		Course existingCourse = new Course();
		Optional<Course> existingRecord = courseRepository.findById(courseId);

		if (existingRecord.isPresent()) {
			existingCourse = existingRecord.get();
			existingCourse.set(course);
		}

		return courseRepository.save(existingCourse);
	}
}
