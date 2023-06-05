import { Banner } from './Banner'

import BannerImg from '../../assets/banner_braile.jpg'

export function Home() {
  return (
    <>
      <Banner
        title="Glossário"
        subtitle="Musicografia Braille"
        coverUrl={BannerImg}
      />
    </>
  )
}
