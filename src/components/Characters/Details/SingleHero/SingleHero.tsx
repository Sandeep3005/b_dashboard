import React, { Component } from "react";
import { Container, Row, Col, Figure } from "react-bootstrap";
import Appearance from "./Appearance";

interface MyProps {
  heroData: any;
  showStrengthChart: any;
}
interface MyState {}
export class SingleHero extends Component<MyProps, MyState> {
  showStrengthChart = (id: any) => {
    console.log("run = ", id);
    this.props.showStrengthChart(id);
  };
  render() {
    const { image, powerstats, work } = this.props.heroData;
    if (!image || !image.url) return <div>No data found</div>;
    return (
      <div style={{ marginTop: "1.2em" }}>
        <Container>
          <Row>
            <Col md="4">
              <Figure style={{ margin: "0 30px " }}>
                <Figure.Image alt="Hero Image" src={image.url} />
              </Figure>
            </Col>
            <Col md="8">
              <Appearance
                heroData={this.props.heroData}
                showStrengthChart={this.showStrengthChart}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default SingleHero;
