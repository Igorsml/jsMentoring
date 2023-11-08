import React, { useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import scss from "./PortalModal.module.scss";

const PortalModalElement = document.querySelector("#modal");

const PortalModal = (props) => {
  const { open, onClose } = props;

  const element = useMemo(() => {
    const element = document.createElement("div");
    return element;
  }, []);

  useEffect(() => {
    if (open) {
      PortalModalElement.appendChild(element);

      return () => {
        PortalModalElement.removeChild(element);
      };
    }
  });

  if (open) {
    return createPortal(
      <div className={scss.modalBackground} onClick={onClose}>
        <div className={scss.modalCard}>{props.children}</div>
      </div>,
      element
    );
  }

  return null;
  // return open
  //   ? createPortal(
  //       <div className={scss.modalBackground}>
  //         <div className={scss.modalCard}>{props.children}</div>
  //       </div>,
  //       element
  //     )
  //   : null;
};

export default PortalModal;
