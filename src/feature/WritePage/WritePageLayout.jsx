import { useState } from 'react';
import RecordModal from '../../components/RecordModal';
import Button from '../../ui/Button.jsx';

export default function WritePageLayout({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRecordClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            스터디
          </h1>
            <Button variant="secondary" className='w-32 h-8' onClick={handleRecordClick}>기록하기</Button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border">
          {children}
        </div>
      </div>
      
      <RecordModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}