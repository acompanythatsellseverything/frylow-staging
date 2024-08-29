const IntroImages = () => {
	return (
		<>
			<div>
				<p className='font-[500] text-[2.5vh] mb-1 tracking-[0.07em]'>
					Frylow <i className='font-[700]'>in a Fryer</i>
				</p>
				<div className='h-[24vh] w-[25vh] overflow-hidden rounded-[4%]'>
					<img
						src={'/images/fry.png'}
						loading='lazy'
						className='h-full w-full object-cover object-left'
					/>
				</div>
			</div>
			<div>
				<p className='font-[500] text-[2.5vh] mb-1 tracking-[0.07em]'>
					<i className='font-[700]'>Before</i> Frylow
				</p>
				<img
					src={'/images/before.png'}
					loading='lazy'
					height={220}
					width={220}
					className='h-[24vh] w-[25vh]'
				/>
			</div>
			<div>
				<p className='font-[500] text-[2.5vh] mb-1 tracking-[0.07em]'>
					<i className='font-[700]'>After</i> Frylow
				</p>
				<img
					src={'/images/after.png'}
					loading='lazy'
					height={220}
					width={220}
					className='h-[24vh] w-[25vh]'
				/>
			</div>
		</>
	)
}

export default IntroImages
