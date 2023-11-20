/* Generated from: 
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface InstanceProfileProperties {
    Description?: Value<string>
    PackageCleanup?: Value<boolean>
    ExcludeAppPackagesFromCleanup?: List<Value<string>>
    Tags?: List<ResourceTag>
    Name: Value<string>
    RebootAfterUse?: Value<boolean>
}

export default class InstanceProfile extends ResourceBase<InstanceProfileProperties> {


    constructor(properties: InstanceProfileProperties) {
        super('AWS::DeviceFarm::InstanceProfile', properties)
    }
}
