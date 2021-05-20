import React from "react";

import { Row, Col } from "reactstrap";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <Row className="align-items-center justify-content-xl-between">
                    
          <Col xl="6">
            <div className="text-muted">
              <i className="far fa-copyright"></i>
              <a
                className="font-weight-bold ml-1"
                href="https://www.gama.academy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Gama Academy
              </a>
            </div>
          </Col>
        </Row>
      </footer>
    );
  }
}

export default Footer;
