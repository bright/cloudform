import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ConnectionProperties {
    Name?: Value<string>;
    Description?: Value<string>;
    AuthorizationType: Value<string>;
    AuthParameters: {
        [key: string]: any;
    };
}
export default class Connection extends ResourceBase<ConnectionProperties> {
    constructor(properties: ConnectionProperties);
}
