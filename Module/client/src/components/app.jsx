import React from 'react';
import axios from 'axios';
import Header from './header';
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

  getData() {
    axios.get('/listinginfo').then((response) => {
      let { id } = this.state;
      if (!id || (id > 100) || (id < 0)) { id = 0; }
      this.setState({ data: response.data[id], loading: false });
    });
  }

  render() {
    const { loading, data } = this.state;
    if (loading) return null;
    const { hostName, header, neighborhood } = data;
    document.title = header;

    return (
      <Container>
        <Header hostName={hostName} header={header} neighborhood={neighborhood} />
        {/* <Body />
        <Ammenities /> */}
      </Container>
    );
  }
}

export default App;
