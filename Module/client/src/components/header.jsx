import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Header = (props) => {
  const { hostName, header, neighborhood } = props;
  const hostImage = `https://s3.amazonaws.com/fecfacedata/${hostName}.jpg`

  const HeaderBox = styled.div`
    width: 75.33333333333334%;
    float: left;
    padding-left: 8px;
    padding-right: 8px;
    min-height: 1px;
    position: relative;
  `;
  const HeaderText = styled.span`
    margin: 0px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 32px;
    font-weight: 800;
    line-height: 1.125em;
    color: #484848;
    padding-top: 6px;
    padding-bottom: 6px;
  `;
  const Neighborhood = styled.div`
    margin: 0px;
    word-wrap: break-word;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
    font-size: 16px;
    font-weight: 100;
    line-height: 1.375em;
    color: #484848;
    padding-top: 8px
    padding-bottom: 8px
  `;

  const NeighborhoodLink = styled.div`
    color: inherit;
    display: inline-block;
    font-weight: inherit;
    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
  `;

  const HostBox = styled.div`
    width: 16.666666666666664%;
    float: left;
    padding-top: 6px;
    paddding-bottom: 6px;
    padding-left: 8px;
    padding-right: 8px;
    min-height: 1px;
    position: relative;
    display: block;
    box-sizing: border-box;
    text-align: center;
  `;

  const HostImageBox = styled.img`
    background-color: var(--color-accent-light-gray, #D8D8D8);
    border-radius: var(--border-profile-photo-border-radius, 50%);
    border-width: var(--border-profile-photo-border-width, 2px);
    border-color: var(--color-white, #ffffff);
    height: 64px;
    width: 64px;
    vertical-align: middle !important;
    overflow: hidden !important;
    display: block !important;
    margin: auto;
    margin-bottom: 6px
    &:hover {
      cursor: pointer;
    }
  `;

  const HostName = styled.div`
    margin: 0px !important;
    word-wrap: break-word !important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    line-height: 1.2857142857142858em !important;
    color: #767676 !important;
  `;

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
