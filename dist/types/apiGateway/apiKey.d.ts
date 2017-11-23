import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface StageKeyProperties {
    RestApiId?: Value<string>;
    StageName?: Value<string>;
}
export declare class StageKey extends ResourceBase {
    constructor(properties: StageKeyProperties, dependsOn?: Value<string>);
}
export interface ApiKeyProperties {
    CustomerId?: Value<string>;
    Description?: Value<string>;
    Enabled?: Value<boolean>;
    GenerateDistinctId?: Value<boolean>;
    Name?: Value<string>;
    StageKeys?: StageKey[];
}
export default class ApiKey extends ResourceBase {
    constructor(properties: ApiKeyProperties, dependsOn?: Value<string>);
}
