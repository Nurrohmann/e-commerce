import React from 'react';
import Header from '../components/Header';
import Breadcrumb from '../smartcomponent/Breadcrumb/Index';
import ProduckDetails from '../components/Details/ProductDetails';
import Suggestion from '../components/Details/Suggestion';
// import BrowseRoom from '../components/Homepage/BrowseRoom';
// import Clients from '../components/Clients';
import Sitemap from '../components/Sitemap';
import Footer from '../components/Footer';

function Homepage() {
  return (
    <>
      <Header />
      <Breadcrumb
        list={[
          { url: '/', name: 'Home' },
          { url: '/categories/91231', name: 'Office Room' },
          { url: '/categories/91231/products/7888', name: 'Details' },
        ]}
      />

      {/* <Clients /> */}
      <ProduckDetails />
      <Suggestion />
      <Sitemap />
      <Footer />
    </>
  );
}

export default Homepage;
