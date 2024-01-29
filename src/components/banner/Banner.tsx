import { fetchData } from "../../api/fetchData"
import Moon from "../moon/Moon"

console.log(import.meta.env.MODE)

const date = new Date()

const data = fetchData(`http://api.weatherapi.com/v1/astronomy.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=Buenos Aires&lang=es`)

const Banner = (): JSX.Element => {

    const content = data.read()

    return (
        <article className="mx-auto bg-stone-900 w-full max-w-4xl min-h-[18rem] rounded-[40px] p-8 flex flex-col gap-8">
            <header className="flex justify-between items-center">
                <div className="flex gap-3">
                    <div className="bg-slate-100 rounded-3xl px-4 py-2 text-slate-500">
                        {date.toDateString()}
                    </div>
                    <div className="border border-slate-100 rounded-3xl px-4 py-2">
                        {content.location.name}
                    </div>
                </div>
                <svg className="w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                </svg>
            </header>
            <div className="grid grid-cols-12 gap-6">
                <div className="col-span-6 border border-white rounded-2xl p-4 flex gap-8">
                    <Moon phase={content.astronomy.astro.moon_phase} size={[100, 100]} />
                    <div className="flex flex-col gap-6">
                        <h2 className="font-bold text-2xl">{content.astronomy.astro.moon_phase}</h2>
                        <div className="flex gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7.5 7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5" />
                            </svg>
                            <p>{content.astronomy.astro.moonrise} - {content.astronomy.astro.moonset}</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-3 bg-slate-50 rounded-2xl px-6 py-4 flex flex-col justify-between text-slate-500 ">
                    <p>Illumination</p>
                    <p className="text-6xl self-end">{content.astronomy.astro.moon_illumination}%</p>
                </div>
                <div className="col-span-3 bg-stone-800 rounded-2xl px-6 py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
            </div>
        </article>
    )
}

export default Banner