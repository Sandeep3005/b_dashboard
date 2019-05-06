import React, { Component } from "react";
import SearchBar from "./../../components/SearchBar/SearchBar";
import { Container, Row, Col } from "react-bootstrap";
import CharacterDetails from "./../../components/Characters/Details/Details";
import CharacterCharts from "./../../components/Characters/Charts/Charts";
import Helper from "../Helper/GetHeroDataHelper";

type MyState = { heroId: string | number; response: any; powerstats: any };
export class MainContent extends Component<{}, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      heroId: "",
      response: null,
      powerstats: null
    };
  }

  showStrengthChart = (id: any) => {
    console.log("TCL: MainContent -> showStrengthChart -> id", id);
    const { response } = this.state;
    const isFetchById = this.isFetchById();
    if (isFetchById) {
      this.setState({ powerstats: response.powerstats });
    } else {
      console.log(this.state.response.results);
      const selectedHero = response.results.filter(
        (hero: any) => hero.id === id
      );
      console.log(
        "TCL: MainContent -> showStrengthChart -> x",
        selectedHero[0].powerstats
      );
      this.setState({ powerstats: selectedHero[0].powerstats });
    }
  };
  isFetchById = () => {
    const { heroId } = this.state;
    if (typeof +heroId === "number" && heroId > 0) return true;
    return false;
  };

  searchValueHandler = (heroId: any) => {
    this.setState({ heroId });
    let j = new Helper().fetchSuperHeroInfo(heroId);
    j.then((res: any) => {
      console.log(res);
      this.setState({
        response: res.data
      });
    });
  };
  render() {
    return (
      <Container>
        <Row>
          <Col md="12">
            <SearchBar handleSearchValue={this.searchValueHandler} />
          </Col>
        </Row>
        <Row>
          <Col md="7">
            <CharacterDetails
              heroData={this.state.response}
              usingHeroId={this.isFetchById()}
              showStrengthChart={this.showStrengthChart}
            />
          </Col>
          <Col md="5">
            <CharacterCharts powerstats={this.state.powerstats} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainContent;
