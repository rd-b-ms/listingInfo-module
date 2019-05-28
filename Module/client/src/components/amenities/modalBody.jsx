import React from 'react';
import PropTypes from 'prop-types';
import {
  ModalContainer, ModalHeader, CategoryHeader, AmenityItem, AmmenityText, AmmenitySubtext, NotIncluded,
} from '../../styles/style';
import categorizer from '../../helpers/categorize';
import {
  basicCategory, facilitiesCategory, diningCategory, bnBCategory, safetyCategory, rareAmenitys,
} from '../../helpers/descriptionCreator';

const ModalBody = (props) => {
  const { amenitiesList } = props;
  const categorize = categorizer.bind(null, amenitiesList);
  const basic = categorize(basicCategory);
  const facilities = categorize(facilitiesCategory);
  const dining = categorize(diningCategory);
  const bedAndBath = categorize(bnBCategory);
  const safety = categorize(safetyCategory);
  const notIncluded = (amens) => {
    const results = [];
    for (let i = 0; i < amens.length; i += 1) {
      if (!amenitiesList.includes(amens[i])) {
        results.push(
          <AmenityItem>
            <NotIncluded>{amens[i]}</NotIncluded>
          </AmenityItem>,
        );
      }
    }
    if (!results) return null;
    return (
      <div>
        <CategoryHeader>Not included</CategoryHeader>
        {results}
      </div>
    );
  };
  const categoryBox = (category, list) => {
    if (list.length < 1) return null;
    const amens = list.map(amen => (
      <AmenityItem>
        <AmmenityText>{amen.name}</AmmenityText>
        {(amen.description) ? (<AmmenitySubtext>{amen.description}</AmmenitySubtext>) : null }
      </AmenityItem>
    ));
    return (
      <div>
        <CategoryHeader>{category}</CategoryHeader>
        {amens}
      </div>
    );
  };
  return (
    <ModalContainer>
      <ModalHeader>Amenities</ModalHeader>
      {categoryBox('Basic', basic)}
      {categoryBox('Facilities', facilities)}
      {categoryBox('Dining', dining)}
      {categoryBox('Bed and Bath', bedAndBath)}
      {categoryBox('Safety', safety)}
      {notIncluded(rareAmenitys)}
    </ModalContainer>
  );
};

ModalBody.propTypes = {
  amenitiesList: PropTypes.instanceOf(Array).isRequired,
};

export default ModalBody;
