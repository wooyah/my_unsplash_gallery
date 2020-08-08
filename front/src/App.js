import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { get } from 'lodash';
import ArtistListTemplate from './ArtistListTemplate';
import ArtistInfo from './ArtistInfo';
import { getArtistList } from './Service';

const ContainerBox = styled.div`
  background: #e9ecef;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [artistList, setArtistList] = useState([]);

  useEffect(() => {
    const getArtist = async () => {
      let artistInfoArr = await getArtistList();
      artistInfoArr = artistInfoArr.map((artist) => {
        if (artist.status === 'fulfilled') {
          return get(artist, 'value.data');
        }
      });
      console.log('[*] artistList | ', artistInfoArr);
      setArtistList(artistInfoArr);
    };
    getArtist();
  }, []);
  return (
      <ContainerBox>
        <ArtistListTemplate>
  {artistList.map((artist, idx) => <ArtistInfo key={idx} artist={artist}/>)}
        </ArtistListTemplate>
      </ContainerBox>
  );
}

export default App;
