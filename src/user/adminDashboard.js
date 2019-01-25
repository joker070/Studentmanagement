import React from 'react';
import '../Style.css';
import MaterialTable from 'material-table'

export default class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
    
        };
    }

    render() {
        // const type = 'student';
        return(
          <div>
            <h1 className="tColor">Admin Dashboard</h1>
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Name', field: 'name' },
            { title: 'Surname', field: 'surname' },
            { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
            { title: 'Birth City', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
          ]}
          data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
          title="Student Details"
        />
      </div>
      </div>
      );
    }
}