import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Label {
    Key: Value<string>;
    Value: Value<string>;
    constructor(properties: Label);
}
export declare class Selector {
    Namespace: Value<string>;
    Labels?: List<Label>;
    constructor(properties: Selector);
}
export interface FargateProfileProperties {
    ClusterName: Value<string>;
    FargateProfileName?: Value<string>;
    PodExecutionRoleArn: Value<string>;
    Subnets?: List<Value<string>>;
    Selectors: List<Selector>;
    Tags?: List<ResourceTag>;
}
export default class FargateProfile extends ResourceBase<FargateProfileProperties> {
    static Label: typeof Label;
    static Selector: typeof Selector;
    constructor(properties: FargateProfileProperties);
}
