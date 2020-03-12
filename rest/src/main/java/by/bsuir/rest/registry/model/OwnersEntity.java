package by.bsuir.rest.registry.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Collection;

public class OwnersEntity {

    private final PersonEntity personEntity;
    private final Collection<PropertyEntity> entities;

    @JsonCreator(mode = JsonCreator.Mode.PROPERTIES)
    public OwnersEntity(
            @JsonProperty("personEntity") PersonEntity personEntity,
            @JsonProperty("entities") Collection<PropertyEntity> entities
    ) {
        this.personEntity = personEntity;
        this.entities = entities;
    }

    public Collection<PropertyEntity> getEntities() {
        return entities;
    }

    public PersonEntity getPersonEntity() {
        return personEntity;
    }

}
