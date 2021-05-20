import React from "react";
import { ClockLoader } from "react-spinners";
import { Modal } from "reactstrap";

import "./styles.scss"

export default function Loading() {
  return (
    <Modal className="loading-modal" isOpen={true}>
      <ClockLoader color="#FFB600" />
    </Modal>
  );
}
