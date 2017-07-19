
export abstract class DocsClass {
  view = {
    code: {
      basic: false,
      examples: false
    },
    debug: {
      basic: false,
      examples: false
    }
  };
  public debugCode(property: string): boolean {
    return this.view.debug[property] = (this.view.debug[property] === true) ? false : true;
  }
  public viewCode(property: string): boolean {
    return this.view.code[property] = (this.view.code[property] === true) ? false : true;
  }
}
