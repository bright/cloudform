/* Generated from: 
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Sidewalk {
    Role?: Value<string>
    SidewalkManufacturingSn?: Value<string>
    DeviceCreationFile?: Value<string>
    DeviceCreationFileList?: List<Value<string>>

    constructor(properties: Sidewalk) {
        Object.assign(this, properties)
    }
}

export interface WirelessDeviceImportTaskProperties {
    DestinationName: Value<string>
    Sidewalk: Sidewalk
    Tags?: List<ResourceTag>
}

export default class WirelessDeviceImportTask extends ResourceBase<WirelessDeviceImportTaskProperties> {
    static Sidewalk = Sidewalk

    constructor(properties: WirelessDeviceImportTaskProperties) {
        super('AWS::IoTWireless::WirelessDeviceImportTask', properties)
    }
}
