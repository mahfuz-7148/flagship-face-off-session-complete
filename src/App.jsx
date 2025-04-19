import { Outlet } from 'react-router'

function App() {
  return (
    <>
      <h1 className='text-3xl font-bold underline'>Navbar</h1>
      {/* Placeholder component */}
      <Outlet />
      <h1 className='text-3xl font-bold underline'>Footer</h1>
    </>
  )
}

export default App
