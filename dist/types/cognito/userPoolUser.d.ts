import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface AttributeTypeProperties {
    Value?: Value<string>;
    Name?: Value<string>;
}
export declare class AttributeType extends ResourceBase {
    constructor(properties: AttributeTypeProperties, dependsOn?: Value<string> | Value<string>[]);
}
export interface UserPoolUserProperties {
    ValidationData?: List<AttributeType>;
    UserPoolId: Value<string>;
    Username?: Value<string>;
    MessageAction?: Value<string>;
    DesiredDeliveryMediums?: List<Value<string>>;
    ForceAliasCreation?: Value<boolean>;
    UserAttributes?: List<AttributeType>;
}
export default class UserPoolUser extends ResourceBase {
    constructor(properties: UserPoolUserProperties, dependsOn?: Value<string> | Value<string>[]);
}
