import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StandardsControl {
    StandardsControlArn: Value<string>;
    Reason?: Value<string>;
    constructor(properties: StandardsControl);
}
export interface StandardProperties {
    StandardsArn: Value<string>;
    DisabledStandardsControls?: List<StandardsControl>;
}
export default class Standard extends ResourceBase<StandardProperties> {
    static StandardsControl: typeof StandardsControl;
    constructor(properties: StandardProperties);
}
