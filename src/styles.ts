import styled, { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  vermelho: '#E66767',
  amarelo: '#FFEBD9'
}

export const GlobalCss = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${cores.branca};
    color: ${cores.vermelho};
    padding-top: 24px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
  `