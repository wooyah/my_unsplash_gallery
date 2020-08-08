import React from 'react';
import styled from 'styled-components';

const ArtistListTemplateBox = styled.div`
  width: 1200px;
  min-height: 600px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border-radius: 10px;
  box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.04);
`;

function ArtistListTemplate({ children }) {
  return <ArtistListTemplateBox>{children}</ArtistListTemplateBox>;
}

export default ArtistListTemplate;
