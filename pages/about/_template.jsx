import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers'

import 'css/bootstrap.min.css'
import 'css/style.css';

module.exports = React.createClass({
  propTypes () {
    return {route: React.PropTypes.object};
  },
  contextTypes: {router: React.PropTypes.object.isRequired},
  render: function() {
    return (
      <div className={'container'}>
        <div className={`row pad-75`}>
          <div className={`col-sm-6`}><img src='../../assets/imgs/kate.jpg' width='100%'/></div>
          <div className={`col-sm-6`}>{this.props.children}</div>
        </div>
      </div>
    );
  }
});
