import React from "react";

import Loading from "components/Loading";

import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";

import Header from "components/Header";

export default function Page({
  children,
  classNameCSS,
  loading,
  border,
}) {
  const childrenHeader = children && children.length > 1 ? children[0] : "";
  const childrenBody = children && children.length > 1 ? children[1] : children;

  return (
    <>
      <Header />
      {loading && <Loading />}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="12">
            <Card className="bg-gradient-secondary shadow">
              {
                childrenHeader &&
                <CardHeader className="bg-transparent">
                  {childrenHeader}
                </CardHeader>
              }
              <CardBody className={`${classNameCSS} ${border}`}>
                {childrenBody}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
