import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    border: 0;
    list-style: none;
    outline: none;
    box-sizing: border-box;
  }

  :root {
    /**  Sun  **/
    --sky-bg: #96dcee;
    --sun-bg: #fffaa8;
    /**  Moon  **/
    --sky-night-bg: #6b7abb;
    --moon-dots: #e8e8ea;

    /**  Elements  **/
    --white: hsl(0, 0%, 100%);
    --bg: hsl(212, 45%, 89%);
    --blue: hsl(220, 15%, 55%);
    --dark-blue: hsl(218, 44%, 22%);
    --rgba-darkblue: rgba(31, 50, 81, .35);
    --red: #ba0035;
    
    --shadow: 0 .3rem 1rem var(--rgba-darkblue);
    --cubic-bezier: .8s cubic-bezier(.06, .8, .1, 1);
  }
  :root body.dark {
    --white: #002625;
    --bg: #12121a;
    --blue: #fff;
    --dark-blue: #00beb7;
  }

  ::-webkit-scrollbar { width: .7rem; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { border-radius: 1rem; }
  html {
    scrollbar-width: thin;
    scroll-behavior: smooth;
    background-color: var(--bg);
  }

  body {
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 1rem;
    font-family: 'Sulphur Point', sans-serif;
    font-size: 1.2rem;
    background: var(--bg);
    color: var(--blue);
    transition: var(--cubic-bezier);
  }

  header {
    display: grid;
    place-items: center;
    place-content: center;
    grid-template-columns: 4rem max-content 4rem;
    gap: 1rem;
    padding-inline: 1rem;
    padding-bottom: 5rem;
  }

  main {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 5rem;
  }

  @media (max-width: 50em) {
    header {
      padding-top: 3rem;
    }
    main {  
      padding-bottom: 7rem;
      grid-template-columns: 1fr;
    }
  }
`;