import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const cores = {
  corPrimary: '#E66767',
  corSecondary: '#FFEBD9',
  corBackground: '#F5F5F5',
  corTexto: '#ffffff'
}

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;


    ::-webkit-scrollbar {
      width: 8px;
    }

/* Track */
::-webkit-scrollbar-track {
  background: ${cores.corBackground};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

  }

  body {
    background-color: ${cores.corBackground};

    a {
      text-decoration: none;
    }
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 80%;
    }
  }
`
