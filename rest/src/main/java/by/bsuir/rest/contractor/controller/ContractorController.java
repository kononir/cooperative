package by.bsuir.rest.contractor.controller;

import by.bsuir.repository.ContractorRepository;
import by.bsuir.rest.common.exception.EntityNotFoundException;
import by.bsuir.rest.contractor.mapper.ContractorMapper;
import by.bsuir.rest.contractor.model.ContractorDto;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.*;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.stream.Collectors;

@Api
@RestController
@RequiredArgsConstructor
@RequestMapping(value = "/api/contractors/others")
public class ContractorController {
    private final ContractorRepository contractorRepository;
    private final ContractorMapper contractorMapper;

    @GetMapping
    public Page<ContractorDto> getAll(@RequestParam("type") String type) {

        Pageable pageable = PageRequest.of(0, 15, Sort.by("registrationDate").ascending().and(Sort.by("fullName")).ascending());
        var contractors = contractorRepository.findAllByType(type,pageable)
                .stream()
                .map(contractorMapper::toDto)
                .collect(Collectors.toList());
        return new PageImpl<>(contractors);
    }

    @PostMapping
    public ResponseEntity<ContractorDto> save(@RequestBody ContractorDto contractorDto) {
        contractorDto.setId(null);
        var entity = contractorMapper.fromDto(contractorDto);
        var savedContractor = contractorRepository.save(entity);

        return ResponseEntity.ok(contractorMapper.toDto(savedContractor));
    }


    @PutMapping("/{id}")
    public ResponseEntity<ContractorDto> update(@PathVariable("id") String id,
                                                @RequestBody ContractorDto contractorDto) {
        contractorDto.setId(id);
        var entity = contractorMapper.fromDto(contractorDto);
        var savedContractor = contractorRepository.save(entity);

        return ResponseEntity.ok(contractorMapper.toDto(savedContractor));
    }

}
