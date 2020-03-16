import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import { Nav } from 'react-bootstrap';

class CommonNavbar extends React.PureComponent {
    render() {
        return <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">ПИС</Navbar.Brand>
            <Nav className="mr-auto">
            <Nav.Link href="/energy">Энергоресурсы</Nav.Link>
            <Nav.Link href="/meters/new">Добавить</Nav.Link>
            <Nav.Link href="/register">Реестр</Nav.Link>
            <Nav.Link href="/requisites">Реквизиты</Nav.Link>
            <Nav.Link href="/notifications">Рассылка</Nav.Link>
            </Nav>
        </Navbar>
    }
}

export default CommonNavbar;