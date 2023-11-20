import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ActionParameters {
    Type?: ComponentProperty;
    Anchor?: ComponentProperty;
    Target?: ComponentProperty;
    Fields?: {
        [key: string]: ComponentProperty;
    };
    State?: MutationActionSetStateParameter;
    Model?: Value<string>;
    Id?: ComponentProperty;
    Url?: ComponentProperty;
    Global?: ComponentProperty;
    constructor(properties: ActionParameters);
}
export declare class ComponentBindingPropertiesValue {
    DefaultValue?: Value<string>;
    Type?: Value<string>;
    BindingProperties?: ComponentBindingPropertiesValueProperties;
    constructor(properties: ComponentBindingPropertiesValue);
}
export declare class ComponentBindingPropertiesValueProperties {
    Field?: Value<string>;
    DefaultValue?: Value<string>;
    Bucket?: Value<string>;
    UserAttribute?: Value<string>;
    Model?: Value<string>;
    Predicates?: List<Predicate>;
    Key?: Value<string>;
    constructor(properties: ComponentBindingPropertiesValueProperties);
}
export declare class ComponentChild {
    ComponentType: Value<string>;
    Events?: {
        [key: string]: ComponentEvent;
    };
    Children?: List<ComponentChild>;
    Properties: {
        [key: string]: ComponentProperty;
    };
    Name: Value<string>;
    constructor(properties: ComponentChild);
}
export declare class ComponentConditionProperty {
    Operator?: Value<string>;
    Field?: Value<string>;
    Operand?: Value<string>;
    OperandType?: Value<string>;
    Else?: ComponentProperty;
    Then?: ComponentProperty;
    Property?: Value<string>;
    constructor(properties: ComponentConditionProperty);
}
export declare class ComponentDataConfiguration {
    Model: Value<string>;
    Sort?: List<SortProperty>;
    Identifiers?: List<Value<string>>;
    Predicate?: Predicate;
    constructor(properties: ComponentDataConfiguration);
}
export declare class ComponentEvent {
    Action?: Value<string>;
    Parameters?: ActionParameters;
    constructor(properties: ComponentEvent);
}
export declare class ComponentProperty {
    Condition?: ComponentConditionProperty;
    UserAttribute?: Value<string>;
    ImportedValue?: Value<string>;
    BindingProperties?: ComponentPropertyBindingProperties;
    Bindings?: {
        [key: string]: FormBindingElement;
    };
    Configured?: Value<boolean>;
    Concat?: List<ComponentProperty>;
    DefaultValue?: Value<string>;
    Type?: Value<string>;
    Value?: Value<string>;
    Model?: Value<string>;
    CollectionBindingProperties?: ComponentPropertyBindingProperties;
    Event?: Value<string>;
    ComponentName?: Value<string>;
    Property?: Value<string>;
    constructor(properties: ComponentProperty);
}
export declare class ComponentPropertyBindingProperties {
    Field?: Value<string>;
    Property: Value<string>;
    constructor(properties: ComponentPropertyBindingProperties);
}
export declare class ComponentVariant {
    VariantValues?: {
        [key: string]: Value<string>;
    };
    Overrides?: {
        [key: string]: any;
    };
    constructor(properties: ComponentVariant);
}
export declare class FormBindingElement {
    Element: Value<string>;
    Property: Value<string>;
    constructor(properties: FormBindingElement);
}
export declare class MutationActionSetStateParameter {
    Set: ComponentProperty;
    ComponentName: Value<string>;
    Property: Value<string>;
    constructor(properties: MutationActionSetStateParameter);
}
export declare class Predicate {
    Operator?: Value<string>;
    Field?: Value<string>;
    Or?: List<Predicate>;
    And?: List<Predicate>;
    Operand?: Value<string>;
    constructor(properties: Predicate);
}
export declare class SortProperty {
    Field: Value<string>;
    Direction: Value<string>;
    constructor(properties: SortProperty);
}
export interface ComponentProperties {
    ComponentType: Value<string>;
    SchemaVersion?: Value<string>;
    EnvironmentName?: Value<string>;
    BindingProperties: {
        [key: string]: ComponentBindingPropertiesValue;
    };
    SourceId?: Value<string>;
    Properties: {
        [key: string]: ComponentProperty;
    };
    CollectionProperties?: {
        [key: string]: ComponentDataConfiguration;
    };
    Name: Value<string>;
    Variants: List<ComponentVariant>;
    AppId?: Value<string>;
    Events?: {
        [key: string]: ComponentEvent;
    };
    Overrides: {
        [key: string]: any;
    };
    Children?: List<ComponentChild>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Component extends ResourceBase<ComponentProperties> {
    static ActionParameters: typeof ActionParameters;
    static ComponentBindingPropertiesValue: typeof ComponentBindingPropertiesValue;
    static ComponentBindingPropertiesValueProperties: typeof ComponentBindingPropertiesValueProperties;
    static ComponentChild: typeof ComponentChild;
    static ComponentConditionProperty: typeof ComponentConditionProperty;
    static ComponentDataConfiguration: typeof ComponentDataConfiguration;
    static ComponentEvent: typeof ComponentEvent;
    static ComponentProperty: typeof ComponentProperty;
    static ComponentPropertyBindingProperties: typeof ComponentPropertyBindingProperties;
    static ComponentVariant: typeof ComponentVariant;
    static FormBindingElement: typeof FormBindingElement;
    static MutationActionSetStateParameter: typeof MutationActionSetStateParameter;
    static Predicate: typeof Predicate;
    static SortProperty: typeof SortProperty;
    constructor(properties: ComponentProperties);
}
