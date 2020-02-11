import React, { useState } from 'react';
import logo from './logo.svg';
import './App.scss';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './global';
import { theme } from './theme';

import { Burger, Menu } from './components';

import Navigation from './components/Navigation';
import MenuMobile from './components/MenuMobile';


const App = () => {
  const [ open, setOpen ] = useState(false);
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navigation />
      <MenuMobile />
      <Burger open={open} setOpen={setOpen} />
      <Menu open={open} setOpen={setOpen} />
    </ThemeProvider>
  );
}

export default App;
