import React, { Component}  from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {createEntry, updateEntry} from '../actions/getEntriesActions';
import EntryForm from './EntryForm';
import Modules from '../utils/Editorplugins';


export class WriteOrEdit extends Component {
    
    state = {
        title: "",
        body: "",
        error: "",
    }
    
    change = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };     

    handleChange = (event) => {
        this.setState({
            body: event
            });
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const data = {
            entrytitle: this.state.title,
            entrydata: this.state.body,
        }
        if (this.props.entryAction === "creating_entry") {
            this.props.createEntry(data)
        } else if (this.props.entryAction === "updating_entry") {
            if(this.props.entry_id){
                this.props.updateEntry(this.props.entry_id, data)
            } 
        }

        this.componentDidUpdate = () => {
         if (this.props.entry) {
            const returnedEntry = this.props.entry
            var entry_id = returnedEntry.entry_id;
            if (entry_id) {
                window.location=`/${entry_id}`;
            /////////////////HISTORY PUSH
         }
         }
       } 
  }
  componentDidUpdate(prevProps) {
    if ( this.props.titleValue !== prevProps.titleValue) {
        this.setState({
            body: this.props.bodyValue,
            title: this.props.titleValue,
        })
    }
  }
 
    render() {
        return ( 
            <div>
                <EntryForm
                change={this.change}
                handleChange={this.handleChange}
                modules={Modules.modules}
                formats={Modules.formats}
                handleSubmit={this.handleSubmit}
                titleValue={this.state.title}
                body={this.state.body}
                />
            </div>
         );
    }
}
WriteOrEdit.propTypes ={
    entry_id: PropTypes.number,
    createEntry: PropTypes.func,
    updateEntry: PropTypes.func,
    object: PropTypes.array,
};


const mapStateToProps= state =>({
    entry: state.entries.entry,
})

export default connect(mapStateToProps, {createEntry, updateEntry})(WriteOrEdit);
