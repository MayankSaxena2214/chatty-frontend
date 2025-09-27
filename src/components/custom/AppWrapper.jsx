"use client"
import { store } from '@/redux/store'
import React from 'react'
import { Provider } from 'react-redux'

const AppWrapper = ({children}) => {
  return (
    <div>
        <Provider store={store}>
            {children}
        </Provider>
    </div>
  )
}

export default AppWrapper
