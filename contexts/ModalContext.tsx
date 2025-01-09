import React, { createContext, useState, ReactNode } from "react";

interface ModalContextProps {
  isModalOpen: boolean;
  modalContent: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<ModalContextProps>({
  isModalOpen: false,
  modalContent: null,
  openModal: () => {},
  closeModal: () => {},
});

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, modalContent, openModal, closeModal }}
    >
      {children}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg shadow-xl p-6 w-11/12 md:w-1/2 max-h-full overflow-y-auto z-60 relative">
            {modalContent}
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
};