/** 
 * @flow strict
 * @generated
 * @nolint
 */
/* eslint-disable */
// $FlowExpectedError: Reason checked type sufficiently
type $any = any;

// flowlint-next-line nonstrict-import:off
import {foo as fooNotChecked} from './name-with-dashes';

// In case of type error, check the type of 'foo' in 'Types.re' and './name-with-dashes'.
export const fooTypeChecked: (number) => number = fooNotChecked;

// Export 'foo' early to allow circular import from the '.bs.js' file.
export const foo: mixed = fooTypeChecked;

// $FlowExpectedError: Reason checked type sufficiently
const CreateBucklescriptBlock = require('bs-platform/lib/es6/block.js');

// $FlowExpectedError: Reason checked type sufficiently
const Curry = require('bs-platform/lib/es6/curry.js');

// $FlowExpectedError: Reason checked type sufficiently
const TypesBS = require('./Types.bs');

// flowlint-next-line nonstrict-import:off
import type {anInterestingFlowType} from './SomeFlowTypes';

// flowlint-next-line nonstrict-import:off
import type {annotatedVariant as AutoAnnotate_annotatedVariant} from './AutoAnnotate.gen';

// flowlint-next-line nonstrict-import:off
import type {t as Obj_t} from '../src/shims/Obj.shim';

// flowlint-next-line nonstrict-import:off
import type {variant as AutoAnnotate_variant} from './AutoAnnotate.gen';

// flowlint-next-line nonstrict-import:off
import type {weekday} from './SomeFlowTypes';

export type typeWithVars<x,y,z> = 
  | {| tag: "A", value: [x, y] |}
  | {| tag: "B", value: z |};

export type optionInt = ?number;

export type funType = (number) => number;

export type myFloat = number;

export type arrayOfStrings1 = Array<string>;

export type arrayOfStrings2 = Array<string>;

export type maybeString = ?string;

export type maybeString2 = ?string;

export type peopleArray = Array<{| +name: string, +nickname: ?string |}>;

export type myObj = Obj_t;

export type { anInterestingFlowType };

export type { weekday };

export type someMutableFields = {|
  mutable0: string, 
  +immutable: number, 
  mutable1: string, 
  mutable2: string
|};

export opaque type exportOpaqueFromVariants = mixed;

export type dateKey = string;
export type DateKey = dateKey;

export opaque type dateKeyOpaque = mixed;
export type DateKeyOpaque = dateKeyOpaque;

export opaque type opaqueVariant = mixed;

export type filter = {| +name: string, +values: Array<string> |};
export type Filter = filter;

export type twice<a> = [a, a];

export type gadt = "F";

export type objectWithCallback = {| +y?: {| +z?: (void) => number |}, +x?: (void) => number |};

export const consumeOption: (?number) => number = function _(Arg1: $any) {
  const result = TypesBS.consumeOption((Arg1 == null ? undefined : Arg1));
  return result
};

export const consumeOption2: (optionInt) => number = function _(Arg1: $any) {
  const result = TypesBS.consumeOption2((Arg1 == null ? undefined : Arg1));
  return result
};

export const testArray: (Array<?number>) => Array<?number> = function _(Arg1: $any) {
  const result = TypesBS.testArray(Arg1.map(function _element(ArrayItem: $any) { return (ArrayItem == null ? undefined : ArrayItem)}));
  return result
};

export const identity: (anInterestingFlowType) => anInterestingFlowType = TypesBS.identity;

export const isWeekend: (weekday) => boolean = TypesBS.isWeekend;

export const testFunctionOnOptionsAsArgument: <T1,a>(?a, ((?a) => T1)) => T1 = function _<T1,a>(Arg1: $any, Arg2: $any) {
  const result = Curry._2(TypesBS.testFunctionOnOptionsAsArgument, (Arg1 == null ? undefined : Arg1), Arg2);
  return result
};

export const testDateKey: (dateKey) => dateKey = TypesBS.testDateKey;

export const testAutoAnnotateVariants: (AutoAnnotate_variant) => AutoAnnotate_variant = TypesBS.testAutoAnnotateVariants;

export const testAutoAnnotateVariants2: (AutoAnnotate_annotatedVariant) => AutoAnnotate_annotatedVariant = function _(Arg1: $any) {
  const result = TypesBS.testAutoAnnotateVariants2(Arg1.tag==="R2"
    ? CreateBucklescriptBlock.__(0, Arg1.value)
    : CreateBucklescriptBlock.__(1, [Arg1.value]));
  return result.tag===0
    ? {tag:"R2", value:result.slice()}
    : {tag:"R4", value:result[0]}
};

export const convertObjectWithCallback: (objectWithCallback) => objectWithCallback = function _(Arg1: $any) {
  const result = TypesBS.convertObjectWithCallback({y:(Arg1.y == null ? undefined : {z:(Arg1.y.z == null ? undefined : function _(Arg11: $any) {
      const result1 = Arg1.y.z(Arg11);
      return result1
    })}), x:(Arg1.x == null ? undefined : function _(Arg12: $any) {
      const result2 = Arg1.x(Arg12);
      return result2
    })});
  return result
};
