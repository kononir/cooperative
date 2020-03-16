package by.bsuir.rest.notification.model;

import by.bsuir.notification.entity.enums.SendingType;
import lombok.Data;

import javax.validation.constraints.NotNull;
import java.io.File;
import java.util.Date;
import java.util.List;

@Data
public class OutgoingMailDto {

    private String id;

    private Date sendingDate;

    @NotNull
    private String index;

    private String subject;

    private String text;

    @NotNull
    private SendingType sendingType;

    @NotNull
    private List<String> receivers;

    List<File> attachments;
}
