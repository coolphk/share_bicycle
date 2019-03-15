import React, {Component} from 'react';
import {Tabs, Card, Icon, message} from "antd";

const TabPane = Tabs.TabPane;

class Tab extends Component {
    newTabIndex=0
    handleClick = (key) => {
        message.info(`你选中的第${key}个标签！`);
    };

    handleChange = (activeKey) => {
        this.setState({activeKey});
        console.log(activeKey)
    }
    //此处的onEdit函数会默认传递两个参数，targetKey是需要修改的页签的key，
    // action为执行动作，有add,remove等，可以对应相应的函数
    handleEdit = (targetKey, action) => {
        this[action](targetKey);
    }

    add = () => {
        const panes = this.state.panes;
        const activeKey = `newTab${++this.newTabIndex}`;
        panes.push({ title: `${activeKey}`, content: `Content of new Tab ${activeKey}`, key: activeKey });
        this.setState({ panes, activeKey });
    }

    remove = (targetKey) => {
        let activeKey = this.state.activeKey;
        let lastIndex;this.state.panes.forEach((pane, i) => {
            if (pane.key === targetKey) {
                lastIndex = i - 1;
            }
        });
        const panes = this.state.panes.filter(pane => pane.key !== targetKey);
        if (panes.length && activeKey === targetKey) {
            if (lastIndex >= 0) {
                activeKey = panes[lastIndex].key;
            } else {
                activeKey = panes[0].key;
            }
        }
        this.setState({ panes, activeKey });
    }

    componentWillMount() {

        const panes = [
            {
                title: 'tab1',
                content: 'tab1-content',
                key: '1'
            }, {
                title: 'tab2',
                content: 'tab2-content',
                key: '2'
            }, {
                title: 'tab3',
                content: 'tab3-content',
                key: '3'
            },
        ];
        this.setState({
            activieKey: panes[0].key,
            panes
        });
    }

    render() {
        return (
            <div>
                <Card title={"Tab页签"}>
                    <Tabs onTabClick={this.handleClick}>
                        <TabPane tab={<span><Icon type={"plus"}/>选项卡一 </span>} key="1">
                            欢迎学习React
                        </TabPane>
                        <TabPane tab="Tab 2" key="2">我是tab2</TabPane>
                        <TabPane tab="Tab 3" key="3">这里可以嵌入其他控件</TabPane>
                    </Tabs>
                </Card>
                <Card title={"动态Tab页签"}>
                    <Tabs
                        onChange={this.handleChange}
                        activeKey={this.state.activeKey}
                        onTabClick={this.handleClick}
                        onEdit={this.handleEdit}
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
