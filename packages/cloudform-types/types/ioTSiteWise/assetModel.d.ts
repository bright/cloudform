import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AssetModelCompositeModel {
    Type: Value<string>;
    Description?: Value<string>;
    CompositeModelProperties?: List<AssetModelProperty>;
    Name: Value<string>;
    constructor(properties: AssetModelCompositeModel);
}
export declare class AssetModelHierarchy {
    LogicalId: Value<string>;
    ChildAssetModelId: Value<string>;
    Name: Value<string>;
    constructor(properties: AssetModelHierarchy);
}
export declare class AssetModelProperty {
    Type: PropertyType;
    LogicalId: Value<string>;
    DataTypeSpec?: Value<string>;
    DataType: Value<string>;
    Unit?: Value<string>;
    Name: Value<string>;
    constructor(properties: AssetModelProperty);
}
export declare class Attribute {
    DefaultValue?: Value<string>;
    constructor(properties: Attribute);
}
export declare class ExpressionVariable {
    Value: VariableValue;
    Name: Value<string>;
    constructor(properties: ExpressionVariable);
}
export declare class Metric {
    Variables: List<ExpressionVariable>;
    Window: MetricWindow;
    Expression: Value<string>;
    constructor(properties: Metric);
}
export declare class MetricWindow {
    Tumbling?: TumblingWindow;
    constructor(properties: MetricWindow);
}
export declare class PropertyType {
    TypeName: Value<string>;
    Attribute?: Attribute;
    Metric?: Metric;
    Transform?: Transform;
    constructor(properties: PropertyType);
}
export declare class Transform {
    Variables: List<ExpressionVariable>;
    Expression: Value<string>;
    constructor(properties: Transform);
}
export declare class TumblingWindow {
    Interval: Value<string>;
    Offset?: Value<string>;
    constructor(properties: TumblingWindow);
}
export declare class VariableValue {
    PropertyLogicalId: Value<string>;
    HierarchyLogicalId?: Value<string>;
    constructor(properties: VariableValue);
}
export interface AssetModelProperties {
    AssetModelDescription?: Value<string>;
    AssetModelCompositeModels?: List<AssetModelCompositeModel>;
    AssetModelName: Value<string>;
    AssetModelHierarchies?: List<AssetModelHierarchy>;
    AssetModelProperties?: List<AssetModelProperty>;
    Tags?: List<ResourceTag>;
}
export default class AssetModel extends ResourceBase<AssetModelProperties> {
    static AssetModelCompositeModel: typeof AssetModelCompositeModel;
    static AssetModelHierarchy: typeof AssetModelHierarchy;
    static AssetModelProperty: typeof AssetModelProperty;
    static Attribute: typeof Attribute;
    static ExpressionVariable: typeof ExpressionVariable;
    static Metric: typeof Metric;
    static MetricWindow: typeof MetricWindow;
    static PropertyType: typeof PropertyType;
    static Transform: typeof Transform;
    static TumblingWindow: typeof TumblingWindow;
    static VariableValue: typeof VariableValue;
    constructor(properties: AssetModelProperties);
}
