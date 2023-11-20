import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class LatestRevision {
    Description?: Value<string>;
    Revision?: Value<number>;
    CreationTime?: Value<string>;
    constructor(properties: LatestRevision);
}
export interface ConfigurationProperties {
    Description?: Value<string>;
    LatestRevision?: LatestRevision;
    ServerProperties: Value<string>;
    KafkaVersionsList?: List<Value<string>>;
    Name: Value<string>;
}
export default class Configuration extends ResourceBase<ConfigurationProperties> {
    static LatestRevision: typeof LatestRevision;
    constructor(properties: ConfigurationProperties);
}
