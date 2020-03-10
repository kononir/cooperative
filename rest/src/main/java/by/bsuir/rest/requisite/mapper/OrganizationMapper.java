package by.bsuir.rest.requisite.mapper;

import by.bsuir.reguisites.model.OrganizationEntity;
import by.bsuir.rest.common.mapper.CompactMapper;
import by.bsuir.rest.common.mapper.EntityMapper;
import by.bsuir.rest.requisite.dto.OrganizationDto;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

@Mapper(componentModel = "spring")
public interface OrganizationMapper extends EntityMapper<OrganizationDto, OrganizationEntity> {
    @CompactMapper
    @Mappings({
            @Mapping(source = "mailingAddress", target = "mailingAddress"),
            @Mapping(source = "legalAddress", target = "legalAddress"),
            @Mapping(source = "email", target = "email"),
            @Mapping(source = "payBills", target = "payBills"),
    })

    @BeanMapping(ignoreByDefault = true)
    OrganizationDto toDtoCompact(OrganizationEntity organizationEntity);
}
