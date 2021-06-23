import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApplicationProperties {
    Name: Value<string>;
    Description?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Application extends ResourceBase<ApplicationProperties> {
    constructor(properties: ApplicationProperties);
}
