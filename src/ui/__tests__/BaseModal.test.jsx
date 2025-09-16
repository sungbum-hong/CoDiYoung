import { render, screen, fireEvent } from '@testing-library/react';
import BaseModal from '../BaseModal';

// 필요한 상수들 모킹
jest.mock('../../utils/colors.js', () => ({
  COLORS: {
    BLACK: '#000000',
    GRAY_900: '#111827'
  },
  COLOR_VARIANTS: {
    modal: {
      background: '#ffffff',
      border: '#e5e7eb'
    }
  }
}));

jest.mock('../../constants/config.js', () => ({
  CONFIG: {
    MODAL_SIZES: {
      DEFAULT: { width: 800, height: 600 },
      SMALL: { width: 400, height: 300 },
      LARGE: { width: 1200, height: 800 }
    },
    Z_INDEX: {
      MODAL_TITLE: 1000,
      MODAL_BACKDROP: 999,
      MODAL_CONTENT: 1001
    }
  }
}));

// useEffect를 사용하는 컴포넌트이므로 DOM 조작 테스트를 위해 body 스타일 모킹
const originalBodyStyle = document.body.style.overflow;

describe('BaseModal', () => {
  beforeEach(() => {
    document.body.style.overflow = originalBodyStyle;
  });

  afterEach(() => {
    document.body.style.overflow = originalBodyStyle;
  });

  it('isOpen이 false일 때 모달이 렌더링되지 않는다', () => {
    render(
      <BaseModal isOpen={false} onClose={jest.fn()}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    expect(screen.queryByText('Modal Content')).not.toBeInTheDocument();
  });

  it('isOpen이 true일 때 모달이 올바르게 렌더링된다', () => {
    render(
      <BaseModal isOpen={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('title이 제공될 때 타이틀이 표시된다', () => {
    render(
      <BaseModal isOpen={true} onClose={jest.fn()} title="Test Modal">
        <div>Modal Content</div>
      </BaseModal>
    );
    
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByRole('dialog')).toHaveAttribute('aria-labelledby', 'base-modal-title');
  });

  it('showTitle이 false일 때 타이틀이 표시되지 않는다', () => {
    render(
      <BaseModal isOpen={true} onClose={jest.fn()} title="Test Modal" showTitle={false}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('오버레이 클릭 시 onClose가 호출된다', () => {
    const handleClose = jest.fn();
    render(
      <BaseModal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    const overlay = screen.getByRole('dialog').parentElement;
    fireEvent.click(overlay);
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('closeOnOverlayClick이 false일 때 오버레이 클릭해도 닫히지 않는다', () => {
    const handleClose = jest.fn();
    render(
      <BaseModal isOpen={true} onClose={handleClose} closeOnOverlayClick={false}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    const overlay = screen.getByRole('dialog').parentElement;
    fireEvent.click(overlay);
    
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('모달 컨텐츠 클릭 시 onClose가 호출되지 않는다', () => {
    const handleClose = jest.fn();
    render(
      <BaseModal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    const modalContent = screen.getByRole('dialog');
    fireEvent.click(modalContent);
    
    expect(handleClose).not.toHaveBeenCalled();
  });

  it('ESC 키 입력 시 onClose가 호출된다', () => {
    const handleClose = jest.fn();
    render(
      <BaseModal isOpen={true} onClose={handleClose}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    fireEvent.keyDown(window, { key: 'Escape' });
    
    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it('다양한 size 설정이 올바르게 적용된다', () => {
    const { rerender } = render(
      <BaseModal isOpen={true} onClose={jest.fn()} size="SMALL">
        <div>Small Modal</div>
      </BaseModal>
    );
    
    let modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
    
    rerender(
      <BaseModal isOpen={true} onClose={jest.fn()} size="LARGE">
        <div>Large Modal</div>
      </BaseModal>
    );
    
    modal = screen.getByRole('dialog');
    expect(modal).toBeInTheDocument();
  });

  it('사용자 정의 className과 style이 올바르게 적용된다', () => {
    render(
      <BaseModal 
        isOpen={true} 
        onClose={jest.fn()} 
        className="custom-modal"
        style={{ border: '3px solid red' }}
      >
        <div>Custom Modal</div>
      </BaseModal>
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveClass('custom-modal');
    expect(modal).toHaveStyle('border: 3px solid red');
  });

  it('모달이 열릴 때 body 스크롤이 잠긴다', () => {
    const { unmount } = render(
      <BaseModal isOpen={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    expect(document.body.style.overflow).toBe('hidden');
    
    unmount();
    expect(document.body.style.overflow).toBe('unset');
  });

  it('접근성 속성이 올바르게 설정된다', () => {
    render(
      <BaseModal isOpen={true} onClose={jest.fn()} title="Accessible Modal">
        <div>Modal Content</div>
      </BaseModal>
    );
    
    const modal = screen.getByRole('dialog');
    expect(modal).toHaveAttribute('aria-modal', 'true');
    expect(modal).toHaveAttribute('aria-labelledby', 'base-modal-title');
    expect(modal).toHaveAttribute('tabIndex', '-1');
  });

  it('모달이 닫힐 때 이벤트 리스너가 정리된다', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    
    const { unmount } = render(
      <BaseModal isOpen={true} onClose={jest.fn()}>
        <div>Modal Content</div>
      </BaseModal>
    );
    
    unmount();
    
    expect(removeEventListenerSpy).toHaveBeenCalledWith('keydown', expect.any(Function));
    
    removeEventListenerSpy.mockRestore();
  });
});