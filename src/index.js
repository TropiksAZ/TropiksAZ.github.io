import React from 'react';

//** REACT ROUTER IMPORTS - for creating routes a.k.a. "page urls" */
//** ...in the form of <BrowserRouter /> */
  import ReactDOM from 'react-dom/client';
  import { HashRouter, Routes, Route } from 'react-router-dom';

//** REDUX IMPORTS - for wrapping the redux store around App and thus allowing access to redux state from anywhere */
//** ...in the form of <Provider /> and <PersistGate /> */
  import { persistor, store } from './redux/store';
  import { PersistGate } from 'redux-persist/integration/react';
  import { Provider } from 'react-redux';

//** SASS - css - style sheer import */
  import './scss/styles.scss';

//** GLOBAL COMPONENT IMPORTS - visible in all pages */
  import NavSection from './components/NavSection';
  import ScrollToTopButton from './components/ScrollToTopButton';
  import FooterSection from './components/FooterSection';

//** PAGES IMPORTS - for routes */
  import LandingPage from './pages/LandingPage';
  import ProductPage from './pages/ProductPage';
  import ContactPage from './pages/ContactPage';
  import SafetyPage from './pages/SafetyPage';
  import PolicyPage from './pages/PolicyPage';


const App = () => {

  const reload = () => window.location.reload();

  return (
    <section className='App'>

      <NavSection />

          <Routes>
              <Route 
                path='/' 
                element=
                  {
                    <LandingPage />
                  } 
              />
              <Route 
                path='/produkti/:id' 
                element=
                  {
                    <ProductPage />
                  } 
              /> 
              <Route 
                path='/kontakti'
                element=
                  {
                    <ContactPage />
                  } 
              />
              <Route 
                path='/drosiba' 
                element=
                  {
                    <SafetyPage />
                  } 
              />
              <Route 
                path='/noteikumi' 
                element=
                  {
                    <PolicyPage />
                  } 
              />
              <Route 
                path='/sitemap.xml' 
                onEnter={reload}
              />
              <Route 
                path='/robots.txt' 
                onEnter={reload}
              />
          </Routes>

      <ScrollToTopButton />

      <FooterSection />

    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>

          <HashRouter>

            <App />

          </HashRouter>
        </PersistGate>
      </Provider>
    
    </React.StrictMode>
);