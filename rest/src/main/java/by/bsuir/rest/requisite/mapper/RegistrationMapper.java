package by.bsuir.rest.requisite.mapper;

import by.bsuir.reguisites.model.StateRegistrationOfLegalEntity;
import by.bsuir.rest.common.mapper.CompactMapper;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.RegistrationDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface RegistrationMapper extends EntityMapper<RegistrationDto, StateRegistrationOfLegalEntity> {
    @CompactMapper
    @Mappings({
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "russianFullName", target = "russianFullName"),
            @Mapping(source = "belarusianFullName", target = "belarusianFullName"),
            @Mapping(source = "russianShortName", target = "russianShortName"),
            @Mapping(source = "belarusianShortName", target = "belarusianShortName"),
            @Mapping(source = "pdfScanContent", target = "pdfScanContent"),
            @Mapping(source = "registrationDate", target = "registrationDate"),
            @Mapping(source = "organName", target = "organName"),
            @Mapping(source = "givenDate", target = "givenDate"),
            @Mapping(source = "payerAccNumber", target = "payerAccNumber"),
    })

    @BeanMapping(ignoreByDefault = true)
    RegistrationDto toDtoCompact(StateRegistrationOfLegalEntity e);
}
