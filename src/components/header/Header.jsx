import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className="header">
      <div className="header-titles">
        <span className="sm-title">React & Node</span>
        <span className="lg-title">Blog</span>
      </div>
      <img src="https://picsum.photos/2200/500" alt="" className="header-img" />
    </div>
  )
}
