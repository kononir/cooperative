package by.bsuir.rest.requisite.controller;

import by.bsuir.reguisites.model.SubjectHistoryEntity;
import by.bsuir.reguisites.service.SubjectHistoryService;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.SubjectHistoryDto;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping(value = "/api/subjecthistory",
        produces = MediaType.APPLICATION_JSON_VALUE)
public class SubjectHistoryController extends CrudController<SubjectHistoryService, SubjectHistoryDto, SubjectHistoryEntity> {

    protected SubjectHistoryController(SubjectHistoryService service, EntityMapper<SubjectHistoryDto, SubjectHistoryEntity> entityMapper) {
        super(service, entityMapper);
    }

    @Override
    public ResponseEntity<List<SubjectHistoryDto>> get() {
        List<SubjectHistoryDto> list = service.findAll().stream().map(entityMapper::toDto).collect(Collectors.toList());
        list.forEach(e -> e.setFile(null));
        return ResponseEntity.ok(list);
    }
}
