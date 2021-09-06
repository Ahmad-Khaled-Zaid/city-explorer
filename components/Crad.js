import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
const styles = {
  paddingLeft: 15,
  width: 600,
  height:620,
  marginTop: 10,
  marginLeft: 10,
};

const imagStyle={
  width: 450,
  height:400,
};

class LocationCard extends React.Component {
  render() {
    return (
      <Card style={styles}>
        <Card.Body>
          <Card.Title>Location Information</Card.Title>
          <br />
          <Card.Text>
            <b>Location Name is:</b> {this.props.DataOfLocation.display_name}
          </Card.Text>
          <Card.Text>
            <b>Latitude is:</b> {this.props.DataOfLocation.lat}
          </Card.Text>
          <Card.Text>
            <b>Longitud is:</b> {this.props.DataOfLocation.lon}
          </Card.Text>
          <Image style={imagStyle}src={this.props.MapOfLocation} rounded />
        </Card.Body>
      </Card>
    );
  }
}
export default LocationCard;
