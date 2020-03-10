import React, {useEffect, useState} from 'react';
import {Button, Container, Form, FormGroup, Input, Label, Modal, ModalFooter} from "reactstrap";
import ModalHeader from "reactstrap/es/ModalHeader";
import ModalBody from "reactstrap/es/ModalBody";
import OrganizationService from "./services/OrganizationService";

export const Organization = () => {

    const [organization, setOrganization] = useState({
        legalAddress: '',
        mailingAddress: '',
        email: '',
        payBills: []
    });

    const [showModal, setShowModal] = useState(false);

    const [newPayBill, setNewPayBill] = useState('');

    const handleChange = event => setOrganization({
        ...organization,
        [event.target.name]: event.target.value
    });

    const handleChangePayBill = (event) => setNewPayBill(event.target.value);

    const changeShow = () => setShowModal(!showModal);

    const handleSaveNewPayBill = () => {
        const payBills = [...organization.payBills];
        payBills.push(newPayBill);
        setOrganization({
            ...organization,
            payBills: payBills
        });
        changeShow();
    };

    const deletePayBill = payBill => {
        const payBills = organization.payBills.filter(bill => bill !== payBill);
        setOrganization({
            ...organization,
            payBills: payBills
        });
    };

    useEffect(() => {
        OrganizationService.fetchLast().then(response => {
            setOrganization(response.data);
        })
    }, []);

    const createPayBills = () => {
        const payBills = organization.payBills.map(payBill =>
            <tr key={payBill}>
                <td>{payBill}</td>
                <td><Button className='btn-danger' onClick={() => deletePayBill(payBill)}>-</Button></td>
            </tr>);

        return <table><tbody>{payBills}</tbody></table>;
    };

    const handleSubmit = () => {
        console.log(organization);
        OrganizationService.pushOrganization(organization).then(response => console.log(response));
    };

    return <Container className='col-md-4'>
        <h1>Реквизиты</h1>
        <FormGroup>
            <Label htmlFor='mailingAddress'>Почтовый адрес</Label>
            <Input type='text' id='mailingAddress' name='mailingAddress'
                   value={organization.mailingAddress} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='legalAddress'>Юридический адрес</Label>
            <Input type='text' id='legalAddress' name='legalAddress'
                   value={organization.legalAddress} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <Label htmlFor='email'>Email</Label>
            <Input type='email' id='email' name='email'
                   value={organization.email} onChange={handleChange}/>
        </FormGroup>

        <FormGroup>
            <label htmlFor=''>Расчетные счета</label>
            <Button className='btn-success' onClick={changeShow}>+</Button>
        </FormGroup>

        {createPayBills()}

        {/*    Modal to add new bills*/}
        <Modal isOpen={showModal} toggle={changeShow}>
            <ModalHeader toggle={changeShow}>Добавить расчетный счет</ModalHeader>
            <ModalBody>
                <Input onChange={handleChangePayBill} type='text'/>
            </ModalBody>
            <ModalFooter>
                <Button className='btn-success' onClick={handleSaveNewPayBill}>Добавить</Button>
            </ModalFooter>
        </Modal>

        <Button className='btn btn-success' onClick={handleSubmit}>Добавить</Button>
    </Container>
};