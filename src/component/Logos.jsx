const Logos = () => {
  return(
    <>
      <div className="logos_container">
        <div className="container_content my-10 flex justify-between md:my-0 md:mt-55 md:w-547">
          <picture>
            <img className="h-17 md:h-7" src="./assets/desktop/spotify.svg" alt="logo spotify" loading="lazy" decoding="async"/>
          </picture>
          <picture>
            <img className="h-17 md:h-7" src="./assets/desktop/apple-podcast.svg" alt="logo apple podcast" loading="lazy" decoding="async"/>
          </picture>
          <picture>
            <img className="w-73 h-17 md:h-7 md:w-124" src="./assets/desktop/google-podcasts.svg" alt="logo google podcasts" loading="lazy" decoding="async"/>
          </picture>
          <picture>
            <img className="w-75 h-17 md:h-7 md:w-128" src="./assets/desktop/pocket-casts.svg" alt="logo pocket casts" loading="lazy" decoding="async"/>
          </picture>
        </div>
      </div>
    </>
  )
}

export default Logos