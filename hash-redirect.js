(function () {
  if (window.location.hash && window.location.hash.indexOf('#/') === 0) {
    window.history.replaceState(
      null,
      '',
      window.location.hash.slice(1) + window.location.search
    );
  }
})();
