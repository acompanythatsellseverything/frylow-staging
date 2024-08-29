import { MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { useContext } from 'react'
// @ts-ignore
import { CountryContext } from '../../../../providers/CountryContext'
// @ts-ignore
const HeaderLinks = ({ link }: { link: string }) => {
	const country = useContext(CountryContext)
	const linkPrefix = `/${country}/vito/`

	const CustomHashLink = ({
		to,
		children,
	}: {
		to: string
		children: React.ReactNode
	}) => (
		<HashLink
			to={to}
			scroll={(el) => {
				const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
				const yOffset = +40
				window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
			}}
		>
			{children}
		</HashLink>
	)

	return (
		<div className='hidden lg:flex gap-[4vh] items-center'>
			<Menu isLazy>
				<MenuButton
					color='#000F3D'
					fontWeight='600'
					fontSize='2vh'
					_active={{ color: '#416CF6' }}
				>
					<div className='flex items-center gap-1'>
						About Vito
						<ChevronDown />
					</div>
				</MenuButton>
				<MenuList mt='1.4vh' p='0' borderTopRadius='0' borderBottomRadius='2vh'>
					<CustomHashLink to={`${linkPrefix}about/#howvitoWorks`}>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
						>
							How Vito Works
						</MenuItem>
					</CustomHashLink>
					<HashLink to={`${linkPrefix}about/#template`} smooth>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
						>
							Savings Calculation Template
						</MenuItem>
					</HashLink>
					<HashLink to={`${linkPrefix}about/#trial`} smooth>
						<MenuItem
							borderBottomRadius='2vh'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
						>
							Free Trial Details
						</MenuItem>
					</HashLink>
				</MenuList>
			</Menu>
			<Menu isLazy>
				<MenuButton
					color='#000F3D'
					fontWeight='600'
					fontSize='2vh'
					_active={{ color: '#416CF6' }}
				>
					<div className='flex items-center gap-1'>
						Benefits
						<ChevronDown />
					</div>
				</MenuButton>
				<MenuList mt='1.4vh' p='0' borderTopRadius='0' borderBottomRadius='2vh'>
					<CustomHashLink to={`${linkPrefix}benefits/#love`}>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
						>
							Why Restaurants Love vito
						</MenuItem>
					</CustomHashLink>
					<HashLink to={`${linkPrefix}benefits/#consumers`} smooth>
						<MenuItem
							borderBottom='1px solid #3C5EBA80'
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							py='1vh'
						>
							Why Consumers Care
						</MenuItem>
					</HashLink>
					<HashLink to={`${linkPrefix}benefits/#experts`} smooth>
						<MenuItem
							color='#000F3D'
							_hover={{ bg: '#416CF626', color: '#0D2A84' }}
							fontSize='1.8vh'
							fontWeight='600'
							borderBottomRadius='2vh'
							py='1vh'
						>
							Expert Endorsements
						</MenuItem>
					</HashLink>
				</MenuList>
			</Menu>
			<Link
				to={`${linkPrefix}reviews`}
				className='text-[#000F3D] font-semibold text-[2vh] hover:text-[#416CF6]'
			>
				Reviews
			</Link>
			<Menu isLazy>
				<MenuButton
					color='#000F3D'
					fontWeight='600'
					fontSize='2vh'
					_active={{ color: '#416CF6' }}
				>
					<div className='flex items-center gap-1'>
						Resources
						<ChevronDown />
					</div>
				</MenuButton>
				<MenuList mt='1.4vh' p='0' borderTopRadius='0' borderBottomRadius='2vh'>
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
						as='a'
						href={`/${country}/vito/faq/`}
						borderBottom='1px solid #3C5EBA80'
						color='#000F3D'
						_hover={{ bg: '#416CF626', color: '#0D2A84' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						FAQ
					</MenuItem>
					<MenuItem
						as='a'
						href={`/${country}/vito/contact-us/`}
						color='#000F3D'
						_hover={{ bg: '#416CF626', color: '#0D2A84' }}
						fontSize='1.8vh'
						fontWeight='600'
						borderBottomRadius='2vh'
						py='1vh'
					>
						Contact Us
					</MenuItem>
				</MenuList>
			</Menu>
		</div>
	)
}

export default HeaderLinks
