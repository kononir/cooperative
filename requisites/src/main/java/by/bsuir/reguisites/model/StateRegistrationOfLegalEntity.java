package by.bsuir.reguisites.model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

import java.util.Date;

@Getter
@Setter
@Document(collection = "state_registration_of_legal_entity")
public class StateRegistrationOfLegalEntity {

    @Id
    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @Field
    private String name;

    @Field
    private String pdfScanContent;

    @Field
    private String russianFullName;

    @Field
    private String belarusianFullName;

    @Field
    private String russianShortName;

    @Field
    private String belarusianShortName;

    @Field
    private Date registrationDate;

    @Field
    private String organName;

    @Field
    private Date givenDate;

    @Field
    private String payerAccNumber;
}
