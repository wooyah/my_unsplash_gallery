import React, { useState } from 'react';
import styled from 'styled-components';
import Lightbox from 'react-image-lightbox';
import { get } from 'lodash';
import 'react-image-lightbox/style.css';

import ButtonLike from './ButtonLike';

const ArtistInfoBox = styled.div`
  border-radius: 5px;
  border: 1px solid #cfccf9;
  margin: 10px;
  padding: 5px;
  width: 200px;
`;

const ArtistProfile = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 200px;
  height: 200px;
`;

const ArtistName = styled.div`
  height: 80px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const ArtistPhotoArea = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const PhotoMask = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  width: 200px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const PhotoItem = styled.img`
  border-radius: 10%;
  max-width: 100%;
  max-height: 100%;
`;

function ArtistInfo({ artist }) {
  let profile = get(artist, 'profile_image.large');
  profile = profile.replace('w=128', 'w=200').replace('h=128', 'h=200');

  const [isOpenLightBox, setIsOpenLightBox] = useState(false);
  const [wideImageSrc, setWideImageSrc] = useState('');

  const openWide = (url) => {
    setWideImageSrc(url);
    setIsOpenLightBox(true);
  };

  return (
    <ArtistInfoBox>
      {isOpenLightBox && (
        <Lightbox
          mainSrc={wideImageSrc}
          onCloseRequest={() => setIsOpenLightBox(false)}
        />
      )}
      {/* <ButtonLike /> */}
      <ArtistProfile src={profile} />
      <ArtistName>{get(artist, 'name', 'Artist')}</ArtistName>
      <ArtistPhotoArea>
        {artist.photos.map((pic, idx) => (
          <PhotoMask
            key={idx}
            onClick={() => {
              openWide(get(pic, 'urls.regular'));
            }}
          >
            <PhotoItem src={get(pic, 'urls.thumb')} />
          </PhotoMask>
        ))}
      </ArtistPhotoArea>
    </ArtistInfoBox>
  );
}

export default ArtistInfo;
