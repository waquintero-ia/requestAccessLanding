const Content = () => {
  return(
    <>
      <div className="main_container md:w-[528px] lg:w-[736px]">
        <div className="container_content flex flex-col justify-center items-center gap-4 md:justify-start md:items-start md:gap-6">
          <h1 className="text-32 font-light leading-120 uppercase text-center text-white md:text-start md:text-48">
            <span className="text-green">Publish your podcasts</span> everywhere.
          </h1>
          <p className="text-blue-300 text-14 font-light text-center md:text-18 md:text-start md:w-[450px]">
            Upload your audio to Pod with a single click. We’ll then distribute your podcast to Spotify, 
            Apple Podcasts, Google Podcasts, Pocket Casts and more!
          </p>
        </div>
      </div>
    </>
  )
}

export default Content