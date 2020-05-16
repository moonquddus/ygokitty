import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom";

import './pageNav.scss'

const PageNav = props => {
  const { page, pageCount } = props

  const generatePagination = () => {
    if (!pageCount || !page || page > pageCount)
      return ''

    let pageElements = []
    for (let i = 1; i <= pageCount; i++){
      pageElements.push(
        <li key={`page-${i}`}>
          <Link to={`/editor/${i}`}>{i}</Link>
        </li>
      )
    }
    return pageElements
  }

  return (
    <ul id='editor-pagination'>
      {generatePagination()}
    </ul>
  )
}

const mapStateToProps = (state) => {
  return {
    pageCount: state.grid.pages
  }
}
export default connect(mapStateToProps)(PageNav)