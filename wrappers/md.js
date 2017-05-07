import React from 'react'
import 'css/markdown-styles.css'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

module.exports = React.createClass({
  propTypes() {
    return {
      router: React.PropTypes.object,
    }
  },
  render() {
    const post = this.props.route.page.data
    return (
      <DocumentTitle title={`${config.siteTitle}`}>
        <div className="markdown">
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </div>
      </DocumentTitle>
    )
  },
})
