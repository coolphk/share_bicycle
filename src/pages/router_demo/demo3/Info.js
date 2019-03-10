import React from 'react';
export default class Info extends React.Component {
    render() {
        return (
            <div>
                这是一个测试动态路由功能
                动态路由的值是{this.props.match.params.mainId}
            </div>
        );
    }
}
