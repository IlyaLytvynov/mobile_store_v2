import { ClientCliPage } from './app.po';

describe('client-cli App', function() {
  let page: ClientCliPage;

  beforeEach(() => {
    page = new ClientCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
