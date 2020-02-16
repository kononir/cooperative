package by.bsuir.rest.registry.model;

import by.bsuir.rest.registry.IDValidationGroup;
import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import io.swagger.annotations.ApiModelProperty;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Null;

public class VicariousAuthorityEntity {

    @NotBlank(groups = IDValidationGroup.class)
    @Null
    private final String id;
    @ApiModelProperty(
            required = true,
            value = "Person which issued vicarious authority."
    )
    @NotBlank// From
    private final String proprietorId;
    @NotBlank // TimeUnit seconds since 1970....
    private final long startDate;
    @NotBlank // TimeUnit days
    private final long duration;
    @NotBlank // To
    private final String personId;

    @JsonCreator
    public VicariousAuthorityEntity(
            @JsonProperty("id") @NotBlank(groups = IDValidationGroup.class) @Null String id,
            @JsonProperty("proprietorId") @NotBlank String proprietorId,
            @JsonProperty("startDate") @NotBlank long startDate,
            @JsonProperty("duration") @NotBlank long duration,
            @JsonProperty("personId") @NotBlank String personId
    ) {
        this.id = id;
        this.proprietorId = proprietorId;
        this.startDate = startDate;
        this.duration = duration;
        this.personId = personId;
    }

    public String getId() {
        return id;
    }

    public long getStartDate() {
        return startDate;
    }

    public String getPersonId() {
        return personId;
    }

    public long getDuration() {
        return duration;
    }

    public String getProprietorId() {
        return proprietorId;
    }

}
