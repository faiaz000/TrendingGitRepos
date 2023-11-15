describe('App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the toolbar with correct title', () => {
    cy.get('mat-toolbar')
      .should('be.visible');
    cy.get('mat-toolbar span')
      .should('contain', 'The Most starred repos in last 30 days');
  });

  it('should display the repo list component', () => {
    cy.get('app-repo-list')
      .should('be.visible');
  });

  it('should display at least one repository', () => {
    cy.get('app-repo-item')
    .should('have.length.greaterThan', 0);
  });

  it('should navigate to the next page when the paginator is clicked', () => {
    cy.get('.mat-mdc-paginator-navigation-next')
      .should('be.visible')
      .wait(2000)
      .click();
    cy.get('app-repo-item')
      .should('have.length.greaterThan', 0);
  });

  it('should display the correct properties', () => {
    cy.getByTags('repo-avatar')
      .should('be.visible');
    cy.getByTags('repo-title')
      .should('exist');
    cy.getByTags('repo-description')
      .should('exist');
    cy.getByTags('repo-stars')
      .should('exist');
    cy.getByTags('repo-issues')
      .should('exist');
    cy.getByTags('repo-submitted')
      .should('exist');
  });
  it('should open a modal when a repo item is clicked', () => {
    cy.getByTags('repo-title')
      .first()
      .click();
    cy.wait(2000);
    cy.getByTags('modal-window')
      .should('be.visible');
  });

  it('should update the stars after closing the modal', () => {

    let initialRating = 0;

    // Open and rate the modal
    cy.getByTags('repo-title').first().click();
    cy.wait(2000);
    cy.getByTags('modal-window')
      .should('be.visible');
    cy.getByTags('repo-item-rating').find('span > i').first().click({ force: true });
    cy.wait(1000);

    // close modal
    cy.getByTags('modal-close').click();
    // check updated rating
    cy.getByTags('repo-rating').first().invoke('text').then((text) => {
      const updatedRating = parseInt(text.replace(/[^0-9]/g, ''));
      expect(updatedRating).to.be.greaterThan(initialRating);
    });
  });
})
