package by.bsuir.reguisites.repository;

import by.bsuir.reguisites.model.SubjectHistoryEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubjectHistoryRepository extends MongoRepository<SubjectHistoryEntity, String> {
    SubjectHistoryEntity findTopByOrderByIdDesc();
}
