import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

function YoutubePlayList() {
  const [playing, setPlaying] = useState('');

  const playlistData = [
    {
      id: 1,
      // src: 'https://www.youtube.com/watch?v=K2MfpA_4EEs&list=TLGGm25RGvc1fywwNjA3MjAyMg&index=1',
      src: 'K2MfpA_4EEs',
      title:
        '"당신에게도 되감고 싶은 시간이 있습니까?" (𝐟𝐞𝐚𝐭. 위저드 베이커리🍞🥐)ㅣ𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭',
    },
    {
      id: 2,
      // src: 'https://www.youtube.com/watch?v=2vSFVr5Unig&list=TLGGm25RGvc1fywwNjA3MjAyMg&index=2',
      src: '2vSFVr5Unig',
      title: '[𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭] 이 노래 뭐야? 아마 처음 들어봤을걸?? 🌿☁️',
    },
    {
      id: 3,
      // src: 'https://www.youtube.com/watch?v=Vc5JNvIq22Q&list=TLGGm25RGvc1fywwNjA3MjAyMg&index=3',
      src: 'Vc5JNvIq22Q',
      title:
        '고개를 드니 하늘은 핑크빛으로 물들어 있어 ٩(๑❛ᴗ❛๑)۶ [ 추천곡 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 ]',
    },
  ];

  const changeMusic = (e) => {
    setPlaying(e.target.id);
    console.log('playing :>> ', playing);
  };

  return (
    <Wrapper>
      <Container>
        <iframe
          width="600"
          height="360"
          src={
            playing
              ? `https://www.youtube.com/embed/${playing}?list=TLGGm25RGvc1fywwNjA3MjAyMg`
              : 'https://www.youtube.com/embed/K2MfpA_4EEs?list=TLGGm25RGvc1fywwNjA3MjAyMg'
          }
          title="지금 당장 달빛 무지개 분수 보러갈 사람 모집합니다🌈💜 [ 𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 ]"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen></iframe>
        <PlayList>
          <PlayListHeader>
            <span>플레이리스트</span>
            <FontAwesomeIcon icon={faHeart} />
          </PlayListHeader>
          {playlistData.map((item) => (
            <PlayListItem key={item.id} onClick={changeMusic} id={item.src}>
              {item.id}번 {item.title}
            </PlayListItem>
          ))}
        </PlayList>
      </Container>
    </Wrapper>
  );
}

export default YoutubePlayList;

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
  width: 600px;
  height: 600px;
  flex-direction: column;
  justify-content: space-around;
`;

const PlayList = styled.div`
  width: 594px;
  height: fit-content;
  border: 3px solid #22577a;
`;

const PlayListHeader = styled(Center)`
  width: 554px;
  height: 30px;
  padding: 5px 20px;
  justify-content: space-between;
  border-bottom: 3px solid #22577a;
`;

const PlayListItem = styled.li`
  list-style: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #38a3a5;
  }
`;
