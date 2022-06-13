import React from 'react';
import { Header } from './pages/libs/header/component';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Cafes, Authorization, ContentWrapper, Main, Cafe } from './pages';
function App() {
  return (
    <Router>
      <div className="App">
        <ContentWrapper>
          <Header />
          <Routes>
            <Route exact element={<Main />} path={'/'} />
            <Route exact element={<Cafes />} path={'/cafes'} />
            <Route exact element={<Cafe />} path={'/cafes/:cafeId'} />
            <Route exact element={<Authorization />} path={'/authorization'}/>
          </Routes>
        </ContentWrapper>
    </div>
    </Router>
  );
}

export default App;
