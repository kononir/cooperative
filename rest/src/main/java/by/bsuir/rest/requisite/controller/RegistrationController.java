package by.bsuir.rest.requisite.controller;

import by.bsuir.reguisites.model.StateRegistrationOfLegalEntity;
import by.bsuir.reguisites.service.RegistrationService;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.RegistrationDto;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/registration",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class RegistrationController extends CrudController<RegistrationService, RegistrationDto, StateRegistrationOfLegalEntity> {


    protected RegistrationController(RegistrationService service, EntityMapper<RegistrationDto, StateRegistrationOfLegalEntity> entityMapper) {
        super(service, entityMapper);
    }
}
