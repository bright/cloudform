import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Label {
    Value: Value<string>;
    Key: Value<string>;
    constructor(properties: Label);
}
export declare class Selector {
    Labels?: List<Label>;
    Namespace: Value<string>;
    constructor(properties: Selector);
}
export interface FargateProfileProperties {
    Subnets?: List<Value<string>>;
    FargateProfileName?: Value<string>;
    ClusterName: Value<string>;
    PodExecutionRoleArn: Value<string>;
    Selectors: List<Selector>;
    Tags?: List<ResourceTag>;
}
export default class FargateProfile extends ResourceBase<FargateProfileProperties> {
    static Label: typeof Label;
    static Selector: typeof Selector;
    constructor(properties: FargateProfileProperties);
}
