import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class StageKey {
    StageName?: Value<string>;
    RestApiId?: Value<string>;
    constructor(properties: StageKey);
}
export interface ApiKeyProperties {
    Description?: Value<string>;
    StageKeys?: List<StageKey>;
    Value?: Value<string>;
    Enabled?: Value<boolean>;
    CustomerId?: Value<string>;
    GenerateDistinctId?: Value<boolean>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
}
export default class ApiKey extends ResourceBase<ApiKeyProperties> {
    static StageKey: typeof StageKey;
    constructor(properties?: ApiKeyProperties);
}
