/*! Utah Sandbox Feedback Badge - embed */
(function(){
  if (document.getElementById("utah-sandbox-badge")) return;

  // Load font once
  var fontId="poppins-embed-font";
  if(!document.getElementById(fontId)){
    var lf=document.createElement("link");
    lf.id=fontId; lf.rel="stylesheet";
    lf.href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;700&display=swap";
    document.head.appendChild(lf);
  }

  // Styles
  var cssId="utah-sandbox-badge-css";
  if(!document.getElementById(cssId)){
    var s=document.createElement("style");
    s.id=cssId;
    s.textContent = `
    .usb-wrap{position:relative;display:inline-block;max-width:100%}
    .usb-btn{position:absolute;bottom:28%;right:12%;background-color:#dca72a;color:#000;
      font-family:'Poppins',sans-serif;font-weight:700;text-decoration:none;
      padding:14px 32px;border-radius:30px;border:2px solid #fff;font-size:1.1rem;
      transition:transform .2s ease-in-out;white-space:nowrap}
    .usb-btn:hover{animation:usb-pulse .6s ease}
    @keyframes usb-pulse{0%{transform:scale(1)}50%{transform:scale(1.1)}100%{transform:scale(1)}}
    @media(max-width:900px){.usb-btn{bottom:30%;right:10%;font-size:clamp(.95rem,2.5vw,1.05rem);
      padding:clamp(10px,1.8vw,12px) clamp(20px,3.2vw,28px)}}
    @media(max-width:600px){.usb-btn{right:auto;left:50%;transform:translateX(-50%);
      bottom:34%;font-size:clamp(.9rem,4vw,1rem);
      padding:clamp(9px,3.5vw,12px) clamp(18px,6vw,26px)}}
    `;
    document.head.appendChild(s);
  }

  // Container
  var c=document.createElement("div");
  c.id="utah-sandbox-badge";
  c.style.textAlign="center";
  c.style.padding="20px";
  c.style.backgroundColor="#f9f9f9";
  c.innerHTML = `
    <div class="usb-wrap">
      <img src="https://i.gyazo.com/82b3360e93112b334b9eeed0e0f5a298.png" alt="Utah Sandbox Badge"
           style="max-width:100%;height:auto;display:block;">
      <a class="usb-btn" href="https://utahinnovationoffice.org/sandbox-feedback/"
         target="_blank" rel="noopener noreferrer">Submit Feedback</a>
    </div>`;
  // Add to end of <body> (footer area)
  (document.body||document.documentElement).appendChild(c);
})();
