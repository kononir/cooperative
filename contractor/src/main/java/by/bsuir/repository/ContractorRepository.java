package by.bsuir.repository;

import by.bsuir.model.entity.contractor.Contractor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ContractorRepository extends MongoRepository<Contractor,String> {
    @Query("{ 'type' : ?0 }")
    Page<Contractor> findAllByType(String type, Pageable pageable);
}
