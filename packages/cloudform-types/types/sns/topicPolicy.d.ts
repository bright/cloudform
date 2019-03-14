import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface TopicPolicyProperties {
    PolicyDocument: {
        [key: string]: any;
    };
    Topics: List<Value<string>>;
}
export default class TopicPolicy extends ResourceBase<TopicPolicyProperties> {
    constructor(properties: TopicPolicyProperties);
}
