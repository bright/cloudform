import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataConnector {
    IsNative?: Value<boolean>;
    Lambda?: LambdaFunction;
    constructor(properties: DataConnector);
}
export declare class DataType {
    Type: Value<string>;
    AllowedValues?: List<DataValue>;
    UnitOfMeasure?: Value<string>;
    Relationship?: Relationship;
    NestedType?: DataType;
    constructor(properties: DataType);
}
export declare class DataValue {
    DoubleValue?: Value<number>;
    Expression?: Value<string>;
    BooleanValue?: Value<boolean>;
    IntegerValue?: Value<number>;
    ListValue?: List<DataValue>;
    LongValue?: Value<number>;
    MapValue?: {
        [key: string]: DataValue;
    };
    RelationshipValue?: RelationshipValue;
    StringValue?: Value<string>;
    constructor(properties: DataValue);
}
export declare class Error {
    Message?: Value<string>;
    Code?: Value<string>;
    constructor(properties: Error);
}
export declare class Function {
    Scope?: Value<string>;
    RequiredProperties?: List<Value<string>>;
    ImplementedBy?: DataConnector;
    constructor(properties: Function);
}
export declare class LambdaFunction {
    Arn: Value<string>;
    constructor(properties: LambdaFunction);
}
export declare class PropertyDefinition {
    DefaultValue?: DataValue;
    IsExternalId?: Value<boolean>;
    IsStoredExternally?: Value<boolean>;
    IsTimeSeries?: Value<boolean>;
    IsRequiredInEntity?: Value<boolean>;
    DataType?: DataType;
    Configurations?: {
        [key: string]: Value<string>;
    };
    constructor(properties: PropertyDefinition);
}
export declare class PropertyGroup {
    GroupType?: Value<string>;
    PropertyNames?: List<Value<string>>;
    constructor(properties: PropertyGroup);
}
export declare class Relationship {
    RelationshipType?: Value<string>;
    TargetComponentTypeId?: Value<string>;
    constructor(properties: Relationship);
}
export declare class RelationshipValue {
    TargetComponentName?: Value<string>;
    TargetEntityId?: Value<string>;
    constructor(properties: RelationshipValue);
}
export declare class Status {
    State?: Value<string>;
    Error?: Error;
    constructor(properties: Status);
}
export interface ComponentTypeProperties {
    ExtendsFrom?: List<Value<string>>;
    Description?: Value<string>;
    IsSingleton?: Value<boolean>;
    PropertyDefinitions?: {
        [key: string]: PropertyDefinition;
    };
    PropertyGroups?: {
        [key: string]: PropertyGroup;
    };
    WorkspaceId: Value<string>;
    ComponentTypeId: Value<string>;
    Functions?: {
        [key: string]: Function;
    };
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ComponentType extends ResourceBase<ComponentTypeProperties> {
    static DataConnector: typeof DataConnector;
    static DataType: typeof DataType;
    static DataValue: typeof DataValue;
    static Error: typeof Error;
    static Function: typeof Function;
    static LambdaFunction: typeof LambdaFunction;
    static PropertyDefinition: typeof PropertyDefinition;
    static PropertyGroup: typeof PropertyGroup;
    static Relationship: typeof Relationship;
    static RelationshipValue: typeof RelationshipValue;
    static Status: typeof Status;
    constructor(properties: ComponentTypeProperties);
}
