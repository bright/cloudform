import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IdentityPoolPrincipalTagProperties {
    PrincipalTags?: {
        [key: string]: any;
    };
    UseDefaults?: Value<boolean>;
    IdentityProviderName: Value<string>;
    IdentityPoolId: Value<string>;
}
export default class IdentityPoolPrincipalTag extends ResourceBase<IdentityPoolPrincipalTagProperties> {
    constructor(properties: IdentityPoolPrincipalTagProperties);
}
