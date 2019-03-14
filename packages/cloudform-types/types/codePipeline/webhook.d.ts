import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class WebhookFilterRule {
    JsonPath: Value<string>;
    MatchEquals?: Value<string>;
    constructor(properties: WebhookFilterRule);
}
export declare class WebhookAuthConfiguration {
    AllowedIPRange?: Value<string>;
    SecretToken?: Value<string>;
    constructor(properties: WebhookAuthConfiguration);
}
export interface WebhookProperties {
    AuthenticationConfiguration: WebhookAuthConfiguration;
    Filters: List<WebhookFilterRule>;
    Authentication: Value<string>;
    TargetPipeline: Value<string>;
    TargetAction: Value<string>;
    Name?: Value<string>;
    TargetPipelineVersion: Value<number>;
    RegisterWithThirdParty?: Value<boolean>;
}
export default class Webhook extends ResourceBase<WebhookProperties> {
    static WebhookFilterRule: typeof WebhookFilterRule;
    static WebhookAuthConfiguration: typeof WebhookAuthConfiguration;
    constructor(properties: WebhookProperties);
}
