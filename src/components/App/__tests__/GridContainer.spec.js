import React from 'react';
import { shallow } from 'enzyme';
import GridContainer from '../Panels/MiddlePanel';

describe('components -> GridContainer: ', () => {
    it('renders a div', () => {
        const wrapper = shallow(<GridContainer />);
        const div = wrapper.find('div');
        
        expect(div.text()).toEqual('test');
    })
});