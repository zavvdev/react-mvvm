import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

export const signalService = {
  signal: atom,
  useSignal: useAtom,
  useSignalValue: useAtomValue,
  useSignalSetter: useSetAtom,
};

export type SignalService = typeof signalService;
