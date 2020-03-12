package by.bsuir.rest.requisite.mapper;

import by.bsuir.reguisites.model.SubjectHistoryEntity;
import by.bsuir.rest.common.mapper.CompactMapper;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.SubjectHistoryDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface SubjectHistoryMapper extends EntityMapper<SubjectHistoryDto, SubjectHistoryEntity> {

    @CompactMapper
    @Mappings({
            @Mapping(source = "id", target = "id"),
            @Mapping(source = "type", target = "type"),
            @Mapping(source = "date", target = "date"),
            @Mapping(source = "file", target = "file")
    })

    @BeanMapping(ignoreByDefault = true)
    SubjectHistoryDto toDtoCompact(SubjectHistoryEntity e);
}
