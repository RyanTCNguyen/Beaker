import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import Auth0ProviderWithHistory from './auth0-provider-with-history'

ReactDOM.render(
    <React.StrictMode>
        <Auth0ProviderWithHistory>
            <App />
        </Auth0ProviderWithHistory>
    </React.StrictMode>,

    document.getElementById('root')
)
