import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Actuator {
    Description?: Value<string>;
    AllowedValues?: List<Value<string>>;
    Min?: Value<number>;
    Max?: Value<number>;
    FullyQualifiedName: Value<string>;
    AssignedValue?: Value<string>;
    DataType: Value<string>;
    Unit?: Value<string>;
    constructor(properties: Actuator);
}
export declare class Attribute {
    DefaultValue?: Value<string>;
    Description?: Value<string>;
    AllowedValues?: List<Value<string>>;
    Min?: Value<number>;
    Max?: Value<number>;
    FullyQualifiedName: Value<string>;
    AssignedValue?: Value<string>;
    DataType: Value<string>;
    Unit?: Value<string>;
    constructor(properties: Attribute);
}
export declare class Branch {
    Description?: Value<string>;
    FullyQualifiedName: Value<string>;
    constructor(properties: Branch);
}
export declare class Node {
    Attribute?: Attribute;
    Branch?: Branch;
    Sensor?: Sensor;
    Actuator?: Actuator;
    constructor(properties: Node);
}
export declare class NodeCounts {
    TotalActuators?: Value<number>;
    TotalNodes?: Value<number>;
    TotalAttributes?: Value<number>;
    TotalBranches?: Value<number>;
    TotalSensors?: Value<number>;
    constructor(properties: NodeCounts);
}
export declare class Sensor {
    Description?: Value<string>;
    AllowedValues?: List<Value<string>>;
    Min?: Value<number>;
    Max?: Value<number>;
    FullyQualifiedName: Value<string>;
    DataType: Value<string>;
    Unit?: Value<string>;
    constructor(properties: Sensor);
}
export interface SignalCatalogProperties {
    Description?: Value<string>;
    NodeCounts?: NodeCounts;
    Nodes?: List<Node>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class SignalCatalog extends ResourceBase<SignalCatalogProperties> {
    static Actuator: typeof Actuator;
    static Attribute: typeof Attribute;
    static Branch: typeof Branch;
    static Node: typeof Node;
    static NodeCounts: typeof NodeCounts;
    static Sensor: typeof Sensor;
    constructor(properties?: SignalCatalogProperties);
}
