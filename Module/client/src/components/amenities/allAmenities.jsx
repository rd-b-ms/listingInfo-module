import React from 'react';
import PropTypes from 'prop-types';
import { AmenityButton } from '../../styles/style';
import ModalBody from './modalBody';
import Modal from '../../helpers/ModalCreator';


class AllAmenties extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.amenitiesList = props.amenitiesList;
    this.toggleModule = this.toggleModule.bind(this);
  }

  toggleModule() {
    this.setState(prevState => ({ open: !prevState.open }));
  }

  render() {
    const { open } = this.state;
    const { amenitiesList, toggleModule } = this;
    return (
      <div>
        {Modal(open, toggleModule, <ModalBody amenitiesList={amenitiesList} />)}
        <AmenityButton onClick={toggleModule}>{`See all ${amenitiesList.length} ammenities`}</AmenityButton>
      </div>
    );
  }
}

AllAmenties.propTypes = {
  amenitiesList: PropTypes.instanceOf(Array).isRequired,
};

export default AllAmenties;
