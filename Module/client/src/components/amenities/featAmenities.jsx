import React from 'react';
import PropTypes from 'prop-types';
import { icons } from '../../styles/svg';
import { AmenitiesContianer, AmenitiesTuple, Amenity, AmenityIcon, AmenityText } from '../../styles/style';
import paths from '../../helpers/svgCreator';


const FeatAmenities = (props) => {
  const { amenitiesList } = props;
  const featAmenities = (() => {
    const desiredAmenities = ['Elevator', 'Laptop friendly workspace', 'Air conditioning', 'Kitchen', 'Iron', 'TV', 'Wifi'];
    return desiredAmenities.filter(amen => amenitiesList.includes(amen));
  })();
  const AmenityBox = i => (
    <Amenity>
      <AmenityIcon viewBox={icons[featAmenities[i]].viewBox}>{paths(icons[featAmenities[i]].paths)}</AmenityIcon>
      <AmenityText>{featAmenities[i]}</AmenityText>
    </Amenity>
  );
  return (
    <AmenitiesContianer>
      <AmenitiesTuple>{AmenityBox(0)}{AmenityBox(1)}</AmenitiesTuple>
      <AmenitiesTuple>{AmenityBox(2)}{AmenityBox(3)}</AmenitiesTuple>
    </AmenitiesContianer>
  );
};

FeatAmenities.propTypes = {
  amenitiesList: PropTypes.instanceOf(Array).isRequired,
};

export default FeatAmenities;
