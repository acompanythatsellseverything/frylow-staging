import { MoveDown, MoveRight } from 'lucide-react'
import TableTwo from './TableTwo'
import TableOne from './TableOne'

const TablesWithoutFrylow = () => {
	return (
		// gap-6 md:gap-[6vh]
		<div className='flex justify-between gap-2 mt-8 md:mt-16 lg:mt-[8vh] flex-col md:flex-row items-center'>
			<div>
				<p className='font-medium md:text-3xl lg:text-[3vh] text-xl'>
					<i>Without</i> <b>Frylow</b>
				</p>
				<p className='font-bold lg:text-[2.5vh] mb-2 md:mb-4'>
					<span className='text-blue-600'>2</span> Oil Change per week. 50lb
					Fryers
				</p>
				<TableOne />
			</div>
			<MoveRight color='red' className='md:mt-24 hidden md:block' size='4vh' />
			<MoveDown color='red' className='md:mt-24 md:hidden' size='4vh' />
			<div>
				<p className='font-medium md:text-3xl lg:text-[3vh] text-xl'>
					<i className='text-blue-600'>With</i> <b>Frylow</b>
				</p>
				<p className='font-bold lg:text-[2.5vh] mb-2 md:mb-4'>
					<span className='text-blue-600'>2</span> Oil Change per week. 50lb
					Fryers
				</p>
				<TableTwo />
			</div>
		</div>
	)
}
export default TablesWithoutFrylow
