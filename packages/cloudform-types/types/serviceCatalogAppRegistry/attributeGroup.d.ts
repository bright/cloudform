import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AttributeGroupProperties {
    Description?: Value<string>;
    Attributes: {
        [key: string]: any;
    };
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class AttributeGroup extends ResourceBase<AttributeGroupProperties> {
    constructor(properties: AttributeGroupProperties);
}
