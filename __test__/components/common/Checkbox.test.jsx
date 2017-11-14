import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Checkbox from '../../../src/components/common/Checkbox';

Enzyme.configure({ adapter: new Adapter() });

describe('Checkbox', () => {
  it('renders a checkbox', () => {
    const subject = <Checkbox />;
    const component = shallow(subject);

    expect(component.type()).toEqual('input');
    expect(component.prop('type')).toEqual('checkbox');
  });

  it('sets the aria-label passed in', () => {
    const expectedLabel = 'some label';

    const subject = (
      <Checkbox
        label={expectedLabel}
      />
    );
    const component = shallow(subject);

    expect(component.prop('aria-label')).toEqual(expectedLabel);
  });

  describe('checked', () => {
    it('defaults to false', () => {
      const subject = <Checkbox />;
      const component = shallow(subject);

      expect(component.prop('checked')).toEqual(false);
    });

    it('uses prop value passed in', () => {
      const subject = (
        <Checkbox
          checked
        />
      );
      const component = shallow(subject);

      expect(component.prop('checked')).toEqual(true);
    });
  });

  it('calls onChange prop function when clicked', () => {
    const onChangeMock = jest.fn();

    const subject = (
      <Checkbox
        onChange={onChangeMock}
      />
    );
    const component = shallow(subject);
    component.simulate('change');

    expect(onChangeMock.mock.calls).toHaveLength(1);
  });

  it('uses correct style', () => {
    const expectedStyle = {
      display: 'inline',
      marginTop: '1px',
      verticalAlign: 'middle',
      width: '3%',
    };

    const subject = <Checkbox />;
    const component = shallow(subject);

    expect(component.prop('style')).toEqual(expectedStyle);
  });
});
