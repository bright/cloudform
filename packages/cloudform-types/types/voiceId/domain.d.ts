import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ServerSideEncryptionConfiguration {
    KmsKeyId: Value<string>;
    constructor(properties: ServerSideEncryptionConfiguration);
}
export interface DomainProperties {
    Description?: Value<string>;
    ServerSideEncryptionConfiguration: ServerSideEncryptionConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    static ServerSideEncryptionConfiguration: typeof ServerSideEncryptionConfiguration;
    constructor(properties: DomainProperties);
}
