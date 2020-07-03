import React, { Component } from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import "antd/dist/antd.css";
import "./Layout.css";
import { Layout, Menu } from "antd";
import { withRouter } from "react-router-dom";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
const { Header, Content, Sider } = Layout;
const { SubMenu, Item } = Menu;

let elements = []
let redirect = []
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }
  componentDidMount(){
    window.addEventListener('resize',()=>{
      if(document.documentElement.clientWidth<800){
        this.setState({
          collapsed:true
        })
      }
    })
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  getMenu = (route) => {
    return route.map((item, index) => {
      if (item.hidden) {
        return false;
      }
      if (item.children && item.children.length > 0) {
        return (
          <SubMenu
            key={item.pathname}
            title={item.meta.title}
            icon={<item.icon />}
          >
            {this.getMenu(item.children)}
          </SubMenu>
        );
      }
      return (
        <Item key={item.pathname} title={item.meta.title} icon={<item.icon />}>
          <Link to={item.pathname} replace>
            {item.meta.title}
          </Link>
        </Item>
      );
    });
  };
  getRoute(route) {
    route.forEach((item) => {
      if (item.children) {
        this.getRoute(item.children);
      } else {
        elements.push(
          <Route
            key={item}
            path={item.pathname}
            render={(RouterProps) => {
              return <item.compoents {...RouterProps} />;
            }}
          />
        );
      }
    });
    return elements;
  }
  getRedirect(route) {
    route.forEach((item) => {
      if (item.children) {
        this.getRedirect(item.children);
      }
      if (item.redirect) {
        redirect.push(
          <Redirect
            key={item.pathname}
            to={item.redirect}
            from={item.pathname}
            exact
          />
        );
      }
    });
    return redirect;
  }
  render() {
    return (
      <>
        <Layout style={{ height: "100%" }}>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
            style={{
              overflow: "auto",
              height: "100vh",
              // position: "fixed",
              // left: 0,
            }}
          >
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={[this.props.location.pathname]}
            >
              {this.getMenu(this.props.route)}
            </Menu>
          </Sider>
          <Layout className="site-layout">
            <Header className="site-layout-background">
              <div>
                {React.createElement(
                  this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: this.toggle,
                  }
                )}
              </div>
            </Header>
            <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, textAlign: "center", minHeight: "100%" }}
              >
                <Switch>
                  {this.getRoute(this.props.route)}

                  {this.getRedirect(this.props.route)}
                  <Redirect to="/user/dashbord" from="/user" exact />
                  <Redirect to="/404" />
                </Switch>
              </div>
            </Content>
          </Layout>
        </Layout>
      </>
    );
  }
}

export default withRouter(App);
