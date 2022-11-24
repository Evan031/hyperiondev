import './Task8.css';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';

function Task8(props) {
    const info = props.info[0];
    const listItems = info.interests.map(interest => <ListGroup.Item>{interest}</ListGroup.Item>);
    return (
        <Card style={{width: '18rem'}}>
            <Card.Img variant="top" src={info.profile_picture} />
            <Card.Body>
                <Card.Title>
                    {info.name} {info.surname}
                </Card.Title>
                <Card.Text>DOB: {info.date_of_birth}</Card.Text>
                <Card.Text>Country: {info.country}</Card.Text>
                <Card.Text>Email: {info.email}</Card.Text>
                <Card.Text>Telephone: {info.telephone}</Card.Text>
                <Card.Text>Company: {info.company}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>Activities</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">{listItems}</ListGroup>
        </Card>
    );
}

export default Task8;
