import styled, { createGlobalStyle } from 'styled-components';

export const Container = styled.div`
   width: 100%;
   height: 100%;
   max-width: 980px;
   padding: 0 15px;
   margin: 20px auto 0;
   display: grid;
   
   grid-template-areas:
     "sidebar content"
     "sidebar content";
   grid-template-rows: 1fr;
   grid-template-columns: 2fr 10fr;
   grid-gap: 20px;
`;

export const GlobalStyles = createGlobalStyle`
   body {
      min-height: 100vh;
      padding-top: 85px;
      margin: 0;
      
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
         'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
         sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      font-size: 1rem;
      font-weight: 400;
      background-color: #FAFAFB;
   }
   
   code {
     font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
       monospace;
   }
   
   *, *::before, *::after {
     box-sizing: border-box;
     margin: 0;
     padding: 0;
   }
   
   input, button {
     border: none;
   }
   
   input:focus,
   button:focus {
     outline: none;
   }
   
   button {
     background: none;
   }
   
   a {
     text-decoration: none;
     color: inherit;
   }
   
   h1, h2, h3, h4, h5, h6 {
     font-size: inherit;
   }
`;



