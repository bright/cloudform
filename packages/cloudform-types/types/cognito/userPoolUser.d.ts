import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeType {
    Value?: Value<string>;
    Name?: Value<string>;
    constructor(properties: AttributeType);
}
export interface UserPoolUserProperties {
    ValidationData?: List<AttributeType>;
    UserPoolId: Value<string>;
    Username?: Value<string>;
    MessageAction?: Value<string>;
    ClientMetadata?: {
        [key: string]: Value<string>;
    };
    DesiredDeliveryMediums?: List<Value<string>>;
    ForceAliasCreation?: Value<boolean>;
    UserAttributes?: List<AttributeType>;
}
export default class UserPoolUser extends ResourceBase<UserPoolUserProperties> {
    static AttributeType: typeof AttributeType;
    constructor(properties: UserPoolUserProperties);
}
