import './App.css'
import Header from './components/Header'
import top_overlay from './Home page comps/top_overlay.png'

function App() {
  return (
    <>
      <div>
        <Header/>
          {/* Image Section */}
          <div className="absolute top-0 left-0 w-full h-full ">
            <img src={top_overlay} alt="Landing" className=" w-full object-cover h-[60%]" />
          </div>
      </div>
    </>
  )
}

export default App
