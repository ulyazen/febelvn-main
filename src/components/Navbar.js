class Navbar extends HTMLElement {
  constructor() {
    super()
    this.render()
    this.mobileMenu()
    this.closeMenu()
  }

  connectedCallback() {
    const logo = this.querySelector('.navbar-logo')
    logo.addEventListener('click', () => {
      window.location.href = '/'
    })
  }
  mobileMenu() {
    const hamburger = this.querySelector('.hamburger')
    const navMenu = this.querySelector('.navbar-main__links')
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active')
      navMenu.classList.toggle('active')
    })
  }

  closeMenu() {
    const hamburger = this.querySelector('.hamburger')
    const navLink = this.querySelectorAll('.link')
    const navMenu = this.querySelector('.navbar-main__links')
    navLink.forEach((n) =>
      n.addEventListener('click', () => {
        hamburger.classList.remove('active')
        navMenu.classList.remove('active')
      })
    )
  }

  render() {
    this.innerHTML = `
      <nav class="navbar-main">
        <ul class="navbar-main__links">
          <li class="link"><a href="about.html">About Us</a></li>
          <li class="link"><a href="news.html">News & Event</a></li>
          <li class="link_mobile"><a href="shop.html">Shop</a></li>
          <li class="link_mobile"><a href="partners.html">Partner with Us</a></li>
        </ul>

        <img class="navbar-logo" src="src/assets/images/logo.svg">

        <ul class="navbar-main__links">
          <li class="link"><a href="shop.html">Shop</a></li>
          <li class="link"><a href="partners.html">Partner with Us</a></li>
        </ul>
        <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
    </div>
      </nav>
    `
  }
}

customElements.define('navbar-main', Navbar)
