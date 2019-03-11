import React from 'react';
import {Button, Card} from "antd";
import './ui.less';

export default class Buttons extends React.Component {
    render() {
        return(
            <div>
                <Card title={"基础按钮"}>
                    <Button type={"primary"}>Imooc</Button>
                    <Button>Imooc</Button>
                    <Button type={"dashed"}>Imooc</Button>
                    <Button disabled>Imooc</Button>
                </Card>
                <Card title={"图形按钮"}>
                    <Button icon={"plus"} type={"primary"}>创建</Button>
                    <Button icon={"edit"}>编辑</Button>
                    <Button icon={"delete"} type={"dashed"}>删除</Button>
                    <Button shape={"circle"} icon={"search"}></Button>
                    <Button type={"primary"} icon={"search"}>搜索</Button>
                    <Button type={"primary"} icon={"download"}>下载</Button>
                </Card>
                <Card title={"图形按钮"}>
                    <Button icon={"plus"} type={"primary"}>创建</Button>
                    <Button icon={"edit"}>编辑</Button>
                    <Button icon={"delete"} type={"dashed"}>删除</Button>
                    <Button shape={"circle"} icon={"search"}></Button>
                    <Button type={"primary"} icon={"search"}>搜索</Button>
                    <Button type={"primary"} icon={"download"}>下载</Button>
                </Card>
                <Card title={"图形按钮"}>
                    <Button icon={"plus"} type={"primary"}>创建</Button>
                    <Button icon={"edit"}>编辑</Button>
                    <Button icon={"delete"} type={"dashed"}>删除</Button>
                    <Button shape={"circle"} icon={"search"}></Button>
                    <Button type={"primary"} icon={"search"}>搜索</Button>
                    <Button type={"primary"} icon={"download"}>下载</Button>
                </Card>
                <Card title={"图形按钮"}>
                    <Button icon={"plus"} type={"primary"}>创建</Button>
                    <Button icon={"edit"}>编辑</Button>
                    <Button icon={"delete"} type={"dashed"}>删除</Button>
                    <Button shape={"circle"} icon={"search"}></Button>
                    <Button type={"primary"} icon={"search"}>搜索</Button>
                    <Button type={"primary"} icon={"download"}>下载</Button>
                </Card>
            </div>
        )
    }
}
