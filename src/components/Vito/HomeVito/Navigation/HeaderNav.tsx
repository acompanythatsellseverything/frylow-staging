import Burger from './BurgerMenu'
import HeaderLinks from './HeaderLinks'

const HeaderNav = ({ link }: { link: string }) => {
	console.log(link)
	return (
		<nav
			className={`relative w-full  shadow-md sticky top-0 left-0 z-50 bg-white
			`}
		>
			<div className='lg:max-w-[140vh] mx-auto flex justify-between items-center px-5 lg:px-0 lg:h-[8vh]'>
				<a href={link}>
					<img
						src='/images/Vito/home/vito-header-logo.png'
						className='lg:w-[22vh] lg:h-[8vh] w-36 h-[53px] hidden md:block'
						loading='lazy'
						alt='Logo'
					/>
					<div className='flex md:hidden py-2 items-center gap-3 self-start'>
						<img src='/images/kaplya-big.png' className='h-10' />
						<p className='text-[#162778] font-bold text-md'>
							Save Fry-Oil <span className='text-xs'>with VITO</span>
						</p>
					</div>
				</a>

				<HeaderLinks link={link} />
				<Burger link={link} />
				<button
					className='hidden lg:block lg:text-[2vh] text-white font-bold bg-[#006A54] h-fit lg:py-[1.5vh] lg:px-[2vh] rounded-lg'
					onClick={() => (location.href = `${link}cost-savings-estimate-form/`)}
				>
					Get Quote
				</button>
			</div>
		</nav>
	)
}

export default HeaderNav
