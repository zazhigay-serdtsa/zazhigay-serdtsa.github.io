import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import MainContent from './components/MainContent';
import PhotoGallery from './components/PhotoGallery';
import MoreInfo from './components/MoreInfo';
import Games from './components/Games';
import History from './components/LifeStories';
import Footer from './components/Footer';

import './App.module.css';

function App() {
  return (
    <BrowserRouter className="App">
      <Header />
      <MainContent />
      <PhotoGallery />
      <MoreInfo />
      <Games />
      <History />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
