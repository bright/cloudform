/* Generated from: 
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 16.2.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class Filter {
    IpFilter!: IpFilter
    Name?: Value<string>

    constructor(properties: Filter) {
        Object.assign(this, properties)
    }
}

export class IpFilter {
    Policy!: Value<string>
    Cidr!: Value<string>

    constructor(properties: IpFilter) {
        Object.assign(this, properties)
    }
}

export interface ReceiptFilterProperties {
    Filter: Filter
}

export default class ReceiptFilter extends ResourceBase<ReceiptFilterProperties> {
    static Filter = Filter
    static IpFilter = IpFilter

    constructor(properties: ReceiptFilterProperties) {
        super('AWS::SES::ReceiptFilter', properties)
    }
}
