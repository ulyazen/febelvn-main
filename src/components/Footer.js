class Footer extends HTMLElement {
  constructor() {
    super()
    this.render()
  }

  render() {
    this.innerHTML = `
      <footer class="footer">
        <div class="footer-top">
          <div class="">
            <img src="src/assets/images/logo-white.svg" alt="logo"/>

            <div class="footer-list-wrapper">
            <ul class="footer-links">
              <li><i class="far fa-envelope"></i> <a href="mailto:hello@febelvn.in">hello@febelvn.in</a></li>
              <li><i class="fa fa-whatsapp"></i> +91 9004008421</li>
            </ul>
          </div>
            <ul class="footer_socmed">
              <li><a href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"><i class="fab fa-instagram"></i></a></li>
              <li><a href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"><i class="fa fa-facebook-square"></i></a></li>
            </ul>
          </div>

          <div class="footer-list-wrapper">
            <span class="footer-list__title">About Us</span>
            <ul class="footer-links">
              <li><a href="about.html">About Febevln</a></li>
              <li><a href="privacy.html">Privacy Policy</a></li>
              <li><a href="term.html">Term & Conditions</a></li>
            </ul>
          </div>

          <div class="footer-list-wrapper">
            <span class="footer-list__title">Address</span>
            <ul class="footer-links">
              <li><i class="fas fa-map-marker-alt"></i> House OF Venus Pvt. Ltd.
              Rd Number - 12,
              Banjara Hills, Hyderabad - 500034 </li>
            </ul>
          </div>

          <div class="footer-list-wrapper">
            <span class="footer-list__title">Sign up & Save</span>
            <ul class="footer-links footer-links-subscribe">
              <li>Subscribe to get special offers,
              free giveaway, and once-in-a lifetime deals.</li>
            </ul>

          <form action="mailto:hello@febelvn.in">
            <div class="input-group">
            <input class="input input-solid" placeholder="Enter your email"/>
              <i class="far fa-envelope input-icons"></i>

            </div>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <span>${new Date().getFullYear()}, All right powered by House Of Venus Pvt. Ltd.   </span>
        </div>
      </footer>
    `
  }
}

customElements.define('footer-main', Footer)
