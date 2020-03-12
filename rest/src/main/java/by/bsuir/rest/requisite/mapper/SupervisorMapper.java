package by.bsuir.rest.requisite.mapper;

import by.bsuir.reguisites.model.SupervisorEntity;
import by.bsuir.rest.common.mapper.CompactMapper;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.SupervisorDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface SupervisorMapper extends EntityMapper<SupervisorDto, SupervisorEntity> {
    @CompactMapper
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "surname", target = "surname"),
            @Mapping(source = "name", target = "name"),
            @Mapping(source = "patronymic", target = "patronymic"),
            @Mapping(source = "startDate", target = "startDate"),
            @Mapping(source = "endDate", target = "endDate"),
            @Mapping(source = "protocolNumber", target = "protocolNumber"),
            @Mapping(source = "protocolScan", target = "protocolScan"),
            @Mapping(source = "signatureScan", target = "signatureScan"),
    })

    @BeanMapping(ignoreByDefault = true)
    SupervisorDto toDtoCompact(SupervisorEntity e);
}
