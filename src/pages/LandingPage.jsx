import React, { Component } from 'react';

import Header from '../parts/Header/Header';
import Hero from '../parts/Hero/Hero';
import Service from '../parts/Service/Service';
import Footer from '../parts/Footer/Footer';

import Data from '../json/landingPage.json';

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero {...this.props} />
        <Service data={Data.service} />
        <Footer />
      </>
    );
  }
}
