import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home-page/HomePage';
import SignInPage from './components/signin-page/SignInPage';
import SignUpPage from './components/signup-page/SignUpPage';
import "./firebase";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>
        </Header>
        </BrowserRouter>
    </div>
  );
}

export default App;
