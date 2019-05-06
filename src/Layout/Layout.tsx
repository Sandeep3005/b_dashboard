import React, { Component, Fragment } from "react";
import NavigationBar from "./../components/NavigationBar/NavigationBar";
import SideBar from "./SideBar/SideBar";

export class Layout extends Component {
  render() {
    return (
      <Fragment>
        <NavigationBar />
        <SideBar />
      </Fragment>
    );
  }
}

export default Layout;
