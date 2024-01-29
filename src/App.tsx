import { Suspense } from "react"
import Banner from "./components/banner/Banner"
import Loader from "./components/loader/Loader"

function App() {
  return (
    <main className="mx-auto p-8">
        <Suspense fallback={<Loader />}>
          <Banner />
        </Suspense>
    </main>
  )
}

export default App
