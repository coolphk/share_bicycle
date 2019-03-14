import React, {Component} from 'react';
import {Card, Col, Row} from "antd"


class Gallery extends Component {
    render() {
        const imgs = [];
        for (var i = 0; i <= 20; i += 5) {
            var arr = [];
            for (var j = 1; j <= 5; j++) {
                arr.push(i + j + ".png")
            }
            imgs.push(arr);
        }
        // const imgList = imgs.map(list => list.map(item =>
        //     <Card cover={<img src={"/gallery" + item}/>}>
        //         <Card.Meta
        //             title={"ReactAdmin"}
        //             description={item}
        //         />
        //     </Card>
        // ))
        return (
            <div>
                <Row>
                    {
                        imgs.map((list, index) => list.map((item, index) =>
                            <Col md={4} key={index}>
                                <Card key={item} cover={<img src={"/gallery/" + item}/>}>
                                    <Card.Meta
                                        title={"ReactAdmin"}
                                        description={item}
                                    />
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        );
    }
}

export default Gallery;
