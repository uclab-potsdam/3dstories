import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const editMode = false

if (editMode) {
  import('@theatre/studio').then(studio => {
    import('@theatre/r3f/dist/extension').then(extension => {
      studio.default.extend(extension.default)
      studio.default.initialize()
    })
  })
}

console.info('Welcome to 3dStories')
console.info('BASE_UR:', import.meta.env.BASE_URL)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
