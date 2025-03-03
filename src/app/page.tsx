"use client"
import { getTodaysPresentation } from "@/utils/functions"
import TextAndImageSection from "@/components/TextAndImageSection"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { useRef } from "react"
import MainPageTextAndImages from "@/views/MainPageTextAndImages"

export default function Home() {
  const todaysPresentation = getTodaysPresentation()

  const router = useRouter()

  return (
    <div className="flex h-dvh w-full flex-col gap-8 overflow-x-hidden overflow-y-auto">
      <div className="relative flex h-full min-h-full w-full flex-col gap-8 pt-16 pl-18">
        <div className="relative h-3/4 w-full">
          <Image
            src="/images/StHelensHeaderImage.jpg"
            alt="April 1980  Phreatic eruption of Mount St. Helens from Weyerhaeuser road on ridge between South and North Fork Toutle Rivers"
            fill
            className="object-cover"
            priority={true}
          />
        </div>
        <div className="flex h-1/4 w-full max-w-[800px] flex-col justify-start gap-4">
          <h2 className="text-light-gray text-6xl font-black drop-shadow-md md:text-8xl">
            The Smoking Mountain
          </h2>

          <h3 className="text-tangerine-dark text-xl md:text-2xl">
            Lawetlat&apos;la - Mount St. Helens
          </h3>
        </div>
        {/* <p className="text-spl-800 z-20 absolute bottom-0 mx-auto p-4 font-semibold text-lg">
          April 1980 Phreatic eruption of Mount St. Helens from Weyerhaeuser
          road on ridge between the South and North Fork Toutle Rivers. Mary &
          Ron Rinear Collection
        </p> */}
      </div>
      <MainPageTextAndImages />

      {!!todaysPresentation && (
        <button
          onClick={() => {
            const releaseDate = todaysPresentation?.release_date
            router.push(`/slides/${releaseDate}`)
          }}
        >
          <h3 className="font-header flex items-center justify-center gap-2 text-2xl text-white">
            View Slides
            <span className="font-bold">{todaysPresentation?.day_count},</span>
            <span className="font-bold">{todaysPresentation?.date}</span>
            <span className="font-bold">{todaysPresentation?.year}</span>
            <span className="font-bold">{todaysPresentation?.weekday}</span>
          </h3>
        </button>
      )}
    </div>
  )
}
