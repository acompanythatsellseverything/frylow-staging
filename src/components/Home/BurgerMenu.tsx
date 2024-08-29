import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	CloseButton,
	Divider,
	useDisclosure,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
} from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
// import { p as Originalp } from 'react-router-hash-link'

// const p = (props: any) => {
// 	const scrollWithOffset = (el: any) => {
// 		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
// 		const yOffset = -40
// 		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
// 	}

// 	return <Originalp scroll={scrollWithOffset} {...props} />
// }

const Burger = () => {
	const temporaryVitoReplacement :string = 'RWTY'

	const [isDrawerOpen, setIsDrawerOpen] = useState(false)
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedLink, setSelectedLink] = useState('')
	// const [country, setCountry] = useState('')

	const navigate = useNavigate()

	useEffect(() => {
		// Disable scroll when the drawer is open
		if (isDrawerOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isDrawerOpen])

	// const handleLinkClick = () => {

	// }

	const handleLinkClick = (link: string) => {
		setIsDrawerOpen(false)
		setSelectedLink(link)
		onOpen()
	}

	const handleCountrySelect = (selectedCountry: string) => {
		// setCountry(selectedCountry)
		onClose()
		navigate(`/${selectedCountry}${selectedLink}`)
	}

	return (
		<>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent className='border-2 border-blue-600' borderRadius='12px'>
					<ModalHeader textAlign='center'>Choose your Country</ModalHeader>
					<ModalCloseButton />
					<ModalBody p='24px 36px'>
						<div className='flex justify-around'>
							<div className='flex flex-col items-center gap-2'>
								<img
									src='/images/home-home/usa-flag.png'
									loading='lazy'
									className='w-20'
								/>
								<Button
									colorScheme='blue'
									w='100px'
									onClick={() => handleCountrySelect('usa')}
								>
									USA
								</Button>
							</div>
							<div className='flex flex-col items-center gap-2'>
								<img
									src='/images/home-home/ca-flag.png'
									loading='lazy'
									className='w-20'
								/>
								<Button
									colorScheme='blue'
									w='100px'
									onClick={() => handleCountrySelect('ca')}
								>
									Canada
								</Button>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
			<>
				{' '}
				<button
					className='block lg:hidden p-2 bg-white text-black'
					onClick={() => setIsDrawerOpen(true)}
					aria-label='Open Menu'
				>
					<svg
						className='w-7 h-7'
						fill='none'
						stroke='currentColor'
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d='M4 6h16M4 12h16M4 18h16'
						></path>
					</svg>
				</button>
				{isDrawerOpen && (
					<div
						className='fixed inset-0 bg-black bg-opacity-50 z-50'
						onClick={() => setIsDrawerOpen(false)}
					>
						<div
							className='fixed top-0 right-0 w-80 h-full bg-white shadow-lg z-50 overflow-y-auto'
							onClick={(e) => e.stopPropagation()}
						>
							<button
								className='absolute top-2 right-2 text-2xl font-bold text-black'
								onClick={() => setIsDrawerOpen(false)}
							>
								<CloseButton />
							</button>
							<Accordion allowToggle className='mt-12'>
								<AccordionItem>
									<h2>
										<AccordionButton
											color='#000F3D'
											_expanded={{ color: '#416CF6' }}
											display='flex'
											justifyContent='space-between'
											disabled
											borderBottom={'1px solid #eee'}
										>
											<div className='font-semibold'>About</div>
											{/* <AccordionIcon /> */}
										</AccordionButton>
									</h2>
								</AccordionItem>
								<AccordionItem>
									<h2>
										<AccordionButton
											color='#000F3D'
											_expanded={{ color: '#416CF6' }}
											display='flex'
											justifyContent='space-between'
										>
											<div className='font-semibold'>Frylow</div>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel
										pb={4}
										display='flex'
										flexDirection='column'
										ml='5px'
										color='#0D2A84'
										gap='5px'
										fontWeight='medium'
									>
										<p onClick={() => handleLinkClick('/frylow/')}>
											Home - Frylow
										</p>
										<Divider />
										<p
											onClick={() =>
												handleLinkClick('/frylow/about/#howFrylowWorks')
											}
										>
											How Frylow Works
										</p>
										<Divider />
										<p
											onClick={() => handleLinkClick('/frylow/about/#template')}
										>
											Savings Calculation Template
										</p>
										<Divider />
										<p onClick={() => handleLinkClick('/frylow/about/#trial')}>
											Free Trial Details
										</p>
										<Divider />
										<p
											onClick={() => handleLinkClick('/frylow/benefits/#love')}
										>
											Why Restaurants Love Frylow
										</p>
										<Divider />
										<p
											onClick={() =>
												handleLinkClick('/frylow/benefits/#consumers')
											}
										>
											Why Consumers Care
										</p>
										<Divider />
										<p
											onClick={() =>
												handleLinkClick('/frylow/benefits/#experts')
											}
										>
											Expert Endorsements
										</p>
										<Divider />
										<p onClick={() => handleLinkClick('/frylow/reviews/')}>
											Reviews
										</p>
										<Divider />
										<a href='/blog/'>Blog</a>
										<Divider />
										<p onClick={() => handleLinkClick('/frylow/faq/')}>FAQ</p>
										<Divider />
										<p onClick={() => handleLinkClick('/frylow/contact-us/')}>Contact Us</p>
									</AccordionPanel>
								</AccordionItem>

								<AccordionItem isDisabled>
									<h2>
										<AccordionButton
											color='#000F3D'
											_expanded={{ color: '#416CF6' }}
											display='flex'
											justifyContent='space-between'
										>
											<div className='font-semibold blur-[.3rem]'>{temporaryVitoReplacement}</div>
											<AccordionIcon />
										</AccordionButton>
									</h2>
								</AccordionItem>

								<AccordionItem mt='2px' isDisabled>
									<h2>
										<AccordionButton
											color='#000F3D'
											_expanded={{ color: '#416CF6' }}
											display='flex'
											justifyContent='space-between'
										>
											<div className='font-semibold'>Oil Care</div>
											<AccordionIcon />
										</AccordionButton>
									</h2>
									<AccordionPanel
										pb={4}
										display='flex'
										flexDirection='column'
										ml='5px'
										color='#0D2A84'
										gap='5px'
										fontWeight='medium'
									></AccordionPanel>
								</AccordionItem>
							</Accordion>
						</div>
					</div>
				)}
			</>
		</>
	)
}

export default Burger
