import React from 'react'
import { bool } from 'prop-types';

import { StyledMenu } from './Menu.styled';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <a href="/">
       Our Work 
      </a>
      <a href="/">
       Our Services 
      </a>
      <a href="/">
        Company 
        </a>
      <a href="/">
        Contact 
        </a>
    </StyledMenu>
  )
};

Menu.propTypes = {
  open: bool.isRequired
}

export default Menu;