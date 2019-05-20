import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // refers to the id number typed in the url
      id: window.location.href.match(/id\s*=\s*(.*)/)[1] - 1,
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/listinginfo').then((response) => {
      let { id } = this.state;
      if (!id || (id > 100) || (id < 0)) { id = 1; }
      this.setState({ data: response.data[id] });
    });
  }

  render() {
    return (
      <div className="container">
        {/* <Header />
      <Body />
      <Ammenities /> */}
      <div>{JSON.stringify(this.state.data)}</div>
      </div>
    );
  }
}

export default App;
