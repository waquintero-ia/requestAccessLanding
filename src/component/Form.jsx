import { useState } from 'react';

const Form = () => {

  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  console.log(email);
  console.log(error);
  
  return(
    <>
      <div className="form_container md:w-448">
        <div className="form_content">
          <form action="" method="POST" onSubmit={handleSubmit}>
            <div className="container_input md:relative">
              <div className="mb-2">
                <label className="sr-only" htmlFor="email">Email address</label>
                <input type="email" id="email" name="email" placeholder="Email address" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} className={`w-full h-11 rounded-full px-7 text-14 font-bold bg-blue-900 ${
                    error ? 'border-2 border-red': 'border-2 border-blue-600'} text-blue-300 md:h-52`}/>
              </div>
              <div className="md:absolute md:right-1 md:top-1/2 md:transform md:-translate-y-1/2">
                <button className="relative bg-green w-full rounded-full h-11 text-14 font-bold capitalize text-blue-950 md:w-173 group cursor-pointer">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50 group-focus:opacity-50 group-active:opacity-50 rounded-full transition-opacity duration-300 z-0"></div>
                  Request access
                </button>
              </div>
            </div>
            {error && (
              <div className="text-red text-center text-12 mt-2" role="alert">
                <p>Oops!, please check your email</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default Form