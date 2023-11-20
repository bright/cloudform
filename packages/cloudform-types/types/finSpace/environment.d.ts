import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AttributeMapItems {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: AttributeMapItems);
}
export declare class FederationParameters {
    AttributeMap?: List<AttributeMapItems>;
    FederationProviderName?: Value<string>;
    SamlMetadataURL?: Value<string>;
    FederationURN?: Value<string>;
    SamlMetadataDocument?: Value<string>;
    ApplicationCallBackURL?: Value<string>;
    constructor(properties: FederationParameters);
}
export declare class SuperuserParameters {
    FirstName?: Value<string>;
    LastName?: Value<string>;
    EmailAddress?: Value<string>;
    constructor(properties: SuperuserParameters);
}
export interface EnvironmentProperties {
    Description?: Value<string>;
    KmsKeyId?: Value<string>;
    FederationParameters?: FederationParameters;
    FederationMode?: Value<string>;
    SuperuserParameters?: SuperuserParameters;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Environment extends ResourceBase<EnvironmentProperties> {
    static AttributeMapItems: typeof AttributeMapItems;
    static FederationParameters: typeof FederationParameters;
    static SuperuserParameters: typeof SuperuserParameters;
    constructor(properties: EnvironmentProperties);
}
