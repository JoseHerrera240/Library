import './Assets/App.sass'
import Login from './Components/Login/Index';
import CreateAcountAdmin from './Components/CreateAcountAdmin/Index';
import CreateAcountUser from './Components/CreateAcountUser/Index';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomeAdmin from './Components/HomeAdmin';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/createAcountAdmin",
      element: <CreateAcountAdmin/>
    },
    {
      path: "/createAcountUser",
      element: <CreateAcountUser/>
    },
    {
      path: "/homeAdmin",
      element: <HomeAdmin/>
    },

  ])

  return (
    <div className='app'>
      <RouterProvider
        router={router}
      />
    </div>
  );
}

export default App;
