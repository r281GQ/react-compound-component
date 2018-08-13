import React, { cloneElement } from 'react';

import Tab from './Tab';

export default class Tabs extends React.Component {
  static defaultProps = {
    defaultIndex: 0
  };

  state = {
    activeIndex: 0
  };

  componentDidMount = () => {
    const { defaultIndex } = this.props;

    if (defaultIndex !== 0) {
      this.setState({ activeIndex: defaultIndex });
    }
  };

  assignPropsToElements = () => {
    let arrayToWorkOn = this.props.children;

    if (!Array.isArray(this.props.children)) {
      arrayToWorkOn = [this.props.children];
    }

    const childrenToRender = arrayToWorkOn.reduce((array, element) => {
      const key = Number.parseInt(element.key ? element.key : array.length, 10);

      const isChildInstanceOfTabList = element.type === Tab;

      if (!isChildInstanceOfTabList) {
        throw new Error('Children of Tabs must be an element of Tab');
      }

      const modifiedElement = cloneElement(element, {
        key,
        onSetIndex: () => {
          if (!element.props.isDisabled) this.setState({ activeIndex: key });
        },
        active: this.state.activeIndex === key
      });

      array.push(modifiedElement);

      return array;
    }, []);

    return childrenToRender;
  };

  render = () => {
    return <div> {this.assignPropsToElements()} </div>;
  };
}
