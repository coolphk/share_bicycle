import React, {Component} from 'react';
import {Button, Card, Modal} from "antd";
import './ui.less'
class Modals extends Component {
    state = {
        modal1: false,
        modal2: false,
        modal3: false,
        modal4: false
    };

    handleClick = (type) => {
        console.log(type)
        this.setState({
            [type]: true
        })
    };
    handleOk = (type) => {
        this.setState({
            [type]: false
        })
    }

    render() {
        return (
            <div>
                <Card title={"基础模态框"} className={"card-wrap"}>
                    <Button type={"primary"} onClick={() => this.handleClick('modal1')}>open</Button>
                    <Button type={"primary"} onClick={() => this.handleClick('modal2')}>自定义页脚</Button>
                    <Button type={"primary"} onClick={() => this.handleClick('modal3')}>顶部20px</Button>
                    <Button type={"primary"} onClick={() => this.handleClick('modal4')}>水平垂直居中</Button>
                </Card>
                <Modal title={"基本弹窗"} visible={this.state.modal1} onOk={() => this.handleOk('modal1')}>
                    基础模态框
                </Modal>
                <Modal title={"基本弹窗"} visible={this.state.modal1} onOk={() => this.handleOk('modal1')}>
                    自定义页脚
                </Modal>
                <Modal title={"基本弹窗"} visible={this.state.modal1} onOk={() => this.handleOk('modal1')}>
                    顶部20px
                </Modal>
                <Modal title={"水平垂直居中"} wrapClassName="vertical-center-modal" visible={this.state.modal4} onOk={() => this.handleOk('modal4')}>
                    水平垂直居中
                </Modal>
            </div>
        );
    }
}

export default Modals;
