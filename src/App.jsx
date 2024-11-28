import Blogs from './components/blogs/Blogs'
import Boorkmarks from './components/Bookmarks/Boorkmarks'
import Header from './components/headers/Header'

function App() {


  return (
    <div>
      <Header></Header>
      <div className='md:flex gap-4 max-w-5xl mx-auto'>
        <Blogs></Blogs>
        <Boorkmarks></Boorkmarks>
      </div>
    </div>
  )
}

export default App
