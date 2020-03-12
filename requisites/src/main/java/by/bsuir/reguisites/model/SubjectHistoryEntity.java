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
@Document(collection = "subject_history")
public class SubjectHistoryEntity {

    @Id
    @MongoId(FieldType.OBJECT_ID)
    private String id;

    @Field
    private Date date;

    @Field
    private SubjectEventType type;

    @Field
    private String file;
}
