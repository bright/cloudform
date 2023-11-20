/* Generated from: 
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'



export interface ModelManifestProperties {
    Status?: Value<string>
    Description?: Value<string>
    SignalCatalogArn: Value<string>
    Nodes?: List<Value<string>>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class ModelManifest extends ResourceBase<ModelManifestProperties> {


    constructor(properties: ModelManifestProperties) {
        super('AWS::IoTFleetWise::ModelManifest', properties)
    }
}
