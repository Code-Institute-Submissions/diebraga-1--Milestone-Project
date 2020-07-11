import styled from 'styled-components';
import { shade } from 'polished';

import bannerBackground5 from '../../_assets/banner7.jpg';
import bannerBackground6 from '../../_assets/banner5.jpg';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export const Banner = styled.div`
  flex: 1;
  background: url(${bannerBackground5}) no-repeat center;
  margin-top: -0%;
  background-size: cover;
  max-height: 500px;
  display: flex;
  place-content: center;
  align-content: center;
  align-self: auto;
  h1 {
    max-width: 500px;
    font-size: 50px;
    margin: 5%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 40px;
    margin-top: 50px;
  }

  p {
    font-size: 23px;
    margin-top: 20px;

    a {
      text-decoration: none;
    }
  }

  aside {
    height: 394px;
    background: url(${bannerBackground6}) no-repeat center;
    background-size: cover;
  }

  section {
    max-width: 700px;
    margin: auto;
    height: 394px;
  }
`;

export const GetStarted = styled.div`
  background: #ff9000;
  padding-left: 20%;
  padding-right: 20%;

  h1 {
    margin-top: 30px;
  }

  button {
    background: #eb3f3b;
    color: #fff;
    font-size: 18px;
    margin-bottom: 5%;

    &:hover {
      background: ${shade(0.2, '#eb3f3b')};
    }
  }
`;

/**
 * Export the styled component
 * to the referenced page
 *
 */
