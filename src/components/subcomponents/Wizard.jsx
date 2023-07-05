import { NavWizard } from "./NavWizar"
import { SectionWizard } from "./SectionWizard"

export const Wizard = () => {
    let sectionName = ["Section 1", "Section 2"];
    return (
        <>
            <NavWizard />
            <SectionWizard sectionName={sectionName = 1} />

        </>
    )
}