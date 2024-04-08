import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}
const Alert = ({ children, onClose }: Props) => {
  return (
    <>
      <div className="alert alert-success" role="alert">
        {children}
        <button
          type="button"
          className="btn-close ms-5"
          onClick={onClose}
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </>
  );
};

export default Alert;
