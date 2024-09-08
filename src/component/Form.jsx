const Form = () => {
  return(
    <>
      <div className="form_container md:w-[448px]">
        <div className="form_content">
          <form action="" method="POST">
            <div className="container_input md:relative">
              <div className="mb-[8px]">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required autoComplete="email" className="w-full h-[44px] rounded-full bg-blue-900 px-[28px] text-14 font-bold text-blue-300 md:h-[52px] md:relative"/>
              </div>
              <div className="md:absolute md:right-1 md:top-1/2 md:transform md:-translate-y-1/2">
                <button className="relative bg-green w-full rounded-full h-[44px] text-14 font-bold capitalize text-blue-950 md:w-[173px] group cursor-pointer">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 group-focus:opacity-50 group-active:opacity-50 rounded-full transition-opacity duration-300 z-0"></div>
                  Request access
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Form