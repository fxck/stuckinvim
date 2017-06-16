import { StuckinvimPage } from './app.po';

describe('stuckinvim App', () => {
  let page: StuckinvimPage;

  beforeEach(() => {
    page = new StuckinvimPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
