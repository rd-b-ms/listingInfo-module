import React from 'react';
import PropTypes from 'prop-types';
import {
  BodyContainer, TraitBox, LogoBox, Icon, TraitDesc, TraitHeader, HomeDetails, Detail,
} from '../styles/style';

const Body = (props) => {
  const {
    hostName, homeType, bathrooms, bedrooms, beds, capacity, primTrait, secondaryTrait, tertTrait,
  } = props;

  return (
    <div>
      <BodyContainer>
        <TraitBox>
          <LogoBox>
            <Icon viewBox="0 0 100 100">
              <path d="M45.379,7.511c1.167-1.166,3.076-1.166,4.242,0l38.436,38.436c1.166,1.166,1.166,3.075,0,4.242l-0.044,0.044   c-1.167,1.166-3.076,1.166-4.242,0L49.622,16.083c-1.167-1.166-3.076-1.166-4.243,0L11.23,50.232c-1.167,1.166-3.076,1.166-4.242,0   l-0.044-0.044c-1.167-1.167-1.167-3.076,0-4.242L45.379,7.511z" />
              <path d="M73.356,45.247c2.333,2.334,4.242,6.943,4.242,10.243v26.874c0,3.3-2.7,6-6,6h-7.525c-3.3,0-6-2.7-6-6V70.552   c0-3.3-2.7-6-6-6h-9.146c-3.3,0-6,2.7-6,6v11.813c0,3.3-2.7,6-6,6h-7.526c-3.3,0-6-2.7-6-6V56.061c0-3.3,1.909-7.909,4.243-10.242   L43.543,23.92c2.334-2.334,6.152-2.334,8.485,0L73.356,45.247z" />
            </Icon>
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
  secondaryTrait: PropTypes.string.isRequired,
  tertTrait: PropTypes.string.isRequired,
};

export default Body;
