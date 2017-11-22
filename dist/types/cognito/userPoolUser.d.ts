import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface AttributeTypeProperties {
    Value?: Value<string>;
    Name?: Value<string>;
}
export declare class AttributeType extends ResourceBase {
    constructor(properties: AttributeTypeProperties, dependsOn?: Value<string>);
}
export interface UserPoolUserProperties {
    ValidationData?: AttributeType[];
    UserPoolId: Value<string>;
    Username?: Value<string>;
    MessageAction?: Value<string>;
    DesiredDeliveryMediums?: Value<string>[];
    ForceAliasCreation?: Value<boolean>;
    UserAttributes?: AttributeType[];
}
export default class UserPoolUser extends ResourceBase {
    constructor(properties: UserPoolUserProperties, dependsOn?: Value<string>);
}
