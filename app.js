const showPortfolio = () => {
  portfolio.style.display = 'block';
  conatact.style.display = 'block';
};

$('#portfolioBtn').on('click', () => {
  showPortfolio();
  $('html,body').animate(
    {
      scrollTop: $('#portfolio').offset().top
    },
    'slow'
  );
});

$('#mediaPortfolioBtn').on('click', () => {
  showPortfolio();
  $('html,body').animate(
    {
      scrollTop: $('#portfolio').offset().top
    },
    'slow'
  );
});

$('#mediaContactBtn').on('click', () => {
  showPortfolio();
  $('html,body').animate(
    {
      scrollTop: $('#conatact').offset().top
    },
    'slow'
  );
});
