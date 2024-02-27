
// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'


export default function Education() {
    return (
        <Section classProp={`${career.section} borderBottom`}>
            <Container spacing={['verticalXXXLrg']}>
                <SectionTitle
                    title="Education"
                    preTitle="Formal"
                    subTitle="I am currently studying at the School Jose Hernandez."
                />
                <section className={career.area}>

                    <article className={career.company}>
                        <div className={career.companyContent}>
        <span className={career.companyHeader}>
            <h3>Jose Hernandez School</h3>
            <h5>Argentina, Buenos Aires</h5>
        </span>
                            <p>I am in the fourth year of secondary school in the subject of economics.</p>

                        </div>
                        <div className={career.companyAlt}></div>
                    </article>

                </section>
            </Container>
        </Section>
    )
}

