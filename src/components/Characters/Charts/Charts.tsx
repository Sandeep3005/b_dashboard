import React, { Component, Fragment } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

let data: any = [];
type MyProps = { powerstats: any };
type MyState = { data: any };
export class CharacterCharts extends Component<MyProps, MyState> {
  static getDerivedStateFromProps(props: any, state: any) {
    const { powerstats } = props;
    if (!powerstats) return;
    data = [];
    Object.keys(powerstats).forEach((power, index) => {
      console.log(power, powerstats[power]);
      data.push({
        power: power,
        stats: powerstats[power],
        maxLimit: 100
      });
    });
  }

  render() {
    console.log(data);
    if (!data || !data.length) return <div />;
    return (
      <Fragment>
        <BarChart width={500} height={250} data={data}>
          <XAxis dataKey="power" />
          <YAxis dataKey="maxLimit" />
          <Tooltip />
          <Legend />
          <Bar dataKey="stats" fill="#8884d8" />
        </BarChart>
      </Fragment>
    );
  }
}

export default CharacterCharts;
