import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';

class City extends React.Component {
    render() {
      return (
        <Card >
          <Card.Body>
            <Card.Title>City Information</Card.Title>
            <br />
            <Card.Text>
              <b>Location Name is:</b> {this.props.locationData.display_name}
            </Card.Text>
            <Card.Text>
              <b>Latitude:</b> {this.props.locationData.lat}
            </Card.Text>
            <Card.Text>
              <b>Longitude:</b> {this.props.locationData.lon}
            </Card.Text>
            <Image src={this.props.map}  />
          </Card.Body>
        </Card>
      );
    }
  }
  export default City;
  