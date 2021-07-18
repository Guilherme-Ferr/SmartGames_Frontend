import { ModalContainer, Overlay, Span } from "./styles";

function Modal({ title, children, handleClose }) {
  return (
    <Overlay>
      <ModalContainer type="close">
        <Span onClick={handleClose}>&times;</Span>
        <header>{title}</header>
        {children}
      </ModalContainer>
    </Overlay>
  );
}

export default Modal;
