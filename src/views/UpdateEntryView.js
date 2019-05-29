// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { getEntry } from '../actions/getEntriesActions';
// import { connect } from 'react-redux';
// import NavigationBar from '../components/navigation/NavigationBar';
// import Background from '../images/diary1.jpg';
// import WriteOrEdit from '../components/WriteOrEdit';


// var sectionStyle = {
//     position: "fixed",
//     width: "100%",
//     height: "800px",
//     backgroundImage: `url(${Background})`,
//     backgroundPosition: 'center',
//     backgroundSize: 'cover',
//     backgroundRepeat: 'no-repeat',
//   };
  
  
//   class UpdateEntryView extends Component {
//     state = {  }

//     componentDidMount() {
//           this.props.getEntry(this.props.match.params.entry_id);
//       }
//       render() {
//        if(this.props.entry) {
//          this.title = this.props.entry.title;
//          this.body = this.props.entry.data;

//        }
//         return ( 
//             <div style={ sectionStyle }> 
//                 <NavigationBar />
//                 <section className="container view-entry">
//                     <WriteOrEdit
//                     entry_id={this.props.match.params.entry_id}
//                     entryAction= "updating_entry"
//                     titleValue={this.title}
//                     bodyValue={this.body}
//                     />
//                 </section>
//         </div> 
//          );
//     }
// }
// UpdateEntryView.propTypes = {
//     entry_id: PropTypes.number,
//     getEntry: PropTypes.func,
//     title: PropTypes.string,
//     body: PropTypes.string,

// };
 
// const mapStateToProps = state => ({
//     entry: state.entries.entry,
//   });
// export default connect(mapStateToProps, { getEntry })(UpdateEntryView);
