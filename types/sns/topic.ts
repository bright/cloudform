import {ResourceBase} from '../resource'
import {Value} from '../internal'
import Subscription from './subscription'



export interface TopicProperties {
    DisplayName?: Value<string>
    TopicName?: Value<string>
    Subscription: Subscription[]
}

export default class Topic extends ResourceBase {
    constructor(properties: TopicProperties, dependsOn?: Value<string>) {
        super('AWS::SNS::Topic', properties, dependsOn)
    }
}