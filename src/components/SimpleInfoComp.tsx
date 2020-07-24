import * as React from "react";
import './IndexPage.css';

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