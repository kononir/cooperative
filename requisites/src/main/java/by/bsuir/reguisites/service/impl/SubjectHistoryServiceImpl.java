package by.bsuir.reguisites.service.impl;

import by.bsuir.reguisites.model.SubjectHistoryEntity;
import by.bsuir.reguisites.repository.SubjectHistoryRepository;
import by.bsuir.reguisites.service.SubjectHistoryService;
import org.springframework.stereotype.Service;

import javax.annotation.ParametersAreNonnullByDefault;

@Service
@ParametersAreNonnullByDefault
public class SubjectHistoryServiceImpl extends CrudServiceImpl<SubjectHistoryRepository, SubjectHistoryEntity>
        implements SubjectHistoryService {

    public SubjectHistoryServiceImpl(SubjectHistoryRepository repository) {
        super(repository);
    }

    @Override
    public SubjectHistoryEntity getLast() {
        return repository.findTopByOrderByIdDesc();
    }
}
