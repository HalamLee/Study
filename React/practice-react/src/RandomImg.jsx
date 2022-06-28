import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function RandomImg() {
  const baseUrl = 'https://i.ibb.co/M5mVx6H/image.jpg';

  const [randomUrl, setRandomUrl] = useState(baseUrl);

  const getRandomImg = () => {
    const randomId = Math.floor(Math.random() * 1001);
    const reqUrl = `https://picsum.photos/id/${randomId}/info`;

    axios
      .get(reqUrl)
      .then((response) => {
        setRandomUrl(response.data.download_url);
      })
      .catch((error) => {
        console.log(error);
        getRandomImg();
      });

    console.log(randomUrl);
  };

  return (
    <Wrapper>
      <Container>
        <Thumbnail url={randomUrl}>
          {randomUrl !== baseUrl && (
            <Blur>
              <Title>Plinic</Title>
            </Blur>
          )}
        </Thumbnail>
        <Button onClick={getRandomImg}>Get Random Img</Button>
      </Container>
    </Wrapper>
  );
}

export default RandomImg;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled(Center)`
  width: 100vw;
  height: 100vh;
`;

const Container = styled(Center)`
  width: 500px;
  height: 500px;
  flex-direction: column;
  border: 5px solid #22577a;
`;

const Thumbnail = styled(Center)`
  width: 200px;
  height: 200px;
  margin-bottom: 50px;
  background: url(${(props) => props.url}) center/cover;
`;

const Blur = styled(Center)`
  width: 130px;
  height: 130px;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Title = styled.span`
  font-size: 32px;
  color: white;
`;

const Button = styled(Center)`
  width: 150px;
  height: 40px;
  cursor: pointer;
  background-color: #38a3a5;
  border-radius: 10px;
  color: white;
`;
