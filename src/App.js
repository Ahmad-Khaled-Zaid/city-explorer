import React, { Component } from 'react'
import axios from 'axios';
export class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationName: '',
      locationData: {}
    }
  }

  handelLocationNameChange = (e) => { this.setState({ locationName: e.target.value }) }

  handelSubmit = async (e) => {

    e.preventDefault();
    let key=process.env.REACT_APP_LOCATION_IQ_KEY
    console.log(key)


    

    const url = `https://eu1.locationiq.com/v1/search.php?key=${key}&q=${this.state.locationName}&format=json`;

    console.log(url);

    const response = await axios.get(url);

    console.log(response.data[0]);
    this.setState({
      locationData: response.data[0]
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelLocationNameChange} placeholder="enter city name" />
          <input type="submit" value="Explorer!" />
        </form>

        <div>
          <h2>Location Info</h2>
          <p>{this.state.locationData.display_name}</p>
          <p>{this.state.locationData.lat}</p>
          <p> {this.state.locationData.lon}</p>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.dc4d169195ffad21634effde9bfc7701&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=[30]&size=2000x400`} alt='map' />

        </div>
      </div>
    )
  }
}

export default App
