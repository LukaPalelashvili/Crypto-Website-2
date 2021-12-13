import { Hero } from '../pages/MainPage/Hero/Hero'
import { About } from '../pages/MainPage/About/About'
import { Successes } from '../pages/MainPage/Successes/Successes'
import { Features } from '../pages/MainPage/Features/Features'
import { Security } from '../pages/MainPage/Security/Security'
import { Coin } from '../pages/MainPage/Coin/Coin'
import { Sale } from '../pages/MainPage/Sale/Sale'
import { Roadmap } from '../pages/MainPage/Roadmap/Roadmap'
import { Ratings } from '../pages/MainPage/Ratings/Ratings'
import { Temp } from '../pages/MainPage/Temp/Temp'
import "../css/bootstrap.min.css"

export const Content = () => {
  return (
    <div className="content-wrapper">
      <div className="content-body">
        <main>
          <Hero />
          <About />
          <Successes />
          <Features />
          <Security />
          <Coin />
          <Sale />
          <Roadmap />
          <Temp />
          <Ratings />
        </main>
      </div>
    </div>
  )
}
