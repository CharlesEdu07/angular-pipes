import { LearningPipesPage } from './app.po';

describe('learning-pipes App', () => {
  let page: LearningPipesPage;

  beforeEach(() => {
    page = new LearningPipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
