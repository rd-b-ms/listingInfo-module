import styled from 'styled-components';


const Container = styled.div`
width: 58.333333333333336%;
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
  vertical-align: middle;
  overflow: hidden;
  display: block;
  margin: auto;
  margin-bottom: 6px
  &:hover {
    cursor: pointer;
  }
`;

const HostName = styled.div`
  margin: 0px;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2857142857142858em;
  color: #767676;
`;

const Medal = styled.svg`
 height: 32px;
 width: 32px; 
 display: block; 
 fill: currentcolor;
`;

const MedalBox = styled.div`
  position: absolute;
  right: 20%;
  bottom: 30%;
  line-height: 0;
`;

const BodyContainer = styled.div`
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
const TraitBox = styled.div`
    margin-top: 16px;
    display: table;
    width: 100%;
    border-spacing: 0px;
  `;
const LogoBox = styled.div`
    padding-top: 5px;
    display: block
    vertical-align: middle;
  `;

const Icon = styled.svg`
  position: relative;
  display: block;
  fill: #484848;
  width: 12px;
  overflow: hidden;  
`;
const TraitDesc = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: top;
  padding-left: 16px
`;
const TraitHeader = styled.div`
  margin: 0px;
  word-wrap: break-word;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.375em;
  color: #484848;
`;

const HomeDetails = styled.div`
  display: inline-block;
`;

const Detail = styled.div`
  display: inline-block;
  margin-right: 24px;
  word-wrap: break-word;
  font-size: 16px;
  font-weight: 400;

`;

const DescriptionContainer = styled.div`
float: left;
display: box;
width: 92%
margin-top: 24px;
padding-left: 8px;
margin-right: 16px;
overflow-wrap: break-word;
font-size: 16px;
font-weight: 400;
border-bottom-width: 1px;
border-bottom-color: #EBEBEB;
border-bottom-style: solid;
`;

const ContactHost = styled.div`
display: inline-block
color: #008489
margin-top: 24px;
margin-bottom: 24px;
font-weight: 600;
&:hover {
text-decoration: underline;
cursor: pointer;
}
`;

const ButtonText = styled.div`
display: inline-block
padding-right: 8px
`;

const ArrowIcon = styled.div`
display: inline-block
`;

const ShowButton = styled.div`
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

const Paragraph = styled.div`
margin-bottom: 14px;
white-space: pre-line;
`;
const BoldParagraph = styled.div`
font-weight: 600;
margin-bottom: 14px;
`;

export {
  Container,
  HeaderBox,
  HeaderText,
  Neighborhood,
  NeighborhoodLink,
  HostBox,
  HostImageBox,
  HostName,
  Medal,
  MedalBox,
  BodyContainer,
  TraitBox,
  LogoBox,
  Icon,
  TraitDesc,
  TraitHeader,
  HomeDetails,
  Detail,
  DescriptionContainer,
  ContactHost,
  ButtonText,
  ArrowIcon,
  ShowButton,
  Paragraph,
  BoldParagraph,
};
