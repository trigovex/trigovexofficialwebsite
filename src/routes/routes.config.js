import React, { lazy, Suspense } from 'react';
import LoadingSpinner from '../Components/common/LoadingSpinner';
import PageTransition from '../Components/common/PageTransition';

// Lazy load components
const Home = lazy(() => import('../Components/Layout/Home'));
const About = lazy(() => import('../Components/Pages/AboutCeo'));
const Services = lazy(() => import('../Components/Pages/Services'));
const Products = lazy(() => import('../Components/Pages/Applications'));
const Gallery = lazy(() => import('../Components/Pages/ServiceStats'));
const Careers = lazy(() => import('../Components/Pages/BusinessTypes'));
const MeetingScheduler = lazy(() => import('../Components/Meeting/MeetingScheduler'));
const MeetingForm = lazy(() => import('../Components/Meeting/MeetingForm'));
const NotFound = lazy(() => import('../Components/Pages/NotFound'));

// Wrap lazy loaded components with Suspense
const withSuspense = (Component) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

export const routes = [
  {
    path: '/',
    element: (
      <PageTransition>
        {withSuspense(Home)}
      </PageTransition>
    ),
  },
  {
    path: '/about',
    element: (
      <PageTransition>
        {withSuspense(About)}
      </PageTransition>
    ),
  },
  {
    path: '/services',
    element: (
      <PageTransition>
        {withSuspense(Services)}
      </PageTransition>
    ),
  },
  {
    path: '/products',
    element: (
      <PageTransition>
        {withSuspense(Products)}
      </PageTransition>
    ),
  },
  {
    path: '/gallery',
    element: (
      <PageTransition>
        {withSuspense(Gallery)}
      </PageTransition>
    ),
  },
  {
    path: '/careers',
    element: (
      <PageTransition>
        {withSuspense(Careers)}
      </PageTransition>
    ),
  },
  {
    path: '/meeting-scheduler',
    element: (
      <PageTransition>
        {withSuspense(MeetingScheduler)}
      </PageTransition>
    ),
  },
  {
    path: '/meeting-form',
    element: (
      <PageTransition>
        {withSuspense(MeetingForm)}
      </PageTransition>
    ),
  },
  {
    path: '*',
    element: (
      <PageTransition>
        {withSuspense(NotFound)}
      </PageTransition>
    ),
  },
]; 