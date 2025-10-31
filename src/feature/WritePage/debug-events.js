// 브라우저 콘솔에서 실행 - 이벤트 확인
const proseMirror = document.querySelector('.ProseMirror');
const table = document.querySelector('.ProseMirror table');

if (table) {
  
  table.addEventListener('dblclick', function(e) {
    
    // 직접 스타일 적용
    this.style.outline = '3px solid #0096ff';
    this.style.backgroundColor = 'rgba(0, 150, 255, 0.2)';
    this.style.borderRadius = '4px';
    this.style.boxShadow = '0 0 0 2px rgba(0, 150, 255, 0.3)';
    
  });
  
} else {
}