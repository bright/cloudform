"use strict";
/* Generated from:
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SortProperty = exports.Predicate = exports.MutationActionSetStateParameter = exports.FormBindingElement = exports.ComponentVariant = exports.ComponentPropertyBindingProperties = exports.ComponentProperty = exports.ComponentEvent = exports.ComponentDataConfiguration = exports.ComponentConditionProperty = exports.ComponentChild = exports.ComponentBindingPropertiesValueProperties = exports.ComponentBindingPropertiesValue = exports.ActionParameters = void 0;
const resource_1 = require("../resource");
class ActionParameters {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ActionParameters = ActionParameters;
class ComponentBindingPropertiesValue {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentBindingPropertiesValue = ComponentBindingPropertiesValue;
class ComponentBindingPropertiesValueProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentBindingPropertiesValueProperties = ComponentBindingPropertiesValueProperties;
class ComponentChild {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentChild = ComponentChild;
class ComponentConditionProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentConditionProperty = ComponentConditionProperty;
class ComponentDataConfiguration {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentDataConfiguration = ComponentDataConfiguration;
class ComponentEvent {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentEvent = ComponentEvent;
class ComponentProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentProperty = ComponentProperty;
class ComponentPropertyBindingProperties {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentPropertyBindingProperties = ComponentPropertyBindingProperties;
class ComponentVariant {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.ComponentVariant = ComponentVariant;
class FormBindingElement {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.FormBindingElement = FormBindingElement;
class MutationActionSetStateParameter {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.MutationActionSetStateParameter = MutationActionSetStateParameter;
class Predicate {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.Predicate = Predicate;
class SortProperty {
    constructor(properties) {
        Object.assign(this, properties);
    }
}
exports.SortProperty = SortProperty;
class Component extends resource_1.ResourceBase {
    constructor(properties) {
        super('AWS::AmplifyUIBuilder::Component', properties);
    }
}
exports.default = Component;
Component.ActionParameters = ActionParameters;
Component.ComponentBindingPropertiesValue = ComponentBindingPropertiesValue;
Component.ComponentBindingPropertiesValueProperties = ComponentBindingPropertiesValueProperties;
Component.ComponentChild = ComponentChild;
Component.ComponentConditionProperty = ComponentConditionProperty;
Component.ComponentDataConfiguration = ComponentDataConfiguration;
Component.ComponentEvent = ComponentEvent;
Component.ComponentProperty = ComponentProperty;
Component.ComponentPropertyBindingProperties = ComponentPropertyBindingProperties;
Component.ComponentVariant = ComponentVariant;
Component.FormBindingElement = FormBindingElement;
Component.MutationActionSetStateParameter = MutationActionSetStateParameter;
Component.Predicate = Predicate;
Component.SortProperty = SortProperty;
