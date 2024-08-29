import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	Button,
	Link,
} from '@chakra-ui/react'

interface CountryModalProps {
	usaLink: string
	canadaLink: string
	isOpen: boolean
	onOpen?: () => void
	onClose: () => void
}

const CountryModal = ({
	usaLink,
	canadaLink,
	isOpen,
	onClose,
}: CountryModalProps) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent className='border-2 border-blue-600' borderRadius='12px'>
				<ModalHeader textAlign='center'>Choose your Country</ModalHeader>
				<ModalCloseButton />
				<ModalBody p='24px 36px'>
					<div className='flex justify-around'>
						<Link href={usaLink} style={{ textDecoration: 'none' }}>
							<div className='flex flex-col items-center gap-2'>
								<img
									src='/images/home-home/usa-flag.png'
									loading='lazy'
									className='w-20'
								/>

								<Button colorScheme='blue' w='100px'>
									USA
								</Button>
							</div>
						</Link>
						<Link href={canadaLink} style={{ textDecoration: 'none' }}>
							<div className='flex flex-col items-center gap-2'>
								<img
									src='/images/home-home/ca-flag.png'
									loading='lazy'
									className='w-20'
								/>

								<Button colorScheme='blue' w='100px'>
									Canada
								</Button>
							</div>
						</Link>
					</div>
				</ModalBody>
			</ModalContent>
		</Modal>
	)
}

export default CountryModal
