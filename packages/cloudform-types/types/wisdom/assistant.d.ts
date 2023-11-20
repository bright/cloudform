import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ServerSideEncryptionConfiguration {
    KmsKeyId?: Value<string>;
    constructor(properties: ServerSideEncryptionConfiguration);
}
export interface AssistantProperties {
    Type: Value<string>;
    Description?: Value<string>;
    ServerSideEncryptionConfiguration?: ServerSideEncryptionConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Assistant extends ResourceBase<AssistantProperties> {
    static ServerSideEncryptionConfiguration: typeof ServerSideEncryptionConfiguration;
    constructor(properties: AssistantProperties);
}
