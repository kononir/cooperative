package by.bsuir.rest.requisite.dto;

import lombok.Data;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Data
public class OrganizationDto {

    @NotBlank
    private String mailingAddress;

    @NotBlank
    private String legalAddress;

    @NotBlank
    private String email;

    @NotEmpty
    private List<String> payBills;

}