import React from 'react';
import PropTypes from 'prop-types';
import {
  HeaderBox, HeaderText, Neighborhood, NeighborhoodLink, HostBox, HostImageBox, HostName,
} from '../styles/style';

const Header = (props) => {
  const { hostName, header, neighborhood } = props;
  const hostImage = `https://s3.amazonaws.com/fecfacedata/${hostName}.jpg`

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
        <HostName>{hostName}</HostName>
      </HostBox>
    </div>
  );
};

Header.propTypes = {
  hostName: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  neighborhood: PropTypes.string.isRequired,
};

export default Header;
