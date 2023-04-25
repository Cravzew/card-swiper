import React from "react";
import {createRoot} from 'react-dom/client';
import App from "./pages/App";
import {createGlobalStyle} from "styled-components";
import SFUIDisplayThinWoff2 from './fonts/SFUIDisplay-Thin.woff2'
import SFUIDisplayThinWoff from './fonts/SFUIDisplay-Thin.woff'
import SFUIDisplayLightWoff2 from './fonts/SFUIDisplay-Light.woff2'
import SFUIDisplayLightWoff from './fonts/SFUIDisplay-Light.woff'
import SFUIDisplayRegularWoff2 from './fonts/SFUIDisplay-Regular.woff2'
import SFUIDisplayRegularWoff from './fonts/SFUIDisplay-Regular.woff'
import SFUIDisplayMediumWoff2 from './fonts/SFUIDisplay-Medium.woff2'
import SFUIDisplayMediumWoff from './fonts/SFUIDisplay-Medium.woff'
import SFUIDisplayBoldWoff2 from './fonts/SFUIDisplay-Bold.woff2'
import SFUIDisplayBoldWoff from './fonts/SFUIDisplay-Bold.woff'
import {Provider} from "react-redux";
import {store} from "./store/store";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Liked from "./pages/Liked";

const GlobalStyled = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'San Francisco(SF UI)', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 400;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  ul,
  ol {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  button {
    padding: 0;
    margin: 0;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }

  @font-face {
    font-family: 'San Francisco(SF UI)';
    src: local('San Francisco(SF UI) Display Thin');
    src: local('San-Francisco(SF-UI)-Display-Thin');
    src: url(${SFUIDisplayThinWoff2}) format('woff2'),
    url(${SFUIDisplayThinWoff}) format('woff');
    font-weight: 200;
    font-style: normal;
  }

  @font-face {
    font-family: 'San Francisco(SF UI)';
    src: local('San Francisco(SF UI) Display Light');
    src: local('San-Francisco(SF-UI)-Display-Light');
    src: url(${SFUIDisplayLightWoff2}) format('woff2'),
    url(${SFUIDisplayLightWoff}) format('woff');
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: 'San Francisco(SF UI)';
    src: local('San Francisco(SF UI) Display Regular');
    src: local('San-Francisco(SF-UI)-Display-Regular');
    src: url(${SFUIDisplayRegularWoff2}) format('woff2'),
    url(${SFUIDisplayRegularWoff}) format('woff');
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: 'San Francisco(SF UI)';
    src: local('San Francisco(SF UI) Display Medium');
    src: local('San-Francisco(SF-UI)-Display-Medium');
    src: url(${SFUIDisplayMediumWoff2}) format('woff2'),
    url(${SFUIDisplayMediumWoff}) format('woff');
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'San Francisco(SF UI)';
    src: local('San Francisco(SF UI) Display Bold');
    src: local('San-Francisco(SF-UI)-Display-Bold');
    src: url(${SFUIDisplayBoldWoff2}) format('woff2'),
    url(${SFUIDisplayBoldWoff}) format('woff');
    font-weight: 700;
    font-style: normal;
  }
`

const router = createBrowserRouter([
    {
        path: "/",
        element: <><GlobalStyled/><App/></>,
    },
    {
        path: '/liked',
        element: <><GlobalStyled/><Liked/></>
    }
]);

const root = createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
)