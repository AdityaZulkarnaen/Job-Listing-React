import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePages from './pages/HomePages';
import MainLayout from './layout/MainLayout';

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route index element={<HomePages/>}/>
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App