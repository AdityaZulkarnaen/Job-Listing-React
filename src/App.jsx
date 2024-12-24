import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePages from './pages/HomePages';
import MainLayout from './layout/MainLayout';
import JobsPage from './pages/JobsPage';
import AddJob from './pages/AddJob';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<HomePages/>}/>
      <Route path='/jobs' element={<JobsPage/>}></Route>
      <Route path='/add-job' element={<AddJob/>}></Route>
      <Route path='*' element ={<NotFound/>}/>
    </Route>
    
  )
);

const App = () => {
  return <RouterProvider router={router}/>;
};
export default App