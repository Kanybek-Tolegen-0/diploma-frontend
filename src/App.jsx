import React from 'react';
import { Header } from './pages/libs/header/component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cafes, Authorization, ContentWrapper } from './pages';
function App() {
  return (
    <Router>
      <div className="App">
        <ContentWrapper>
          <Header />
          <Routes>
            <Route element={<Cafes />} path={'/cafes'}/>
            <Route element={<Authorization />} path={'/authorization'}/>
          </Routes>
        </ContentWrapper>
    </div>
    </Router>
  );
}

export default App;
