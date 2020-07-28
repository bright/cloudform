import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface AggregationAuthorizationProperties {
    AuthorizedAccountId: Value<string>;
    AuthorizedAwsRegion: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class AggregationAuthorization extends ResourceBase<AggregationAuthorizationProperties> {
    constructor(properties: AggregationAuthorizationProperties);
}
