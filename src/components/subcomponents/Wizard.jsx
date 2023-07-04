import { NavWizard } from "./NavWizar"
import { SectionWizard } from "./SectionWizard"

export const Wizard = () => {
    let sectionName = ["Section 1", "Section 2"];
    return (
        <>
            <NavWizard />
            <div className="container row">
                <div className="col-12 col-md-6">
                    <SectionWizard sectionName={sectionName = 1} />
                </div>
                <div className="col-12 col-md-6">
                    <SectionWizard sectionName={sectionName = 2} />
                </div>
            </div>





        </>
    )
}