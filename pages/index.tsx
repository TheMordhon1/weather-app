import Head from 'next/head'
import axios from 'axios'
import { BsSearch } from 'react-icons/bs'
import { useState } from 'react'
import Image from 'next/image'
import Weather from '../components/Weather'
import Spinner from '../components/Spinner'


export default function Home() {
	const [city, setCity] = useState<string>('')
	const [weather, setWeather] = useState<Object>({})
	const [loading, setLoading] = useState<boolean>(false)
	const [show, setShow] = useState<boolean>(false)
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`

	const fetchWeather = (e: any) => {
		e.preventDefault();
		setLoading(true);
		axios.get(url)
			.then((res) => {
				setWeather(res.data);
				setLoading(false)
				setShow(true)
				console.log(res.data.weather)
			}).catch(err => console.log(err))
		setCity('');
	}

	return (
		<>
			<Head>
				<title>Weather App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]" />
			<Image
				src='https://images.unsplash.com/photo-1601134467661-3d775b999c8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1075&q=80'
				alt="backgrounf-img"
				fill
				className='object-cover z-0 relative'
			/>

			<div className="relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10">
				<form
					onSubmit={fetchWeather}
					className='flex justify-between items-center w-full m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl'>
					<div className='flex-1'>
						<input
							type="text"
							onChange={(e) => setCity(e.target.value)}
							className='bg-transparent border-none text-white focus:outline-none text-2xl w-full'
							placeholder='Search City'
						/>
					</div>
					<button
						onClick={fetchWeather}
					><BsSearch size={20} /></button>
				</form>
			</div>
			{
				loading
					? <Spinner />

					: show && <Weather data={weather} />
			}
		</>
	)
}

