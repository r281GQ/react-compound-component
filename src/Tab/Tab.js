import React from 'react';
import styled from 'styled-components';

const StyledTab = styled.div`
  background-color: ${props => (props.active ? `blue` : `white`)};
  ${props => props.isDisabled && `background-color: grey;`};
`;

export default class Tab extends React.Component {
  render = () => {
    const { children, onSetIndex, ...rest } = this.props;

    return (
      <StyledTab {...rest} onClick={onSetIndex}>
        {children}
      </StyledTab>
    );
  };
}
