import { CardWizard } from "./CardWizard"

export const SectionWizard = ({ sectionName }) => {

    return (
        <>
            <h1>Section {sectionName}</h1>

            <CardWizard />
            <CardWizard />

        </>
    )
}