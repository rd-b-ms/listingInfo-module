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
      // id: window.location.href.match(/id\s*=\s*(.*)/) ? window.location.href.match(/id\s*=\s*(.*)/)[1] - 1 : 0,
      loading: true,
    };
  }

  componentDidMount() {
    this.getData();
  }

  // initial and only request to server for mockData
  getData() {
    const params = new URLSearchParams(window.location.search);
    let url;
    if (!params.has('id')) {
      url = '/listinginfo/1';
    } else {
      url = `/listinginfo/${params.get('id')}`;
    }
    axios.get(url).then((response) => {
      const {
        bathrooms, bedrooms, beds, capacity,
        headers, hometype, hostname, id,
        longdescription, neighborhood, primtrait,
        secondtrait, terttrait, wifi, laptop_friendly_workspace,
        air_conditioning, kitchen, washer, free_parking_on_premise,
        iron, essentials, tv, hot_water, pool, cooking_basics,
        dishes_and_silverware, refrigerator, oven, stove, hangers,
        shampoo, extra_pillow_and_blanket, carbon_monoxide_detector,
        smoke_detector, first_aid_kit, bed_linens, private_entrance, elevator, hot_tub,
      } = response.data[0];
      // sets id to the first mock data example if id is undefined or outside range
      const newData = {
        bathrooms,
        bedrooms,
        beds,
        capacity,
        header: headers,
        homeType: hometype,
        hostName: hostname,
        id,
        longDescription: longdescription,
        neighborhood,
        primTrait: primtrait,
        secondTrait: secondtrait,
        tertTrait: terttrait,
        amenities: [
          { name: 'Wifi', value: wifi },
          { name: 'Laptop friendly workspace', value: laptop_friendly_workspace },
          { name: 'Air conditioning', value: air_conditioning },
          { name: 'Kitchen', value: kitchen },
          { name: 'Washer', value: washer },
          { name: 'Free parking on premise', value: free_parking_on_premise },
          { name: 'Iron', value: iron },
          { name: 'Essentials', value: essentials },
          { name: 'Tv', value: tv },
          { name: 'Hot water', value: hot_water },
          { name: 'Pool', value: pool },
          { name: 'Cooking basics', value: cooking_basics },
          { name: 'Dishes and silverware', value: dishes_and_silverware },
          { name: 'Refrigerator', value: refrigerator },
          { name: 'Oven', value: oven },
          { name: 'Stove', value: stove },
          { name: 'Hangers', value: hangers },
          { name: 'Shampoo', value: shampoo },
          { name: 'Extra pillow and blanket', value: extra_pillow_and_blanket },
          { name: 'Carbon monoxide detector', value: carbon_monoxide_detector },
          { name: 'Smoke Detector', value: smoke_detector },
          { name: 'First aid kit', value: first_aid_kit },
          { name: 'Bed linens', value: bed_linens },
          { name: 'Private entrance', value: private_entrance },
          { name: 'Elevator', value: elevator },
          { name: 'Hot tub', value: hot_tub },
        ],
      };
      console.log('new data', newData);
      this.setState({ data: newData, loading: false });
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
