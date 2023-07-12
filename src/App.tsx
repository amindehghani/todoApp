// App.tsx
import React from 'react';
import './styles/app.scss';
import Layout from './components/layout';
import Header from './components/header';
export const App: React.FC = () => (
  <Layout>
    <Header/>
  </Layout>
);