import * as React from "react";
import { Layout, Menu, Typography, Divider, Row, Col } from 'antd';
const { Title } = Typography;
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

import '../style/IndexPage.css';
import {ExperienceComp, ExperienceCompProps} from "./ExperienceComp";
import {AwardComp, AwardCompProps} from "./AwardComp";

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

// const test_research_props: ExperienceCompProps = {
//     title: "Construction of NIT II-responsive antibacterial/antifouling switchable surface",
//     organization: "Beijing Laboratory of Biomedical Materials",
//     time_span: "2019.10-Present",
//     info: [
//         "Researched the background and progress of stimuli-responsive switchable antibacterial.",
//         "Designed experiment plan and synthesis route. (link)",
//         "Synthesized antibacterial surface on Ti and tested the inhibition rate of bacteria growth.",
//         "Writing a review, “The progress on smart stimuli-responsive antibacterial material for wound healing”."
//     ]
// };

// const test_award_props: AwardCompProps = {
//     time: "May, 2018",
//     award_name: "Second prize in the National English Competition for College Students, College English Teaching & Research Association of China"
// };

// const test_scholarship_props = {
//     time: "September, 2017",
//     award_name: "Excellent Students Award (Top 2%), Beijing university of Beijing chemical technology."
// };

// const test_work_props_1 = {
//     title: "Counselor in Changshu Citizens and Nature Camp",
//     organization: "IDEAS Camp Education Company",
//     info: [
//         "Designed chemistry workshop individually.",
//         "Led group members finish the lessons and activity in camp with foreign coworkers."
//     ]
// };

// const test_work_props_2 = {
//     title: "Translator for China international fair for trade in services, Wuxi session",
//     organization: "China Association of Trade in Service",
//     info: [
//         "Translated the content in meeting for foreign merchant"
//     ]
// };

