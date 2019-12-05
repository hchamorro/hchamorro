const showPortfolio = () => {
  portfolio.style.display = "block";
  conatact.style.display = "block";
};

$("#portfolioBtn").on("click", () => {
  showPortfolio();
  $("html,body").animate(
    {
      scrollTop: $("#portfolio").offset().top
    },
    "slow"
  );
});

$("#contactBtn").on("click", () => {
  showPortfolio();
  $("html,body").animate(
    {
      scrollTop: $("#conatact").offset().top
    },
    "slow"
  );
});
