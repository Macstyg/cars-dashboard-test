import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import { Container } from '@mui/material';
import AppBar from './components/AppBar';
import routes from './routes'

function App() {
  return (
    <Router>
      <Container maxWidth="xl" disableGutters>
        <AppBar  />
        <Routes>
        {routes.map(({path, component: Component}) => (
          <Route path={path} key={path} element={<Component />} />
        ))} 
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
