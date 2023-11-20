import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Component {
    Status?: Status;
    Description?: Value<string>;
    DefinedIn?: Value<string>;
    PropertyGroups?: {
        [key: string]: PropertyGroup;
    };
    ComponentTypeId?: Value<string>;
    ComponentName?: Value<string>;
    Properties?: {
        [key: string]: Property;
    };
    constructor(properties: Component);
}
export declare class DataType {
    Type?: Value<string>;
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
export declare class Definition {
    DefaultValue?: DataValue;
    IsImported?: Value<boolean>;
    IsInherited?: Value<boolean>;
    Configuration?: {
        [key: string]: Value<string>;
    };
    IsExternalId?: Value<boolean>;
    IsStoredExternally?: Value<boolean>;
    IsTimeSeries?: Value<boolean>;
    IsRequiredInEntity?: Value<boolean>;
    DataType?: DataType;
    IsFinal?: Value<boolean>;
    constructor(properties: Definition);
}
export declare class Error {
    Message?: Value<string>;
    Code?: Value<string>;
    constructor(properties: Error);
}
export declare class Property {
    Definition?: Definition;
    Value?: DataValue;
    constructor(properties: Property);
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
export interface EntityProperties {
    EntityId?: Value<string>;
    Components?: {
        [key: string]: Component;
    };
    ParentEntityId?: Value<string>;
    Description?: Value<string>;
    EntityName: Value<string>;
    WorkspaceId: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Entity extends ResourceBase<EntityProperties> {
    static Component: typeof Component;
    static DataType: typeof DataType;
    static DataValue: typeof DataValue;
    static Definition: typeof Definition;
    static Error: typeof Error;
    static Property: typeof Property;
    static PropertyGroup: typeof PropertyGroup;
    static Relationship: typeof Relationship;
    static RelationshipValue: typeof RelationshipValue;
    static Status: typeof Status;
    constructor(properties: EntityProperties);
}
