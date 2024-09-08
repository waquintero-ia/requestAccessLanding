const Logos = () => {
  return(
    <>
      <div className="logos_container">
        <div className="container_content my-10 flex justify-between md:my-0 md:mt-[55px] md:w-[547px]">
          <picture>
            <img className="h-[17px] md:h-[28px]" src="./assets/desktop/spotify.svg" alt="logo spotify" loading="lazy" decoding="async"/>
          </picture>
          <picture>
            <img className="h-[17px] md:h-[28px]" src="./assets/desktop/apple-podcast.svg" alt="logo apple podcast" loading="lazy" decoding="async"/>
          </picture>
          <picture>
            <img className="w-[73px] h-[17px] md:h-[28px] md:w-[124px]" src="./assets/desktop/google-podcasts.svg" alt="logo google podcasts" loading="lazy" decoding="async"/>
          </picture>
          <picture>
            <img className="w-[75px] h-[17px] md:h-[28px] md:w-[128px]" src="./assets/desktop/pocket-casts.svg" alt="logo pocket casts" loading="lazy" decoding="async"/>
          </picture>
        </div>
      </div>
    </>
  )
}

export default Logos