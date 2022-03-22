import '../styles/globals.css';
import type { AppProps } from 'next/app';
import styled from '@emotion/styled';

let SomeComp = styled.div({
  color: 'hotpink',
});

let AnotherComp = styled.div`
  color: ${(props) => props.color};
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SomeComp>
      yu
      <AnotherComp color="green" />
      dfdf
    </SomeComp>
    // <Component {...pageProps} />;
  );
}

export default MyApp;
