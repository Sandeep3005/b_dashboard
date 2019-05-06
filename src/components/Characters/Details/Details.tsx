import React, { Component, Fragment } from "react";
import SingleHero from "./SingleHero/SingleHero";

interface MyProps {
  heroData: any;
  usingHeroId: boolean;
  showStrengthChart: any;
}
export class CharacterDetails extends Component<MyProps, {}> {
  showStrengthChart = (id: any) => {
    console.log("run-2 = ", id);
    this.props.showStrengthChart(id);
  };
  tranformAptData = () => {
    let { usingHeroId, heroData } = this.props;
    if (!heroData) return [];
    if (usingHeroId) {
      heroData = [heroData];
    } else {
      heroData = heroData.results;
    }
    return heroData;
  };

  showSingleHero = () => {
    const heroData = this.tranformAptData();
    if (!heroData) return <span>No data found</span>;
    return heroData.map((data: any, index: number) => {
      return (
        <SingleHero
          key={index}
          heroData={data}
          showStrengthChart={this.showStrengthChart}
        />
      );
    });
  };
  render() {
    return <Fragment>{this.showSingleHero()}</Fragment>;
  }
}

export default CharacterDetails;
