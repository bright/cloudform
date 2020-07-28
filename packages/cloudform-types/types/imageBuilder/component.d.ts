import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ComponentProperties {
    Name: Value<string>;
    Version: Value<string>;
    Description?: Value<string>;
    ChangeDescription?: Value<string>;
    Platform: Value<string>;
    Data?: Value<string>;
    KmsKeyId?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Uri?: Value<string>;
}
export default class Component extends ResourceBase<ComponentProperties> {
    constructor(properties: ComponentProperties);
}
