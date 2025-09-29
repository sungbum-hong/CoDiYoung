// 브라우저 콘솔에서 실행 - 이벤트 확인
const proseMirror = document.querySelector('.ProseMirror');
const table = document.querySelector('.ProseMirror table');

if (table) {
  console.log('표 발견, 더블클릭 이벤트 리스너 추가');
  
  table.addEventListener('dblclick', function(e) {
    console.log('더블클릭 감지됨!', e.target);
    
    // 직접 스타일 적용
    this.style.outline = '3px solid #0096ff';
    this.style.backgroundColor = 'rgba(0, 150, 255, 0.2)';
    this.style.borderRadius = '4px';
    this.style.boxShadow = '0 0 0 2px rgba(0, 150, 255, 0.3)';
    
    console.log('스타일 적용 완료');
  });
  
  console.log('표를 더블클릭해보세요');
} else {
  console.log('표가 없습니다');
}