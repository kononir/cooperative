package by.bsuir.rest.requisite.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Data
public class RegistrationDto {

    private String id;

    @NotBlank
    private String name;

    @NotBlank
    private String pdfScanContent;

    @NotBlank
    private String russianFullName;

    @NotBlank
    private String belarusianFullName;

    @NotBlank
    private String russianShortName;

    @NotBlank
    private String belarusianShortName;

    @NotNull
    private Date registrationDate;

    @NotBlank
    private String organName;

    @NotNull
    private Date givenDate;

    @NotBlank
    private String payerAccNumber;

}
