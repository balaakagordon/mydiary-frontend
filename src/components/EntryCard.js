import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
// import { deleteArticles } from '../actions/ArticleAction';
// import ArticleHeader from './ArticleHeader';
// import renderHTML from 'react-render-html';
// import '../style/card.css'
export class EntryCard extends Component {
  state = {};

  render() {
    return (
        <div className="entry-card">
            <div className="row">
                <div className="entry-card-display">
                    <div className="entry-card-title">
                        {this.props.title}   -   {this.props.date}
                    </div>
                    <div className="entry-card-body">
                        {this.props.body}
                    </div>
                </div>
            </div>
        </div>
    );
  }
}
EntryCard.propTypes = {
  deleteArticles: PropTypes.isRequired,
};

const mapStateToProps= state =>({
  message:state.articles,
})

export default connect(mapStateToProps,{})(EntryCard);
