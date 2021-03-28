
import React from 'react'
import { Container, Row, Col, NavItem, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className="bg-secondary py-2 sm-1">

        <Container fluid className="bg-light py-5">
          <Row>
            <Col sm={4}>
              <div className="copyright text-center text-xl-left text-muted">
                © 2021{" "}
                <a
                  className="font-weight-bold ml-1"
                  href="https://www.logospathos.com"
                  target="_blank" rel="noreferrer"
                >
                  Snnkncgl
                  </a>
              </div>
            </Col>
            <Col sm={8}>
              <div className="justify-content-end">
                <Nav className="justify-content-end">
                  <NavItem>
                    <Nav.Link as={Link} to="/about"> About
                    </Nav.Link>
                  </NavItem>
                  <NavItem>
                    <Nav.Link
                      href="https://logospathos.com"
                      target="_blank" rel="noreferrer"
                    >
                      Blog
                    </Nav.Link>
                  </NavItem>

                  <NavItem>
                    <Nav.Link
                      href="https://github.com/akincioglusinan/ExamUI-React-Redux/blob/master/LICENSE"
                      target="_blank" rel="noreferrer"
                    >
                      License
                    </Nav.Link>
                  </NavItem>
                </Nav>
              </div>
            </Col>

          </Row>

        </Container>
      </footer>

    </>
  )
}

export default Footer
