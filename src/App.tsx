
import InputField from "./components/custom/InputField"
import TodoDisplay from "./components/custom/TodoDisplay"
import {ToastContainer} from "react-toastify"

function App() {


  return (
    <div className="sm:w-[40vw]  h-screen mx-auto p-10">
      <ToastContainer
position="top-right"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
  <InputField/>
  <TodoDisplay/>
  </div>
  )
}

export default App
