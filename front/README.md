# Front-End

간단한 구조입니다.
- Back-End 로부터 작가들 리스트를 가져와서
- 각 작가의 프로필 사진과 이름을 보여주고
- 최신 사진 3개를 보여주고
- 각 사진을 클릭하면 라이트박스에 원본 사진을 보여줍니다.

### 파일 구성
| File | Description |
| ------ | ------ |
| App.js | Back-End 로부터 작가 리스트 호출 (Service.js), 템플릿 렌더링, 작가 정보 렌더링 |
| ArtistListTemplate.js | 작가 정보 컴포넌트를 배치하는 템플릿 컴포넌트 |
| ArtistInfo.js | 작가 정보 컴포넌트. 작가 프로필, 이름, 최신사진, 라이트박스 처리  |
| Service.js | Back-End 로부터 작가 리스트 호출 |
| ButtonLike.js | 좋아요 버튼 ( 추후 업데이트용 ) |
