import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssetModelCompositeModel {
    Description?: Value<string>;
    Name: Value<string>;
    Type: Value<string>;
    CompositeModelProperties?: List<AssetModelProperty>;
    constructor(properties: AssetModelCompositeModel);
}
export declare class MetricWindow {
    Tumbling?: TumblingWindow;
    constructor(properties: MetricWindow);
}
export declare class TumblingWindow {
    Interval: Value<string>;
    constructor(properties: TumblingWindow);
}
export declare class Attribute {
    DefaultValue?: Value<string>;
    constructor(properties: Attribute);
}
export declare class ExpressionVariable {
    Name: Value<string>;
    Value: VariableValue;
    constructor(properties: ExpressionVariable);
}
export declare class VariableValue {
    PropertyLogicalId: Value<string>;
    HierarchyLogicalId?: Value<string>;
    constructor(properties: VariableValue);
}
export declare class Transform {
    Expression: Value<string>;
    Variables: List<ExpressionVariable>;
    constructor(properties: Transform);
}
export declare class AssetModelHierarchy {
    LogicalId: Value<string>;
    Name: Value<string>;
    ChildAssetModelId: Value<string>;
    constructor(properties: AssetModelHierarchy);
}
export declare class Metric {
    Expression: Value<string>;
    Variables: List<ExpressionVariable>;
    Window: MetricWindow;
    constructor(properties: Metric);
}
export declare class AssetModelProperty {
    LogicalId: Value<string>;
    Name: Value<string>;
    DataType: Value<string>;
    DataTypeSpec?: Value<string>;
    Unit?: Value<string>;
    Type: PropertyType;
    constructor(properties: AssetModelProperty);
}
export declare class PropertyType {
    TypeName: Value<string>;
    Attribute?: Attribute;
    Transform?: Transform;
    Metric?: Metric;
    constructor(properties: PropertyType);
}
export interface AssetModelProperties {
    AssetModelName: Value<string>;
    AssetModelDescription?: Value<string>;
    AssetModelProperties?: List<AssetModelProperty>;
    AssetModelCompositeModels?: List<AssetModelCompositeModel>;
    AssetModelHierarchies?: List<AssetModelHierarchy>;
    Tags?: List<ResourceTag>;
}
export default class AssetModel extends ResourceBase<AssetModelProperties> {
    static AssetModelCompositeModel: typeof AssetModelCompositeModel;
    static MetricWindow: typeof MetricWindow;
    static TumblingWindow: typeof TumblingWindow;
    static Attribute: typeof Attribute;
    static ExpressionVariable: typeof ExpressionVariable;
    static VariableValue: typeof VariableValue;
    static Transform: typeof Transform;
    static AssetModelHierarchy: typeof AssetModelHierarchy;
    static Metric: typeof Metric;
    static AssetModelProperty: typeof AssetModelProperty;
    static PropertyType: typeof PropertyType;
    constructor(properties: AssetModelProperties);
}
