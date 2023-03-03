import React  from 'react';
/* Routes and Route from react-router-dom */
import { Routes, Route } from 'react-router-dom';


/* Components */
import Component0 from './pages/Component0';
import Component1 from './pages/Component1';
import Component2 from './pages/Component2';
import Component3 from './pages/Component3';
import Component4 from './pages/Component4';
import Component5 from './pages/Component5';


export default function App() {
  return (
    <Routes>
      <Route index element={<Component0 />}/>
      <Route path="/component1" element={<Component1 />}/>
      <Route path="/component2" element={<Component2 />}/>
      <Route path="/component3" element={<Component3 />}/>
      <Route path="/component4" element={<Component4 />}/>
      <Route path="/component5" element={<Component5 />}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
  );
};