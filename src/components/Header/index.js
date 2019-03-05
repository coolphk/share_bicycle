import React from 'react'
import {Col, Row} from "antd"
import Util from '../../utils/utils'
import axios from '../../axios'
import './index.less'

export default class Header extends React.Component {
    componentWillMount() {
        this.setState({
            userName: "河畔一角",
        });
        setInterval(() => {
            this.setState({
                sysTime: Util.formateDate(new Date().getTime())
            })
        }, 1000);
        this.getWeatherAPIData();
    }

    getWeatherAPIData() {
        let city = '哈尔滨';
        axios.jsonp({url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=llrqlq5hAp58MbRxZxti4Y1Hw4POQsNQ`})
            .then((res) => {
                this.setState({
                    pictureUrl: new Date().getHours() < 17 ? res.dayPictureUrl : res.nightPictureUrl,
                    weather: res.weather
                })
            })
    }

    render() {
        return (
            <div className={"header"}>
                <Row className={"header-top"}>
                    <Col span={24}>
                        <span>欢迎，{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className={"breadcrumb"}>
                    <Col span={4} className={"breadcrumb-title"}>首页</Col>
                    <Col span={20} className={"weather"}>
                        <span className={"date"}>{this.state.sysTime}</span>
                        <span className={"weather-img"}>
                            <img src={this.state.pictureUrl} alt=""/>
                        </span>
                        <span className={"weather-detail"}>
                        {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
