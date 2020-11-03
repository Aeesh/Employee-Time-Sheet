class Header extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
      <nav class="navbar navbar-expand-lg navbar-light">
      <a href="../index.html" class="navbar-brand" id="logo">
        
          <!-- <svg width="1em" style="color: #335eea" height="2em" viewBox="0 0 16 16" class="bi bi-hourglass-split" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0c0 .701.478 1.236 1.011 1.492A3.5 3.5 0 0 1 11.5 13s-.866-1.299-3-1.48V8.35z"/>
          </svg> -->
          Pace</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#this_nav" aria-controls="this_nav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="this_nav">
        <div class="navbar-nav">
          <a href="#" class="nav-link active">Home</a>
          <a href="#pace-features" class="nav-link">Features</a>
          <a href="contents/pricing.html" class="nav-link">Pricing</a>
          <a href="contents/about.html" class="nav-link">About</a>
          <a href="contents/contact.html" class="nav-link">Contact</a>
        </div>
        <a href="contents/signup.html" class="navbar-btn btn btn-sm btn-primary ml-auto to-btn" id="get-started-btn">Get Started</a>
      </div>
    </nav>
    `;
  }
}

customElements.define('main-header', Header);
customElements.define('main-footer', Footer);