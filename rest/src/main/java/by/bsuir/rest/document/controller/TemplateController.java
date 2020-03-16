package by.bsuir.rest.document.controller;

import by.bsuir.document.model.template.Template;
import by.bsuir.document.service.template.TemplateManager;
import by.bsuir.rest.common.controller.CrudController;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.document.model.TemplateEntity;
import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

/**
 * Controller to work with {@link Template} entities.
 *
 * @author Vladislav Novitskiy
 */
@Api
@RestController
@RequestMapping("/api/template")
public class TemplateController extends CrudController<TemplateManager, TemplateEntity, Template> {
    protected TemplateController(
            TemplateManager baseManager,
            EntityMapper<TemplateEntity, Template> entityMapper) {
        super(baseManager, entityMapper);
    }

    @Override
    public ResponseEntity<Void> delete(String id) {
        return super.delete(id);
    }

    @Override
    public ResponseEntity<List<TemplateEntity>> get() {
        return super.get();
    }

    @Override
    public ResponseEntity<TemplateEntity> update(TemplateEntity templateEntity) {
        return super.update(templateEntity);
    }

    @Override
    public ResponseEntity<TemplateEntity> get(String id) {
        return super.get(id);
    }

    @Override
    public ResponseEntity<List<TemplateEntity>> get(int page, int limit) {
        return super.get(page, limit);
    }

    @Override
    public ResponseEntity<List<TemplateEntity>> batchUpdate(Collection<String> ids) {
        return super.batchUpdate(ids);
    }

    @Override
    public ResponseEntity<TemplateEntity> post(@Valid TemplateEntity templateEntity) {
        return super.post(templateEntity);
    }
}
