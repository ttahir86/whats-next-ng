import { WhatsNextPage } from './app.po';

describe('whats-next App', function() {
  let page: WhatsNextPage;

  beforeEach(() => {
    page = new WhatsNextPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
