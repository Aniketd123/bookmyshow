import  Container  from "react-bootstrap/Container";
import  Row  from "react-bootstrap/Row";
import  Col  from "react-bootstrap/Col";
import  Card  from "react-bootstrap/Card";
import data from './movies.json';


function AllMovies()
{

    return(
        <div>
        <Container fluid style={{padding:'5%'}}>
            <Row style={{textAlign:'center'}} >
                { data.map((mov)=>
                <Col style={{marginBottom:'2%'}}  xs={6} md={4} lg={3}>
                <Card className="bg-dark text-white" >
                        <Card.Img src={mov.image} alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>{mov.title}</Card.Title>
                            <Card.Text>
                           {mov.actor}
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </Col>
                )}

         
            </Row>
        </Container>
        </div>
       
    );
};


export default AllMovies;