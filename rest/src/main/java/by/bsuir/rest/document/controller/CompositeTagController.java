package by.bsuir.rest.document.controller;

import by.bsuir.document.model.template.CompositeTag;
import by.bsuir.document.service.tag.CompositeTagManager;
import by.bsuir.rest.common.controller.CrudController;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.document.model.CompositeTagEntity;
import io.swagger.annotations.Api;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.Collection;
import java.util.List;

/**
 * Controller to work with {@link CompositeTag} entities.
 *
 * @author Vladislav Novitskiy
 */
@Api
@RestController
@RequestMapping("/api/comptag")
public class CompositeTagController extends CrudController<CompositeTagManager, CompositeTagEntity, CompositeTag> {

    protected CompositeTagController(CompositeTagManager baseManager,
                                     EntityMapper<CompositeTagEntity, CompositeTag> entityMapper) {
        super(baseManager, entityMapper);
    }

    @Override
    public ResponseEntity<Void> delete(String id) {
        return super.delete(id);
    }

    @Override
    public ResponseEntity<List<CompositeTagEntity>> get() {
        return super.get();
    }

    @Override
    public ResponseEntity<CompositeTagEntity> update(CompositeTagEntity compositeTagEntity) {
        return super.update(compositeTagEntity);
    }

    @Override
    public ResponseEntity<CompositeTagEntity> get(String id) {
        return super.get(id);
    }

    @Override
    public ResponseEntity<List<CompositeTagEntity>> get(int page, int limit) {
        return super.get(page, limit);
    }

    @Override
    public ResponseEntity<List<CompositeTagEntity>> batchUpdate(Collection<String> ids) {
        return super.batchUpdate(ids);
    }

    @Override
    public ResponseEntity<CompositeTagEntity> post(@Valid CompositeTagEntity compositeTagEntity) {
        return super.post(compositeTagEntity);
    }
}
