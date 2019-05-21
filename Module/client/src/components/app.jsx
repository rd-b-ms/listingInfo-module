import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Header from './header';

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

    const Container = styled.div`
      width: 58.333333333333336% !important;
      min-height: 1px !important;
      float: left !important;
      padding-left: 8px !important;
      padding-right: 8px !important;
      min-height: 22px !important;
      position: relative !important;
      box-sizing: border-box;
      display: block;
      font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
      font-size: 14px;
      line-height: 1.43;
      color: #484848;
    `;

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
