// 브라우저 콘솔에서 실행할 디버깅 코드
console.log('=== 선택 문제 디버깅 ===');

// 1. 에디터 요소 찾기
const editorContainer = document.querySelector('.tiptap-editor');
const proseMirror = document.querySelector('.ProseMirror');

console.log('에디터 컨테이너:', editorContainer);
console.log('ProseMirror 요소:', proseMirror);

if (proseMirror) {
  // 2. 현재 CSS 스타일 확인
  const computedStyle = window.getComputedStyle(proseMirror);
  console.log('user-select:', computedStyle.userSelect);
  console.log('pointer-events:', computedStyle.pointerEvents);
  console.log('position:', computedStyle.position);
  
  // 3. 표 요소들 확인
  const tables = proseMirror.querySelectorAll('table');
  console.log('표 개수:', tables.length);
  
  tables.forEach((table, index) => {
    const tableStyle = window.getComputedStyle(table);
    console.log(`표 ${index + 1}:`, {
      userSelect: tableStyle.userSelect,
      pointerEvents: tableStyle.pointerEvents,
      position: tableStyle.position
    });
    
    const cells = table.querySelectorAll('td, th');
    cells.forEach((cell, cellIndex) => {
      const cellStyle = window.getComputedStyle(cell);
      console.log(`  셀 ${cellIndex + 1}:`, {
        userSelect: cellStyle.userSelect,
        pointerEvents: cellStyle.pointerEvents
      });
    });
  });
  
  // 4. 이벤트 리스너 확인
  console.log('ProseMirror 이벤트 리스너:', proseMirror.getEventListeners?.() || '확인 불가');
}

// 5. TipTap 에디터 인스턴스 확인
if (window.editor) {
  console.log('TipTap 에디터:', window.editor);
  console.log('에디터 상태:', window.editor.state);
} else {
  console.log('TipTap 에디터 인스턴스를 찾을 수 없습니다.');
}

// 6. 선택 테스트 함수
window.testSelection = function() {
  console.log('현재 선택:', document.getSelection().toString());
  console.log('선택된 Range 개수:', document.getSelection().rangeCount);
  
  if (document.getSelection().rangeCount > 0) {
    const range = document.getSelection().getRangeAt(0);
    console.log('선택 시작:', range.startContainer);
    console.log('선택 끝:', range.endContainer);
  }
};

console.log('testSelection() 함수를 사용해서 선택을 테스트하세요.');