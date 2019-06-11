import React, {Component} from 'react';
import WriteOrEdit from '../components/WriteOrEdit';


class WriteEntryView extends Component {
    render() {
      return (
        <div>
          <section className="container" >
            <WriteOrEdit
              entryAction="creating_entry"
            />
          </section>
      </div>
  )}
};

export default WriteEntryView;