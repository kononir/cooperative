package by.bsuir.reguisites.service.impl;

import by.bsuir.reguisites.model.StateRegistrationOfLegalEntity;
import by.bsuir.reguisites.repository.StateRegistrationOfLegalEntityRepository;
import by.bsuir.reguisites.service.RegistrationService;
import org.springframework.stereotype.Service;

import javax.annotation.ParametersAreNonnullByDefault;

@Service
@ParametersAreNonnullByDefault
public class RegistrationServiceImpl extends CrudServiceImpl<StateRegistrationOfLegalEntityRepository, StateRegistrationOfLegalEntity>
        implements RegistrationService {


    public RegistrationServiceImpl(StateRegistrationOfLegalEntityRepository repository) {
        super(repository);
    }

    @Override
    public StateRegistrationOfLegalEntity getLast() {
        return repository.findTopByOrderByIdDesc();
    }
}
