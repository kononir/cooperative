package by.bsuir.repository;

import by.bsuir.model.entity.meter.WaterMeter;
import by.bsuir.model.entity.meter.WaterMeterType;
import by.bsuir.registry.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WaterMeterRepository extends MongoRepository<WaterMeter, String> {

    Page<WaterMeter> findAllByPersonId(String id, Pageable pageable);

    Optional<WaterMeter> findByPersonAndWaterMeterType(Person person, WaterMeterType waterMeterType);
}



