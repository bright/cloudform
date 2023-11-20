/* Generated from: 
 * ap-northeast-1 (https://d33vqc0rt9ld30.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-northeast-2 (https://d1ane3fvebulky.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-south-1 (https://d2senuesg1djtx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-1 (https://doigdx0kgq9el.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ap-southeast-2 (https://d2stg8d246z9di.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * ca-central-1 (https://d2s8ygphhesbe7.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-central-1 (https://d1mta8qj7i28i2.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-1 (https://d3teyb21fexa9r.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-2 (https://d1742qcu2c1ncx.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * eu-west-3 (https://d2d0mfegowb3wk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * sa-east-1 (https://d3c9jyj3w509b0.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-1 (https://d1uauaxba7bl26.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-east-2 (https://dnwj8swjjbsbt.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0,
 * us-west-2 (https://d201a2mn26r7lk.cloudfront.net/latest/gzip/CloudFormationResourceSpecification.json), version 148.0.0
 */
   
import {ResourceBase, ResourceTag} from '../resource'
import {Value, List} from '../dataTypes'

export class BorderStyle {
    Show?: Value<boolean>

    constructor(properties: BorderStyle) {
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

export class Font {
    FontFamily?: Value<string>

    constructor(properties: Font) {
        Object.assign(this, properties)
    }
}

export class GutterStyle {
    Show?: Value<boolean>

    constructor(properties: GutterStyle) {
        Object.assign(this, properties)
    }
}

export class MarginStyle {
    Show?: Value<boolean>

    constructor(properties: MarginStyle) {
        Object.assign(this, properties)
    }
}

export class ResourcePermission {
    Actions!: List<Value<string>>
    Resource?: Value<string>
    Principal!: Value<string>

    constructor(properties: ResourcePermission) {
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

export class ThemeConfiguration {
    DataColorPalette?: DataColorPalette
    UIColorPalette?: UIColorPalette
    Sheet?: SheetStyle
    Typography?: Typography

    constructor(properties: ThemeConfiguration) {
        Object.assign(this, properties)
    }
}

export class ThemeError {
    Type?: Value<string>
    Message?: Value<string>

    constructor(properties: ThemeError) {
        Object.assign(this, properties)
    }
}

export class ThemeVersion {
    Status?: Value<string>
    Errors?: List<ThemeError>
    Description?: Value<string>
    CreatedTime?: Value<string>
    Configuration?: ThemeConfiguration
    BaseThemeId?: Value<string>
    Arn?: Value<string>
    VersionNumber?: Value<number>

    constructor(properties: ThemeVersion) {
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

export class TileStyle {
    Border?: BorderStyle

    constructor(properties: TileStyle) {
        Object.assign(this, properties)
    }
}

export class Typography {
    FontFamilies?: List<Font>

    constructor(properties: Typography) {
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

export interface ThemeProperties {
    ThemeId: Value<string>
    VersionDescription?: Value<string>
    Configuration: ThemeConfiguration
    BaseThemeId: Value<string>
    AwsAccountId: Value<string>
    Permissions?: List<ResourcePermission>
    Tags?: List<ResourceTag>
    Name: Value<string>
}

export default class Theme extends ResourceBase<ThemeProperties> {
    static BorderStyle = BorderStyle
    static DataColorPalette = DataColorPalette
    static Font = Font
    static GutterStyle = GutterStyle
    static MarginStyle = MarginStyle
    static ResourcePermission = ResourcePermission
    static SheetStyle = SheetStyle
    static ThemeConfiguration = ThemeConfiguration
    static ThemeError = ThemeError
    static ThemeVersion = ThemeVersion
    static TileLayoutStyle = TileLayoutStyle
    static TileStyle = TileStyle
    static Typography = Typography
    static UIColorPalette = UIColorPalette

    constructor(properties: ThemeProperties) {
        super('AWS::QuickSight::Theme', properties)
    }
}
