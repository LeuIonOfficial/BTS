import { CustomModal } from "@components/index.ts";
import { Dispatch, SetStateAction } from "react";
import { useTypeOfModalFilter } from "./constants.tsx";

const FilterModal = ({
  modalState,
  setModalState,
}: {
  modalState: string | undefined;
  setModalState: Dispatch<SetStateAction<string | undefined>>;
}) => {
  const typeOfModalFilter = useTypeOfModalFilter();
  if (!!modalState) {
    const { title, description } = typeOfModalFilter[modalState];
    return (
      <CustomModal
        isModalOpen={true}
        handleCancel={() => setModalState(undefined)}
        title={title}
        handleOk={() => {
          setModalState(undefined);
        }}
      >
        {description()}
      </CustomModal>
    );
  }
};

export default FilterModal;
