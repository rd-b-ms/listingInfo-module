import React from 'react';
import PropTypes from 'prop-types';
import Long from './long';
import Short from './short';
import { ComponentContainer, ContactHost } from '../../styles/style';

class LongDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
    // divides the long text into an array of paragraphs
    this.longDescription = props.longDescription.split('\n\n');
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  }

  render() {
    const { hidden } = this.state;
    const { toggleView, longDescription } = this;
    const descProp = {
      toggleView,
      longDescription,
    };
    // The state of hidden deteremines whether the long or short descirption will be rendered.
    return (
      <ComponentContainer>
        {(hidden) ? <Short {...descProp} /> : <Long {...descProp} />}
        <ContactHost>Contact host</ContactHost>
      </ComponentContainer>
    );
  }
}

LongDescription.propTypes = {
  longDescription: PropTypes.string.isRequired,
};

export default LongDescription;
