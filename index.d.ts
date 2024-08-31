/// <reference types="emscripten" />
export class CLibrary {
  add(x: number, y: number): number;
};
export interface CLibraryModule extends EmscriptenModule {
  CLibrary: {
    new(): CLibrary;
  };
};
declare const createCLibraryModule: EmscriptenModuleFactory<CLibraryModule>;
export default createCLibraryModule;