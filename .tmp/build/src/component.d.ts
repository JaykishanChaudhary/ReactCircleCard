import * as React from "react";
export interface State {
    background?: string;
    borderWidth?: number;
    size: number;
    textLabel: string;
    textValue: string;
}
export declare const initialState: State;
export declare class ReactCircleCard extends React.Component<State> {
    private static updateCallback;
    static update(newState: State): void;
    state: State;
    componentWillMount(): void;
    componentWillUnmount(): void;
    constructor(props: any);
    render(): React.JSX.Element;
}
