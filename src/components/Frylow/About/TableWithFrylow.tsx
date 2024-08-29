import { MoveDown, MoveRight } from 'lucide-react'
import ThreeFryersWithoutFrylow from './ThreeFryersWithoutFrylow'
import ThreeFryersWithFrylow from './ThreeFryersWithFrylow'

const TablesWithFrylow = () => {
	return (
		<div className='flex justify-between gap-2 mt-8 md:mt-16 lg:mt-[8vh] flex-col md:flex-row items-center'>
			<div>
				<p className='font-medium md:text-3xl lg:text-[3vh] text-xl'>
					<i>Without</i> <b>Frylow</b>
				</p>
				<p className='font-bold lg:text-[2.5vh] mb-2 md:mb-4'>
					<span className='text-blue-600'>3</span> Oil Change per week. 50lb
					Fryers
				</p>
				<ThreeFryersWithoutFrylow />
			</div>
			<MoveRight color='red' className='md:mt-24 hidden md:block' size='4vh' />
			<MoveDown color='red' className='md:mt-24 md:hidden' size='4vh' />
			<div>
				<p className='font-medium md:text-3xl lg:text-[3vh] text-xl'>
					<i className='text-blue-600'>With</i> <b>Frylow</b>
				</p>
				<p className='font-bold lg:text-[2.5vh] mb-2 md:mb-4'>
					<span className='text-blue-600'>3</span> Oil Change per week. 50lb
					Fryers
				</p>
				<ThreeFryersWithFrylow />
			</div>
		</div>
	)
}
export default TablesWithFrylow
