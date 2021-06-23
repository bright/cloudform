import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface DomainProperties {
    DomainName: Value<string>;
    DeadLetterQueueUrl?: Value<string>;
    DefaultEncryptionKey?: Value<string>;
    DefaultExpirationDays?: Value<number>;
    Tags?: List<ResourceTag>;
}
export default class Domain extends ResourceBase<DomainProperties> {
    constructor(properties: DomainProperties);
}
