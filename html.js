import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import DocumentTitle from 'react-document-title';

const BUILD_TIME = new Date().getTime()

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      body: ""
    };
  },
  render: function() {
    var title
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }
    if (this.props.img) {
      img = this.props.img;
    }

    let css
    if (process.env.NODE_ENV === 'production') {
      css = <style dangerouslySetInnerHTML={{ __html: require('!raw!./public/style.css') }} />
    }
    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
          {css}
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{ __html: this.props.body }}/>
          <script src={prefixLink(`/bundle.js?t=${BUILD_TIME}`)} />
        </body>
      </html>
    )
  },
})
