import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcDestinationProperties {
    SubnetIds?: List<Value<string>>;
    SecurityGroups?: List<Value<string>>;
    VpcId?: Value<string>;
    RoleArn?: Value<string>;
    constructor(properties: VpcDestinationProperties);
}
export declare class HttpUrlDestinationSummary {
    ConfirmationUrl?: Value<string>;
    constructor(properties: HttpUrlDestinationSummary);
}
export interface TopicRuleDestinationProperties {
    Status?: Value<string>;
    HttpUrlProperties?: HttpUrlDestinationSummary;
    VpcProperties?: VpcDestinationProperties;
}
export default class TopicRuleDestination extends ResourceBase<TopicRuleDestinationProperties> {
    static VpcDestinationProperties: typeof VpcDestinationProperties;
    static HttpUrlDestinationSummary: typeof HttpUrlDestinationSummary;
    constructor(properties?: TopicRuleDestinationProperties);
}
