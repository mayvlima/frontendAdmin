import React from "react";
import { useHistory } from 'react-router-dom';
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Navbar,
  Nav,
  Container,
  Media,
} from "reactstrap";

export default function AdminNavbar({ brandText }) {
  const history = useHistory();

  function signOut(e) {
    e.preventDefault();
    localStorage.clear();
    history.push("/")
  }

  return (
    <>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
        <Container fluid>
          <h2 className="h4 mb-0 text-white text-uppercase d-none d-lg-inline-block">
            {brandText}
          </h2>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <span className="avatar avatar-sm rounded-circle bg-transparent">
                    <i className="ni ni-single-02" />
                  </span>
                  <Media className="ml-2 d-none d-lg-block">
                    <span className="mb-0 text-sm font-weight-bold">
                      {localStorage.getItem('name')}
                    </span>
                  </Media>
                </Media>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-arrow" right>
                <DropdownItem className="noti-title" header tag="div">
                  <h6 className="text-overflow m-0">Bem-vindo!</h6>
                </DropdownItem>                
                <DropdownItem divider />
                <DropdownItem
                  href="#pablo"
                  onClick={(e) => signOut(e)}
                >
                  <i className="ni ni-user-run" />
                  <span>Sair</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
