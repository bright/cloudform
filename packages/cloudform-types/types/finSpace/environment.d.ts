import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class FederationParameters {
    SamlMetadataURL?: Value<string>;
    FederationProviderName?: Value<string>;
    SamlMetadataDocument?: Value<string>;
    ApplicationCallBackURL?: Value<string>;
    FederationURN?: Value<string>;
    AttributeMap?: {
        [key: string]: any;
    };
    constructor(properties: FederationParameters);
}
export interface EnvironmentProperties {
    Name: Value<string>;
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    FederationMode?: Value<string>;
    FederationParameters?: FederationParameters;
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    static FederationParameters: typeof FederationParameters;
    constructor(properties: EnvironmentProperties);
}
