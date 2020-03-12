package by.bsuir.reguisites.repository;

import by.bsuir.reguisites.model.SupervisorEntity;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface SupervisorRepository extends MongoRepository<SupervisorEntity, String> {

    SupervisorEntity findTopByOrderByIdDesc();

}
