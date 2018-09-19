import { ChatTPPage } from './app.po';

describe('chat-tp App', function() {
  let page: ChatTPPage;

  beforeEach(() => {
    page = new ChatTPPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
