import React, {Component} from 'react';
import {Button, Card, Form, Input} from "antd";

const FormItem = Form.Item;

class FormLogin extends Component {

    handleSubmit(){

    }

    render() {
        const {getFieldDecorator} = this.props.form;
        console.log(this.props);
        return (
            <div>
                <Card title={"登录行内表单"}>
                    <Form layout={"inline"}>
                        <FormItem>
                            <Input placeholder={"用户名"}/>
                        </FormItem>
                        <FormItem>
                            <Input placeholder={"密码"}/>
                        </FormItem>
                        <FormItem>
                            <Button type={"primary"}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title={"登录水平表单"}>
                    <Form>
                        <FormItem>
                            {
                                getFieldDecorator('userName', {
                                    initialValue: 'Jack',
                                    rules: [
                                        {
                                            required:true,
                                            message:'用户名不能为空！'
                                        }
                                    ]
                                })(<Input placeholder={"请输入用户名"} style={{width: "300px"}}/>)
                            }

                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('密码', {
                                    initialValue: '123456',
                                    rules: []
                                })(<Input placeholder={"请输入密码"} style={{width: "300px"}}/>)
                            }
                        </FormItem>
                        <FormItem>
                            <Button type={"primary"} onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default Form.create()(FormLogin);
