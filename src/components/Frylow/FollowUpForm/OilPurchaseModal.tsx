import React, { useState } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	RadioGroup,
	Stack,
	Radio,
	Button,
} from '@chakra-ui/react'

const OilPurchaseModal: React.FC<any> = ({
	isOpen,
	onClose,
	oilPurchase,
	handleRadioChange,
}) => {
	const [selectedRadio, setSelectedRadio] = useState('')
	const [showError, setShowError] = useState(false)

	const handleApply = () => {
		if (!selectedRadio) {
			setShowError(true)
		} else {
			setShowError(false)
			onClose()
		}
	}

	const handleRadioChangeInternal = (value: string) => {
		setSelectedRadio(value)
		handleRadioChange(value, 'oil-purchase')

		setShowError(false)

		if (value === 'no') {
			onClose()
		}
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				className='border border-[#416CF6] border-2 px-4 pt-8 pb-2 md:p-[3vh] font-[700] text-center text-xl md:text-[2.5vh]'
				borderRadius='20px'
				maxW={['90%', '400px']}
			>
				<ModalHeader fontSize='2.5vh' fontWeight='700'>
					<i>Confirm Oil Purchases</i>
				</ModalHeader>
				<ModalCloseButton />
				<ModalBody p='0'>
					Based upon your annual purchases, you should be using{' '}
					<span className='text-[red]'>
						{Number(oilPurchase.replace(/,/g, '') / 52).toFixed(1)}
					</span>{' '}
					pails/boxes of <br /> fry-oil per week.
					<RadioGroup
						onChange={handleRadioChangeInternal}
						value={selectedRadio}
					>
						<Stack direction='row' justify='center' mt='4vh'>
							<Radio
								value='yes'
								border='2px solid'
								borderColor={showError && !selectedRadio ? 'red' : '#416CF6'}
							>
								<span className='text-[2vh]'>Yes</span>
							</Radio>
							<Radio
								value='no'
								border='2px solid'
								borderColor={showError && !selectedRadio ? 'red' : '#416CF6'}
								ml='1.5vh'
							>
								<span className='text-[2vh]'>No</span>
							</Radio>
						</Stack>
					</RadioGroup>
				</ModalBody>
				<Button
					bg='red'
					color='white'
					fontSize={'2vh'}
					_hover={{ bg: '#6E0000' }}
					onClick={handleApply}
					className='text-[2vh]'
					ml='auto'
				>
					Apply
				</Button>
			</ModalContent>
		</Modal>
	)
}

export default OilPurchaseModal
