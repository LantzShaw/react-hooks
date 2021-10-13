import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'

import { NotificationContextProvider } from './store'

ReactDOM.render(
    <NotificationContextProvider>
        <App />
    </NotificationContextProvider>,
    document.getElementById('root')
)
