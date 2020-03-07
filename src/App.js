import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import authProvider from './authProvider';
import MyLoginPage from './MyLoginPage';
import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme();
// const myLoginPage = () => <MyLoginPage theme={theme}/>

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => <Admin
  theme={theme}
  loginPage={MyLoginPage}
  authProvider={authProvider}
  dataProvider={dataProvider} />;

export default App;