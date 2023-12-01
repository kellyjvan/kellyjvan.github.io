class Header extends HTMLElement {
constructor() {
    super();
};
  
    connectedCallback() {
      this.innerHTML =   `    
        <header class ="h">
          <div class="row">          
            <div class="dropdown d-block d-sm-none col">
              <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">more</button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>         
            </div>
            <div class="d-block d-sm-none col-9 h-text"><h5 class="h-text">KSP</h5></div>
          </div>
        </header>        

        <div class="d-none d-sm-block">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>   
    `;
}
}

//  curl -qL https://www.npmjs.com/install.sh | sh
//  sass --watch .\styles\style.scss ./styles/style.css
//  npm install bootstrap
//  npm install -g sass
  
customElements.define('header-component', Header);