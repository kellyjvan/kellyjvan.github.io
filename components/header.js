class Header extends HTMLElement {
constructor() {
    super();
};
  
    connectedCallback() {
      this.innerHTML =   `
      <nav class="navbar navbar-expand-sm navbar-light bg-light">
      <div class="container-fluid">
          <a href="index.html" class="navbar-brand">Klamath Sportsman's Park</a>
          <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div id="navbarCollapse" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                  <li class="nav-item">
                      <a href="membership.html" class="nav-link">Membership</a>
                  </li>
                  <li class="nav-item">
                      <a href="#" class="nav-link">Profile</a>
                  </li>
                  <li class="nav-item dropdown">
                      <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                      <div class="dropdown-menu">
                          <a href="#" class="dropdown-item">Inbox</a>
                          <a href="#" class="dropdown-item">Drafts</a>
                          <a href="#" class="dropdown-item">Sent Items</a>
                          <div class="dropdown-divider"></div>
                          <a href="#"class="dropdown-item">Trash</a>
                      </div>
                  </li>
              </ul>
              
          </div>
      </div>
  </nav>
  

    `;
}
}

//  curl -qL https://www.npmjs.com/install.sh | sh
//  sass --watch .\styles\style.scss ./styles/style.css
//  npm install bootstrap
//  npm install -g sass
  
customElements.define('header-component', Header);