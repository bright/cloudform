/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Actuator {
    Description?: Value<string>
    AllowedValues?: List<Value<string>>
    Min?: Value<number>
    Max?: Value<number>
    FullyQualifiedName!: Value<string>
    AssignedValue?: Value<string>
    DataType!: Value<string>
    Unit?: Value<string>

    constructor(properties: Actuator) {
        Object.assign(this, properties)
    }
}

export class Attribute {
    DefaultValue?: Value<string>
    Description?: Value<string>
    AllowedValues?: List<Value<string>>
    Min?: Value<number>
    Max?: Value<number>
    FullyQualifiedName!: Value<string>
    AssignedValue?: Value<string>
    DataType!: Value<string>
    Unit?: Value<string>

    constructor(properties: Attribute) {
        Object.assign(this, properties)
    }
}

export class Branch {
    Description?: Value<string>
    FullyQualifiedName!: Value<string>

    constructor(properties: Branch) {
        Object.assign(this, properties)
    }
}

export class Node {
    Attribute?: Attribute
    Branch?: Branch
    Sensor?: Sensor
    Actuator?: Actuator

    constructor(properties: Node) {
        Object.assign(this, properties)
    }
}

export class NodeCounts {
    TotalActuators?: Value<number>
    TotalNodes?: Value<number>
    TotalAttributes?: Value<number>
    TotalBranches?: Value<number>
    TotalSensors?: Value<number>

    constructor(properties: NodeCounts) {
        Object.assign(this, properties)
    }
}

export class Sensor {
    Description?: Value<string>
    AllowedValues?: List<Value<string>>
    Min?: Value<number>
    Max?: Value<number>
    FullyQualifiedName!: Value<string>
    DataType!: Value<string>
    Unit?: Value<string>

    constructor(properties: Sensor) {
        Object.assign(this, properties)
    }
}

export interface SignalCatalogProperties {
    Description?: Value<string>
    NodeCounts?: NodeCounts
    Nodes?: List<Node>
    Tags?: List<ResourceTag>
    Name?: Value<string>
}

export default class SignalCatalog extends ResourceBase<SignalCatalogProperties> {
    static Actuator = Actuator
    static Attribute = Attribute
    static Branch = Branch
    static Node = Node
    static NodeCounts = NodeCounts
    static Sensor = Sensor

    constructor(properties?: SignalCatalogProperties) {
        super('AWS::IoTFleetWise::SignalCatalog', properties || {})
    }
}
