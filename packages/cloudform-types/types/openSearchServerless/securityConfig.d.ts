import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class SamlConfigOptions {
    SessionTimeout?: Value<number>;
    UserAttribute?: Value<string>;
    Metadata: Value<string>;
    GroupAttribute?: Value<string>;
    constructor(properties: SamlConfigOptions);
}
export interface SecurityConfigProperties {
    Type?: Value<string>;
    Description?: Value<string>;
    SamlOptions?: SamlConfigOptions;
    Name?: Value<string>;
}
export default class SecurityConfig extends ResourceBase<SecurityConfigProperties> {
    static SamlConfigOptions: typeof SamlConfigOptions;
    constructor(properties?: SecurityConfigProperties);
}
