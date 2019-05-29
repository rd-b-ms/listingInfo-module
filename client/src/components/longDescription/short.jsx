import React from 'react';
import PropTypes from 'prop-types';
import { ButtonText, ArrowIcon, ShowButton, Paragraph } from '../../styles/style';

const Short = (props) => {
  const { longDescription, toggleView } = props;
  // this short version will be shown when the user clicks read more
  return (
    <div>
      <Paragraph>{longDescription[0]}</Paragraph>
      <ShowButton onClick={toggleView}>
        <ButtonText>Read more about the space</ButtonText>
        <ArrowIcon>
          <i className="fa fa-angle-down fa-lg" aria-hidden="true" />
        </ArrowIcon>
      </ShowButton>
    </div>
  );
};
Short.propTypes = {
  longDescription: PropTypes.string.isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default Short;
