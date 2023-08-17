import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'
import App from './App'
// import { RouterProvider } from 'react-router-dom'
// import { routes } from './routes/routes'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />

      {/* <RouterProvider router={routes}></RouterProvider> */}



    </Provider>
  </React.StrictMode>,
)
