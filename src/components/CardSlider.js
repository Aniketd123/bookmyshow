

// import  Carousel  from "react-bootstrap/Carousel";
// import  Card  from "react-bootstrap/Card";


// function CardSlider() {
//   return (
//     <div >
        
        
        
//   <Carousel>
// <Carousel.Item>
// gggggggggg
// </Carousel.Item>
 
 
 
//  <Carousel.Item>
// hhhhhhhh
// </Carousel.Item>


//  <Carousel.Item>
// hhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkk
//   </Carousel.Item>


// </Carousel>
//     </div>
//   );
// }

// export default CardSlider;
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function CardsSlider() {
  return (
    <div style={{background:"grey", padding:"8%"}}>
        <Carousel indicators={false} >
            <Carousel.Item >
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
            <Carousel.Item>
                <CardGroup style={{display:"flex", gap:"40px", justifyContent:"space-around"}}>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                    <Card className="bg-dark text-white" style={{height:"300px", width:"300px"}}>
                        <Card.Img src="./logo192.png" alt="Card image" style={{height:"300px", width:"300px"}}/>
                        <Card.ImgOverlay>
                            <Card.Title>Card title</Card.Title>
                            <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                            </Card.Text>
                            <Card.Text>Last updated 3 mins ago</Card.Text>
                        </Card.ImgOverlay>
                    </Card>
                </CardGroup>
            </Carousel.Item>
        </Carousel>
    </div>
  );
}

export default CardsSlider;
