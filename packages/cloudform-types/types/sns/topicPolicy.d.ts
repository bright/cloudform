import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface TopicPolicyProperties {
    Topics: List<Value<string>>;
    PolicyDocument: {
        [key: string]: any;
    };
}
export default class TopicPolicy extends ResourceBase<TopicPolicyProperties> {
    constructor(properties: TopicPolicyProperties);
}
