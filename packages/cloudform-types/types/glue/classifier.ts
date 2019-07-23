/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-1 (https://d68hl49wbnanq.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 4.3.0
 */
   
import {ResourceBase} from '../resource'
import {Value, List} from '../dataTypes'

export class CsvClassifier {
    QuoteSymbol?: Value<string>
    ContainsHeader?: Value<string>
    Delimiter?: Value<string>
    Header?: List<Value<string>>
    AllowSingleColumn?: Value<boolean>
    DisableValueTrimming?: Value<boolean>
    Name?: Value<string>

    constructor(properties: CsvClassifier) {
        Object.assign(this, properties)
    }
}

export class XMLClassifier {
    RowTag!: Value<string>
    Classification!: Value<string>
    Name?: Value<string>

    constructor(properties: XMLClassifier) {
        Object.assign(this, properties)
    }
}

export class GrokClassifier {
    CustomPatterns?: Value<string>
    GrokPattern!: Value<string>
    Classification!: Value<string>
    Name?: Value<string>

    constructor(properties: GrokClassifier) {
        Object.assign(this, properties)
    }
}

export class JsonClassifier {
    JsonPath!: Value<string>
    Name?: Value<string>

    constructor(properties: JsonClassifier) {
        Object.assign(this, properties)
    }
}

export interface ClassifierProperties {
    XMLClassifier?: XMLClassifier
    JsonClassifier?: JsonClassifier
    CsvClassifier?: CsvClassifier
    GrokClassifier?: GrokClassifier
}

export default class Classifier extends ResourceBase<ClassifierProperties> {
    static CsvClassifier = CsvClassifier
    static XMLClassifier = XMLClassifier
    static GrokClassifier = GrokClassifier
    static JsonClassifier = JsonClassifier

    constructor(properties?: ClassifierProperties) {
        super('AWS::Glue::Classifier', properties || {})
    }
}
