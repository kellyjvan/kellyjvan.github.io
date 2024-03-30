class Header extends HTMLElement {
constructor() {
    super();
};
  
    connectedCallback() {
      this.innerHTML =   `
      <nav class="navbar navbar-expand-md navbar-light bg-light">
      <div class="container-fluid d-flex justify-content-between align-items-center">
        <a href="https://www.instagram.com/klamathsportsmans/">
          <img src="/images/instagram.PNG" alt="Check us out on Instagram" style="height: 20px; width: 20px; margin-right: 10px;">
        </a>
        <a href="index.html" class="navbar-brand">Klamath Sportsman's Park</a>
    
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarCollapse" class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a href="membership.html" class="nav-link">Membership</a>
            </li>
            <li class="nav-item">
              <a href="day_use.html" class="nav-link">Day Use</a>
            </li>
            <li class="nav-item dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" style="position: relative;">More</a>
              <div class="dropdown-menu dropdown-menu-right">
                <a href="./ranges.html" class="dropdown-item">Shooting Ranges</a>
                <a href="#" class="dropdown-item">R/C Aircraft</a>
                <a href="#" class="dropdown-item">Off-road Vehicles</a>
                <a href="#" class="dropdown-item">Camping</a>
                <a href="./contact.html" class="dropdown-item">Contact Us</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;
}
}
  
customElements.define('header-component', Header);