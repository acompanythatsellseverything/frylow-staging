import ReviewCard from './ReviewCard'

const ReviewRow = ({ arr }: { arr: any }) => {
	return (
		<div className='flex justify-between mt-5 md:mt-[8vh] gap-8 md:gap-4 overflow-scroll scrollbar-hide scrollbar-hide'>
			{arr.map((val: any) => (
				<ReviewCard
					company={val.company}
					text={val.text}
					name={val.name}
					who={val.who}
					id={val.id}
					img={val.img}
				/>
			))}
		</div>
	)
}

export default ReviewRow
