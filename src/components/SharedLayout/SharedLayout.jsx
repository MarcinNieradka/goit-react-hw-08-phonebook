import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import React from 'react';
import { Navigation } from 'components/Navigation/Navigation';

export const SharedLayout = () => {
  return (
    <>
      <Navigation></Navigation>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
