import { MobileStorePage } from './app.po';

describe('mobile-store App', function() {
  let page: MobileStorePage;

  beforeEach(() => {
    page = new MobileStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
