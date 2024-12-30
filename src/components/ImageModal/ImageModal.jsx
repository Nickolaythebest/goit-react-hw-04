import React from 'react';
import Modal from 'react-modal';
import s from './ImageModal.module.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

function ImageModal({ image, onClose }) {
  return (
    <Modal
      isOpen={!!image} // Модальное окно открыто, если есть изображение
      onRequestClose={onClose}
      style={{
        position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    margin: '0',
    padding: '0',
    border: 'none',
    background: 'rgba(0, 0, 0, 0.9)', // Темный фон
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      }
      }
      contentLabel="Image Modal"
    >
      {image && (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
          <img src={image.src} alt={image.alt} style={{
              maxWidth: '100%',
              maxHeight: '100%',

  
              
              objectFit: 'contain', 
              margin: 'auto',// Центрирование и масштабирование изображения
            }} />
          <button onClick={onClose} className={s.modalBtn} style={{
             position: 'absolute',
             top: '10px',
             right: '10px',
             background: 'rgba(255, 0, 0, 0.8)', // Полупрозрачный красный фон
             color: 'white',
             border: 'none',
             borderRadius: '50%',
             width: '40px',
             height: '40px',
             fontSize: '20px',
             fontWeight: 'bold',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center', // Центрируем "X" внутри кнопки
             cursor: 'pointer',
             boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            }}>X</button>
        </div>
      )}
    </Modal>
  );
}

export default ImageModal;
