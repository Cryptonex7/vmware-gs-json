import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const ScaffoldHOC = (WrapComponent: React.FC, title: string) => {
  const HocContent = (props: any) => {
    const { history } = props;

    useEffect(() => {
      if (localStorage.getItem("loginState") === "") {
        history.push("/auth");
      }
    }, []);

    return (
      <div className="" cds-layout="vertical align:stretch">
        <Header title={"VMware Clarity React"} />
        <div
          cds-layout="horizontal align:vertical-stretch wrap:none"
          className="below-nav"
        >
          <Sidebar title="SideBar" />

          <div cds-layout="vertical align:stretch">
            <div className="main-content">
              <div cds-layout="vertical gap:md p:lg">
                {/* wrapped component */}
                <WrapComponent />
              </div>
            </div>
            <Footer>Footer</Footer>
          </div>
        </div>
      </div>
    );
  };

  return withRouter(HocContent);
};
export default ScaffoldHOC;
