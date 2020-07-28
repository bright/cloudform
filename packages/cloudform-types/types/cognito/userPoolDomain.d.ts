import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class CustomDomainConfigType {
    CertificateArn?: Value<string>;
    constructor(properties: CustomDomainConfigType);
}
export interface UserPoolDomainProperties {
    UserPoolId: Value<string>;
    CustomDomainConfig?: CustomDomainConfigType;
    Domain: Value<string>;
}
export default class UserPoolDomain extends ResourceBase<UserPoolDomainProperties> {
    static CustomDomainConfigType: typeof CustomDomainConfigType;
    constructor(properties: UserPoolDomainProperties);
}
