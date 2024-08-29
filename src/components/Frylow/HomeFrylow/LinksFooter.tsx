import {
	addLinks as addLinksDesk,
	linksOne as linksOneDesk,
	linksThree as linksThreeDesk,
	linksTwo as linksTwoDesk,
} from '../../../data/links'
import {
	linksOne as linksOneMobile,
	mobiLinks,
} from '../../../data/mobileLinks'

const DesktopFooterLinks = () => {
	return (
		<div className='flex w-full justify-between gap-2 hidden md:flex'>
			<div className='flex flex-col gap-2'>
				{linksOneDesk.map((link, i) => (
					<a
						href={link.href}
						key={i}
						className='text-white font-semibold text-sm lg:text-[2vh]'
					>
						{link.name}
					</a>
				))}
			</div>
			<div className='flex flex-col gap-2'>
				{linksTwoDesk.map((link, i) => (
					<a
						href={link.href}
						key={i}
						className='text-white font-semibold text-sm lg:text-[2vh]'
					>
						{link.name}
					</a>
				))}
				<a href='/'>
					<div className='p-2 bg-white rounded-lg w-fit'>
						<img
							src='/images/home-home/home-logo.png'
							loading='lazy'
							className='w-[12vh]'
						/>
					</div>
				</a>
			</div>
			<div className='flex flex-col gap-2'>
				{linksThreeDesk.map((link, i) => (
					<a
						href={link.href}
						key={i}
						className='text-white font-semibold text-sm lg:text-[2vh]'
					>
						{link.name}
					</a>
				))}
			</div>
		</div>
	)
}
const MobileFooterLinks = () => {
	return (
		<div className='w-full md:hidden'>
			<div className='flex w-full justify-between gap-2 '>
				<div className='flex flex-col gap-2 '>
					{linksOneMobile.map((link, i) => (
						<a
							href={link.href}
							key={i}
							className='text-white font-semibold text-sm lg:text-[2vh]'
						>
							{link.name}
						</a>
					))}
				</div>
				<div className='flex flex-col gap-2'>
					{mobiLinks.map((link, i) => (
						<a
							href={link.href}
							key={i}
							className='text-white font-semibold text-sm lg:text-[2vh]'
						>
							{link.name}
						</a>
					))}
				</div>
			</div>
			<a href='/'>
				<div className='bg-white px-4 py-2 rounded-lg md:hidden w-fit ml-16 mt-2'>
					<img
						src='/images/home-home/home-logo.png'
						className='w-20 '
						loading='lazy'
						alt='Logo'
					/>
				</div>
			</a>
		</div>
	)
}
const LinksFooter = ({ img }: { img: string }) => {
	return (
		<footer
			className='bg-cover bg-center  w-full md:p-[3vh] p-4'
			style={{ backgroundImage: `url('/images/header_bg.webp')` }}
		>
			<div className='max-w-[120vh] w-full mx-auto'>
				<div className=' w-full flex  justify-between gap-12 flex-col md:flex-row items-center'>
					<img
						src={img}
						className='w-[11vh] h-[11vh] border border-2 border-white border-solid rounded-lg'
					/>
					<DesktopFooterLinks />
					<MobileFooterLinks />
				</div>
				<div className='flex gap-4 lg:gap-[3vh] justify-center mt-[3vh]'>
					{addLinksDesk.map((link, i) => (
						<a
							href={link.href}
							key={i}
							className='text-white text-sm lg:text-[1.8vh] font-light'
						>
							{link.name}
						</a>
					))}
				</div>
				<p className='text-white text-sm lg:text-[1.8vh] text-center mt-[3vh]'>
					© Copyright Save Fry Oil 2024
				</p>
			</div>
		</footer>
	)
}

export default LinksFooter
