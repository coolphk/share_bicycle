import React, {Component} from 'react';
import {Button, Card, Modal} from "antd";
import './ui.less'

class Modals extends Component {
    state = {
        modal1: {
            isShow: false,
            title: '基础模态框',
            content: '基础模态框',
        },
        modal2: false,
        modal3: false,
        modal4: false
    };

    handleClick = (type) => {
        this.setState({
            [type]: {
                isShow: true
            }
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
                    <Button type={"primary"} onClick={() => this.handleClick('modal1')}>基础弹窗</Button>
                    <Button type={"primary"} onClick={() => this.handleClick('modal2')}>自定义页脚</Button>
                    <Button type={"primary"} onClick={() => this.handleClick('modal3')}>顶部20px</Button>
                    <Button type={"primary"} onClick={() => this.handleClick('modal4')}>水平垂直居中</Button>
                </Card>

                <Modal title={this.state.modal1.title} visible={this.state.modal1.isShow}
                       onCancel={() => this.handleOk('modal1')}>
                    基础模态框
                </Modal>

                <Modal title={"自定义页脚"} visible={this.state.modal2} onCancel={() => this.handleOk('modal2')}
                       okText={"确定"} cancelText={"取消"}>
                    自定义页脚
                </Modal>

                <Modal title={"顶部20px"} visible={this.state.modal3} style={{top: 20}}
                       onCancel={() => this.handleOk('modal3')}>
                    顶部20px
                </Modal>

                <Modal title={"水平垂直居中"} wrapClassName="vertical-center-modal" visible={this.state.modal4}
                       onCancel={() => this.handleOk('modal4')}>
                    水平垂直居中
                </Modal>
            </div>
        );
    }
}

export default Modals;
