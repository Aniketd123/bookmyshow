

import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import Button from "@restart/ui/esm/Button";
function Footer() {
  return (
    <div style={{backgroundColor:"black",color:"white"}} >

        <Container >
            <Row style={{textAlign:"center"}}>
                <Col>
                col1
                
                </Col>

                <Col>
                col2
                
                </Col>

                <Col >
                <Button style={{backgroundColor:"blue"}} >Contact today</Button>
                
                </Col>

            </Row>

            <Row >
            <Col >
                col3
                
                </Col>


                <Col>
                col4
                
                </Col>

                <Col>
                col5
                
                </Col>

            </Row>
        </Container>

    </div>
  );
}

export default Footer;
