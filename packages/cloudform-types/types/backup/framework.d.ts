import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ControlInputParameter {
    ParameterValue: Value<string>;
    ParameterName: Value<string>;
    constructor(properties: ControlInputParameter);
}
export declare class ControlScope {
    ComplianceResourceTypes?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    ComplianceResourceIds?: List<Value<string>>;
    constructor(properties: ControlScope);
}
export declare class FrameworkControl {
    ControlName: Value<string>;
    ControlInputParameters?: List<ControlInputParameter>;
    ControlScope?: ControlScope;
    constructor(properties: FrameworkControl);
}
export interface FrameworkProperties {
    FrameworkControls: List<FrameworkControl>;
    FrameworkName?: Value<string>;
    FrameworkTags?: List<ResourceTag>;
    FrameworkDescription?: Value<string>;
}
export default class Framework extends ResourceBase<FrameworkProperties> {
    static ControlInputParameter: typeof ControlInputParameter;
    static ControlScope: typeof ControlScope;
    static FrameworkControl: typeof FrameworkControl;
    constructor(properties: FrameworkProperties);
}
