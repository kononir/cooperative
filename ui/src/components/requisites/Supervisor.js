import React, {useState, useEffect} from 'react';
import {Button, Container, FormGroup, Input, Label} from "reactstrap";
import PersonService from "./services/PersonService";
import SupervisorService from "./services/SupervisorService";

export const Supervisor = () => {

    const defaultSupervisor = {
        id: '',
        surname:'',
        name: '',
        patronymic: '',
        startDate: '',
        endDate: '',
        protocolNumber:'',
        protocolScan:'',
        signatureScan:''
    };

    const [supervisor, setSupervisor] = useState({});

    useEffect(() => {SupervisorService.fetchLast()
        .then(response => {
            if(response.data) {
                response.data.startDate = response.data.startDate.substr(0, 10);
                response.data.endDate = '' || response.data.endDate.substr(0, 10);
                setSupervisor(response.data)
            } else {
                setSupervisor(defaultSupervisor);
            }
        })}, []);

    const handleSubmit = () => {
        supervisor.id ? SupervisorService.update(supervisor) : SupervisorService.save(supervisor);
    };

    const handleChange = event => setSupervisor({
        ...supervisor,
        [event.target.name]: event.target.value
    });

    const handleFileChange = event => {
        event.persist();
        console.log(event.target.name);
        getBase64(event.target.files[0], (result) => {
            setSupervisor({
                ...supervisor,
                [event.target.name]: result
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

    return <Container className='col-md-5'>
        <h1>Руководитель</h1>

        <FormGroup>
            <Label htmlForm='surname'>Фамилия</Label>
            <Input id='surname' name='surname' type='text'
                   value={supervisor.surname} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='name'>Имя</Label>
            <Input id='name' name='name' type='text'
                   value={supervisor.name} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='patronymic'>Отчество</Label>
            <Input id='patronymic' name='patronymic' type='text'
                   value={supervisor.patronymic} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='startDate'>Начало полномочий</Label>
            <Input id='startDate' name='startDate' type='date'
                   value={supervisor.startDate} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='endDate'>Конец полномочий</Label>
            <Input id='endDate' name='endDate' type='date'
                   value={supervisor.endDate} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='endDate'>№ протокола</Label>
            <Input id='protocolNumber' name='protocolNumber' type='text'
                   value={supervisor.protocolNumber} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='protocolScan'>Протокол(PDF)</Label>
            <Input id='protocolScan' name='protocolScan' type='file' accept='.pdf' onChange={handleFileChange}/>

            <a href={supervisor.protocolScan} download={'Протокол'}>Протокол</a>
        </FormGroup>

        <FormGroup>
            <Label htmlForm='protocolScan'>Сигнатура(PDF)</Label>
            <Input id='signatureScan' name='signatureScan' type='file' accept='.pdf' onChange={handleFileChange}/>

            <a href={supervisor.signatureScan} download={'Сигнатура'}>Сигнатура</a>
        </FormGroup>

        <Button className='btn btn-success' onClick={handleSubmit}>Сохранить</Button>
    </Container>
};