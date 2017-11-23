import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface TopicPolicyProperties {
    PolicyDocument: any;
    Topics: Value<string>[];
}
export default class TopicPolicy extends ResourceBase {
    constructor(properties: TopicPolicyProperties, dependsOn?: Value<string>);
}
