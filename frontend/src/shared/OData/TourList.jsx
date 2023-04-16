import React, { Component } from 'react';
import axios from 'axios';
import './tourlist.css';

class TourList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tours: []
    };
  }

  componentDidMount() {
    axios.get('/api/tours')
      .then(response => {
        this.setState({ tours: response.data.value });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <h1>Tour List</h1>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>City</th>
              <th>Address</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.tours.map(tour =>
              <tr key={tour.id}>
                <td>{tour.title}</td>
                <td>{tour.city}</td>
                <td>{tour.address}</td>
                <td>{tour.price}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TourList;
