import "./styles.scss";
import "@cds/core/input/register.js";
import "@cds/core/forms/register.js";
import "@cds/core/icon/register.js";
import "@cds/core/button/register.js";

import { withRouter, RouteComponentProps } from "react-router";

import { ClarityIcons, vmBugInverseIcon } from "@cds/core/icon";
import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";

ClarityIcons.addIcons(vmBugInverseIcon);

interface Props extends RouteComponentProps {}

const colors = [
  "#0088FE",
  "#FFBB28",
  "#00C49F",
  "#FF0000",
  "#FF50f3",
  "#2Ff7f3",
  "#FF8042",
  "#F0F80E",
  "#00FF9F",
  "#00B028",
  "#F8F4F8",
  "#FFFF00",
  "#FF50f3",
  "#ADF9E0",
];

const TestPage: React.FC<Props> = (props: Props) => {
  const [scoreData, setScoreData] = useState<any>([]);
  const [users, setUsers] = useState<any>([]);

  
  useEffect(() => {
    setInterval(() => {
      const scoreData = JSON.parse(sessionStorage.getItem("scoreData") || "[]");
      if (scoreData.length > 0) {
        const users = Object.keys(scoreData[scoreData.length - 1]).filter((s) => s !== "name");
        setUsers(users);
      }
      setScoreData(scoreData);
      console.log(scoreData);
    }, 2000);
  }, []);

  return (
    <div className="flex-col full-width full-height">
      <h1>Thats a Wrap!</h1>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={scoreData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ stroke: "white", strokeWidth: 1 }} />
          <YAxis tick={{ stroke: "white", strokeWidth: 1 }} />
          <Tooltip contentStyle = {{backgroundColor: "#0F161A"}} />
          <Legend />
          <ReferenceLine
            x="L1 - 0"
            stroke="yellow"
            label="Level 1"
            strokeWidth="10"
            className="white"
          />
          <ReferenceLine
            x="L2 - 0"
            stroke="orange"
            label="Level 2"
            strokeWidth="10"
          />
          <ReferenceLine
            x="L3 - 0"
            stroke="red"
            label="Level 3"
            strokeWidth="10"
            color="white"
          />
          {users.map((user: string, idx: number) => {
            return (
              user !== "proadmin" && (
                <Line
                  type="monotone"
                  dataKey={user}
                  stroke={colors[idx % colors.length]}
                  activeDot={{ r: 8 }}
                  strokeWidth={4}
                />
              )
            );
          })}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default withRouter(TestPage);
