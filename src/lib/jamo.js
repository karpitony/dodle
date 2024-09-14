export function jamo(kor) {
    // 초성, 중성, 종성 배열
    const f = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ',
            'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ',
            'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
    const s = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ',
            'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ',
            'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
    const t = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ',
            'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ',
            'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ',
            'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
  
    const ga = 44032;
  
    // 결과를 저장할 2차원 배열
    let result = [];
  
    // 입력된 문자열의 각 문자를 처리
    for (let i = 0; i < kor.length; i++) {
        let uni = kor.charCodeAt(i);
  
        // 한글이 아니면 1차원 배열로 추가
        if (uni < ga || uni > 55203) {
            result.push([kor[i]]);
            continue;
        }
  
        uni = uni - ga;
  
        let fn = parseInt(uni / 588);
        let sn = parseInt((uni - (fn * 588)) / 28);
        let tn = parseInt(uni % 28);
  
        // 초성, 중성, 종성을 1차원 배열로 추가
        if (t[tn] !== '') {
            result.push([f[fn], s[sn], t[tn]]);
        } else {
            result.push([f[fn], s[sn]]);
        }
    }
    // 안녕 -> [[ㅇ, ㅏ, ㄴ], [ㄴ, ㅕ, ㅇ]]
    return result;
  }
  
