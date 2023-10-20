javascript: var atag = "punch-viewer-content",
  btag = "-caption",
  ctag = "aria-setsize",
  dtag = "aria-posinset",
  msvg = document.getElementsByTagName("svg"),
  node = document.querySelectorAll('[class$="' + btag + '"]')[0],
  view = document.getElementsByClassName(atag)[0],
  size = node.getAttribute(ctag),
  data = "",
  my_element = "",
  func = () => {
    data += msvg[0].outerHTML;
    if ((i = node.getAttribute(dtag)) == size) {
      escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", {
        createHTML: (to_escape) => to_escape,
      });
      document.write(escapeHTMLPolicy.createHTML(data));
    } else view.click(), setTimeout(func, 10);
  };
func();