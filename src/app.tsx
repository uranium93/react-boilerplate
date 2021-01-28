import React, { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import Loading from 'src/component/Loading';

export default function App() {
  return (
    <Suspense fallback={Loading}>
      <Switch>
        <Route
          key={0}
          path="/"
          component={lazy(() => import('./pages/home.index'))}
          exact
        />
      </Switch>
    </Suspense>
  );
}
