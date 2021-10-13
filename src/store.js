/**
 * About using createContext hook
 */

import { createContext, useState } from 'react'

const NotificationContext = createContext({
    totalNotifications: 0,
    notifications: [],
    addNotification: () => {},
    removeNotification: notificationId => {},
})

export const NotificationContextProvider = props => {
    const [notifications, setNotifications] = useState([])

    const addNotificationHandler = notification => {
        setNotifications(preNotifications => {
            return preNotifications.concat(notification)
        })
    }

    const removeNotificationHandler = notificationId => {
        // do something with notification...
    }

    const context = {
        totalNotifications: notifications.length,
        notifications: notifications,
        addNotification: addNotificationHandler,
        removeNotification: removeNotificationHandler,
    }

    return (
        <NotificationContext.Provider value={context}>
            {props.children}
        </NotificationContext.Provider>
    )
}

export default NotificationContext
