import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



class ApiForm extends React.Component {


    render() {

        return (
            <Form onSubmit={this.props.handelSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" placeholder="Enter City Name" onChange={this.props.handelLocationNameChange} />

                </Form.Group>

                <Button variant="primary" type="submit">
                    Explore!
                </Button>
            </Form>
        )
    }
}
export default ApiForm;
