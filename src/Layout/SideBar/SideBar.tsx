import React, { Fragment, Component } from "react";
import MainContent from "./../MainContent/MainContent";
import Sidebar from "react-sidebar";
import styles from "./SideBar.module.css";

interface MyProps {}
interface MyState {
  sidebarOpen: boolean;
}
class SideBar extends Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = { sidebarOpen: true };
  }

  onSetSidebarOpen = (open: boolean) => {
    this.setState({ sidebarOpen: open });
  };

  render() {
    return (
      <Fragment>
        <Sidebar
          sidebar={
            <div className={styles.SideBar}>
              <div className={styles.MenuItem}>Menu 1</div>
              <div className={styles.MenuItem}>Menu 2</div>
              <div className={styles.MenuItem}>Menu 3</div>
            </div>
          }
          docked={true}
          styles={{
            sidebar: {
              background: "#343A40",
              width: "18vw",
              top: "50px",
              paddingTop: "1em",
              color: "white"
            }
          }}
        >
          <div>
            <MainContent />
          </div>
        </Sidebar>
      </Fragment>
    );
  }
}
export default SideBar;
