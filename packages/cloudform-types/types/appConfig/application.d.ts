import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Tags {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: Tags);
}
export interface ApplicationProperties {
    Description?: Value<string>;
    Tags?: List<Tags>;
    Name: Value<string>;
}
export default class Application extends ResourceBase<ApplicationProperties> {
    static Tags: typeof Tags;
    constructor(properties: ApplicationProperties);
}
