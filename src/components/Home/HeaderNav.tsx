import {
	Link,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import Burger from './BurgerMenu'
import HeaderLinks from './HeaderLinks'

const HeaderNav = ({ link }: { link: string }) => {
	const temporaryVitoReplacement :string = 'RWTY'

	console.log(`${link}cost-savings-estimate-form/`)

	const {
		isOpen: isLogoModalOpen,
		onOpen,
		onClose: onLogoModalClose,
	} = useDisclosure()
	return (
		<>
			<nav
				className={`relative w-full  shadow-md sticky top-0 left-0 z-50 bg-white py-2 md:py-[1vh]
			`}
			>
				<div className='lg:max-w-[140vh] mx-auto flex justify-between items-center px-5 lg:px-0'>
					<a href='/'>
						<img
							src='/images/home-home/home-logo.png'
							className='lg:w-[20vh] lg:h-[5vh]'
							loading='lazy'
							alt='Logo'
						/>
					</a>
					<HeaderLinks />
					<Burger />
					<button
						className='hidden lg:block lg:text-[2.6vh] text-white font-bold bg-[#006A54] h-fit lg:py-[1vh] lg:px-[3vh] w-1/4 rounded-lg'
						onClick={onOpen}
					>
						Get Quote Now
					</button>
				</div>
			</nav>
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
									alt={temporaryVitoReplacement}
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

export default HeaderNav
