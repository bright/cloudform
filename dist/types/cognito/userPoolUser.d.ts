import { ResourceBase } from '../resource';
import { Value } from '../internal';
import UserAttribute from './userAttribute';
import ValidationData from './validationData';
export declare type DesiredDeliveryMediums = "*" | "EMAIL" | "SMS";
export declare type MessageAction = "*" | "RESEND" | "SUPPRESS";
export interface UserPoolUserProperties {
    DesiredDeliveryMediums?: Value<DesiredDeliveryMediums>;
    ForceAliasCreation?: Value<boolean>;
    UserAttributes?: UserAttribute[];
    MessageAction?: Value<MessageAction>;
    Username?: Value<string>;
    UserPoolId: Value<string>;
    ValidationData?: ValidationData[];
}
export default class UserPoolUser extends ResourceBase {
    constructor(properties: UserPoolUserProperties, dependsOn?: Value<string>);
}
