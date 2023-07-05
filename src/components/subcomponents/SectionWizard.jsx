import { CardWizard } from "./CardWizard";

export const SectionWizard = ({ sectionName }) => {
  return (
    <>
      <div className="col-12 col-md-6 px-1">
        <CardWizard />
      </div>
      <div className="col-12 col-md-6 px-1">
        <CardWizard />
      </div>
    </>
  );
};
