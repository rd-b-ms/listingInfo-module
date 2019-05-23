import React from 'react';
import PropTypes from 'prop-types';
import { medal } from '../styles/svg';
import {
  HeaderBox, HeaderText, Neighborhood, NeighborhoodLink, HostBox,
  HostImageBox, HostName, Medal, MedalBox,
} from '../styles/style';

const Header = (props) => {
  const { hostName, header, neighborhood, superHost } = props;
  const hostImage = `https://s3.amazonaws.com/fecfacedata/${hostName}.jpg`;
  const hasMedal = (superHost) ? medal : 0;

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
        <MedalBox>
          <Medal>{hasMedal}</Medal>
        </MedalBox>
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
