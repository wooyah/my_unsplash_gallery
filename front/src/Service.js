import axios from 'axios';

const artistnames = [
  'alirezaesmaeeli',
  'baronseye',
  'zakvisuals',
  'minhphamdesign',
  'moniqa',
];

export const getArtistList = () => {
  const promises = [];
  artistnames.forEach((artistName) => {
    promises.push(getArtistInfo(artistName));
  });

  return Promise.allSettled(promises);
};

export const getArtistInfo = (artistName) => {
  return axios.get(`http://localhost:8888/artist/${artistName}`);
};
