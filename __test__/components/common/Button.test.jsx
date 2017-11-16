import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../../../src/components/common/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  it('renders a button', () => {
    const subject = <Button />;
    const component = shallow(subject);

    expect(component.type()).toEqual('button');
  });
});
