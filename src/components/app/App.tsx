import React from 'react'
import './App.scss'
import AppHeader from '../app-header/AppHeader'
import Main from '../main/Main'

const App: React.FunctionComponent = () => {
    return (
        <div className="App">
            <AppHeader/>
            <Main/>
        </div>
    )
}

export default App
