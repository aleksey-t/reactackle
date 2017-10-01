/* eslint-disable react/prop-types */
import React from 'react';
import renderer from 'react-test-renderer';
import { findAllByType, setProps } from 'reactackle-test-utils';
import { Tabs } from '../src';
import { TabStyled } from '../src/Tab/styles/TabStyled';

jest.mock('react-dom');

describe('<Tabs/>', () => {
  it('renders correctly with default props', () => {
    const tree = renderer.create(<Tabs />).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop selected set 1', () => {
    const tree = renderer.create(
      <Tabs
        selected={1}
        tabs={[
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop linkComponent passed', () => {
    const LinkComponent = props => {
      const content = props.children || props.title;
    
      return (
        <a href={props.href} onClick={props.onClick}>
          {content}
        </a>
      );
    };
    const tree = renderer.create(
      <Tabs
        linkComponent={LinkComponent}
        tabs={[
        { text: 'Test', linkHref: '/' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop icon', () => {
    const tree = renderer.create(
      <Tabs
        tabs={[
          { text: 'Test', icon: { type: 'svg' } },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop text is empty', () => {
    const tree = renderer.create(
      <Tabs
        tabs={[
          { text: '' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if prop ', () => {
    const tree = renderer.create(
      <Tabs
        tabs={[
          { text: 'Test1', linkHref: 'test1' },
          { text: 'Test2', linkHref: 'test2' },
        ]}
      />,
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly if change tab', () => {
    const mockFn = jest.fn(),
      component = renderer.create(
        <Tabs
          onChange={mockFn}
          tabs={[
            { text: 'Test 1', icon: { type: 'svg' } },
            { text: 'Test 2', icon: { type: 'svg' } },
          ]}
        />,
      );

    expect(component.toJSON()).toMatchSnapshot();

    const tabs = findAllByType(component, TabStyled);
    tabs[1].props.onClick();

    expect(mockFn).toHaveBeenCalledWith({ value: 1 });
    expect(component.toJSON()).toMatchSnapshot();
  });


  it('renders correctly if prop selected set after render', () => {
    const tree = renderer.create(
      <Tabs
        selected={2}
        tabs={[
        { text: 'Test' },
        { text: 'Test' },
        { text: 'Test' },
        ]}
      />,
    );

    expect(tree.toJSON()).toMatchSnapshot();
    setProps(tree, { selected: 1 });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
