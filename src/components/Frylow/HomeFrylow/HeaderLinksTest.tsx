import { MenuButton, MenuList, MenuItem, Menu } from '@chakra-ui/react'
import { ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const HeaderLinksTest = () => {
	return (
		<div className='hidden lg:flex gap-[4vh] items-center'>
			<Menu isLazy>
				<MenuButton color='#000F3D' fontWeight='600' fontSize='2vh'>
					<div className='flex items-center gap-1'>
						About Frylow
						<ChevronDown color='#000F3D' />
					</div>
				</MenuButton>
				<MenuList mt='1.4vh' p='0' borderTopRadius='0' borderBottomRadius='2vh'>
					<MenuItem
						borderBottom='1px solid #3C5EBA80'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						How Frylow Works
					</MenuItem>
					<MenuItem
						borderBottom='1px solid #3C5EBA80'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						Savings Calculation Template
					</MenuItem>
					<MenuItem
						borderBottomRadius='2vh'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						Free Trial Details
					</MenuItem>
				</MenuList>
			</Menu>
			<Menu isLazy>
				<MenuButton color='#000F3D' fontWeight='600' fontSize='2vh'>
					<div className='flex items-center gap-1'>
						Benefits
						<ChevronDown color='#000F3D' />
					</div>
				</MenuButton>
				<MenuList mt='1.4vh' p='0' borderTopRadius='0' borderBottomRadius='2vh'>
					<MenuItem
						borderBottom='1px solid #3C5EBA80'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						Why Restaurants Love Frylow
					</MenuItem>
					<MenuItem
						borderBottom='1px solid #3C5EBA80'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						Why Consumers Care
					</MenuItem>
					<MenuItem
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						borderBottomRadius='2vh'
						py='1vh'
					>
						Expert Endorsements
					</MenuItem>
				</MenuList>
			</Menu>
			<Link to='#' className='text-[#000F3D] font-semibold text-[2vh]'>
				Reviews
			</Link>
			<Menu isLazy>
				<MenuButton color='#000F3D' fontWeight='600' fontSize='2vh'>
					<div className='flex items-center gap-1'>
						Resources
						<ChevronDown color='#000F3D' />
					</div>
				</MenuButton>
				<MenuList mt='1.4vh' p='0' borderTopRadius='0' borderBottomRadius='2vh'>
					<MenuItem
						borderBottom='1px solid #3C5EBA80'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						Blog
					</MenuItem>
					<MenuItem
						borderBottom='1px solid #3C5EBA80'
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
						fontSize='1.8vh'
						fontWeight='600'
						py='1vh'
					>
						FAQ
					</MenuItem>
					<MenuItem
						color='##000F3D'
						_hover={{ bg: '#416CF626' }}
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

export default HeaderLinksTest
