import React from 'react'
import Hero from '../components/Hero';
import HomeCard from '../components/HomeCard'
import JobListings from '../components/JobListings';
import ViewAll from '../components/ViewAll.jsx';

const HomePages = () => {
  return (
    <>
    <Hero/>
    <HomeCard/>
    <JobListings/>
    <ViewAll/>
    </>
  )
}

export default HomePages