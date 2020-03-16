import React from 'react';
import WaterTable from './tables/waterTable';
import { Tabs, Tab, Pagination } from 'react-bootstrap';
import HeatTable from './tables/heatTable';
import ElectricTable from './tables/electricTable';
import {withRouter} from 'react-router-dom';

class EnergyTableForm extends React.PureComponent {
    componentDidMount = () => {
        this.selectTab('heat')
    }

    selectTab = (activeKey) => {
        this.props.onChangeTab(activeKey, 0)
    }

    routeToNewRecord = (e) => {
        e.preventDefault()
        this.props.history.push('/meters/update');
    }

    render() {
        return <>
        <div className="container mt-5">
                    <div className="row justify-content-end">
                        <div className="col-md-11">
                            <h2>Показания счётчиков</h2>
                        </div>
            
                        <div className="col-3">
                            <button type="button" className="btn btn-outline-success" onClick={(e) => this.routeToNewRecord(e)}>
                                <span aria-hidden="true">&oplus;</span>Новые показания
                            </button>
                            <button type="button" className="btn btn-outline-success" onClick={() => this.props.downloadExel()}>
                                Exel
                            </button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <Tabs defaultActiveKey="heat" onSelect={this.selectTab}>
                                <Tab eventKey="heat" title="Теплосчетчики">
                                    <HeatTable data={this.props.dataList} type={this.props.type}/>
                                </Tab>
                                <Tab eventKey="electric" title="Электросчетчики">
                                    <ElectricTable data={this.props.dataList} type={this.props.type}/>
                                </Tab>
                                <Tab eventKey="water" title="Счетчики воды">
                                    <WaterTable data={this.props.dataList} type={this.props.type}/>
                                </Tab>
                            </Tabs>                         
                        </div>
                    </div>
                </div>
                {/* <div className="d-flex flex-column">
                        <footer className="footer bottom-footer">
                            {this.props.data && 
                                <Pagination>
                                    {new Array(this.props.data.totalPages).map(number => {
                                        return <Pagination.Item key={number}>{number}</Pagination.Item>
                                    })}
                                </Pagination>
                            }  
                        </footer> 
                    </div> */}
                </>
    }
}

export default withRouter(EnergyTableForm);