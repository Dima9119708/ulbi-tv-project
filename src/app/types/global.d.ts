declare module '*.module.css';
declare module '*.svg' {
 import React from 'react';

 const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
 export default SVG;
}
declare module '*.png';
declare module '*.json';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';

declare const __IS_DEV__ : boolean;
declare const __API__ : string;
