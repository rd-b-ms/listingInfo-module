import React from 'react';
import PropTypes from 'prop-types';
import {
  DescriptionContainer, ContactHost, ButtonText, ArrowIcon, ShowButton, Paragraph, BoldParagraph,
} from '../styles/style';

class LongDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
    };
    // divides the long text into an array of paragraphs
    this.longDescription = props.longDescription.split('\n\n');
    this.toggleView = this.toggleView.bind(this);
  }

  toggleView() {
    this.setState(prevState => ({ hidden: !prevState.hidden }));
  }

  render() {
    const { hidden } = this.state;
    // gives each paragraph there own styled div
    const paragraphMap = text => text.map((paragraph) => {
      if (paragraph === 'The space') return (<BoldParagraph>The space</BoldParagraph>);
      return (<Paragraph>{paragraph}</Paragraph>);
    });
    // this long version will be shown when the user clicks read more
    const Long = (
      <div>
        {paragraphMap(this.longDescription)}
        <ShowButton onClick={this.toggleView}>
          <ButtonText>Hide</ButtonText>
          <ArrowIcon>
            <i className="fa fa-angle-up fa-lg" aria-hidden="true" />
          </ArrowIcon>
        </ShowButton>
      </div>
    );
    // this short version will be shown by default and when the user clicks hide
    const Short = (
      <div>
        <Paragraph>{this.longDescription[0]}</Paragraph>
        <ShowButton onClick={this.toggleView}>
          <ButtonText>Read more about the space</ButtonText>
          <ArrowIcon>
            <i className="fa fa-angle-down fa-lg" aria-hidden="true" />
          </ArrowIcon>
        </ShowButton>
      </div>
    );
    return (
      <DescriptionContainer>
        {(hidden) ? Short : Long}
        <ContactHost>Contact host</ContactHost>
      </DescriptionContainer>
    );
  }
}


LongDescription.propTypes = {
  longDescription: PropTypes.string.isRequired,
};

export default LongDescription;
