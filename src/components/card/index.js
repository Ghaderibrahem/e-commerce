import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
 
function CardComponent() { 
  return (
    <Card style={{display:'flex',flexDirection:'row', height:'10rem'  }}>
      { <Card.Img style={{width:'auto'}}  src={'https://i.imgur.com/eGOUveI.jpeg'} />}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;