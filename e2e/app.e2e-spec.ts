import { ContaazulPage } from './app.po';

describe('contaazul App', () => {
  let page: ContaazulPage;

  beforeEach(() => {
    page = new ContaazulPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
