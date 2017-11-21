import { ResourceBase } from '../resource';
import { Value } from '../internal';
export declare type ExplicitAuthFlows = "*" | "ADMIN_NO_SRP_AUTH" | "CUSTOM_AUTH_FLOW_ONLY";
export interface UserPoolClientProperties {
    ClientName?: Value<string>;
    ExplicitAuthFlows?: Value<ExplicitAuthFlows>;
    GenerateSecret?: Value<boolean>;
    ReadAttributes?: Value<string>[];
    RefreshTokenValidity?: Value<string>;
    UserPoolId: Value<string>;
    WriteAttributes?: Value<string>[];
}
export default class UserPoolClient extends ResourceBase {
    constructor(properties: UserPoolClientProperties, dependsOn?: Value<string>);
}
