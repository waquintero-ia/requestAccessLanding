import './App.css'
import Content from './component/Content'
import Form from './component/Form'
import Logos from './component/Logos'
import Navigation from './component/Navigation'

function App() {

  return (
    <>
    <div className="container_main background-image overflow-hidden p-9 min-h-812 md:p-11 md:min-h-1024 xl:px-40 xl:py-0">
      <nav>
        <Navigation />
      </nav>
      <div className="container_info md:bg-blue-950 md:w-592 md:min-h-552 md:pt-88 xl:w-736">
        <main className='md:mb-42'>
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
