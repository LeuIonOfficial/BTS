import { Modal } from "antd";
import { ReactNode } from "react";

const CustomModal = ({
  title,
  isModalOpen,
  handleOk,
  handleCancel,
  children,
}: {
  title: string;
  isModalOpen: boolean;
  handleOk?: () => void;
  handleCancel?: () => void;
  children?: ReactNode;
}) => {
  return (
    <Modal
      title={title}
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
    >
      {children}
    </Modal>
  );
};

export default CustomModal;
