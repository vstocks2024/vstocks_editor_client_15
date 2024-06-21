import { fabric } from "fabric";
import { Gradient, Pattern, Shadow } from "fabric/fabric-impl";

export type EditorElementBase<T extends string, Properties> = {
  id: string;
  fabricObject?: fabric.Object;
  name: string;
  readonly type: T;
  placement: Placement;
  timeFrame: TimeFrame;
  properties: Properties;
};
export type VideoEditorElement = EditorElementBase<
  "video",
  { crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined;   src: string; readonly elementId: string; imageObject?: fabric.Image, effect: Effect }>;
export type ImageEditorElement = EditorElementBase<
  "image",
  { crossOrigin?: '' | 'anonymous' | 'use-credentials' | undefined; src: string | "undefined"; readonly elementId: string; imageObject?: fabric.Object, effect: Effect }>;

export type AudioEditorElement = EditorElementBase<
  "audio",
  { src: string; readonly elementId: string }>;
export type TextEditorElement = EditorElementBase<
  "text",
  {
    text: string;
    fontSize?: number | undefined;
    fontFamily?: string | undefined;
    splittedTexts: fabric.Text[];
    textboxObject?:fabric.Textbox
  }>;

export type EditorElement =
  | VideoEditorElement
  | ImageEditorElement
  | AudioEditorElement
  | TextEditorElement;

export type Placement = {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
  scaleX: number;
  scaleY: number;
  flipX:boolean;
  flipY:boolean;
  textAlign?:string|undefined;
  opacity:number;
  underline?:boolean|undefined;
  overline?:boolean|undefined;
  linethrough?:boolean|undefined;
  lineHeight?:number|undefined;
  fill?: string | Pattern | Gradient | undefined;
  backgroundColor?: string | undefined;
  selectable?: boolean | undefined;
  visible?: boolean | undefined;
  hasControls?: boolean | undefined;
  hasBorders?: boolean | undefined;
  hasRotatingPoint?: boolean | undefined;
  lockMovementX?: boolean | undefined;

  /*Stroke Porperty for that component*/
  stroke?: string | undefined;
  strokeWidth?: number | undefined;
  strokeUniform?: boolean | undefined;
  strokeLineCap?: string | undefined;
  strokeLineJoin?: string | undefined;
  strokeMiterLimit?: number | undefined;
  shadow?: Shadow | string | undefined;
  borderScaleFactor?: number | undefined;

  

};

export type TimeFrame = {
  start: number;
  end: number;
};

export type EffectBase<T extends string> = {
  type: T;
}

export type BlackAndWhiteEffect = EffectBase<"none"> | 
EffectBase<"blackAndWhite"> | 
EffectBase<"sepia"> | 
EffectBase<"invert"> |
EffectBase<"saturate"> ;
export type Effect = BlackAndWhiteEffect;
export type EffecType = Effect["type"];

export type AnimationBase<T, P = {}> = {
  id: string;
  targetId: string;
  duration: number;
  type: T;
  properties: P;
}

export type FadeInAnimation = AnimationBase<"fadeIn">;
export type FadeOutAnimation = AnimationBase<"fadeOut">;

export type BreatheAnimation = AnimationBase<"breathe">

export type SlideDirection = "left" | "right" | "top" | "bottom";
export type SlideTextType = 'none'|'character';
export type SlideInAnimation = AnimationBase<"slideIn", {
  direction: SlideDirection,
  useClipPath: boolean,
  textType:'none'|'character'
}>;

export type SlideOutAnimation = AnimationBase<"slideOut", {
  direction: SlideDirection,
  useClipPath: boolean,
  textType:SlideTextType,
}>;

export type Animation =
  FadeInAnimation
  | FadeOutAnimation
  | SlideInAnimation
  | SlideOutAnimation
  | BreatheAnimation;

export type MenuOption =
  | "Video"
  | "Audio"
  | "Text"
  | "Images"
  | "Export"
  | "Animation"
  | "Effect"
  | "Fill"
  | "Assets"
  |"Stickers"
  |"Shapes"
  |null;

export const family_variants_arr={
'100':'Thin',
'100italic':'Thin Italic',
'200':'Extra Light',
'200italic':'Extra Light Italic',
'300':"Light", 
'300italic':"Light Italic",
'regular':"Regular",
'italic':"Italic",
'500':"Medium", 
'500italic':"Medium Italic",
'600':"Semi Bold",
'600italic':"Semi Bold Italic",
'700':"Bold",
'700italic':"Bold Italic",
"800":"Extra Bold",
'800italic':"Extra Bold Italic",
"900":"Black",
'900italic':"Black Italic"
};


