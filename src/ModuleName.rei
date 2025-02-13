type t;

let compare: (t, t) => int;

let curry: t;

let forBsFile: t => t;

let forInnerModule: (~fileName: t, ~innerModuleName: string) => t;

/** Used to turn strings read from external files into module names. */

let fromStringUnsafe: string => t;

let propTypes: t;

let react: t;

let reasonPervasives: t;

let reasonReact: t;

let toString: t => string;

let uncapitalize: t => t;
