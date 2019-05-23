import styled from 'styled-components';


const Container = styled.div`
width: 58.333333333333336% !important;
min-height: 1px !important;
float: left !important;
padding-left: 8px !important;
padding-right: 8px !important;
min-height: 22px !important;
position: relative !important;
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
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 1.2857142857142858em !important;
  color: #767676 !important;
`;

const Medal = styled.svg`
 height: 32px;
 width: 32px; 
 display: block; 
 fill: currentcolor;
`;

const MedalBox = styled.div`
  position: absolute !important;
  right: 20% !important;
  bottom: 30% !important;
  line-height: 0 !important;
`;

const BodyContainer = styled.div`
    float: left;
    width: 92%;
    display: block;
    Margin-left: 8px;
    Margin-right: 8px;
    padding-bottom: 16px;
    border-bottom-width: var(--border-rule-border-width, 1px) !important;
    border-bottom-color: var(--color-divider, #EBEBEB) !important;
    border-bottom-style: solid !important;
  `;
const TraitBox = styled.div`
    margin-top: 16px;
    display: table !important;
    width: 100% !important;
    border-spacing: 0px !important;
  `;
const LogoBox = styled.div`
    display: table-cell !important;
    vertical-align: top !important;
  `;

const Icon = styled.svg`
  position:absolute;
  display: block;
  fill: #484848;
  max-width: 18px;
  length:18px;
  overflow: hidden;
`;
const TraitDesc = styled.div`
    display: table-cell !important;
    width: 100% !important;
    vertical-align: top !important;
    padding-left: 30px
`;
const TraitHeader = styled.div`
  margin: 0px !important;
  word-wrap: break-word !important;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 16px !important;
  font-weight: 600 !important;
  line-height: 1.375em !important;
  color: #484848 !important;
`;

const HomeDetails = styled.div`
  display: inline-block;
`;

const Detail = styled.div`
  display: inline-block;
  margin-right: 24px;
  word-wrap: break-word !important;
  font-size: 16px !important;
  font-weight: 400 !important;

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
};
