import {
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	CloseButton,
	Divider,
} from '@chakra-ui/react'
import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { HashLink as OriginalHashLink } from 'react-router-hash-link'

// @ts-ignore
import { CountryContext } from '../../../providers/CountryContext'

const HashLink = (props: any) => {
	const scrollWithOffset = (el: any) => {
		const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset
		const yOffset = -40
		window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' })
	}

	return <OriginalHashLink scroll={scrollWithOffset} {...props} />
}

const Burger = ({ link }: { link: string }) => {
	const country = useContext(CountryContext)

	const [isDrawerOpen, setIsDrawerOpen] = useState(false)

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

	const handleLinkClick = () => {
		setIsDrawerOpen(false)
	}

	return (
		<>
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
									>
										<div className='font-semibold'>About Frylow</div>
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
									<HashLink
										to={`${link}about/#howFrylowWorks`}
										onClick={handleLinkClick}
									>
										How Frylow Works
									</HashLink>
									<Divider />
									<HashLink
										to={`${link}about/#template`}
										onClick={handleLinkClick}
									>
										Savings Calculation Template
									</HashLink>
									<Divider />
									<HashLink
										to={`${link}about/#trial`}
										onClick={handleLinkClick}
									>
										Free Trial Details
									</HashLink>
								</AccordionPanel>
							</AccordionItem>
							<AccordionItem>
								<h2>
									<AccordionButton
										color='#000F3D'
										_expanded={{ color: '#416CF6' }}
										display='flex'
										justifyContent='space-between'
									>
										<div className='font-semibold'>Benefits</div>
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
									<HashLink
										to={`${link}benefits/#love`}
										onClick={handleLinkClick}
									>
										Why Restaurants Love Frylow
									</HashLink>
									<Divider />
									<HashLink
										to={`${link}benefits/#consumers`}
										onClick={handleLinkClick}
									>
										Why Consumers Care
									</HashLink>
									<Divider />
									<HashLink
										to={`${link}benefits/#experts`}
										onClick={handleLinkClick}
									>
										Expert Endorsements
									</HashLink>
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton
										color='#000F3D'
										_expanded={{ color: '#416CF6' }}
										display='flex'
										justifyContent='space-between'
									>
										<HashLink to={`${link}reviews`} onClick={handleLinkClick}>
											<div className='font-semibold'>Reviews</div>
										</HashLink>
									</AccordionButton>
								</h2>
							</AccordionItem>

							<AccordionItem mt='2px'>
								<h2>
									<AccordionButton
										color='#000F3D'
										_expanded={{ color: '#416CF6' }}
										display='flex'
										justifyContent='space-between'
									>
										<div className='font-semibold'>Resources</div>
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
									<a href='/blog/'>Blog</a>
									<Divider />
									<Link
										to={`/${country}/frylow/faq/`}
										onClick={handleLinkClick}
									>
										FAQ
									</Link>
									<Divider />
									<Link
										to={`/${country}/frylow/contact-us/`}
										onClick={handleLinkClick}
									>
										Contact Us
									</Link>
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			)}
		</>
	)
}

export default Burger
