const openInNewWindow = (e, href) => {
   e.preventDefault();
   window.open(href);
}

export default openInNewWindow;