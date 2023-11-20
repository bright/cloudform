import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class HttpUrlDestinationSummary {
    ConfirmationUrl?: Value<string>;
    constructor(properties: HttpUrlDestinationSummary);
}
export declare class VpcDestinationProperties {
    SecurityGroups?: List<Value<string>>;
    VpcId?: Value<string>;
    SubnetIds?: List<Value<string>>;
    RoleArn?: Value<string>;
    constructor(properties: VpcDestinationProperties);
}
export interface TopicRuleDestinationProperties {
    Status?: Value<string>;
    HttpUrlProperties?: HttpUrlDestinationSummary;
    VpcProperties?: VpcDestinationProperties;
}
export default class TopicRuleDestination extends ResourceBase<TopicRuleDestinationProperties> {
    static HttpUrlDestinationSummary: typeof HttpUrlDestinationSummary;
    static VpcDestinationProperties: typeof VpcDestinationProperties;
    constructor(properties?: TopicRuleDestinationProperties);
}
