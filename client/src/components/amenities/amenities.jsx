import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { ComponentContainer } from '../../styles/style';
import FeatAmenities from './featAmenities';
import AllAmenities from './allAmenities';


const Amenities = (props) => {
  const AmenitiesHeader = styled.div`
  font-size: 16px;
  font-weight: 800;
  margin-bottom: 16px;
  `;
  const { amenities } = props;
  const amenitiesList = (amens) => {
    const results = [];
    for (let i = 0; i < amens.length; i += 1) {
      if (amens[i].value) results.push(amens[i].name);
    }
    return results;
  };
  return (
    <div>
      <ComponentContainer>
        <AmenitiesHeader>Amenities</AmenitiesHeader>
        <FeatAmenities amenitiesList={amenitiesList(amenities)} />
        <AllAmenities amenitiesList={amenitiesList(amenities)} />
      </ComponentContainer>
    </div>
  );
};

Amenities.propTypes = {
  amenities: PropTypes.instanceOf(Array).isRequired,
};

export default Amenities;
