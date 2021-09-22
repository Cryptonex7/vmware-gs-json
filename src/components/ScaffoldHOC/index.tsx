import { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import "./styles.scss";

import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";
import axios from "axios";
import { API_URL } from "../../constants";

interface WrapProps {
  getLeaderboard: any;
}

const ScaffoldHOC = (WrapComponent: React.FC<WrapProps>, title: string) => {
  const HocContent = (props: any) => {
    const { history } = props;
    const [users, setUsers] = useState([]);

    const getLeaderboard = async () => {
      const response = await axios.get(API_URL + "/api/leaderboard");
      console.log(response);
      setUsers(response.data.filter((user: any)=> user.name !== "proadmin"));
    };
    useEffect(() => {
      getLeaderboard();
      const x = setInterval(function () {
        getLeaderboard();
      }, 20000);

      return () => {
        clearInterval(x);
      };
    }, []);
    useEffect(() => {
      if (
        sessionStorage.getItem("prouser") === "" ||
        sessionStorage.getItem("prouser") === null
      ) {
        history.push("/auth");
      }
    }, []);

    return (
      <div className="" cds-layout="vertical align:stretch">
        <Header title={"VMware LogoPro"} />
        <div
          cds-layout="horizontal align:vertical-stretch wrap:none"
          className="below-nav"
        >
          <Sidebar title="SideBar" users={users} />

          <div cds-layout="vertical align:stretch">
            <div className="main-content">
              <div cds-layout="vertical gap:md p-x:lg">
                {/* wrapped component */}
                <WrapComponent getLeaderboard={() => getLeaderboard()} />
              </div>
            </div>
            {/* <Footer>Footer</Footer> */}
          </div>
        </div>
      </div>
    );
  };

  return withRouter(HocContent);
};
export default ScaffoldHOC;
