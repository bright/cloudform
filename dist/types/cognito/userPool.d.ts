import { ResourceBase } from '../resource';
import { Value } from '../internal';
import AdminCreateUserConfig from './adminCreateUserConfig';
import DeviceConfiguration from './deviceConfiguration';
import EmailConfiguration from './emailConfiguration';
import LambdaConfig from './lambdaConfig';
import Policies from './policies';
import Schema from './schema';
import SmsConfiguration from './smsConfiguration';
export declare type AliasAttributes = "*" | "phone_number" | "email" | "preferred_username";
export declare type AutoVerifiedAttributes = "*" | "phone_number" | "email";
export declare type MfaConfiguration = "*" | "OFF" | "ON" | "OPTIONAL";
export interface UserPoolProperties {
    AdminCreateUserConfig?: AdminCreateUserConfig;
    AliasAttributes?: Value<AliasAttributes>;
    AutoVerifiedAttributes?: Value<AutoVerifiedAttributes>;
    DeviceConfiguration?: DeviceConfiguration;
    EmailConfiguration?: EmailConfiguration;
    EmailVerificationMessage?: Value<string>;
    EmailVerificationSubject?: Value<string>;
    LambdaConfig?: LambdaConfig;
    MfaConfiguration?: Value<MfaConfiguration>;
    Policies?: Policies;
    UserPoolName?: Value<string>;
    Schema?: Schema[];
    SmsAuthenticationMessage?: Value<string>;
    SmsConfiguration?: SmsConfiguration;
    SmsVerificationMessage?: Value<string>;
    UserPoolTags?: any;
}
export default class UserPool extends ResourceBase {
    constructor(properties: UserPoolProperties, dependsOn?: Value<string>);
}
