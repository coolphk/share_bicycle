import React, {Component} from 'react';
import {Tabs, Card, Icon, message} from "antd";

const TabPane = Tabs.TabPane;

class Tab extends Component {
    handleCallback = (key) => {
        message.info(`你选中的第${key}个标签！`);
    };

    componentWillMount() {
        const panes = [
            {
                title: 'tab1',
                content: 'tab1-content',
                key: 1
            }, {
                title: 'tab2',
                content: 'tab2-content',
                key: 2
            }, {
                title: 'tab3',
                content: 'tab3-content',
                key: 3
            },
        ];
        this.setState({
            panes
        });
    }


    render() {
        return (
            <div>
                <Card title={"Tab页签"}>
                    <Tabs onTabClick={this.handleCallback}>
                        <TabPane tab={<span><Icon type={"plus"}/>选项卡一 </span>} key="1">
                            欢迎学习React
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">超级无敌大帅哥</TabPane>
                        <TabPane tab="Tab 3" key="3">这里可以嵌入其他控件</TabPane>
                    </Tabs>
                </Card>
                <Card title={"动态Tab页签"}>
                    <Tabs
                        defaultActiveKey={1}
                        onTabClick={this.handleCallback}
                        type={"editable-card"}
                    >
                        {
                            this.state.panes.map(panel => {
                                return <TabPane tab={panel.title} key={panel.key}>
                                    {panel.content}
                                </TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        );
    }
}

export default Tab;
