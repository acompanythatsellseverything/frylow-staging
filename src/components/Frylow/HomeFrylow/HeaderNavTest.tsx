import Burger from './BurgerMenu'
import HeaderLinks from './HeaderLinks'

const HeaderNavTest = ({ link }: { link: string }) => {
	return (
		<nav className='relative w-full'>
			<div className='lg:max-w-[140vh] mx-auto flex justify-between items-center px-5 lg:px-0'>
				<img
					src='/images/header_logo.webp'
					className='lg:w-[22vh] lg:h-[8vh] w-[130px] h-[45px]'
					loading='lazy'
					alt='Logo'
				/>
				<HeaderLinks link={link} />
				<Burger link={link} />
				<button className='hidden lg:block lg:text-[2vh] text-white font-bold bg-[#006A54] h-fit lg:py-[1.5vh] lg:px-[2vh] rounded-lg'>
					Get Frylow Savings Estimate
				</button>
			</div>
		</nav>
	)
}

export default HeaderNavTest
