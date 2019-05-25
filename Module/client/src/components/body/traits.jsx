import React from 'react';
import PropTypes from 'prop-types';
import descriptionCreator from '../../helpers/descriptionCreator';
import { icons } from '../../styles/svg';
import {
  TraitBox, LogoBox, Icon, TraitDesc, TraitHeader, HomeDetails, Detail,
} from '../../styles/style';


const Traits = (props) => {
  const { traits, paths, hostName } = props;
  // maps each trait and gives each one the proper description and proper logo
  return traits.map((trait) => {
    const traitDescription = descriptionCreator(trait, hostName);
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
  paths: PropTypes.func.isRequired,
  hostName: PropTypes.string.isRequired,
};

export default Traits;
