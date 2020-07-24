import * as React from "react";
import './IndexPage.css';
import { Typography, Row, Col } from 'antd';
const { Title } = Typography;

export interface ExperienceCompProps {
    title: string,
    organization: string,
    time_span: string,
    info: Array<string>

};

export class ExperienceComp extends React.Component {

    research_title: string;
    research_lab: string;
    time_span: string;
    research_info: Array<JSX.Element>;

    constructor(props: ExperienceCompProps) {
        super(props);
        this.research_title = props.title;
        this.research_lab = props.organization;
        this.time_span = props.time_span;
        this.research_info = this._research_info_helper(props.info);
    }

    _research_info_helper(arr: Array<string>): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        arr.forEach(element => {
           result.push(
               <li dangerouslySetInnerHTML={{__html: element}}/>
           ); 
        });
        return result;
    }

    render() {
        return (
            <div className="research-span">
                <div className="research-title">
                <Row>
                <Col span={20}>
                    <Title level={4}>
                {this.research_title}
                </Title>
                </Col>
                <Col span={4}>
                    {this.time_span}
                </Col>
                </Row>
                </div>
                <div className="research-lab">
                    {this.research_lab}
                </div>
                <div className="research-info">
                    <ul>
                        {this.research_info}
                    </ul>
                </div>
            </div>
        );
    }
} 