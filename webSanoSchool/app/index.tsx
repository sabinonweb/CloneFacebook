import {  LogBox } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const Page = () => {
  LogBox.ignoreAllLogs()
  const router=useRouter()
 
    router.replace('/main')

    if (user) {
      return <Redirect href="/home" />
    }
  return (
    <>
     
    </>
  )
}

export default Page
