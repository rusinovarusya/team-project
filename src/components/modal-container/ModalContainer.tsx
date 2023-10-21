import { FC, PropsWithChildren } from "react";
import ReactDOM from "react-dom";


interface ModalContainerProps {
  onClick: () => void;
}

const ModalContainer: FC<PropsWithChildren<ModalContainerProps>> = ({ children, onClick }) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal-shadow" onClick={onClick}></div>
      <div className="modal">{children}</div>
    </>,
    document.getElementById("app-modal") as HTMLDivElement
  );
}

export default ModalContainer;
