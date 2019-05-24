import React from 'react';
import PropTypes from 'prop-types';
import Traits from './traits';
// an object containing svg paths that will be turned into logos
import { icons } from '../styles/svg';
// styled components that will be used as classes for styling
import {
  BodyContainer, TraitBox, LogoBox, Icon, TraitDesc, TraitHeader, HomeDetails, Detail,
} from '../styles/style';

const Body = (props) => {
  const {
    hostName, homeType, bathrooms, bedrooms, beds, capacity, primTrait, secondTrait, tertTrait,
  } = props;
  // creates one unifed logo from a specific array of svg paths declared in the styles/svg file
  const paths = svg => svg.map(iconPath => <path d={iconPath} />);
  // Each host has three traits (superhost, sparkling clean, etc...) that are featured on the listing info
  const traits = [primTrait, secondTrait, tertTrait];
  const traitsProps = {
    traits,
    paths,
    hostName,
  };

  return (
    <div>
      <BodyContainer>
        <TraitBox>
          <LogoBox>
            <Icon viewBox="0 0 100 100">{paths(icons.home.paths)}</Icon>
            <TraitDesc>
              <TraitHeader>{homeType}</TraitHeader>
              <HomeDetails>
                  <Detail>{capacity} guests</Detail>
                  <Detail>{bedrooms} bedrooms</Detail>
                  <Detail>{beds} beds</Detail>
                  <Detail>{bathrooms} bathrooms</Detail>
              </HomeDetails>
            </TraitDesc>
          </LogoBox>
        </TraitBox>
        <Traits {...traitsProps} />
      </BodyContainer>
    </div>
  );
};

Body.propTypes = {
  homeType: PropTypes.string.isRequired,
  hostName: PropTypes.string.isRequired,
  bathrooms: PropTypes.number.isRequired,
  beds: PropTypes.number.isRequired,
  bedrooms: PropTypes.number.isRequired,
  capacity: PropTypes.number.isRequired,
  primTrait: PropTypes.string.isRequired,
  secondTrait: PropTypes.string.isRequired,
  tertTrait: PropTypes.string.isRequired,
};

export default Body;
