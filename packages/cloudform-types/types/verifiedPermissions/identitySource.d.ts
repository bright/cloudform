import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class CognitoUserPoolConfiguration {
    UserPoolArn: Value<string>;
    ClientIds?: List<Value<string>>;
    constructor(properties: CognitoUserPoolConfiguration);
}
export declare class IdentitySourceConfiguration {
    CognitoUserPoolConfiguration: CognitoUserPoolConfiguration;
    constructor(properties: IdentitySourceConfiguration);
}
export declare class IdentitySourceDetails {
    DiscoveryUrl?: Value<string>;
    UserPoolArn?: Value<string>;
    OpenIdIssuer?: Value<string>;
    ClientIds?: List<Value<string>>;
    constructor(properties: IdentitySourceDetails);
}
export interface IdentitySourceProperties {
    PrincipalEntityType?: Value<string>;
    Configuration: IdentitySourceConfiguration;
    PolicyStoreId?: Value<string>;
}
export default class IdentitySource extends ResourceBase<IdentitySourceProperties> {
    static CognitoUserPoolConfiguration: typeof CognitoUserPoolConfiguration;
    static IdentitySourceConfiguration: typeof IdentitySourceConfiguration;
    static IdentitySourceDetails: typeof IdentitySourceDetails;
    constructor(properties: IdentitySourceProperties);
}
