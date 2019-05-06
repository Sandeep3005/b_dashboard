import React, { Component } from "react";
import { Row, Col, Button } from "react-bootstrap";
import styles from "./SingleHero.module.css";

const NAInfo = {
  NASign: "-",
  NAValue: "NA"
};

interface MyProps {
  heroData: any;
  showStrengthChart: any;
}
interface MyState {}

export class Appearance extends Component<MyProps, MyState> {
  getFieldValue = (value: any) => {
    return value === NAInfo.NASign || !value ? NAInfo.NAValue : value;
  };
  render() {
    const { name, appearance, id } = this.props.heroData;
    console.log(
      "TCL: Appearance -> render -> this.props.heroData",
      this.props.heroData
    );
    return (
      <div>
        <Row>
          <Col md={12} className={styles.NameHeading}>
            {name}
          </Col>
        </Row>
        <Row>
          <Col md={3}>Race</Col>
          <Col md={9}>{this.getFieldValue(appearance.race)}</Col>
        </Row>
        <Row>
          <Col md={3}>Eye Color</Col>
          <Col md={9}>{this.getFieldValue(appearance["eye-color"])}</Col>
        </Row>
        <Row>
          <Col md={3}>Gender</Col>
          <Col md={9}>{this.getFieldValue(appearance.gender)}</Col>
        </Row>
        <Row>
          <Col md={3}>Hair Color</Col>
          <Col md={9}>{this.getFieldValue(appearance["hair-color"])}</Col>
        </Row>
        <Row>
          <Col md={2}>Height</Col>
          <Col md={2}>{this.getFieldValue(appearance.height[0])}</Col>
          <Col md={1} />
          <Col md={2}>Weight</Col>
          <Col md={2}>{appearance.weight[1]}</Col>
        </Row>
        <Row>
          <Col md={12} className={styles.StrengthBtn}>
            <Button
              variant="link"
              style={{ fontWeight: 700 }}
              onClick={() => this.props.showStrengthChart(id)}
            >
              Get Strength Chart
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Appearance;
