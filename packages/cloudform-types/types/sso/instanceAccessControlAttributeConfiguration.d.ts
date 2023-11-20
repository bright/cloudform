import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessControlAttribute {
    Value: AccessControlAttributeValue;
    Key: Value<string>;
    constructor(properties: AccessControlAttribute);
}
export declare class AccessControlAttributeValue {
    Source: List<Value<string>>;
    constructor(properties: AccessControlAttributeValue);
}
export interface InstanceAccessControlAttributeConfigurationProperties {
    InstanceArn: Value<string>;
    AccessControlAttributes?: List<AccessControlAttribute>;
}
export default class InstanceAccessControlAttributeConfiguration extends ResourceBase<InstanceAccessControlAttributeConfigurationProperties> {
    static AccessControlAttribute: typeof AccessControlAttribute;
    static AccessControlAttributeValue: typeof AccessControlAttributeValue;
    constructor(properties: InstanceAccessControlAttributeConfigurationProperties);
}
