import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface ElasticsearchProperties {
    Endpoint: Value<string>;
    Id: Value<string>;
    Index: Value<string>;
    RoleArn: Value<string>;
    Type: Value<string>;
}
export default class Elasticsearch extends ResourceBase {
    constructor(properties: ElasticsearchProperties, dependsOn?: Value<string>);
}
