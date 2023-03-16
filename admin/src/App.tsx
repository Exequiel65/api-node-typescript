import React from 'react';
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { UserList } from './users';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return(
    <Admin dataProvider={dataProvider} >
      {/* <Resource name='users' list={ListGuesser} /> */}
      <Resource name='users' list={UserList} />
    </Admin>
  );
}

export default App;
