import React from 'react';
import PropTypes from 'prop-types';
import  { traitCreator } from '../../helpers/descriptionCreator';
import paths from '../../helpers/svgCreator';
import { icons } from '../../styles/svg';
import {
  TraitBox, LogoBox, Icon, TraitDesc, TraitHeader, HomeDetails, Detail,
} from '../../styles/style';

const Traits = (props) => {
  const { traits, hostName } = props;
  // maps each trait and gives each one the proper description and proper logo
  return traits.map((trait) => {
    const traitDescription = traitCreator(trait, hostName);
    return (
      <TraitBox>
        <LogoBox>
          <Icon viewBox={icons[trait].viewBox}>{paths(icons[trait].paths)}</Icon>
        </LogoBox>
        <TraitDesc>
          <TraitHeader>{traitDescription[0]}</TraitHeader>
          <HomeDetails>
            <Detail>{traitDescription[1]}</Detail>
          </HomeDetails>
        </TraitDesc>
      </TraitBox>
    );
  });
};

Traits.propTypes = {
  traits: PropTypes.instanceOf(Array).isRequired,
  hostName: PropTypes.string.isRequired,
};

export default Traits;
