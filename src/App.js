import React, { Component } from 'react'
import axios from 'axios';
import ApiForm from './components/Form'
import 'bootstrap/dist/css/bootstrap.min.css';


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
        {/* <form onSubmit={this.handelSubmit}>
          <input type="text" onChange={this.handelLocationNameChange} placeholder="enter city name" />
          <input type="submit" value="Explorer!" />
        </form> */}
        <ApiForm 
        
        handelLocationNameChange={this.handelLocationNameChange}
        handelSubmit={this.handelSubmit}
        />

        <div>
          <h2>Location Info</h2>
          <p>{this.state.locationData.display_name}</p>
          <p>{this.state.locationData.lat}</p>
          <p> {this.state.locationData.lon}</p>
          <img src={`https://maps.locationiq.com/v3/staticmap?key=pk.8a0e20370bc04d2acc84c59699dfa30c&center=${this.state.locationData.lat},${this.state.locationData.lon}&zoom=[1-18]&size=2000x400`} alt='' />

        </div>
      </div>
    )
  }
}

export default App
