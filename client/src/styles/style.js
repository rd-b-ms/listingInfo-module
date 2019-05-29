import styled from 'styled-components';

export const Container = styled.div`
  width: 58.333333333333336%;
  min-width: 519px;
  min-height: 1px;
  float: left;
  padding-left: 8px;
  padding-right: 8px;
  min-height: 22px;
  position: relative;
  box-sizing: border-box;
  display: block;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  -webkit-font-smoothing: antialiased;
`;

export const HeaderBox = styled.div`
  width: 75.33333333333334%;
  float: left;
  padding-left: 8px;
  padding-right: 8px;
  min-height: 1px;
  position: relative;
`;
export const HeaderText = styled.span`
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
export const Neighborhood = styled.div`
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

export const NeighborhoodLink = styled.div`
  color: inherit;
  display: inline-block;
  font-weight: inherit;
  &:hover {
      text-decoration: underline;
      cursor: pointer;
  }
`;

export const HostBox = styled.div`
  width: 100px;
  height: 100px;
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

export const HostImageBox = styled.img`
  background-color: var(--color-accent-light-gray, #D8D8D8);
  border-radius: var(--border-profile-photo-border-radius, 50%);
  border-width: var(--border-profile-photo-border-width, 2px);
  border-color: var(--color-white, #ffffff);
  height: 64px;
  width: 64px;
  vertical-align: middle;
  overflow: hidden;
  display: block;
  margin: auto;
  margin-bottom: 6px
  &:hover {
    cursor: pointer;
  }
`;

export const HostName = styled.div`
  margin: 0px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
  color: #767676;
`;

export const Medal = styled.svg`
 height: 32px;
 width: 32px; 
 display: block; 
 fill: currentcolor;
`;

export const MedalBox = styled.div`
  position: absolute;
  right: 10px;
  top: 35px;
  line-height: 0;
`;

export const BodyContainer = styled.div`
    float: left;
    width: 92%;
    display: block;
    Margin-left: 8px;
    Margin-right: 8px;
    padding-bottom: 24px;
    border-bottom-width: 1px;
    border-bottom-color: #EBEBEB;
    border-bottom-style: solid;
  `;
export const TraitBox = styled.div`
    margin-top: 16px;
    display: table;
    width: 100%;
    border-spacing: 0px;
  `;
export const LogoBox = styled.div`
    padding-top: 5px;
    display: block
    vertical-align: middle;
  `;

export const Icon = styled.svg`
  position: relative;
  display: block;
  fill: #484848;
  width: 12px;
  overflow: hidden;  
`;
export const TraitDesc = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: top;
  padding-left: 16px
`;
export const TraitHeader = styled.div`
  margin: 0px;
  word-wrap: break-word;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.375em;
  color: #484848;
`;

export const HomeDetails = styled.div`
  display: inline-block;
`;

export const Detail = styled.div`
  display: inline-block;
  margin-right: 24px;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 400;

`;

export const ComponentContainer = styled.div`
  float: left;
  display: box;
  width: 92%
  margin-top: 24px;
  margin-right: 16px;
  padding-left: 8px;
  padding-bottom: 24px;
  overflow-wrap: break-word;
  font-size: 16px;
  font-weight: 400;
  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
  border-bottom-style: solid;
  color: #484848;
`;

export const ContactHost = styled.div`
  display: inline-block
  color: #008489
  margin-top: 24px;
  font-weight: 600;
  &:hover {
  text-decoration: underline;
  cursor: pointer;
  }
`;

export const ButtonText = styled.div`
  display: inline-block
  padding-right: 8px
`;

export const ArrowIcon = styled.div`
  display: inline-block
`;

export const ShowButton = styled.div`
  display: inline-block;
  color: #008489
  padding-top: 10px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
  }
  &:hover ${ButtonText} {
  text-decoration: underline;
  }
`;

export const Paragraph = styled.div`
  margin-bottom: 14px;
  white-space: pre-line;
`;

export const BoldParagraph = styled.div`
  font-weight: 600;
  margin-bottom: 14px;
`;

export const AmenitiesContianer = styled.div`
  display: block;
`;

export const AmenitiesTuple = styled.div`
  min-height: 1px;
  position: relative;
  width: 50%;
  float: left;
`;

export const Amenity = styled.div`
  width: 100%;
  table-layout: fixed;
  margin-bottom: 16px
`;

export const AmenityIcon = styled.svg`
  display: block;
  float: left;
  padding-right: 10px;
  fill: #767676;
  max-width: 25px;
  max-height: 25px;
  overflow: hidden;
  stroke-width: 2px;
  stroke: #767676;
`;

export const AmenityText = styled.div`
  display: block;
  padding-top: 3px;
`;

export const AmenityButton = styled.div`
  display: inline-block;
  color: #008489
  padding-top: 18px;
  font-weight: 600;
  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;

export const ModalContainer = styled.div`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #484848;
  -webkit-font-smoothing: antialiased;
  margin-top: 48px;
  padding-left: 13px;
  padding-right: 13px;
  padding-bottom: 13px;
`;
export const ModalHeader = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.25em;
`;
export const CategoryHeader = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 1.44444em;
  color: rgb(72, 72, 72);
  padding-top: 24px;
`;
export const AmenityItem = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-color: #EBEBEB;
  border-bottom-style: solid;
  word-wrap: break-word
`;
export const AmmenityText = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
`;
export const NotIncluded = styled.div`
  margin: 0px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.375em;
  text-decoration: line-through;
  color: #767676;
`;
export const AmmenitySubtext = styled.div`
  margin-top: 8px;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.28em;
`;
