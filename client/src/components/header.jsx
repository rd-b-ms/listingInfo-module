import React from 'react';
import PropTypes from 'prop-types';
import { medal } from '../styles/svg';
import {
  HeaderBox, HeaderText, Neighborhood, NeighborhoodLink, HostBox,
  HostImageBox, HostName, Medal, MedalBox,
} from '../styles/style';

const Header = (props) => {
  const { hostName, header, neighborhood, superHost } = props;
  // link to the aws image hosting file
  const hostImage = `https://s3.amazonaws.com/fecfacedata/${hostName}.jpg`;
  // adds a superhost medal on top of the host image if the superhost trait is true
  const hasMedal = (superHost) ? (<MedalBox><Medal>{medal}</Medal></MedalBox>) : null;

  return (
    <div>
      <HeaderBox>
        <HeaderText>{header}</HeaderText>
        <Neighborhood>
          <NeighborhoodLink>{neighborhood}</NeighborhoodLink>
        </Neighborhood>
      </HeaderBox>
      <HostBox>
        <HostImageBox src={hostImage} />
        {hasMedal}
        <HostName>{hostName}</HostName>
      </HostBox>
    </div>
  );
};

Header.propTypes = {
  hostName: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
  superHost: PropTypes.bool.isRequired,
};

export default Header;
