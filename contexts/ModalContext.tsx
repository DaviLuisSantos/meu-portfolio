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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-black rounded-xl shadow-3xl p-8 w-11/12 md:w-1/3 max-h-full overflow-y-auto z-60 relative transform transition-transform duration-500 scale-95">
            {modalContent}
            <div className="mt-6 text-right">
              <button
                onClick={closeModal}
                className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
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
