import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface SecurityConfigurationProperties {
    Name?: Value<string>;
    SecurityConfiguration: {
        [key: string]: any;
    };
}
export default class SecurityConfiguration extends ResourceBase<SecurityConfigurationProperties> {
    constructor(properties: SecurityConfigurationProperties);
}
