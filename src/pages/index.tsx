import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { IWeatherSuccessRes, getWeather } from '@/server/weather'
import { GetServerSideProps } from 'next'
import { useEffect, useState } from 'react'
import axios, { HttpStatusCode } from "axios"
import Weather from '@/component/weather'
import Header from '@/component/header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [loading, setLoading] = useState<boolean>(false)
  const [apiData, setApiData] = useState<IWeatherSuccessRes | null>(null)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    // request location permission on start
    requestLocation()
  }, []);

  function requestLocation() {
    // check browser support for geolocation api
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // on success
          getWeatherFromApi(position.coords.latitude, position.coords.longitude);
        },
        // on error
        () => {
          console.log("Local indisponível...");
        }
      );
    }
  }

  async function getWeatherFromApi(latitude: number, longitude: number) {
    setLoading(true)
    setError(false)
    try {
      const req = await axios.get<IWeatherSuccessRes | null>("/api/weather", {
        params: {
          latitude,
          longitude
        }
      })
      if (req.status === HttpStatusCode.Ok) {
        setApiData(req.data)
        setLoading(false)
      } else {
        setLoading(false)
        setError(true)
      }
    } catch (e) {
      setLoading(false)
      setError(true)
    }
  }

  function renderWeather() {
    return apiData?.result.slice(1).map((items, id) =>
      <Weather key={id} {...items} isToday={false} city={apiData.city} />
    )
  }

  return (
    <>
      <Head>
        <title>Teste React</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      {
        loading &&
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
          <h2 className='text-lg'>Carregando...</h2>
        </div>
      }
      {
        !apiData &&
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
          <img src='/location.svg' className="w-2/6 h-2/6 max-w-sm" />
          <a className='mt-10 text-center'>Você pode ver a previsão do tempo em sua localização ativa concedendo acesso à localização no seu navegador.</a>
          <button onClick={() => requestLocation()} className='bg-purple-500 hover:bg-purple-600 py-2 px-4 rounded-md text-white mt-4'>Permitir localização</button>
        </div>
      }
      {
        apiData &&
        <div className="min-h-[90vh] flex flex-col justify-center items-center">
          <Weather {...apiData.result[0]} isToday={true} city={apiData.city} className={"min-w-[100%] sm:max-w-full sm:min-w-[50%]"} />
          <div className='w-full flex flex-row flex-wrap gap-5 mt-5'>
            {renderWeather()}
          </div>
        </div>
      }
    </>
  )
}
