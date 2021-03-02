export const activeLink = (optionalCurrentActiveLink, targetLink) => {
  console.log(optionalCurrentActiveLink);
  optionalCurrentActiveLink.classList.remove('active');
  targetLink.classList.add('active');
};

export const activeLinkOnLoad = (path, optionalCurrentActiveLink, links) => {
  links.forEach((link) => {
    if (
      link.classList.contains('nav-link') &&
      link.getAttribute('route') === path
    ) {
      optionalCurrentActiveLink.classList.remove('active');
      link.classList.add('active');
    }
  });
};
