/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class AssetModelCompositeModel {
    Type!: Value<string>
    Description?: Value<string>
    CompositeModelProperties?: List<AssetModelProperty>
    Name!: Value<string>

    constructor(properties: AssetModelCompositeModel) {
        Object.assign(this, properties)
    }
}

export class AssetModelHierarchy {
    LogicalId!: Value<string>
    ChildAssetModelId!: Value<string>
    Name!: Value<string>

    constructor(properties: AssetModelHierarchy) {
        Object.assign(this, properties)
    }
}

export class AssetModelProperty {
    Type!: PropertyType
    LogicalId!: Value<string>
    DataTypeSpec?: Value<string>
    DataType!: Value<string>
    Unit?: Value<string>
    Name!: Value<string>

    constructor(properties: AssetModelProperty) {
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
    Value!: VariableValue
    Name!: Value<string>

    constructor(properties: ExpressionVariable) {
        Object.assign(this, properties)
    }
}

export class Metric {
    Variables!: List<ExpressionVariable>
    Window!: MetricWindow
    Expression!: Value<string>

    constructor(properties: Metric) {
        Object.assign(this, properties)
    }
}

export class MetricWindow {
    Tumbling?: TumblingWindow

    constructor(properties: MetricWindow) {
        Object.assign(this, properties)
    }
}

export class PropertyType {
    TypeName!: Value<string>
    Attribute?: Attribute
    Metric?: Metric
    Transform?: Transform

    constructor(properties: PropertyType) {
        Object.assign(this, properties)
    }
}

export class Transform {
    Variables!: List<ExpressionVariable>
    Expression!: Value<string>

    constructor(properties: Transform) {
        Object.assign(this, properties)
    }
}

export class TumblingWindow {
    Interval!: Value<string>
    Offset?: Value<string>

    constructor(properties: TumblingWindow) {
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

export interface AssetModelProperties {
    AssetModelDescription?: Value<string>
    AssetModelCompositeModels?: List<AssetModelCompositeModel>
    AssetModelName: Value<string>
    AssetModelHierarchies?: List<AssetModelHierarchy>
    AssetModelProperties?: List<AssetModelProperty>
    Tags?: List<ResourceTag>
}

export default class AssetModel extends ResourceBase<AssetModelProperties> {
    static AssetModelCompositeModel = AssetModelCompositeModel
    static AssetModelHierarchy = AssetModelHierarchy
    static AssetModelProperty = AssetModelProperty
    static Attribute = Attribute
    static ExpressionVariable = ExpressionVariable
    static Metric = Metric
    static MetricWindow = MetricWindow
    static PropertyType = PropertyType
    static Transform = Transform
    static TumblingWindow = TumblingWindow
    static VariableValue = VariableValue

    constructor(properties: AssetModelProperties) {
        super('AWS::IoTSiteWise::AssetModel', properties)
    }
}
