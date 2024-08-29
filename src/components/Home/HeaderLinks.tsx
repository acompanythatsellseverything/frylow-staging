import {
	MenuButton,
	MenuList,
	MenuItem,
	Menu,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const HeaderLinks = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedLink, setSelectedLink] = useState('')
	// const [country, setCountry] = useState('')
	const navigate = useNavigate()
	const temporaryVitoReplacement :string = 'RWTY'

	const handleLinkClick = (link: string) => {
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
			<div className='hidden lg:flex gap-[4vh] items-center'>
				<Menu isLazy>
					<MenuButton
						color='#000F3D'
						fontWeight='600'
						fontSize='2vh'
						_active={{ color: '#416CF6' }}
					>
						<div className='flex items-center gap-1'>About</div>
					</MenuButton>
				</Menu>
				<Menu isLazy>
					<MenuButton
						color='#000F3D'
						fontWeight='600'
						fontSize='2vh'
						_active={{ color: '#416CF6' }}
					>
						<div className='flex items-center gap-1'>
							Frylow
							<ChevronDown />
						</div>
					</MenuButton>
					<MenuList
						mt='1.4vh'
						p='0'
						borderTopRadius='0'
						borderBottomRadius='2vh'
					>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/')}
						>
							Home - Frylow
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/about/#howFrylowWorks')}
						>
							How Frylow Works
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/about/#template')}
						>
							Savings Calculation Template
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/about/#trial')}
						>
							Free Trial Details
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/benefits/#love')}
						>
							Why Restaurants Love Frylow
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/benefits/#consumers')}
						>
							Why Consumers Care
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/benefits/#experts')}
						>
							Expert Endorsements
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/reviews')}
						>
							Reviews
						</MenuItem>
						<MenuItem
							as='a'
							href='/blog/'
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
						>
							Blog
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/faq')}
						>
							FAQ
						</MenuItem>
						<MenuItem
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							borderBottomRadius='2vh'
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/contact-us')}
						>
							Contact Us
						</MenuItem>
					</MenuList>
				</Menu>
				<Menu isLazy>
					<MenuButton
						color='#000F3D'
						fontWeight='600'
						fontSize='2vh'
						_active={{ color: '#416CF6' }}
						disabled
					>
						<div className='flex items-center gap-1'>
							<span className='blur-[0.5rem]'>{temporaryVitoReplacement}</span>
							<ChevronDown />
						</div>
					</MenuButton>
					<MenuList
						mt='1.4vh'
						p='0'
						borderTopRadius='0'
						borderBottomRadius='2vh'
					>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/benefits/#love')}
						>
							Why Restaurants Love Frylow
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/benefits/#consumers')}
						>
							Why Consumers Care
						</MenuItem>
						<MenuItem
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							borderBottomRadius='2vh'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/benefits/#expert')}
						>
							Expert Endorsements
						</MenuItem>
					</MenuList>
				</Menu>
				<Menu isLazy>
					<MenuButton
						color='#000F3D'
						fontWeight='600'
						fontSize='2vh'
						_active={{ color: '#416CF6' }}
						disabled
					>
						<div className='flex items-center gap-1'>
							Oil Care
							<ChevronDown />
						</div>
					</MenuButton>
					<MenuList
						mt='1.4vh'
						p='0'
						borderTopRadius='0'
						borderBottomRadius='2vh'
					>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/blog')}
						>
							Blog
						</MenuItem>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/faq')}
						>
							FAQ
						</MenuItem>
						<MenuItem
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							borderBottomRadius='2vh'
							py='1vh'
							onClick={() => handleLinkClick('/frylow/contact-us')}
						>
							Contact Us
						</MenuItem>
					</MenuList>
				</Menu>
			</div>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent className='border-2 border-blue-600' borderRadius='12px'>
					<ModalHeader textAlign='center'>Choose your Country</ModalHeader>
					<ModalCloseButton />
					<ModalBody p='24px 36px'>
						<div className='flex justify-around'>
							<div
								className='flex flex-col items-center gap-2 cursor-pointer'
								onClick={() => handleCountrySelect('usa')}
							>
								<img
									src='/images/home-home/usa-flag.png'
									loading='lazy'
									className='w-20'
								/>
								<Button colorScheme='blue' w='100px'>
									USA
								</Button>
							</div>
							<div
								className='flex flex-col items-center gap-2 cursor-pointer'
								onClick={() => handleCountrySelect('ca')}
							>
								<img
									src='/images/home-home/ca-flag.png'
									loading='lazy'
									className='w-20'
								/>
								<Button colorScheme='blue' w='100px'>
									Canada
								</Button>
							</div>
						</div>
					</ModalBody>
				</ModalContent>
			</Modal>
		</>
	)
}

export default HeaderLinks
