import React from 'react';
import renderer from 'react-test-renderer';
import Link from './index';

test('Link changes the class when hovered', () => {

    const component = renderer.create(<Link page='http://www.google.com'>Google</Link>);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props.onMouseEnter();

    tree = component.toJSON();

    expect(tree).toMatchSnapshot();

    tree.props.onMouseLeave();
    // re-rendering
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})