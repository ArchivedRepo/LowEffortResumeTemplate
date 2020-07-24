import "../../data/config.json";
import * as React from "react";
import config_json from  "../data/config.json";

import { AwardCompProps, AwardComp } from "../components/AwardComp";
import { ExperienceCompProps, ExperienceComp } from "../components/ExperienceComp";
import { SimpleInfoCompProps, SimpleInfoComp } from "../components/SimpleInfoComp";

export interface Education {
    degree_name: string;
    university: string;
    GPA: string;
    time: string;
}

export default class DataLoader {
    
    name: string;
    awards: Array<AwardCompProps>;
    work: Array<ExperienceCompProps>;
    research: Array<ExperienceCompProps>;
    scholarship: Array<AwardCompProps>;
    volunteer: Array<string>;
    debate: Array<string>;
    email: string;
    phone: string;
    education: Education;
    publication: Array<ExperienceCompProps>;

    constructor() {
        let config: any = config_json;
        this.awards = config.award;
        this.work = config.work;
        this.research = config.research;
        this.scholarship = config.scholarship;
        this.volunteer = config.volunteer;
        this.debate = config.debate;
        this.phone = config.contact.phone;
        this.email = config.contact.email;
        this.education = config.education;
        this.name = config.name;
        this.publication = config.publication;
    }

    get_awards(): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        this.awards.forEach((award) => {
            result.push(<AwardComp {...award}/>);
        })
        return result;
    }

    get_work(): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        this.work.forEach((item) => {
            result.push(<ExperienceComp {...item}/>);
        })
        return result;
    }

    get_research(): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        this.research.forEach((item) => {
            result.push(<ExperienceComp {...item}/>);
        })
        return result;
    }

    get_scholarship(): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        this.scholarship.forEach((item) => {
            result.push(<AwardComp {...item}/>);
        })
        return result;
    }

    get_volunteer(): JSX.Element {
        return <SimpleInfoComp { ...{entries: this.volunteer} }/>;
    }

    get_debate(): JSX.Element {
        return <SimpleInfoComp { ...{entries: this.debate} }/>;
    }

    get_email(): string {
        return this.email;
    }

    get_phone(): string {
        return this.phone;
    }

    get_publication(): Array<JSX.Element> {
        let result: Array<JSX.Element> = [];
        this.publication.forEach((item) => {
            result.push(<ExperienceComp {...item}/>);
        })
        return result;
    }
}