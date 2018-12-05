/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 2.16.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface NotebookInstanceProperties {
    KmsKeyId?: Value<string>
    VolumeSizeInGB?: Value<number>
    DirectInternetAccess?: Value<string>
    SubnetId?: Value<string>
    NotebookInstanceName?: Value<string>
    InstanceType: Value<string>
    LifecycleConfigName?: Value<string>
    SecurityGroupIds?: List<Value<string>>
    RoleArn: Value<string>
    Tags?: ResourceTag[]
}

export default class NotebookInstance extends ResourceBase {


    constructor(properties?: NotebookInstanceProperties) {
        super('AWS::SageMaker::NotebookInstance', properties)
    }
}
