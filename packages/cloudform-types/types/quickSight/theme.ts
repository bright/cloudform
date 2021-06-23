/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 39.2.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class Font {
    FontFamily?: Value<string>

    constructor(properties: Font) {
        Object.assign(this, properties)
    }
}

export class BorderStyle {
    Show?: Value<boolean>

    constructor(properties: BorderStyle) {
        Object.assign(this, properties)
    }
}

export class TileStyle {
    Border?: BorderStyle

    constructor(properties: TileStyle) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Actions!: List<Value<string>>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
        Object.assign(this, properties)
    }
}

export class MarginStyle {
    Show?: Value<boolean>

    constructor(properties: MarginStyle) {
        Object.assign(this, properties)
    }
}

export class GutterStyle {
    Show?: Value<boolean>

    constructor(properties: GutterStyle) {
        Object.assign(this, properties)
    }
}

export class DataColorPalette {
    EmptyFillColor?: Value<string>
    Colors?: List<Value<string>>
    MinMaxGradient?: List<Value<string>>

    constructor(properties: DataColorPalette) {
        Object.assign(this, properties)
    }
}

export class ThemeConfiguration {
    DataColorPalette?: DataColorPalette
    UIColorPalette?: UIColorPalette
    Sheet?: SheetStyle
    Typography?: Typography

    constructor(properties: ThemeConfiguration) {
        Object.assign(this, properties)
    }
}

export class UIColorPalette {
    Warning?: Value<string>
    Accent?: Value<string>
    AccentForeground?: Value<string>
    SecondaryBackground?: Value<string>
    DangerForeground?: Value<string>
    PrimaryBackground?: Value<string>
    Dimension?: Value<string>
    SecondaryForeground?: Value<string>
    WarningForeground?: Value<string>
    DimensionForeground?: Value<string>
    PrimaryForeground?: Value<string>
    Success?: Value<string>
    Danger?: Value<string>
    SuccessForeground?: Value<string>
    Measure?: Value<string>
    MeasureForeground?: Value<string>

    constructor(properties: UIColorPalette) {
        Object.assign(this, properties)
    }
}

export class SheetStyle {
    TileLayout?: TileLayoutStyle
    Tile?: TileStyle

    constructor(properties: SheetStyle) {
        Object.assign(this, properties)
    }
}

export class TileLayoutStyle {
    Gutter?: GutterStyle
    Margin?: MarginStyle

    constructor(properties: TileLayoutStyle) {
        Object.assign(this, properties)
    }
}

export class Typography {
    FontFamilies?: List<Font>

    constructor(properties: Typography) {
        Object.assign(this, properties)
    }
}

export interface ThemeProperties {
    AwsAccountId: Value<string>
    BaseThemeId?: Value<string>
    Configuration?: ThemeConfiguration
    Name?: Value<string>
    Permissions?: List<ResourcePermission>
    Tags?: List<ResourceTag>
    ThemeId: Value<string>
    VersionDescription?: Value<string>
}

export default class Theme extends ResourceBase<ThemeProperties> {
    static Font = Font
    static BorderStyle = BorderStyle
    static TileStyle = TileStyle
    static ResourcePermission = ResourcePermission
    static MarginStyle = MarginStyle
    static GutterStyle = GutterStyle
    static DataColorPalette = DataColorPalette
    static ThemeConfiguration = ThemeConfiguration
    static UIColorPalette = UIColorPalette
    static SheetStyle = SheetStyle
    static TileLayoutStyle = TileLayoutStyle
    static Typography = Typography

    constructor(properties: ThemeProperties) {
        super('AWS::QuickSight::Theme', properties)
    }
}
