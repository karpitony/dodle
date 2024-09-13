// calc 함수: 정답의 자모 배열과 유저 입력 자모 배열을 비교하는 함수
// 결과는 자모와 매칭 상태(0, 1, 2)의 배열로 반환
export function calc(userJamo, answerJamo) {
  let len = userJamo.length;
  let result = new Array(len).fill(0);
  let visited = new Array(len).fill(0);

  let output = [];

  // 1. 정확한 위치에 있는 자모 매칭 (1로 표시)
  for (let i = 0; i < len; i++) {
    if (userJamo[i] === answerJamo[i]) {
      result[i] = 1;
      visited[i] = 1;
    }
  }

  // 2. 위치는 틀리지만 자모가 정답에 포함된 경우 (2로 표시)
  for (let i = 0; i < len; i++) {
    if (result[i] === 0) {
      for (let j = 0; j < len; j++) {
        if (userJamo[i] === answerJamo[j] && visited[j] === 0) {
          result[i] = 2;
          visited[j] = 1;
          break;
        }
      }
    }
    output.push({ letter: userJamo[i], matched: result[i] });
  }

  return output;
}
