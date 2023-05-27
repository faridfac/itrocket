import { getLayout } from '@layouts/dashboard'
import ProjectData from '@components/ProjectData'
import { generateProjectPaths, getProjects } from '@utils/projectUtils'

const type = 'testnet'

const Project = ({ project }) => {
	return <ProjectData name={project.id} type={type} />
}

export async function getStaticPaths() {
	const paths = generateProjectPaths(type)
	return { paths, fallback: 'blocking' }
}

export async function getStaticProps({ params }) {
	const projects = getProjects(type)
	const project = projects.find(p => p.id === params.projectName)
	return { props: { project }, revalidate: 1 }
}

Project.getLayout = getLayout
export default Project
