import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AzureBlobSasConfiguration {
    AzureBlobSasToken: Value<string>;
    constructor(properties: AzureBlobSasConfiguration);
}
export interface LocationAzureBlobProperties {
    AzureAccessTier?: Value<string>;
    Subdirectory?: Value<string>;
    AzureBlobSasConfiguration?: AzureBlobSasConfiguration;
    AzureBlobType?: Value<string>;
    AzureBlobContainerUrl?: Value<string>;
    AgentArns: List<Value<string>>;
    Tags?: List<ResourceTag>;
    AzureBlobAuthenticationType: Value<string>;
}
export default class LocationAzureBlob extends ResourceBase<LocationAzureBlobProperties> {
    static AzureBlobSasConfiguration: typeof AzureBlobSasConfiguration;
    constructor(properties: LocationAzureBlobProperties);
}
