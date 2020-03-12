import React, {useEffect, useState} from 'react';
import {Button, Container, FormGroup, Input, Label, Modal, ModalFooter} from "reactstrap";
import RegistrationService from "./services/RegistrationService";
import SubjectHistoryService from "./services/SubjectHistoryService";
import {Link} from 'react-router-dom';
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";

export const StateRegistrationOfLegal = () => {

    const [registration, setRegistration] = useState({
        name: '',
        russianFullName: '',
        belarusianFullName: '',
        russianShortName: '',
        belarusianShortName: '',
        registrationDate: '',
        organName: '',
        givenDate: '',
        payerAccNumber: '',
        pdfScanContent: ''
    });

    const [history, setHistory] = useState([]);

    useEffect(() => {
        RegistrationService.fetchLast().then(response => {
            console.log(response.data);
            response.data.registrationDate = response.data.registrationDate.substr(0, 10);
            response.data.givenDate = response.data.givenDate.substr(0, 10);
            setRegistration(response.data);
        })
    }, []);

    const handleSubmit = () => {
        RegistrationService.save(registration);
    };

    const handleChange = event => setRegistration({
        ...registration,
        [event.target.name]: event.target.value
    });

    const handleFileChange = event => {
        getBase64(event.target.files[0], (result) => {
            setRegistration({
                ...registration,
                pdfScanContent: result
            });
        });
    };

    const getBase64 = (file, cb) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            cb(reader.result)
        };
        reader.onerror = function (error) {
            console.log('Error: ', error);
        };
    };

    return <Container className='col-md-4'>
        <h3>Свидетельство регистрации юр. лица</h3>
        <div>
            <a href='/requisites/subjectHistory'>История</a>
        </div>
        <FormGroup>
            <Label htmlFor='name'>Название</Label>
            <Input id='name' name='name' type='text'
                   value={registration.name} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='pdfScan'>Скан свидетельства</Label>
            <Input id='pdfScan' name='pdfScan' type='file' accept='.pdf'
                   value={registration.pdfScan} onChange={handleFileChange}/>

            <a href={registration.pdfScanContent} download={'Устав'}>Устав</a>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='russianFullName'>Полное название (рус.)</Label>
            <Input id='russianFullName' name='russianFullName' type='text'
                   value={registration.russianFullName} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='belarusianFullName'>Полное название (бел.)</Label>
            <Input id='belarusianFullName' name='belarusianFullName' type='text'
                   value={registration.belarusianFullName} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='russianShortName'>Сокращенное название (рус.)</Label>
            <Input id='russianShortName' name='russianShortName' type='text'
                   value={registration.russianShortName} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='belarusianShortName'>Сокращенное название (бел.)</Label>
            <Input id='belarusianShortName' name='belarusianShortName' type='text'
                   value={registration.belarusianShortName} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='registrationDate'>Дата регистрации</Label>
            <Input id='registrationDate' name='registrationDate' type='date'
                   value={registration.registrationDate} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='organName'>Название гос. органа выдавшего</Label>
            <Input id='organName' name='organName' type='text'
                   value={registration.organName} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='givenDate'>Дата выдачи</Label>
            <Input id='givenDate' name='givenDate' type='date'
                   value={registration.givenDate} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='payerAccNumber'>УНП</Label>
            <Input id='payerAccNumber' name='payerAccNumber' type='text'
                   value={registration.payerAccNumber} onChange={handleChange}/>
        </FormGroup>

        <Button className='btn btn-success' onClick={handleSubmit}>Сохранить</Button>
    </Container>
};