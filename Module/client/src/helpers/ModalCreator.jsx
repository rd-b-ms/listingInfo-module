import React from 'react';
import Modals from 'react-responsive-modal';

const Modal = (open, onClose, body) => {
  const style = {
    overlay: {
      background: 'rgba(255, 255, 255, 0.8)',
    },
    closeButton: {
      right: 'auto',
      marginLeft: '13px',
      marginTop: '13px',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      display: 'block',
      borderWidth: '30px',
    },
    modal: {
      width: '517px',
      marginRight: 'auto',
      marginTop: '45px',
      boxShadow: 'rgba(0, 0, 0, 0.2) 0px 1px 10px 0px',
    },
  };
  const closePath = <path d="m23.25 24c-.19 0-.38-.07-.53-.22l-10.72-10.72-10.72 10.72c-.29.29-.77.29-1.06 0s-.29-.77 0-1.06l10.72-10.72-10.72-10.72c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l10.72 10.72 10.72-10.72c.29-.29.77-.29 1.06 0s .29.77 0 1.06l-10.72 10.72 10.72 10.72c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22" style={{ fill: '#878787' }} />;

  return (
    <Modals open={open} onClose={onClose} center styles={style} closeIconSvgPath={closePath}>
      {body}
    </Modals>
  );
};

export default Modal;
