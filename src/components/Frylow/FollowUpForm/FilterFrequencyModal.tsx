import React, { useState } from 'react'
import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalCloseButton,
	ModalBody,
	RadioGroup,
	Stack,
	Radio,
	Button,
} from '@chakra-ui/react'

const FilterFrequencyModal: React.FC<any> = ({
	isOpen,
	onClose,
	handleRadioChange,
}) => {
	const [selectedOption, setSelectedOption] = useState<string | null>(null)
	const [showError, setShowError] = useState(false)

	const handleApply = () => {
		if (!selectedOption) {
			setShowError(true)
		} else {
			handleRadioChange(selectedOption, 'filter-frequency')
			setShowError(false)
			onClose()
		}
	}

	const handleRadioChangeInternal = (value: string) => {
		setSelectedOption(value)
		setShowError(false)
	}

	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent
				className='border border-[#416CF6] border-2 px-4 pt-8 pb-2 md:p-[3vh] font-[700] text-center text-xl md:text-[2.5vh]'
				borderRadius='20px'
				maxW={['90%', '400px']}
			>
				<ModalCloseButton />
				<ModalBody p='0'>
					Does your kitchen use a{' '}
					<span className='text-blue-600'>filtering</span>{' '}
					<span className='text-blue-600'>machine</span> or fryers with{' '}
					<span className='text-blue-600'>internal filtering</span> capability?
					<RadioGroup onChange={handleRadioChangeInternal}>
						<Stack direction='row' justify='center' mt='4vh'>
							<Radio
								value='yes'
								border={`2px solid ${
									showError && !selectedOption ? 'red' : '#416CF6'
								}`}
							>
								<span className=' text-[2vh]'>Yes</span>
							</Radio>
							<Radio
								value='no'
								border={`2px solid ${
									showError && !selectedOption ? 'red' : '#416CF6'
								}`}
								ml='1vh'
							>
								<span className=' text-[2vh]'>No</span>
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

export default FilterFrequencyModal
