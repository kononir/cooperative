package by.bsuir.rest.requisite.dto;

import by.bsuir.reguisites.model.SubjectEventType;
import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class SubjectHistoryDto {

    private String id;

    @NotNull
    private SubjectEventType type;

    @NotNull
    private Date date;

    @NotBlank
    private String file;
}
