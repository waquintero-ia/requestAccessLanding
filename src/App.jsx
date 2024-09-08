import './App.css'
import Content from './component/Content'
import Form from './component/Form'
import Logos from './component/Logos'
import Navigation from './component/Navigation'

function App() {

  return (
    <>
    <div className="container_main background-image overflow-hidden p-9 min-h-[812px] md:p-11 md:min-h-[1024px] lg:px-[160px] lg:py-0">
      <nav>
        <Navigation />
      </nav>
      <div className="container_info md:bg-blue-950 md:w-[592px] md:min-h-[552px] md:pt-[88px] lg:w-[736px]">
        <main className='md:mb-[42px]'>
          <Content />
        </main>
        <footer className='flex flex-col md:flex-col-reverse'>
          <Logos />
          <Form />
        </footer>
      </div>
    </div>
    </>
  )
}

export default App
