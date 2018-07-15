package webdev.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import webdev.models.Module;

@Repository
public interface ModuleRepository extends CrudRepository<Module, Integer> {
	@Query("SELECT m FROM Module m WHERE m.id=:id AND m.course=:courseId")
	Module 
		findModuleByIdAndCourseId
			(@Param("id") Integer id, 
			 @Param("courseId") Integer courseId);

}
