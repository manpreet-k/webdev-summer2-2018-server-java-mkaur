package webdev.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import webdev.models.Course;

@Repository
public interface CourseRepository extends CrudRepository<Course, Integer> {	

}
