import React from 'react';
import Card from 'react-bootstrap/Card';

const PetDetail = (props) => {

    let pet = props.vet;
    return (
        <Card style={{ width: '14rem', marginBottom:'10px'}} key={pet._id}>
            <Card.Header>{pet.pet_type}</Card.Header>
            <Card.Body>
                <Card.Title> {pet.name} </Card.Title>
                <Card.Text>
                    age: {pet.age}
                </Card.Text>
            </Card.Body>
            <Card.Footer>owner: { pet.owner }</Card.Footer>
        </Card>
    );

};

export default PetDetail;