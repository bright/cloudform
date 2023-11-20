import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface ComponentProperties {
    Description?: Value<string>;
    SupportedOsVersions?: List<Value<string>>;
    Platform: Value<string>;
    KmsKeyId?: Value<string>;
    Version: Value<string>;
    ChangeDescription?: Value<string>;
    Data?: Value<string>;
    Uri?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class Component extends ResourceBase<ComponentProperties> {
    constructor(properties: ComponentProperties);
}
