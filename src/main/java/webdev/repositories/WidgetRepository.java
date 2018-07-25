package webdev.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import webdev.models.Widget;

@Repository
public interface WidgetRepository extends CrudRepository<Widget, Integer> {
	

}
