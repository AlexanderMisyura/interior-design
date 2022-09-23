module.exports = {
  activePageClass: function (aHref, routePath) {
    if (aHref === routePath || `${aHref}/` === routePath)
      return "class=active-page";
  },
};
