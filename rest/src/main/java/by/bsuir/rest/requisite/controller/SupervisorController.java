package by.bsuir.rest.requisite.controller;

import by.bsuir.reguisites.model.SupervisorEntity;
import by.bsuir.reguisites.service.SupervisorService;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.SupervisorDto;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api/supervisor",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class SupervisorController extends CrudController<SupervisorService, SupervisorDto, SupervisorEntity> {

    protected SupervisorController(SupervisorService service, EntityMapper<SupervisorDto, SupervisorEntity> entityMapper) {
        super(service, entityMapper);
    }
}
