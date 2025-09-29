// 브라우저 콘솔에 붙여넣기해서 실행
console.log('=== 표 선택 디버깅 ===');

// 표 찾기
const table = document.querySelector('.ProseMirror table');
if (table) {
  console.log('표 발견:', table);
  console.log('표의 클래스들:', table.className);
  
  // 표 더블클릭 후 클래스 변화 감지
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        console.log('표 클래스 변경됨:', mutation.target.className);
      }
    });
  });
  
  observer.observe(table, { attributes: true });
  
  console.log('표를 더블클릭해보세요. 클래스 변화를 감지합니다.');
} else {
  console.log('표를 찾을 수 없습니다. 먼저 표를 생성해주세요.');
}