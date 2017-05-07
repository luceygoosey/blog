import React from "react"
import { Link } from "react-router"
import { prefixLink } from "gatsby-helpers"
import { config } from "config"
import includes from 'underscore.string/include';

import 'css/bootstrap.min.css'
import 'css/style.css'


module.exports = React.createClass({
  propTypes() {
    return {
      children: React.PropTypes.any,
    }
  },
  render() {
    const blogActive = includes(this.props.location.pathname, '/blog/');
    const aboutActive = includes(this.props.location.pathname, '/about/');
    const contactActive = includes(this.props.location.pathname, '/contact/');

    return (
      <div className={`container`}>
        <nav className={`navbar navbar-toggleable-md fixed-top navbar-inverse blue`}>
          <button className={`navbar-toggler navbar-toggler-right`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className={`navbar-toggler-icon`}></span>
          </button>
          <h1 className={`navbar-brand`}>Kate Lucey</h1>
          <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
            <ul className={`nav navbar-nav`}>
              <Link className={`nav-item nav-link ${blogActive ? 'active' : ''}`} to={prefixLink('/blog/')}>Blog</Link>
              <Link className={`nav-item nav-link ${aboutActive ? 'active' : ''}`} to={prefixLink('/about/')}>About</Link>
              <Link className={`nav-item nav-link ${contactActive ? 'active' : ''}`} to={prefixLink('/contact/')}>Contact</Link>
            </ul>
          </div>
        </nav>
          {this.props.children}
      </div>
    )
  },
})
