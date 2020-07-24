import * as React from "react";
// import { FC } from 'react';
// import { Button } from 'antd';
import './IndexPage.css';

import { Layout, Menu, Typography, Divider, Row, Col } from 'antd';
const { Title } = Typography;
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export interface AwardCompProps {
    award_name: string,
    time: string
};

export class AwardComp extends React.Component {

    award_name: string;
    time: string;

    constructor(props: AwardCompProps) {
        super(props);
        this.award_name = props.award_name;
        this.time = props.time;
    }

    render() {
        return (
            <div className="research-span">
                {this.time} {this.award_name}
            </div>
        );
    }
} 