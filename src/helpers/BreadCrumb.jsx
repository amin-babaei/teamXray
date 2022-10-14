import React from 'react'
import { Link } from 'react-router-dom'

const BreadCrumb = ({title}) => {
  return (
    <nav className="rounded-md py-5 px-2 rtl">
  <ol className="list-reset flex">
    <li className="text-gray-100 hover:text-xred">
        <Link to="/">Home</Link>
    </li>
    <li>
        <span className="text-gray-100 mx-2">/</span>
    </li>
    <li className="text-gray-200 hover:text-xred">
        <Link to="/blogs">Blogs</Link>
    </li>
    <li>
        <span className="text-gray-400 mx-2">/</span>
    </li>
    <li className="text-gray-500">{title.length > 30 ? `${title.slice(-30)} ...` : title}</li>
  </ol>
</nav>
  )
}

export default BreadCrumb