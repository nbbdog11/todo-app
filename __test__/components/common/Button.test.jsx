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

  describe('aria-label', () => {
    it('is set to value passed in', () => {
      const label = 'label for button';
      const subject = (
        <Button
          label={label}
        />
      );
      const component = shallow(subject);

      expect(component.prop('aria-label')).toBe(label);
    });

    it('defaults to empty string when no value passed in', () => {
      const subject = <Button />;
      const component = shallow(subject);

      expect(component.prop('aria-label')).toBe('');
    });
  });

  describe('disabled', () => {
    it('is set to value passed in', () => {
      const disabled = true;
      const subject = (
        <Button
          disabled={disabled}
        />
      );
      const component = shallow(subject);

      expect(component.prop('disabled')).toBe(disabled);
    });

    it('default to false when no value passed in', () => {
      const subject = <Button />;
      const component = shallow(subject);

      expect(component.prop('disabled')).toBe(false);
    });
  });

  it('calls onClick function when clicked', () => {
    const onClick = jest.fn();
    const subject = (
      <Button
        onClick={onClick}
      />
    );
    const component = shallow(subject);
    component.simulate('click');

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('uses appropriate style', () => {
    const expectedStyle = {
      margin: '0 3 0 3',
      verticalAlign: 'middle',
    };

    const subject = <Button />;
    const component = shallow(subject);

    expect(component.prop('style')).toEqual(expectedStyle);
  });
});
