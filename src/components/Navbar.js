class Navbar extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  connectedCallback() {
    const logo = this.querySelector(".navbar-logo");
    logo.addEventListener("click", () => {
      window.location.href = "/";
    });
  }

  render() {
    this.innerHTML = `
      <nav class="navbar-main">
        <ul class="navbar-main__links">
          <li class="link"><a href="about.html">About Us</a></li>
          <li class="link"><a href="news.html">News & Event</a></li>
        </ul>

        <img class="navbar-logo" src="src/assets/images/logo.svg">

        <ul class="navbar-main__links">
          <li class="link"><a href="shop.html">Shop</a></li>
          <li class="link"><a href="partners.html">Partner with Us</a></li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("navbar-main", Navbar);
