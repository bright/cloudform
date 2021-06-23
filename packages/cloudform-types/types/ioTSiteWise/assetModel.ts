/* Generated from: 
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AssetModelCompositeModel {
    Description?: Value<string>
    Name!: Value<string>
    Type!: Value<string>
    CompositeModelProperties?: List<AssetModelProperty>

    constructor(properties: AssetModelCompositeModel) {
        Object.assign(this, properties)
    }
}

export class MetricWindow {
    Tumbling?: TumblingWindow

    constructor(properties: MetricWindow) {
        Object.assign(this, properties)
    }
}

export class TumblingWindow {
    Interval!: Value<string>

    constructor(properties: TumblingWindow) {
        Object.assign(this, properties)
    }
}

export class Attribute {
    DefaultValue?: Value<string>

    constructor(properties: Attribute) {
        Object.assign(this, properties)
    }
}

export class ExpressionVariable {
    Name!: Value<string>
    Value!: VariableValue

    constructor(properties: ExpressionVariable) {
        Object.assign(this, properties)
    }
}

export class VariableValue {
    PropertyLogicalId!: Value<string>
    HierarchyLogicalId?: Value<string>

    constructor(properties: VariableValue) {
        Object.assign(this, properties)
    }
}

export class Transform {
    Expression!: Value<string>
    Variables!: List<ExpressionVariable>

    constructor(properties: Transform) {
        Object.assign(this, properties)
    }
}

export class AssetModelHierarchy {
    LogicalId!: Value<string>
    Name!: Value<string>
    ChildAssetModelId!: Value<string>

    constructor(properties: AssetModelHierarchy) {
        Object.assign(this, properties)
    }
}

export class Metric {
    Expression!: Value<string>
    Variables!: List<ExpressionVariable>
    Window!: MetricWindow

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export class AssetModelProperty {
    LogicalId!: Value<string>
    Name!: Value<string>
    DataType!: Value<string>
    DataTypeSpec?: Value<string>
    Unit?: Value<string>
    Type!: PropertyType

    constructor(properties: AssetModelProperty) {
        Object.assign(this, properties)
    }
}

export class PropertyType {
    TypeName!: Value<string>
    Attribute?: Attribute
    Transform?: Transform
    Metric?: Metric

    constructor(properties: PropertyType) {
        Object.assign(this, properties)
    }
}

export interface AssetModelProperties {
    AssetModelName: Value<string>
    AssetModelDescription?: Value<string>
    AssetModelProperties?: List<AssetModelProperty>
    AssetModelCompositeModels?: List<AssetModelCompositeModel>
    AssetModelHierarchies?: List<AssetModelHierarchy>
    Tags?: List<ResourceTag>
}

export default class AssetModel extends ResourceBase<AssetModelProperties> {
    static AssetModelCompositeModel = AssetModelCompositeModel
    static MetricWindow = MetricWindow
    static TumblingWindow = TumblingWindow
    static Attribute = Attribute
    static ExpressionVariable = ExpressionVariable
    static VariableValue = VariableValue
    static Transform = Transform
    static AssetModelHierarchy = AssetModelHierarchy
    static Metric = Metric
    static AssetModelProperty = AssetModelProperty
    static PropertyType = PropertyType

    constructor(properties: AssetModelProperties) {
        super('AWS::IoTSiteWise::AssetModel', properties)
    }
}
