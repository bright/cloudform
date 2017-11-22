import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface SecurityConfigurationProperties {
    Name?: Value<string>;
    SecurityConfiguration: any;
}
export default class SecurityConfiguration extends ResourceBase {
    constructor(properties: SecurityConfigurationProperties, dependsOn?: Value<string>);
}
