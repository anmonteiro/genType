/* TypeScript file generated by genType. */

import {round as roundNotChecked} from './MyMath';

import {area as areaNotChecked} from './MyMath';

import {useColor as useColorNotChecked} from './MyMath';

// In case of type error, check the type of 'round' in 'WrapJsValue.re' and './MyMath'.
export const roundTypeChecked: (_1:number) => number = roundNotChecked;

// Export 'round' early to allow circular import from the '.bs.js' file.
export const round: unknown = roundTypeChecked as (_1:number) => number;

// In case of type error, check the type of 'area' in 'WrapJsValue.re' and './MyMath'.
export const areaTypeChecked: (_1:point) => number = areaNotChecked;

// Export 'area' early to allow circular import from the '.bs.js' file.
export const area: unknown = function _(Arg1: any) { const result = areaTypeChecked({x:Arg1[0], y:Arg1[1]}); return result } as (_1:point) => number;

// In case of type error, check the type of 'useColor' in 'WrapJsValue.re' and './MyMath'.
export const useColorTypeChecked: (_1:color) => number = useColorNotChecked;

// Export 'useColor' early to allow circular import from the '.bs.js' file.
export const useColor: unknown = function _(Arg1: any) { const result = useColorTypeChecked($$toJS479407683[Arg1]); return result } as (_1:color) => number;

// tslint:disable-next-line:no-var-requires
const WrapJsValueBS = require('./WrapJsValue.bs');

import {AbsoluteValue as AbsoluteValue_t} from './MyMath';

import {stringFunction} from './MyMath';

const $$toJS479407683 = {"322339018": "tomato", "-999567389": "gray"};

// tslint:disable-next-line:interface-over-type-literal
export type point = {readonly x: number, readonly y?: number};

// tslint:disable-next-line:interface-over-type-literal
export type AbsoluteValue_t = AbsoluteValue_t;

// tslint:disable-next-line:interface-over-type-literal
export type stringFunction = stringFunction;

// tslint:disable-next-line:interface-over-type-literal
export type color = "tomato" | "gray";

export const roundedNumber: number = WrapJsValueBS.roundedNumber;

export const areaValue: number = WrapJsValueBS.areaValue;

export const useGetProp: (_1:AbsoluteValue_t) => number = WrapJsValueBS.useGetProp;

export const useGetAbs: (_1:AbsoluteValue_t) => number = WrapJsValueBS.useGetAbs;
