import Image from 'next/image';
import React from 'react'

interface weatherProps {
	data: any
}
const Weather = (props: weatherProps) => {
	const { data } = props;
	console.log(data)
	return (
		<div className='relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
			<div className='relative flex justify-between pt-12'>
				<div className='flex flex-col items-center'>
					<Image
						src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
						alt='/'
						width={100}
						height={100}
					/>
					<p className='text-2xl'>{data.weather[0].main}</p>
				</div>
				<p className='text-9xl'>{data.main.temp.toFixed(0)}&#176;</p>
			</div>

			<div className='bg-black/50 relative p-8 rounded-md'>
				<p className='text-wxl text-center pb-6'>Weather in {data.name}</p>
				<div className='flex justify-center gap-5'>
					<div className='text-center'>
						<p>{data.main.humidity}%</p>
						<p>Feels Like</p>
					</div>
					<div className='text-center'>
						<p>{data.main.feels_like.toFixed(0)}&#176;</p>
						<p>Humidity</p>
					</div>
					<div className='text-center'>
						<p>{data.wind.speed.toFixed(0)}MPH</p>
						<p>Winds</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Weather