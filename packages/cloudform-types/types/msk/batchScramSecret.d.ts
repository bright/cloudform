import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface BatchScramSecretProperties {
    ClusterArn: Value<string>;
    SecretArnList?: List<Value<string>>;
}
export default class BatchScramSecret extends ResourceBase<BatchScramSecretProperties> {
    constructor(properties: BatchScramSecretProperties);
}
