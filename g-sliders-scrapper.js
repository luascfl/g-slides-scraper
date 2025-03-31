var atag = "punch-viewer-content", 
    btag = "-caption", 
    ctag = "aria-setsize", 
    dtag = "aria-posinset", 
    msvg = document.getElementsByTagName("svg"), 
    node = document.querySelectorAll('[class$="' + btag + '"]')[0], 
    view = document.getElementsByClassName(atag)[0], 
    size = node.getAttribute(ctag), 
    data = "", 
    func = () => { 
        // Append the current slide's SVG content
        data += msvg[0].outerHTML; 
        if ((i = node.getAttribute(dtag)) == size) { 
            // Create a TrustedHTML policy for secure content injection
            escapeHTMLPolicy = trustedTypes.createPolicy("forceInner", { 
                createHTML: (to_escape) => to_escape, 
            });
            document.write(escapeHTMLPolicy.createHTML(data));
            let style = document.createElement("style");
            style.textContent = `
                @media print {
                    body {
                        margin: 0;
                        padding: 0;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                    }
                    svg {
                        display: block;
                        page-break-after: always;
                        width: 100%;
                        height: auto;
                        margin: auto;
                    }
                    div {
                        page-break-after: always;
                    }
                }
            `;
            document.head.appendChild(style);
            setTimeout(() => window.print(), 1000);
        } else {
        
            view.click(); 
            setTimeout(func, 10); 
        }
    };
func();
