import React from 'react'
import SideBar from '../../components/sidebar/SideBar'
import './single.css'
import SinglePost from '../../components/SinglePost/SinglePost'

export default function Single() {
  return (
    <div className='single'>
        <SinglePost />
        <SideBar />
    </div>
  )
}
