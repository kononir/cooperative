import React from 'react';
import axios from 'axios';
import DatePicker from 'react-date-picker';
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import moment from 'moment';
import {withRouter} from 'react-router-dom';

class NewRecord extends React.PureComponent {
    state = {
        personList: [],
        date: new Date(),
        type: 'electric',
    }

    componentDidMount = () => {
        return axios.get(`http://localhost:8080/api/person`)
        .then(({ data }) => {
          this.setState({ personList: data, person: data[0].id })
        }).catch(res => {
            console.log(res) 
        })
    }

    onChangeDate = date => this.setState({ date })

    onChangeType = (type, e) => {
        this.setState({
            [type]: e.target.value
        })
    }

    saveModel = async event => {
        event.preventDefault()
        console.log(moment(this.state.date).format('YYYY-MM-DD')
        )
        console.log(this.state)
        let model = {}

        if (this.state.type === 'electric') {
            model = {
                person: {
                    id: this.state.person
                }, 
                electricInfo: {
                    value: this.state.electric,
                    readingDate: moment(this.state.date).format('YYYY-MM-DD')
                }
            }
        }
        if (this.state.type === 'heat') {
            model = {
                person: {
                    id: this.state.person
                }, 
                heatInfo: {
                    value: this.state.heat,
                    readingDate: moment(this.state.date).format('YYYY-MM-DD')
                }
            }
        }
        if (this.state.type === 'water') {
            model = {
                person: {
                    id: this.state.person
                }, 
                waterInfo: {
                value: this.state.hot,
                readingDate: moment(this.state.date).format('YYYY-MM-DD'),
                waterMeterType: 'HOT'
                }
            }
        }
        await axios.post(`http://localhost:8080/api/energy`, model)
        .then((data) => {
          console.log(data)
        }).catch(res => {
            console.log(res) 
        })
        if (this.state.type === 'water') {
            model = {
                person: {
                    id: this.state.person
                }, 
                waterInfo: {
                value: this.state.cold,
                readingDate: moment(this.state.date).format('YYYY-MM-DD'),
                waterMeterType: 'COLD'
                }
            }
            await axios.post(`http://localhost:8080/api/energy`, model)
                .then((data) => {
                console.log(data)
                }).catch(res => {
                    console.log(res) 
            })
        }
        this.props.history.push('/energy');
    }

    render() {
        return <div className="container mt-5">
        <div className="row mt-3">
            <div className="col-md-12">
                <form>
                    <div className="form-group row">
                        <div className="col-md-6">
                            <label htmlFor="type" className="col-sm-2 col-form-label">ФИО</label>
                            <select className="form-control" id="type" onChange={(value) => this.updateValue('person', value)}>
                                {this.state.personList && this.state.personList.map(person => {
                                    return <option 
                                        key={person.id} 
                                        value={person.id}>
                                            {`${person.surname} ${person.name} ${person.lastName}`}</option>
                                })}
                            </select>
                        </div>     
                    </div>
                    <div className="form-group">
                        <label htmlFor="date" className="col-sm-2 col-form-label">Дата последней поверки</label>
                        <DatePicker className='date'
                            onChange={this.onChangeDate}
                            value={this.state.date}
                        />
                    </div>
                    <div className="form-group">
                        <ButtonGroup toggle onChange={(value) => this.onChangeType('type', value)}>
                            <ToggleButton 
                                type="radio" 
                                name="radio" 
                                variant="warning" 
                                defaultChecked value="electric">
                            Электричество
                            </ToggleButton>
                            <ToggleButton 
                                type="radio" 
                                name="radio" 
                                variant="danger" 
                                value="heat">
                            Тепло
                            </ToggleButton>
                            <ToggleButton 
                                type="radio" 
                                name="radio" 
                                variant="info" 
                                value="water">
                            Вода
                            </ToggleButton>
                        </ButtonGroup>
                    </div>
                    { this.state.type === 'electric' &&
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Энергосчетчик</label>
                            <div className="input-group mb-3 col-md-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Показание</span>
                                </div>
                                <input type="text" className="form-control" onChange={(value) => this.onChangeType('electric', value)}/>
                            </div>
                        </div>
                    }   
                    { this.state.type === 'heat' &&        
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Теплосчетчик</label>
                            <div className="input-group mb-3 col-md-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Показание</span>
                                </div>
                                <input type="text" className="form-control" onChange={(value) => this.onChangeType('heat', value)}/>
                            </div>
                        </div>
                    }
                    { this.state.type === 'water' &&
                    <>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Счетчик воды (Горячая)</label>
                            <div className="input-group mb-3 col-md-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Показание</span>
                                </div>
                                <input type="text" className="form-control" onChange={(value) => this.onChangeType('hot', value)}/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Счетчик воды (Холодная)</label>
                            <div className="input-group mb-3 col-md-6">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Показание</span>
                                </div>
                                <input type="text" className="form-control" onChange={(value) => this.onChangeType('cold', value)}/>
                            </div>
                        </div>
                        </>
                    }
                    <button type="submit" className="btn btn-primary" onClick={(e) => this.saveModel(e)}>Добавить</button>
                </form>
            </div>
        </div>
    </div>
    }
}

export default withRouter(NewRecord);