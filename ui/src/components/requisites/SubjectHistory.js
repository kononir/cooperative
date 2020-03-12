import React, {useState, useEffect} from 'react';
import {Container, FormGroup, Input, Label} from "reactstrap";
import subjectEventTypes from "./const/subjectEventTypes";
import SubjectHistoryService from "./services/SubjectHistoryService";
import Button from "react-bootstrap/Button";

export const SubjectHistory = () => {

    const [subjectHistory, setSubjectHistory] = useState({
        date: '',
        type: subjectEventTypes[0],
        file: ''
    });

    const [history, setHistory] = useState([]);

    useEffect(() => {
        SubjectHistoryService.fetch().then(response => setHistory(response.data));
    }, []);

    const handleChange = event => setSubjectHistory({
        ...subjectHistory,
        [event.target.name]: event.target.value
    });

    const getOptions = () => {
        return Object.entries(subjectEventTypes).map((k, v) => <option value={k[0]}>{k[1]}</option>);
    };

    const handleFileChange = event => {
        getBase64(event.target.files[0], (result) => {
            setSubjectHistory({
                ...subjectHistory,
                file: result
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

    const handleSubmit = () => {
        SubjectHistoryService.save(subjectHistory);
    };

    const createHistoryLinks = () => {
        return history.map(e =>
            <div className="input-group-btn">
                <a href={`/requisites/subjectHistory/${e.id}`}>
                    {`${e.date.substr(0, 10)} ${subjectEventTypes[e.type]}`}
                </a>
            </div>);
    };

    return <div className='col-md-5'>
        <FormGroup>
            <Label htmlFor='date'>Дата</Label>
            <Input id='date' name='date' type='date' onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='type'>Дата</Label>
            <select defaultValue='CREATED_STATE_REGISTRATION' name='type' id='type' onChange={handleChange}>
                {getOptions()}
            </select>
        </FormGroup>

        <FormGroup>
            <Label>Файл</Label>
            <input type='file' accept='.pdf' onChange={handleFileChange}/>s
        </FormGroup>

        <Button className='btn btn-success' onClick={handleSubmit}>Добавить</Button>

        <h5>ИСТОРИЯ СОБЫТИЙ ЕГР ПО СУБЪЕКТУ</h5>
        {createHistoryLinks()}
    </div>
};