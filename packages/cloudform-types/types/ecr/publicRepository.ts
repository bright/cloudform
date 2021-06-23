/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface PublicRepositoryProperties {
    RepositoryName?: Value<string>
    RepositoryPolicyText?: {[key: string]: any}
    RepositoryCatalogData?: {[key: string]: any}
    Tags?: List<ResourceTag>
}

export default class PublicRepository extends ResourceBase<PublicRepositoryProperties> {


    constructor(properties?: PublicRepositoryProperties) {
        super('AWS::ECR::PublicRepository', properties || {})
    }
}
