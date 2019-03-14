import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AggregationAuthorizationProperties {
    AuthorizedAccountId: Value<string>;
    AuthorizedAwsRegion: Value<string>;
}
export default class AggregationAuthorization extends ResourceBase<AggregationAuthorizationProperties> {
    constructor(properties: AggregationAuthorizationProperties);
}
