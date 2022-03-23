import React from 'react';
import type { AppProps } from 'next/app';
// import styled from '@emotion/styled';
import { jsx, css, Global, ClassNames } from '@emotion/react';

const reactStyle = css`
  color: red;
`;

const someStyle = css`
  color: teal;
`;

const anotherStyle = css`
  color: #8288;
`;

const SomeComp = ({ children }) => (
  <div css={someStyle}>
    {'SomeComp'}
    {children}
  </div>
);

const AnotherComp = () => <p css={anotherStyle}>AnotherComp</p>;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div css={reactStyle}>{'React css Style'}</div>
      <div css={{ color: 'blue' }}>{'React inline Style'}</div>
      <SomeComp>
        <AnotherComp />
      </SomeComp>
    </>
  );
}

export default MyApp;
