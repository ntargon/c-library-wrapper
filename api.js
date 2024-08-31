class CLibrary {
  constructor() {
  }
  add(x, y) {
    return _add(x, y);
  }
}

Module.CLibrary = CLibrary;