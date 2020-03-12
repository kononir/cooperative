import React, {useState, useEffect} from 'react';
import subjectEventTypes from "./const/subjectEventTypes";
import SubjectHistoryService from "./services/SubjectHistoryService";

export const SubjectHistoryEvent = (props) => {

    const [state, setState] = useState({});

    useEffect(() => {
        SubjectHistoryService.fetchById(props.match.params.id).then(response => setState(response.data));
    },[]);

    return <div className='col-md-7'>
        <table>
            <tr>
                <td><b>Дата</b></td>
                <td>{state.date ? state.date.substr(0, 10) : ''}</td>
            </tr>
            <tr>
                <td><b>Тип</b></td>
                <td>{subjectEventTypes[state.type]}</td>
            </tr>

            <tr>
                <td><b>Файл</b></td>
                <td><a href={state.file} download='файл'>Скачать</a></td>
            </tr>
        </table>
    </div>
};