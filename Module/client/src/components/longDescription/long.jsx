import React from 'react';
import PropTypes from 'prop-types';
import { ButtonText, ArrowIcon, ShowButton, Paragraph, BoldParagraph } from '../../styles/style';

const Long = (props) => {
  const { longDescription, toggleView } = props;
  // gives each paragraph there own styled div
  const paragraphMap = text => text.map((paragraph) => {
    if (paragraph === 'The space') return (<BoldParagraph>The space</BoldParagraph>);
    return (<Paragraph>{paragraph}</Paragraph>);
  });
  // this long version will be shown when the user clicks read more
  return (
    <div>
      {paragraphMap(longDescription)}
      <ShowButton onClick={toggleView}>
        <ButtonText>Hide</ButtonText>
        <ArrowIcon>
          <i className="fa fa-angle-up fa-lg" aria-hidden="true" />
        </ArrowIcon>
      </ShowButton>
    </div>
  );
};
Long.propTypes = {
  longDescription: PropTypes.string.isRequired,
  toggleView: PropTypes.func.isRequired,
};

export default Long;
