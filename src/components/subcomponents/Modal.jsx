import { HeadModal } from "./HeadModal";
import { Wizard } from "./Wizard";

export const ModalWizard = () => {
  return (
    <>
      <div className="row m-3">
        <HeadModal />
        <Wizard />
      </div>
    </>
  );
};
