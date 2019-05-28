import React from 'react';
import axios from 'axios';
import Header from './header';
import Body from './body/body';
import LongDescription from './longDescription/longDescription';
import Amenities from './amenities/amenities';
import { Container } from '../styles/style';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // refers to the id number typed in the url
      id: window.location.href.match(/id\s*=\s*(.*)/) ? window.location.href.match(/id\s*=\s*(.*)/)[1] - 1 : 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  // initial and only request to server for mockData
  getData() {
    axios.get('/listinginfo').then((response) => {
      let { id } = this.state;
      // sets id to the first mock data example if id is undefined or outside range
      if (!id || (id > 101) || (id < 0)) { id = 0; }
      this.setState({ data: response.data[id], loading: false });
    });
  }

  render() {
    const { loading, data } = this.state;
    if (loading) return null;
    // deconstructing data that will be sent down as props
    const {
      hostName, homeType, header, neighborhood, bathrooms, bedrooms, capacity,
      beds, primTrait, secondTrait, tertTrait, longDescription, amenities,
    } = data;
    // similar to Airbnb, this sets the description as tab title
    document.title = header;
    // creating prop objects for app's components
    const superHost = (primTrait === 'Super host');
    const headerProps = {
      hostName,
      header,
      neighborhood,
      superHost,
    };
    const bodyProps = {
      hostName,
      homeType,
      bathrooms,
      beds,
      bedrooms,
      capacity,
      primTrait,
      secondTrait,
      tertTrait,
    };
    return (
      <Container>
        <Header {...headerProps} />
        <Body {...bodyProps} />
        <LongDescription longDescription={longDescription} />
        <Amenities amenities={amenities} />
      </Container>
    );
  }
}

export default App;
