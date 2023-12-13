/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';

import Header from '../parts/Header/Header';
import HeroJobs from '../parts/HeroJobs/HeroJobs';
import AllJobs from '../parts/AllJobs/AllJobs';
import Footer from '../parts/Footer/Footer';

import Data from '../json/landingPage.json';

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <HeroJobs {...this.props} />
        <AllJobs data={Data.team} />
        <Footer />
      </>
    );
  }
}