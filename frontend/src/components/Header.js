import React from 'react'
import { Navbar ,Nav ,Container } from 'react-bootstrap'
const Header = () => {
    return (
        // 写入标签的话必须是小写的
        <header>
            {/* 这里拷贝的是bootstrap里面的组件 */}
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
                <Container>
                    <Navbar.Brand href="/">网上商城</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        {/* 这里想调一下头部的位置，但是好像不起作用 */}
                    <Nav className="me-auto zidingyi">
                        <Nav.Link href="/cart">购物车</Nav.Link>
                        <Nav.Link href="/login">登录</Nav.Link>
                        {/* 这里是实现下拉框的地方 */}
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
