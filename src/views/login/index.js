import React, { Component } from "react";
import "./index.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { connect } from "react-redux";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isloading: false,
      loginForm: {
        account: "",
        password: "",
      },
    };
  }
  onFinish = (values) => {
    console.log("Received values of form: ", values);
    if (true) {
      this.props.saveUser(values);
      if (values.remember) {
        this.setCookie(values.username, values.password, 3);
      } else {
        this.clearCookie();
      }
      this.props.history.push("/user");
    }
  };
  setCookie = (c_name, c_pwd, exdays) => {
    const exdate = new Date();
    exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays);
    // console.log('userName=' + c_name + ';path=/;expires=' + exdate.toGMTString())
    // console.log('userPwd=' + c_pwd + ';path=/;expires=' + exdate.toGMTString())
    window.document.cookie =
      "userName=" + c_name + ";path=/;expires=" + exdate.toGMTString();
    window.document.cookie =
      "userPwd=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
  };
  getCookie = () => {
    let user = { account: "", password: "" };
    if (document.cookie.length > 0) {
      const arr = document.cookie.split("; ");
      for (let i = 0; i < arr.length; i++) {
        const arr2 = arr[i].split("=");
        if (arr2[0] === "userName") {
          user.account = arr2[1];
        } else if (arr2[0] === "userPwd") {
          user.password = arr2[1];
        }
      }
    }
    return user;
  };
  clearCookie = () => {
    this.setCookie("", "", -1);
  };
  userNameInput(e) {
    let loginForm = Object.assign({}, this.state.loginForm, {
      account: e.target.value,
    });
    this.setState({
      loginForm,
    });
  }
  passwordInput(e) {
    let loginForm = Object.assign({}, this.state.loginForm, {
      password: e.target.value,
    });
    this.setState({
      loginForm,
    });
  }
  componentDidMount() {
    let user = this.getCookie();
    let loginForm = Object.assign({}, this.state.loginForm, {
      account: user.account,
      password: user.password,
    });
    this.setState(
      {
        loginForm,
      },
      () => {
        this.setState({
          isloading: true,
        });
      }
    );
  }
  render() {
    return (
      <>
        {this.state.isloading ? (
          <div className="login">
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "请输入账号",
                  },
                ]}
                initialValue={this.state.loginForm.account}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="请输入账号"
                  onChange={this.userNameInput.bind(this)}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "请输入密码",
                  },
                ]}
                initialValue={this.state.loginForm.password}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                  onChange={this.passwordInput.bind(this)}
                />
              </Form.Item>
              <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="/#">
                  Forgot password
                </a>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  登录
                </Button>
                Or <a href="/#">register now!</a>
              </Form.Item>
              <Button
                onClick={() => {
                  console.log(this.state.loginForm);
                }}
              >
                dayin
              </Button>
            </Form>
          </div>
        ) : (
          "加载中"
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.login.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    saveUser(user) {
      let action = {
        type: "saveUser",
        value: user,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
