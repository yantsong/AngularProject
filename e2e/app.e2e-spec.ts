import { AnPage } from './app.po';

describe('an App', () => {
  let page: AnPage;

  beforeEach(() => {
    page = new AnPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
