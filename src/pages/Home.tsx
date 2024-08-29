import HeaderNav from '../components/Home/HeaderNav'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Link,
	useDisclosure,
} from '@chakra-ui/react'
import CountryModal from '../components/Home/CountryModal'
import HomeFooter from '../components/Home/HomeFooter'

interface IProject {
	projectName: string
	banner: string
	title: string
	description: string
	bulletPoints: JSX.Element[]
}

const temporaryVitoReplacement: string = 'RWTY'
const projects: IProject[] = [
	{
		projectName: 'Fry-Oil Conditioner',
		banner: '/images/home-home/frylow-banner.png',
		title: 'Frylow',
		description: 'Fry-oil conditioner. Japanese pioneered patented technology.',
		bulletPoints: [
			<>
				Reduce fry-oil costs up to 50% or more.
				<br />
				<i>Guaranteed oil cost reduction.</i>
			</>,
			<>
				Lighter, crispier, and tastier fried food.
				<br />
				<i> Absorbs less oil.</i>
			</>,
			<>
				Simple to install, use and maintain with no ongoing costs … 5-year
				warranty.
			</>,
		],
	},
	{
		projectName: 'Fry-Oil Filter',
		banner: '/images/home-home/vito-banner-blured.webp',
		title: `<span class="blur-[.5rem]">${temporaryVitoReplacement}</span> oil filter system`,
		description: 'The world’s most innovative fry-oil filter.',
		bulletPoints: [
			<>
				<b>All</b> oil filtering extends oil life and improves food quality.
				<span className='blur-[.5rem]'>{temporaryVitoReplacement}</span>’s
				exclusive <i>5-micron</i> filter media and active filtration boost these
				benefits.
			</>,
			<>
				<span className='blur-[.5rem]'>{temporaryVitoReplacement}</span>’s “in
				the fryer” application is safer, saves more time/labor, and is more
				flexible for the user, than any other mobile filter available.
			</>,
			<>
				<span className='blur-[.5rem]'>{temporaryVitoReplacement}</span> is
				manufactured to exacting German standards. It lasts for years, if not
				decades.
			</>,
		],
	},
	{
		projectName: 'End-to-End Solution',
		banner: '/images/home-home/tbd-banner.png',
		title: 'T.B.D.',
		description:
			'DIY or fully managed oil care. Fryer filling, oil monitoring, used oil disposal.',
		bulletPoints: [
			<>
				Fry-oil filling/delivery. Easy. Simple. Clean. Easy-to-use filling
				station <b>or</b> they do it for you.
			</>,
			<>
				Fry-oil monitoring. Use their best-in-class portable TPM wand <b>or</b>{' '}
				profit from their end-to-end automated oil management system.
			</>,
			<>
				Easy to use oil cart and storage units <b>or</b> they do it for you
				(yes, they own their own delivery/pick-up trucks and required
				equipment).
			</>,
		],
	},
]

const PorjectCard = ({ project }: { project: IProject }) => {
	return (
		<div>
			<p className='font-bold text-center text-2xl md:text-[3.3vh] '>
				{project.projectName}
			</p>
			<img
				alt={project.projectName}
				loading='lazy'
				src={project.banner}
				className={`mt-[1vh] w-4/5 mx-auto ${
					project.banner === '/images/home-home/vito-banner-blured.webp'
						? 'rounded-[18px]'
						: ''
				}`}
			/>
			<p className='font-bold text-[#3C5EBA] text-center mt-[2vh] text-xl md:text-[2.5vh]'>
				{/*render project.title as html*/}
				<span
					dangerouslySetInnerHTML={{
						__html: project.title,
					}}
				></span>
			</p>
			<p className='italic font-bold md:min-h-[5.5vh] text-lg md:text-[2.2vh] leading-[125%]'>
				{project.description}
			</p>
			<div className='flex flex-col w-full gap-[1.5vh] mt-[2vh]'>
				{project.bulletPoints.map((val, index) => (
					<div className='flex gap-[1vh]' key={index}>
						<img
							src='/images/kaplya.png'
							className='lg:w-[1.8vh] lg:h-[1.8vh] h-6 w-6 mt-[0.6vh]'
						/>
						<p className='text-gray-800 md:text-[2vh] tracking-tighter md:tracking-normal'>
							{val}
						</p>
					</div>
				))}
				{/*  */}
			</div>
		</div>
	)
}

const Home = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const {
		isOpen: isLogoModalOpen,
		onOpen: onLogoModalOpen,
		onClose: onLogoModalClose,
	} = useDisclosure()

	return (
		<>
			<HeaderNav link='/usa/frylow/' />
			<div className='lg:max-w-[166vh] mx-auto w-full px-5 lg:px-[3vh] pb-4 md:pb-0'>
				<div className='flex flex-col md:flex-row items-center justify-center md:gap-0 my-6 py-2 md:my-[3vh] bg-[#EDF0F9] rounded-lg'>
					<p className='text-[#0D2A84] font-bold text-xl md:text-2xl lg:text-[3.5vh] flex flex-col md:flex-row justify-evenly  items-center w-full text-center'>
						<img
							src='/images/home-home/home-logo.png'
							className='lg:w-[22vh] lg:h-[5vh] w-1/2'
							loading='lazy'
							alt='Logo'
						/>
						<span className='mt-4 md:mt-0'>Fry Oil Management.</span>
						<div className='flex md:hidden gap-6'>
							<span className='inline'>Best Practices.</span>
							<span className='inline'>Best Products.</span>
						</div>
						<span className='hidden md:flex'>Best Practices.</span>
						<span className='hidden md:flex'>Best Products.</span>
					</p>
				</div>
				<div className='flex justify-between gap-12 md:gap-[2vh]  flex-col md:flex-row'>
					<div className='md:w-1/3 cursor-pointer' onClick={() => onOpen()}>
						<PorjectCard project={projects[0]} />
					</div>
					<div className='md:w-1/3'>
						<PorjectCard project={projects[1]} />
					</div>
					<div className='md:w-1/3'>
						<PorjectCard project={projects[2]} />
					</div>
				</div>
				<i className='text-2xl md:text-[3vh] text-center font-medium'>
					<p className='mt-[3vh] text-[#3C5EBA] tracking-wide'>
						<b>Save Fry Oil's </b>trifecta of fry-oil management partners works
						seamlessly, separately or together, to reduce oil costs, to improve
						your fried food quality, and to streamline your operations.
					</p>
				</i>
				<div className='flex justify-center mx-auto mt-[3vh] '>
					<button
						className='text-2xl lg:text-[3vh] text-white font-bold bg-[#006A54] w-full py-[1.5vh] px-[3vh] md:w-1/4 rounded-lg'
						onClick={onLogoModalOpen}
					>
						Get Quote Now
					</button>
				</div>
			</div>
			<HomeFooter />
			{/* First Modal */}
			<CountryModal
				onClose={onClose}
				onOpen={onOpen}
				isOpen={isOpen}
				usaLink='/usa/frylow/'
				canadaLink='/ca/frylow/'
			/>
			{/* Modal for Logos */}
			<Modal isOpen={isLogoModalOpen} onClose={onLogoModalClose} size='sm'>
				<ModalOverlay />
				<ModalContent
					className='border-2 border-blue-600 md:top-1/3'
					borderRadius='12px'
				>
					<ModalHeader textAlign='center' color={'#0D2A84'}>
						Select a Partner
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody p='24px 36px'>
						<div className='flex flex-col justify-around gap-4'>
							<p onClick={() => onOpen()}>
								<img
									src='/images/home-home/frylow-banner.png'
									alt='Frylow'
									className=' cursor-pointer'
								/>
							</p>
							<Link href=''>
								<img
									src='/images/home-home/vito-banner-blured.webp'
									alt='Vito'
									className='cursor-pointer'
								/>
							</Link>
							<Link href=''>
								<img
									src='/images/home-home/tbd-banner.png'
									alt='T.B.D.'
									className=' cursor-pointer'
								/>
							</Link>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default Home
