import React from 'react';
import { shallow, mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/components/app';

configure({ adapter: new Adapter() });

describe('App', () => {
  it('Should render React App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
  });
});

describe('Listing Header', () => {
  it('Should have a main header' , () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('Container').exists()).toEqual(true);
  });
  it('should have a button with text "Share" on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('ShareButton').text()).toEqual('Share');
  });
  it('should have a button with text "View Photos" on load', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('ViewPhotosButton').text()).toEqual('View Photos');
  });
});
