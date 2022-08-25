import ReactDOM from 'react-dom'
import React from 'react'
import Start from './Start'



function App() {
    return (
        <div>
            <Start ></Start>
        </div>
    )
}

export default App

const rootElement = document.getElementById('root')
ReactDOM.render(<App></App>, rootElement)
