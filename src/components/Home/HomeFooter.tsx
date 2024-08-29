import { useDisclosure } from '@chakra-ui/react'
import { addLinks } from '../../data/links'
import CountryModal from './CountryModal'

const HomeFooter = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const {
		isOpen: isContactUsOpen,
		onOpen: onContactUsOpen,
		onClose: onContactUsClose,
	} = useDisclosure()
	const {
		isOpen: isFaqOpen,
		onOpen: onFaqOpen,
		onClose: onFaqClose,
	} = useDisclosure()
	const temporaryVitoReplacement :string = 'RWTY'

	return (
		<>
			<footer
				className='bg-cover bg-center  w-full md:p-[3vh] p-4 mt-8 md:mt-[12vh]'
				style={{ backgroundImage: `url('/images/header_bg.webp')` }}
			>
				<div className='max-w-[120vh] w-full mx-auto'>
					<div className=' w-full flex  justify-center gap-6 md:gap-36 flex-col md:flex-row items-center'>
						<div className='bg-white px-4 py-2 rounded-lg'>
							<img
								src='/images/home-home/home-logo.png'
								className='lg:w-[20vh] lg:h-[5vh]'
								loading='lazy'
								alt='Logo'
								// onClick={onOpen}
							/>
						</div>

						<div className='flex gap-12'>
							<div className='flex flex-col gap-2'>
								<p
									// href={'#'}
									onClick={onOpen}
									className='text-white font-semibold text-lg lg:text-[2vh] cursor-pointer'
								>
									Frylow
								</p>
								<a
									href={'#'}
									className='text-white font-semibold text-lg  lg:text-[2vh] blur-[.5rem]'
								>
									{temporaryVitoReplacement}
								</a>
								<a
									href={'#'}
									className='text-white font-semibold text-lg  lg:text-[2vh]'
								>
									T.B.D.
								</a>
							</div>
							<div className='flex flex-col gap-2'>
								<p
									onClick={onFaqOpen}
									className='text-white font-semibold text-lg  lg:text-[2vh] cursor-pointer'
								>
									FAQ
								</p>
								<p
									// href={'#'}
									className='text-white font-semibold text-lg  lg:text-[2vh]'
								>
									Blog
								</p>
								<p
									onClick={onContactUsOpen}
									className='text-white font-semibold text-lg  lg:text-[2vh] cursor-pointer'
								>
									Contact Us
								</p>
							</div>
						</div>
					</div>
					<div className='flex gap-4 lg:gap-[3vh] justify-center mt-[3vh]'>
						{addLinks.map((link, i) => (
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
			<CountryModal
				usaLink='/usa/frylow/'
				canadaLink='/ca/frylow/'
				isOpen={isOpen}
				onClose={onClose}
			/>
			<CountryModal
				usaLink='/usa/frylow/faq'
				canadaLink='/ca/frylow/faq'
				isOpen={isFaqOpen}
				onClose={onFaqClose}
			/>
			<CountryModal
				usaLink='/usa/frylow/contact-us'
				canadaLink='/ca/frylow/contact-us'
				isOpen={isContactUsOpen}
				onClose={onContactUsClose}
			/>
		</>
	)
}

export default HomeFooter
