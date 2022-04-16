import { createGlobalStyle } from 'styled-components'

const FontStyles = createGlobalStyle`
  @font-face {
    src: local(""),
    url("/static/fonts/Inter/Inter-ExtraBold.woff2") format("woff2");
    font-family: "Inter";
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("/static/fonts/Inter/Inter-Bold.woff2") format("woff2");
    font-family: "Inter";
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("/static/fonts/Inter/Inter-SemiBold.woff2") format("woff2");
    font-family: "Inter";
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("/static/fonts/Inter/Inter-Medium.woff2") format("woff2");
    font-family: "Inter";
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    src: local(""),
    url("/static/fonts/Inter/Inter-Regular.woff2") format("woff2");
    font-family: "Inter";
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
`

export default FontStyles
