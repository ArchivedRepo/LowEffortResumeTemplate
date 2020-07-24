import * as React from "react";
// import { FC } from 'react';
// import { Button } from 'antd';
import './IndexPage.css';

import { Layout, Menu, Typography, Divider, Row, Col, Result } from 'antd';
const { Title } = Typography;
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

export interface SimpleInfoCompProps {
    entries: Array<string>
};

export class SimpleInfoComp extends React.Component {

    entries: Array<JSX.Element>

    constructor(props: SimpleInfoCompProps) {
        super(props);
        this.entries = this._entries_helper(props.entries);
    }

    _entries_helper(arr: Array<string>): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        arr.forEach(info => {
            result.push(
                <div className="simple-info">
                    { info }
                </div>
            );
        });
        return result;
    }

    render() {
        return (
            <div className="research-span">
                { this.entries }
            </div>
        );
    }
}