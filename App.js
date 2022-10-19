import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import List from './list';
import DataList from './datalist';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<List/>}></Route>
        <Route path='dataList' element={<DataList/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App;


