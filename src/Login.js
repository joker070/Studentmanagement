import React from 'react';
import './Style.css';
import ReactDOM from 'react-dom'
import Header from './components/headerComponent';
import {
    Form, Icon, Input, Button, Checkbox,
  } from 'antd';

class Login extends React.Component {
    handleSubmit = (e) => {
        const { history } = this.props;
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('Received values of form: ', values);
          }
        });
        this.makeRequest();
        history.push('/admin'); 
      }

    // handleChange = (key, value) => {
    //     this.setState({[key]: value});
    // }
    // handleClick = () => {
    //     console.log('this.state', this.state);
    //     console.log('this.props', this.props);
    //     const { loginAccess, history } = this.props;
    //     const {username, password } = this.state;
    //     const request = {};
    //     request.username = username;
    //     request.password = password;
    //     loginAccess(request, history);
    //     history.push('/admin'); 
    //     this.makeRequest();
    // }
    makeRequest = () => {
        console.log('success');
        fetch('./login.json').then(response => {
            console.log(response);
            return response.json();
          }).then(data => {
            // Work with JSON data here
            console.log(data);
          }).catch(err => {
            // Do something for an error here
            console.log("Error Reading data " + err);
          });
    }
    render() {
        // const {username, password } = this.state;
        // return(
        //     <div className="container">
        //         <div className="fontStyle idealPadding">USERNAME</div>
        //         <input className="inputStyle" name= "username" value={username} onChange={e => this.handleChange('username',e.target.value)}/>
        //         <div className="fontStyle idealPadding">PASSWORD</div>
        //         <input className="inputStyle" name= "password" value={password} onChange={e => this.handleChange('password', e.target.value)}/>
        //         <div className="idealPadding"><button className="buttonStyle" onClick={this.handleClick}>Login</button></div>
        //     </div>
        // );
        console.log('this.props', this.props);
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
            <Header />
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input className="loginElement" prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input className="loginElement" refix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(
                  <Checkbox>Remember me</Checkbox>
                )}
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
              </Form.Item>
            </Form>
            </div>
          );
    }
}

// function mapStateToProps(state) {
//     return {
//       // XXX
//     };
//   }
// const mapDispatchToProps = dispatch => ({
//     loginAccess: (data, history) => {
//         console.log('0', data);
//         console.log('10', history);
//       dispatch(createServiceAction('login', 'request')(data));
//     }
//   });

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
ReactDOM.render(<WrappedNormalLoginForm />, document.getElementById('root'));
export default WrappedNormalLoginForm;
// export default withRouter(
//     connect(
//       mapStateToProps,
//       mapDispatchToProps
//     )(Login)
// );

