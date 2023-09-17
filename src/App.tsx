import AppRouter from "./router/AppRouter"
import MainProvider from "./context/MainProvider"

function App() {

  return (
    <div className="bg-gray-200">
      <MainProvider>
        <AppRouter></AppRouter>
      </MainProvider>
    </div>
  )
}

export default App
