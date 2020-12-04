import * as React from "react";
import { Layout, Typography, Divider, Row, Col } from 'antd';
const { Title } = Typography;
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

import './IndexPage.css';
import DataLoader from "../scripts/DataLoader";

// Empty as it is static
interface IndexPageProps {};

class IndexPage extends React.Component {
    
    dataLoader: DataLoader;

    constructor(props: IndexPageProps) {
        super(props);
        this.dataLoader = new DataLoader();
    }

    render() {
        return (
            <Layout className="layout">
                <Header style={{background: "#f0f2f5"}}></Header>
                <Content style={{padding: '0 50px'}}>
                <div className="main-content">
                    <Title> { this.dataLoader.name } </Title>
                    <div id="contact-info">
                        <div id="email">
                            <MailOutlined/> E-mail: <a href={"mailto:"+this.dataLoader.get_email()}>{this.dataLoader.get_email()}</a>
                        </div>
                        <div id="phone">
                            <PhoneOutlined/> Phone: { this.dataLoader.get_phone() }
                        </div>
                    </div>
                    <Divider/>
                    <div id="education">
                        <Title level={2}> Education </Title>
                        <div> 
                            <Row>
                                <Col span={20}>
                                    <Title level={3}>
                                    {/*This should be the name of degree!*/}
                                    { this.dataLoader.education.degree_name }
                                    </Title>
                                </Col>
                            <Col span={4}>{ this.dataLoader.education.time }</Col>
                            </Row>
                            <Row>
                                {this.dataLoader.education.university}
                            </Row>
                            <Row>
                                GPA: {this.dataLoader.education.GPA}
                            </Row>
                            <Row>
                                <u>Main Course</u>:&nbsp;<i>Manufacture Engineering of Polymers, Polymer Processing Engineering, Polymer modification, Polymer Chemistry, Polymer Physics, Advances in biomaterials, Physical Chemistry, Organic Chemistry, etc.</i>
                            </Row>
                        </div>
                        <br/>
                        <div> 
                            <Row>
                                <Col span={20}>
                                    <Title level={3}>
                                    Horizon Program, Institution of Global Development, Tsinghua University
                                    </Title>
                                </Col>
                            <Col span={4}>May 2020 - present</Col>
                            </Row>
                            <Row>
                            <u>Seminar</u>:&nbsp;<i>Analysis of China Social Organization management policy, Some questions and reflections on the talent demand and training of China's participation in global governance, etc</i>
                            </Row>
                            <Row>
                            <u>Social Work:</u>&nbsp;<i>Global Youth Ecological Governance & Social Development Summit, Global Youth SDG (Substantial Development Goal) Training Camp, etc.</i>
                            </Row>
                        </div>
                        <br/>
                        <div> 
                            <Row>
                                <Col span={20}>
                                    <Title level={3}>
                                    2020 YES GO program, Polaris Youth Company (acceptance rate 4%)
                                    </Title>
                                </Col>
                            <Col span={4}>April 2020 - present</Col>
                            </Row>
                            <Row>
                            <u>Program Plan:</u>&nbsp;<i>Public Speaking, Artistic Express, City Exploration, Entrepreneur Simulation, etc.</i>
                            </Row>
                        </div>
                    </div>
                    <Divider/>
                    <div id="research">
                        <Title level={2}> Research Experience </Title>
                        <div>
                            { this.dataLoader.get_research() }
                        </div>
                    </div>
                    <Divider/>
                    <div id="research">
                        <Title level={2}> Publications </Title>
                        <div>
                            { this.dataLoader.get_publication() }
                        </div>
                    </div>
                    <Divider/>
                    <div id="award">
                        <Title level={2}> Academic Award & Scholarship </Title>
                        <Divider orientation="left">Academic Award</Divider>
                        <div>
                            { this.dataLoader.get_awards()}
                        </div>
                        <Divider orientation="left">Scholarship</Divider>
                        <div>
                            { this.dataLoader.get_scholarship()}
                        </div>
                    </div>
                    <Divider/>
                    <div id="work-experience">
                        <Title level={3}> Work Experience </Title>
                        { this.dataLoader.get_work() }
                    </div>
                    <Divider/>
                    <div id="extracurricular-activity">
                        <Title level={3}> Extracurricular Activities</Title>
                        <Divider orientation="left">Volunteer Experience(Total: 302.5 hours)</Divider>
                        { this.dataLoader.get_volunteer() }
                        <Divider orientation="left">Debate</Divider>
                        { this.dataLoader.get_debate() }
                    </div>
                </div>
                
                </Content>
                <Footer>
                    Author: willqie@Github, 
                    Licensed under <a href="https://www.gnu.org/licenses/agpl-3.0.html">AGPL Version 3</a>
                </Footer>
            </Layout>
    )}
}

export default IndexPage;