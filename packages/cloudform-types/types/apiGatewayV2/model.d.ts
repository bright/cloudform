import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ModelProperties {
    Description?: Value<string>;
    ContentType?: Value<string>;
    Schema: {
        [key: string]: any;
    };
    ApiId: Value<string>;
    Name: Value<string>;
}
export default class Model extends ResourceBase<ModelProperties> {
    constructor(properties: ModelProperties);
}
