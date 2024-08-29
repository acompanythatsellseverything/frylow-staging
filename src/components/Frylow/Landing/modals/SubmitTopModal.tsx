import { Box, Text, IconButton } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const SubmitTopModal = ({
	setIsSubmitTopModal,
}: {
	setIsSubmitTopModal: any
}) => {
	return (
		<Box
			position='fixed'
			bg='white'
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
			className='md:left-1/2 md:-translate-x-1/2 mx-2 md:top-1/2'
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
				onClick={() => setIsSubmitTopModal(false)}
				aria-label={''}
			/>
			<Text
				color='black'
				fontSize={['24px', '3vh', null, '6vh']}
				fontWeight='bold'
			>
				Congratulations !
			</Text>
			<Text
				fontSize={{ base: 'lg', lg: '3.5vh' }}
				textAlign='center'
				fontWeight='medium'
				mt='4'
			>
				You qualify for a FREE Frylow trial.
				<br /> Open the <i className='text-blue-600'>
					congratulations email
				</i>{' '}
				from your inbox to arrange our free trial.
			</Text>
		</Box>
	)
}

export default SubmitTopModal
