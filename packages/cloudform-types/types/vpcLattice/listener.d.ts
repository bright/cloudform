import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DefaultAction {
    Forward?: Forward;
    FixedResponse?: FixedResponse;
    constructor(properties: DefaultAction);
}
export declare class FixedResponse {
    StatusCode: Value<number>;
    constructor(properties: FixedResponse);
}
export declare class Forward {
    TargetGroups: List<WeightedTargetGroup>;
    constructor(properties: Forward);
}
export declare class WeightedTargetGroup {
    Weight?: Value<number>;
    TargetGroupIdentifier: Value<string>;
    constructor(properties: WeightedTargetGroup);
}
export interface ListenerProperties {
    DefaultAction: DefaultAction;
    Port?: Value<number>;
    ServiceIdentifier?: Value<string>;
    Protocol: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class Listener extends ResourceBase<ListenerProperties> {
    static DefaultAction: typeof DefaultAction;
    static FixedResponse: typeof FixedResponse;
    static Forward: typeof Forward;
    static WeightedTargetGroup: typeof WeightedTargetGroup;
    constructor(properties: ListenerProperties);
}
