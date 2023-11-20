import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApplicationProperties {
    Description?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    constructor(properties: ApplicationProperties);
}
