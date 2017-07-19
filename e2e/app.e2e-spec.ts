import { DocsCliPage } from './app.po';

describe('docs-cli App', () => {
  let page: DocsCliPage;

  beforeEach(() => {
    page = new DocsCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
