import * as Sentry from '@sentry/nextjs';
import { marked } from 'marked';
import sanitizeHtml, { IOptions } from 'sanitize-html';

// exclude style and script for protection XSS

const allowedTags = [
  'div',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'em',
  'strong',
  'del',
  'ol',
  'ul',
  'li',
  'a',
  'img',
  'br',
  'span',
  '#text',
  'code',
  'pre',
  'hr',
  'table',
  'thead',
  'tbody',
  'th',
  'tr',
  'td',
  'sub',
  'sup',
  // We want to support SVG elements, requiring the following tags (we exclude "foreignObject", "style" and "script")
  'svg',
  'altGlyph',
  'altGlyphDef',
  'altGlyphItem',
  'animate',
  'animateColor',
  'animateMotion',
  'animateTransform',
  'circle',
  'clipPath',
  'color-profile',
  'cursor',
  'defs',
  'desc',
  'ellipse',
  'feBlend',
  'feColorMatrix',
  'feComponentTransfer',
  'feComposite',
  'feConvolveMatrix',
  'feDiffuseLighting',
  'feDisplacementMap',
  'feDistantLight',
  'feFlood',
  'feFuncA',
  'feFuncB',
  'feFuncG',
  'feFuncR',
  'feGaussianBlur',
  'feImage',
  'feMerge',
  'feMergeNode',
  'feMorphology',
  'feOffset',
  'fePointLight',
  'feSpecularLighting',
  'feSpotLight',
  'feTile',
  'feTurbulence',
  'filter',
  'font',
  'font-face',
  'font-face-format',
  'font-face-name',
  'font-face-src',
  'font-face-uri',
  'g',
  'glyph',
  'glyphRef',
  'hkern',
  'image',
  'line',
  'linearGradient',
  'marker',
  'mask',
  'metadata',
  'missing-glyph',
  'mpath',
  'path',
  'pattern',
  'polygon',
  'polyline',
  'radialGradient',
  'rect',
  'set',
  'stop',
  'switch',
  'symbol',
  'text',
  'textPath',
  'title',
  'tref',
  'tspan',
  'use',
  'view',
  'vkern',
];

const allowedAttributes = [
  'href',
  'src',
  'width',
  'height',
  'alt',
  // We add the following Attributes for SVG via https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute
  // Certain values have been excluded here, e.g. "style"
  'accent-height',
  'accumulate',
  'additive',
  'alignment-baseline',
  'allowReorder',
  'alphabetic',
  'amplitude',
  'arabic-form',
  'ascent',
  'attributeName',
  'attributeType',
  'autoReverse',
  'azimuth',
  'baseFrequency',
  'baseline-shift',
  'baseProfile',
  'bbox',
  'begin',
  'bias',
  'by',
  'calcMode',
  'cap-height',
  'class',
  'clip',
  'clipPathUnits',
  'clip-path',
  'clip-rule',
  'color',
  'color-interpolation',
  'color-interpolation-filters',
  'color-profile',
  'color-rendering',
  'cursor',
  'cx',
  'cy',
  'd',
  'decelerate',
  'descent',
  'diffuseConstant',
  'direction',
  'display',
  'divisor',
  'dominant-baseline',
  'dur',
  'dx',
  'dy',
  'edgeMode',
  'elevation',
  'enable-background',
  'end',
  'exponent',
  'externalResourcesRequired',
  'fill',
  'fill-opacity',
  'fill-rule',
  'filter',
  'filterRes',
  'filterUnits',
  'flood-color',
  'flood-opacity',
  'font-family',
  'font-size',
  'font-size-adjust',
  'font-stretch',
  'font-style',
  'font-variant',
  'font-weight',
  'format',
  'from',
  'fr',
  'fx',
  'fy',
  'g1',
  'g2',
  'glyph-name',
  'glyph-orientation-horizontal',
  'glyph-orientation-vertical',
  'glyphRef',
  'gradientTransform',
  'gradientUnits',
  'hanging',
  'height',
  'href',
  'hreflang',
  'horiz-adv-x',
  'horiz-origin-x',
  'id',
  'ideographic',
  'image-rendering',
  'in',
  'in2',
  'intercept',
  'k',
  'k1',
  'k2',
  'k3',
  'k4',
  'kernelMatrix',
  'kernelUnitLength',
  'kerning',
  'keyPoints',
  'keySplines',
  'keyTimes',
  'lang',
  'lengthAdjust',
  'letter-spacing',
  'lighting-color',
  'limitingConeAngle',
  'local',
  'marker-end',
  'marker-mid',
  'marker-start',
  'markerHeight',
  'markerUnits',
  'markerWidth',
  'mask',
  'maskContentUnits',
  'maskUnits',
  'mathematical',
  'max',
  'media',
  'method',
  'min',
  'mode',
  'name',
  'numOctaves',
  'offset',
  'opacity',
  'operator',
  'order',
  'orient',
  'orientation',
  'origin',
  'overflow',
  'overline-position',
  'overline-thickness',
  'panose-1',
  'paint-order',
  'path',
  'pathLength',
  'patternContentUnits',
  'patternTransform',
  'patternUnits',
  'ping',
  'pointer-events',
  'points',
  'pointsAtX',
  'pointsAtY',
  'pointsAtZ',
  'preserveAlpha',
  'preserveAspectRatio',
  'primitiveUnits',
  'r',
  'radius',
  'referrerPolicy',
  'refX',
  'refY',
  'rel',
  'rendering-intent',
  'repeatCount',
  'repeatDur',
  'requiredExtensions',
  'requiredFeatures',
  'restart',
  'result',
  'rotate',
  'rx',
  'ry',
  'scale',
  'seed',
  'shape-rendering',
  'slope',
  'spacing',
  'specularConstant',
  'specularExponent',
  'speed',
  'spreadMethod',
  'startOffset',
  'stdDeviation',
  'stemh',
  'stemv',
  'stitchTiles',
  'stop-color',
  'stop-opacity',
  'strikethrough-position',
  'strikethrough-thickness',
  'string',
  'stroke',
  'stroke-dasharray',
  'stroke-dashoffset',
  'stroke-linecap',
  'stroke-linejoin',
  'stroke-miterlimit',
  'stroke-opacity',
  'stroke-width',
  'surfaceScale',
  'systemLanguage',
  'tabindex',
  'tableValues',
  'target',
  'targetX',
  'targetY',
  'text-anchor',
  'text-decoration',
  'text-rendering',
  'textLength',
  'to',
  'transform',
  'type',
  'u1',
  'u2',
  'underline-position',
  'underline-thickness',
  'unicode',
  'unicode-bidi',
  'unicode-range',
  'units-per-em',
  'v-alphabetic',
  'v-hanging',
  'v-ideographic',
  'v-mathematical',
  'values',
  'vector-effect',
  'version',
  'vert-adv-y',
  'vert-origin-x',
  'vert-origin-y',
  'viewBox',
  'viewTarget',
  'visibility',
  'width',
  'widths',
  'word-spacing',
  'writing-mode',
  'x',
  'x-height',
  'x1',
  'x2',
  'xChannelSelector',
  'y',
  'y1',
  'y2',
  'yChannelSelector',
  'z',
  'zoomAndPan',
];

const sanitizerConfig: IOptions = {
  allowedTags,
  allowedAttributes: { '*': allowedAttributes },
  nonTextTags: ['style', 'script', 'textarea', 'option'],
  transformTags: {
    a(tagName: string, attribs: sanitizeHtml.Attributes) {
      // eslint-disable-line
      try {
        const url = new URL(attribs.href); // URL is not supported on Internet Explorer
        if (url.hostname !== location.hostname) {
          // eslint-disable-line
          attribs.target = '_blank';
          attribs.rel = 'noreferrer nofollow';
        }
      } catch (err) {
        // some valid-looking (and commonly used) URLs will cause `new URL` to
        // throw a TypeError
        Sentry.captureException(err);
        attribs.target = '_blank';
        attribs.rel = 'noreferrer nofollow';
      }
      return { tagName, attribs };
    },
  },
};

const sanitize = (mdString: string) => sanitizeHtml(mdString, sanitizerConfig);
export const parseMarkdown = (mdString: string) => sanitize(marked(mdString));
export const parseInlineMarkdown = (mdString: string) => sanitize(marked.parseInline(mdString));
export const useSanitize = (rawDescription: string) => sanitizeHtml(rawDescription, sanitizerConfig);
