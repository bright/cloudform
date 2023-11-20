/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class DataConnector {
    IsNative?: Value<boolean>
    Lambda?: LambdaFunction

    constructor(properties: DataConnector) {
        Object.assign(this, properties)
    }
}

export class DataType {
    Type!: Value<string>
    AllowedValues?: List<DataValue>
    UnitOfMeasure?: Value<string>
    Relationship?: Relationship
    NestedType?: DataType

    constructor(properties: DataType) {
        Object.assign(this, properties)
    }
}

export class DataValue {
    DoubleValue?: Value<number>
    Expression?: Value<string>
    BooleanValue?: Value<boolean>
    IntegerValue?: Value<number>
    ListValue?: List<DataValue>
    LongValue?: Value<number>
    MapValue?: {[key: string]: DataValue}
    RelationshipValue?: RelationshipValue
    StringValue?: Value<string>

    constructor(properties: DataValue) {
        Object.assign(this, properties)
    }
}

export class Error {
    Message?: Value<string>
    Code?: Value<string>

    constructor(properties: Error) {
        Object.assign(this, properties)
    }
}

export class Function {
    Scope?: Value<string>
    RequiredProperties?: List<Value<string>>
    ImplementedBy?: DataConnector

    constructor(properties: Function) {
        Object.assign(this, properties)
    }
}

export class LambdaFunction {
    Arn!: Value<string>

    constructor(properties: LambdaFunction) {
        Object.assign(this, properties)
    }
}

export class PropertyDefinition {
    DefaultValue?: DataValue
    IsExternalId?: Value<boolean>
    IsStoredExternally?: Value<boolean>
    IsTimeSeries?: Value<boolean>
    IsRequiredInEntity?: Value<boolean>
    DataType?: DataType
    Configurations?: {[key: string]: Value<string>}

    constructor(properties: PropertyDefinition) {
        Object.assign(this, properties)
    }
}

export class PropertyGroup {
    GroupType?: Value<string>
    PropertyNames?: List<Value<string>>

    constructor(properties: PropertyGroup) {
        Object.assign(this, properties)
    }
}

export class Relationship {
    RelationshipType?: Value<string>
    TargetComponentTypeId?: Value<string>

    constructor(properties: Relationship) {
        Object.assign(this, properties)
    }
}

export class RelationshipValue {
    TargetComponentName?: Value<string>
    TargetEntityId?: Value<string>

    constructor(properties: RelationshipValue) {
        Object.assign(this, properties)
    }
}

export class Status {
    State?: Value<string>
    Error?: Error

    constructor(properties: Status) {
        Object.assign(this, properties)
    }
}

export interface ComponentTypeProperties {
    ExtendsFrom?: List<Value<string>>
    Description?: Value<string>
    IsSingleton?: Value<boolean>
    PropertyDefinitions?: {[key: string]: PropertyDefinition}
    PropertyGroups?: {[key: string]: PropertyGroup}
    WorkspaceId: Value<string>
    ComponentTypeId: Value<string>
    Functions?: {[key: string]: Function}
    Tags?: {[key: string]: Value<string>}
}

export default class ComponentType extends ResourceBase<ComponentTypeProperties> {
    static DataConnector = DataConnector
    static DataType = DataType
    static DataValue = DataValue
    static Error = Error
    static Function = Function
    static LambdaFunction = LambdaFunction
    static PropertyDefinition = PropertyDefinition
    static PropertyGroup = PropertyGroup
    static Relationship = Relationship
    static RelationshipValue = RelationshipValue
    static Status = Status

    constructor(properties: ComponentTypeProperties) {
        super('AWS::IoTTwinMaker::ComponentType', properties)
    }
}
