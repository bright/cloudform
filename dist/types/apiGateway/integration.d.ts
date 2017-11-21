import { ResourceBase } from '../resource';
import { Value } from '../internal';
import IntegrationResponses from './integrationResponses';
export declare type PassthroughBehavior = "*" | "WHEN_NO_MATCH" | "NEVER" | "WHEN_NO_TEMPLATES";
export declare type Type = "*" | "AWS" | "MOCK" | "HTTP_PROXY" | "AWS_PROXY";
export interface IntegrationProperties {
    CacheKeyParameters?: Value<string>[];
    CacheNamespace?: Value<string>;
    Credentials?: Value<string>;
    IntegrationHttpMethod?: Value<string>;
    IntegrationResponses?: IntegrationResponses;
    PassthroughBehavior?: Value<PassthroughBehavior>;
    RequestParameters?: any;
    RequestTemplates?: any;
    Type: Value<Type>;
    Uri: Value<string>;
}
export default class Integration extends ResourceBase {
    constructor(properties: IntegrationProperties, dependsOn?: Value<string>);
}
