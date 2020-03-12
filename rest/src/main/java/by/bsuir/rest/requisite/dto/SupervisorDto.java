package by.bsuir.rest.requisite.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class SupervisorDto {

    private String id;

    @NotBlank
    private String surname;

    @NotBlank
    private String name;

    @NotBlank
    private String patronymic;

    @NotNull
    private Date startDate;

    @NotNull
    private Date endDate;

    @NotBlank
    private String protocolNumber;

    @NotBlank
    private String protocolScan;

    @NotBlank
    private String signatureScan;
}
