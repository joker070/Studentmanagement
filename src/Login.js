import React from 'react';
import './Style.css';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import AdminDashboard from './user/adminDashboard';
import { history } from './util/index.js';
import { createServiceAction } from './util/actionHelper.js';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }
    handleChange = (key, value) => {
        this.setState({[key]: value});
    }
    handleClick = () => {
        console.log('this.state', this.state);
        console.log('this.props', this.props);
        history.push('/admin'); 
    }
    render() {
        const {username, password } = this.state;
        return(
            <div className="container">
                <div className="fontStyle idealPadding">USERNAME</div>
                <input className="inputStyle" name= "username" value={username} onChange={e => this.handleChange('username',e.target.value)}/>
                <div className="fontStyle idealPadding">PASSWORD</div>
                <input className="inputStyle" name= "password" value={password} onChange={e => this.handleChange('password', e.target.value)}/>
                <div className="idealPadding"><button className="buttonStyle" onClick={this.handleClick}>Login</button></div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    loginAccess: (data, history) => {
      dispatch(createServiceAction('login', 'request')({ ...data, history }));
    }
  });

// export default withRouter(connect())(Login);
// export default Login;
export default withRouter(
    connect(
      mapDispatchToProps
    )(Login)
);

