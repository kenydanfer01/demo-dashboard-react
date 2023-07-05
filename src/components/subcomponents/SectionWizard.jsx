import { CardWizard } from "./CardWizard"

export const SectionWizard = ({ sectionName }) => {

    return (
        <>
            <h3>Section {sectionName}</h3>

            <CardWizard />
            <CardWizard />

        </>
    )
}