import React from 'react';

import { ContentBox } from '../../_styles_css/explore/styles';

import NavBar from '../../_components/navbar';
import Footer from '../../_components/footer';
import Cards from '../../_components/card';

const Explore: React.FC = () => {
  return (
    <>
      <NavBar />
      <ContentBox>
        <br />
        <h1>What's the best company for you?</h1>
      </ContentBox>
      <Cards />

      <Footer />
    </>
  );
};

export default Explore;
