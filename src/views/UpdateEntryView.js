import React, { Component } from 'react';
import PropTypes from 'prop-types';
import getOneEntry from '../actionCreators/getOneEntry';
import { connect } from 'react-redux';
import NavigationBar from '../components/navigation/NavigationBar';
import Background from '../images/diary1.jpg';
import WriteOrEdit from '../components/WriteOrEdit';


var sectionStyle = {
    position: "fixed",
    width: "100%",
    height: "1200px",
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

class UpdateEntryView extends Component {

  componentDidMount() {
    this.props.getOneEntry(this.props.match.params.entryId);
  }

  render() {
    return (
        <div style={ sectionStyle }>
            <NavigationBar />
            <section className="container">
                <WriteOrEdit
                  entryId={this.props.match.params.entryId}
                  entryAction= "updating_entry"
                  titleValue={this.props.entry.title}
                  bodyValue={this.props.entry.body}
                />
            </section>
    </div>
      );
  }
}
UpdateEntryView.propTypes = {
    entryId: PropTypes.number,
    getEntry: PropTypes.func,
    title: PropTypes.string,
    body: PropTypes.string,

};

const mapStateToProps = state => ({
    entry: state.getEntry.entry,
    loading: false,
    status: null,
    message: null
  });
export default connect(mapStateToProps, { getOneEntry })(UpdateEntryView);
