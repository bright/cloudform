import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class BorderStyle {
    Show?: Value<boolean>;
    constructor(properties: BorderStyle);
}
export declare class DataColorPalette {
    EmptyFillColor?: Value<string>;
    Colors?: List<Value<string>>;
    MinMaxGradient?: List<Value<string>>;
    constructor(properties: DataColorPalette);
}
export declare class Font {
    FontFamily?: Value<string>;
    constructor(properties: Font);
}
export declare class GutterStyle {
    Show?: Value<boolean>;
    constructor(properties: GutterStyle);
}
export declare class MarginStyle {
    Show?: Value<boolean>;
    constructor(properties: MarginStyle);
}
export declare class ResourcePermission {
    Actions: List<Value<string>>;
    Resource?: Value<string>;
    Principal: Value<string>;
    constructor(properties: ResourcePermission);
}
export declare class SheetStyle {
    TileLayout?: TileLayoutStyle;
    Tile?: TileStyle;
    constructor(properties: SheetStyle);
}
export declare class ThemeConfiguration {
    DataColorPalette?: DataColorPalette;
    UIColorPalette?: UIColorPalette;
    Sheet?: SheetStyle;
    Typography?: Typography;
    constructor(properties: ThemeConfiguration);
}
export declare class ThemeError {
    Type?: Value<string>;
    Message?: Value<string>;
    constructor(properties: ThemeError);
}
export declare class ThemeVersion {
    Status?: Value<string>;
    Errors?: List<ThemeError>;
    Description?: Value<string>;
    CreatedTime?: Value<string>;
    Configuration?: ThemeConfiguration;
    BaseThemeId?: Value<string>;
    Arn?: Value<string>;
    VersionNumber?: Value<number>;
    constructor(properties: ThemeVersion);
}
export declare class TileLayoutStyle {
    Gutter?: GutterStyle;
    Margin?: MarginStyle;
    constructor(properties: TileLayoutStyle);
}
export declare class TileStyle {
    Border?: BorderStyle;
    constructor(properties: TileStyle);
}
export declare class Typography {
    FontFamilies?: List<Font>;
    constructor(properties: Typography);
}
export declare class UIColorPalette {
    Warning?: Value<string>;
    Accent?: Value<string>;
    AccentForeground?: Value<string>;
    SecondaryBackground?: Value<string>;
    DangerForeground?: Value<string>;
    PrimaryBackground?: Value<string>;
    Dimension?: Value<string>;
    SecondaryForeground?: Value<string>;
    WarningForeground?: Value<string>;
    DimensionForeground?: Value<string>;
    PrimaryForeground?: Value<string>;
    Success?: Value<string>;
    Danger?: Value<string>;
    SuccessForeground?: Value<string>;
    Measure?: Value<string>;
    MeasureForeground?: Value<string>;
    constructor(properties: UIColorPalette);
}
export interface ThemeProperties {
    ThemeId: Value<string>;
    VersionDescription?: Value<string>;
    Configuration: ThemeConfiguration;
    BaseThemeId: Value<string>;
    AwsAccountId: Value<string>;
    Permissions?: List<ResourcePermission>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Theme extends ResourceBase<ThemeProperties> {
    static BorderStyle: typeof BorderStyle;
    static DataColorPalette: typeof DataColorPalette;
    static Font: typeof Font;
    static GutterStyle: typeof GutterStyle;
    static MarginStyle: typeof MarginStyle;
    static ResourcePermission: typeof ResourcePermission;
    static SheetStyle: typeof SheetStyle;
    static ThemeConfiguration: typeof ThemeConfiguration;
    static ThemeError: typeof ThemeError;
    static ThemeVersion: typeof ThemeVersion;
    static TileLayoutStyle: typeof TileLayoutStyle;
    static TileStyle: typeof TileStyle;
    static Typography: typeof Typography;
    static UIColorPalette: typeof UIColorPalette;
    constructor(properties: ThemeProperties);
}
