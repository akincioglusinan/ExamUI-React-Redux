
import React from 'react'
import { Container, Row, Col, NavLink, NavItem, Nav } from 'react-bootstrap'

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
                    <NavLink
                      href="https://cvproject.netlify.com"
                      target="_blank" rel="noreferrer"
                    >
                      About
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      href="https://logospathos.com"
                      target="_blank" rel="noreferrer"
                    >
                      Blog
                    </NavLink>
                  </NavItem>

                  <NavItem>
                    <NavLink
                      href="https://github.com/akincioglusinan"
                      target="_blank" rel="noreferrer"
                    >
                      License
                    </NavLink>
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
