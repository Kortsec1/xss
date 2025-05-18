// 공격자가 iframe을 통해 접근 못하지만,
// 피해 페이지가 스스로 postMessage를 쓰면 FLAG가 전달됨
parent.postMessage('asdfasdfasdfadsf');
