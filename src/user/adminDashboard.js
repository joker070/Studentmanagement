import React from 'react';
import '../Style.css';
export default class AdminDashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    handleChange = (key, value) => {
        this.setState({[key]: value});
    }
    handleClick = () => {
        console.log('this.state', this.state);
    }
    render() {
        const type = 'student';
        return(
            <div>
                <div className="borderSection">
                    {type}<span className="paddingText">Welcome Admin</span>
                </div>
            </div>
        );
    }
}