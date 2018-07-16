package webdev.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import webdev.models.Topic;

@Repository
public interface TopicRepository extends CrudRepository<Topic, Integer> {	

}
