package webdev.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import webdev.models.Lesson;

@Repository
public interface LessonRepository extends CrudRepository<Lesson, Integer> {	

}
