/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class NotebookInstanceLifecycleHook {
    Content?: Value<string>

    constructor(properties: NotebookInstanceLifecycleHook) {
        Object.assign(this, properties)
    }
}

export interface NotebookInstanceLifecycleConfigProperties {
    OnStart?: List<NotebookInstanceLifecycleHook>
    NotebookInstanceLifecycleConfigName?: Value<string>
    OnCreate?: List<NotebookInstanceLifecycleHook>
}

export default class NotebookInstanceLifecycleConfig extends ResourceBase<NotebookInstanceLifecycleConfigProperties> {
    static NotebookInstanceLifecycleHook = NotebookInstanceLifecycleHook

    constructor(properties?: NotebookInstanceLifecycleConfigProperties) {
        super('AWS::SageMaker::NotebookInstanceLifecycleConfig', properties || {})
    }
}
