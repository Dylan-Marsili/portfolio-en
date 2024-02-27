
// Core packages
import Badges from '../../../utils/badge.list'

// Section structure
import Section from '../../../structure/section';
import Container from '../../../structure/container';

// Section general blocks
import SectionTitle from '../../../blocks/section.title'

// Career scss
import career from '../../../../styles/scss/sections/index/career.module.scss'
import Education from "./education";


export default function Career() {
	return (
		<Section classProp={`${career.section} borderBottom`}>
			<Container spacing={['verticalXXXLrg']}>
				<SectionTitle
					title="Experience"
					preTitle="Career"
					subTitle="I am a Full Stack Developer, currently working in the project development field. My primary goal is to enhance my skills and expand my knowledge to gain valuable experience in complex project development. I am dedicated to continuously improving and staying updated with the latest advancements in the industry."
				/>
				<section className={career.area}>
						<div className={career.position}>

						<div className={career.companyContent}>
							<span className={career.companyHeader}>
						<h3>Open Source Contributor & Full Stack Developer</h3>
									<h4>Permanent Full Time · Present</h4>
							</span>
							<p>
								As a Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.
							</p>
						</div>
						<div className={career.companyAlt}></div>

						<Badges list={fullStack} block="stack" fullContainer="fullContainer" color={undefined}/>
						</div>

					{/*	<article className={career.companyPositions}>


						<div className={career.position}>
							<div className={career.positionContent}>
								<span class={career.positionHeader}>
									<h3>Full Stack Developer & User Experience Designer</h3>
								</span>
								<p>
As a  Full Stack Developer, my current focus lies in the field of complex project development. I am committed to continuously enhancing my skills and expanding my knowledge to gain valuable experience in this domain. By actively staying updated with the latest advancements and trends in the industry, I ensure that I am equipped with the necessary tools and techniques to tackle challenging projects. My primary goal is to contribute effectively to the development of sophisticated applications, leveraging my expertise in both front-end and back-end technologies. Through my dedication to continuous improvement, I strive to deliver high-quality solutions that meet the evolving needs of the industry.								</p>
								<p>
								Liber consectetur graece nostra commune. Eam dolores ancillae lobortis noster. Vim posse elit dui theophrastus. Reque atqui corrumpit quam minim quisque. Taciti moderatius graece usu aenean. Agam orci commodo mea sit quam. Mus mazim morbi conclusionemque causae constituto congue sed indoctum. Efficiantur non movet saepe meliore evertitur posidonium vocibus efficitur. Veniam ius epicurei has vitae discere quisque dictumst. Viris pri vituperatoribus inimicus neque petentium erat tibique porttitor. Tacimates auctor in omittam utroque saperet eleifend utroque definitiones. Venenatis mediocritatem recteque consequat fusce debet facilisis. Aperiri nobis erat vivendo morbi falli rutrum ancillae dicant persius. Congue habemus nulla fringilla quaerendum augue mucius ei quam quo. Accumsan cetero ex sapien idque quaestio eget natoque eum ponderum. Interdum mauris eripuit volutpat sententiae. Conubia singulis natoque vestibulum morbi affert epicurei. Mentitum solum duis adolescens persecuti propriae neque agam. Habitasse detraxit mi fabellas voluptaria nunc suscipit. Senserit ea feugait indoctum mi. Vero scripserit quaerendum iriure facilisi his iusto quod. Finibus vulputate eirmod adipisci nullam usu ante quaestio maiorum doctus. Nunc simul suspendisse nisi salutatus error sanctus curabitur invidunt. Falli dolor consul dissentiunt dictumst reformidans delectus qui. Mauris veniam mauris constituto volutpat quidam. Aliquip eruditi senserit atomorum augue moderatius. His reque porttitor senectus etiam sem quam dissentiunt fringilla conclusionemque. Nihil parturient constituto decore voluptatum atqui quod alienum at. Nulla nostrum ad platea scripserit. Commune ubique tractatos sollicitudin doming. Ignota hac persequeris litora accommodare. Conclusionemque augue ignota elitr auctor orci. Sapien lobortis finibus partiendo arcu referrentur. Nostra aenean numquam dolores class aenean viderer. Errem praesent ubique habitasse comprehensam elaboraret. Delectus sapien elementum nec reque. Melius error novum adhuc referrentur dictum. Percipit elit principes placerat repudiandae auctor mollis. Mei reque sollicitudin ferri accommodare civibus quas. Moderatius interdum massa risus graece vero conclusionemque adhuc. Ne cubilia dicit maecenas mollis. Iudicabit numquam definiebas necessitatibus habitant dolorem iisque. Varius corrumpit curae dicat cursus. Scripserit nostra molestiae periculis audire propriae viderer. Etiam expetendis vidisse evertitur signiferumque dicant natum. Causae lectus reformidans tortor amet. Tempor doctus falli vivendo aenean liber magnis mus. Neque delenit quo nisl altera sagittis. Tale consectetuer metus ante elit. Errem vitae mazim mandamus impetus ridiculus aliquam indoctum dicant inimicus.
								</p>
								<ul className={career.list}>
									<li>
										Lorem
										<span className={career.subList}><span className={career.bullet}></span>Lorem</span>
									</li>


								</ul>
								<Badges list={fullStack} block="stack" fullContainer="fullContainer"/>
							</div>
							<div className={career.positionAlt}></div>
						</div>

					</article>
*/}
				</section>
			</Container>
			<Education/>

		</Section>

	)
}

const fullStack = [
	{ key: 'javascript', name: 'JavaScript', type: 'devicon' },
	{ key: 'nodejs', name: 'NodeJS', type: 'devicon' },
	{ key: 'react', name: 'React', type: 'devicon' },
	{ key: 'nextjs', name: 'NextJS', type: 'devicon' },
	{ key: 'html5', name: 'HTML5', type: 'devicon' },
	{ key: 'css3', name: 'CSS3', type: 'devicon' },
	{ key: 'sass', name: 'SASS', type: 'devicon' },
	{ key: 'git', name: 'Git', type: 'devicon' },
	{ key: 'mysql', name: 'MySQL', type: 'devicon' },
	{ key: 'mongodb', name: 'MongoDB', type: 'devicon' },
	{ key: 'python', name: 'Python', type: 'devicon' },
	{ key: 'django', name: 'Django', type: 'devicon' },
	{ key: 'typescript', name: 'TypeScript', type: 'devicon' },
	{ key: 'tailwindcss', name: 'TailwindCSS', type: 'devicon' },
	{ key: 'bootstrap', name: 'Bootstrap', type: 'devicon' },
	{ key: 'npm', name: 'NPM', type: 'devicon' },
	{key:"firebase",name:"Firebase",type:"devicon"},


];