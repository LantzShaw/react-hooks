/**
 * about using useContext hook
 */

import { useContext } from 'react'

import NotificationContext from './store'

const App = props => {
    const notificationCtx = useContext(NotificationContext)

    console.log('notificationCtx', notificationCtx)

    const notificationData = {
        id: Math.random() * 9,
        content: 'hello react',
    }

    const notificationClickHandler = () => {
        notificationCtx.addNotification(notificationData)
    }

    let content

    if (notificationCtx.totalNotifications === 0) {
        content = <h2>There is no notification</h2>
    } else {
        content = notificationCtx.notifications.map(notification => (
            <p key={notification.id}>{notification.content}</p>
        ))
    }

    return (
        <>
            <button onClick={notificationClickHandler}>Add</button>
            {content}
        </>
    )
}

export default App
