import * as debug from 'debug';
import * as EosLib from 'eosjs';
const { ecc } = EosLib.modules;

export const Eos = EosLib;
export const Ecc = ecc;
export const Debug = debug;
//
// console.log("Eos", Eos)
// console.log("Ecc", Ecc)
// console.log("Debug", Debug)
