// import { Box, Text, IconButton } from '@chakra-ui/react'
// import { CloseIcon } from '@chakra-ui/icons'

// const SubmitModal = ({ setIsSubmitModal }: { setIsSubmitModal: any }) => {
// 	return (
// 		<Box
// 			position='absolute'
// 			bg='white'
// 			mr='20px'
// 			w={{ base: 'full', md: 'full' }}
// 			p='4'
// 			h={{ md: '50vh' }}
// 			top='20vh'
// 			rounded='xl'
// 			border='2px'
// 			borderColor='blue.500'
// 			display='flex'
// 			flexDirection='column'
// 			alignItems='center'
// 			justifyContent='space-evenly'
// 			py={{ lg: '4vh' }}
// 		>
// 			<img
// 				src='https://segment.prod.bidr.io/associate-segment?buzz_key=5x5dsp&segment_key=5x5dsp-1941&value='
// 				height='0'
// 				width='0'
// 				alt='tracking-pixel'
// 			/>
// 			<IconButton
// 				icon={<CloseIcon />}
// 				position='absolute'
// 				top='0.4vh'
// 				right='2vh'
// 				size='lg'
// 				variant='unstyled'
// 				onClick={() => setIsSubmitModal(false)}
// 				aria-label={''}
// 			/>
// 			<Text color='black' fontSize='4vh' fontWeight='bold'>
// 				Success!
// 			</Text>
// 			<Text
// 				fontSize={{ base: 'lg', lg: '3vh' }}
// 				textAlign='center'
// 				fontWeight='medium'
// 				mt='4'
// 			>
// 				Your{' '}
// 				<Box as='span' color='blue.500'>
// 					Cost Savings Estimate
// 				</Box>{' '}
// 				has been sent to your <i>email inbox.</i>
// 			</Text>
// 		</Box>
// 	)
// }

// export default SubmitModal
import { Box, Text, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const SubmitModal = ({ setIsSubmitModal }: { setIsSubmitModal: any }) => {
	return (
		<Box
			position='fixed'
			bg='white'
			// mr='20px'
			p='4'
			h={{ md: '50vh' }}
			top='20vh'
			rounded='xl'
			border='2px'
			borderColor='blue.500'
			display='flex'
			flexDirection='column'
			alignItems='center'
			justifyContent='space-evenly'
			py={{ lg: '4vh' }}
			className='md:left-1/2 md:-translate-x-1/2 mx-2 md:mx-2'
		>
			<img
				src='https://segment.prod.bidr.io/associate-segment?buzz_key=5x5dsp&segment_key=5x5dsp-1941&value='
				height='0'
				width='0'
				alt='tracking-pixel'
			/>
			<IconButton
				icon={<CloseIcon />}
				position='absolute'
				top='0.4vh'
				right='2vh'
				size='lg'
				variant='unstyled'
				onClick={() => setIsSubmitModal(false)}
				aria-label={''}
			/>
			<Text color='black' fontSize={['4vh', '8vh']} fontWeight='bold'>
				Success!
			</Text>
			<Text
				fontSize={{ base: 'lg', lg: '4vh' }}
				textAlign='center'
				fontWeight='medium'
				mt='4'
			>
				Your{' '}
				<Box as='span' color='blue.500'>
					Cost Savings Estimate
				</Box>{' '}
				has been sent to your <i>email inbox.</i>
			</Text>
		</Box>
	)
}

export default SubmitModal
