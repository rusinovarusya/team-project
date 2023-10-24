import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/home-page/HomePage';
import SignInPage from './components/signin-page/SignInPage';
import SignUpPage from './components/signup-page/SignUpPage';
import "./firebase";
import FavoritesPage from './components/favorites-page/FavoritesPage';
import HistoryPage from './components/history-page/HistoryPage';
import SearchPage from './components/search-page/SearchPage';
import HeaderContent from './components/header-content/HeaderContent';
import Footer from './components/footer/Footer';
import Content from './components/content/Content';


function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/team-project">
        <Header>
          <HeaderContent />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/signup" element={<SignUpPage />} />

            <Route path="/favorites" element={<FavoritesPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </Header>
        <Content></Content>
        <Footer></Footer>
        </BrowserRouter>
    </div>
  );
}

export default App;
