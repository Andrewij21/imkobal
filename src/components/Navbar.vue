<template>
  <div class="container-nav">
    <header class="nav">
      <div class="nav__holder nav--sticky">
        <div
          class="container-fluid nav__container nav__container--side-padding"
        >
          <div class="flex-parent">
            <div class="nav__header">
              <!-- Logo -->
              <a href="index.html" class="logo-container flex-child">
                <img
                  class="logo"
                  src="img/logods"
                  srcset="img/logods 1x, img/logods.png 2x"
                  alt="logo"
                />
              </a>

              <!-- Mobile toggle -->
              <button
                type="button"
                class="nav__icon-toggle"
                id="nav__icon-toggle"
                data-toggle="collapse"
                data-target="#navbar-collapse"
              >
                <span class="sr-only">Toggle navigation</span>
                <span class="nav__icon-toggle-bar"></span>
                <span class="nav__icon-toggle-bar"></span>
                <span class="nav__icon-toggle-bar"></span>
              </button>
            </div>

            <!-- Navbar -->
            <nav
              id="navbar-collapse"
              class="nav__wrap collapse navbar-collapse"
            >
              <ul class="nav__menu">
                <li class="nav__dropdown active">
                  <a href="index.html" aria-haspopup="true">Beranda</a>
                  <!-- <i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul class="nav__dropdown-menu">
										<li><a href="index.html">Home 1</a></li>
										<li><a href="index-2.html">Home 2</a></li>
										<li><a href="index-3.html">Home 3</a></li>
										<li><a href="index-4.html">Home 4</a></li>
									</ul> -->
                </li>
                <!-- <li class="nav__dropdown">
									<a href="#" aria-haspopup="true">About</a>
									<i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul class="nav__dropdown-menu">
										<li><a href="about.html">Tentang</a></li>
										<li><a href="services.html">Services</a></li>
										<li><a href="single-service.html">Single Service</a></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</li>
								<li class="nav__dropdown">
									<a href="#" aria-haspopup="true">Tahapan</a>
									<i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul class="nav__dropdown-menu">
										<li><a href="portfolio.html">Portfolio</a></li>
										<li><a href="portfolio-gallery.html">Portfolio Gallery</a></li>
										<li><a href="portfolio-single.html">Portfolio Single</a></li>
									</ul>
								</li>
								<li class="nav__dropdown">
									<a href="#" aria-haspopup="true">Galeri</a>
									<i class="ui-arrow-down nav__dropdown-trigger" role="button" aria-haspopup="true" aria-expanded="false"></i>
									<ul class="nav__dropdown-menu">
										<li><a href="icons.html">Icons</a></li>
										<li><a href="elements.html">Elements</a></li>
									</ul>
								</li> -->

                <li class="nav__dropdown">
                  <a href="portfolio-gallery.html" aria-haspopup="true"
                    >Voting</a
                  >
                  <i
                    class="ui-arrow-down nav__dropdown-trigger"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>
                  <ul class="nav__dropdown-menu">
                    <li><a href="portfolio-gallery.html">2023</a></li>
                    <li><a href="portfolio-gallery.html">2022</a></li>
                    <li><a href="portfolio-gallery.html">2021</a></li>
                  </ul>
                </li>
                <li class="nav__dropdown">
                  <a href="blog.html" aria-haspopup="true">Blog</a>
                  <i
                    class="ui-arrow-down nav__dropdown-trigger"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>
                  <ul class="nav__dropdown-menu">
                    <li><a href="blog-masonry.html">Blog Masonry</a></li>
                    <li><a href="blog.html">Blog Standard</a></li>
                    <li><a href="single-post.html">Single Post</a></li>
                  </ul>
                </li>
                <li class="nav__dropdown">
                  <a href="blog.html" aria-haspopup="true">Manjau</a>
                  <i
                    class="ui-arrow-down nav__dropdown-trigger"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  ></i>
                  <ul class="nav__dropdown-menu">
                    <li><a href="blog-masonry.html">Blog Masonry</a></li>
                    <li><a href="blog.html">Blog Standard</a></li>
                    <li><a href="single-post.html">Single Post</a></li>
                  </ul>
                </li>
              </ul>
              <!-- end menu -->
              <div class="nav__phone nav__phone--mobile d-lg-none">
                <span class="nav__phone-text">Call us:</span>
                <a href="tel:1-800-995-3959" class="nav__phone-number"
                  >(+62) 878-9372-4186</a
                >
              </div>

              <div class="nav__socials nav__socials--mobile d-lg-none">
                <div class="socials">
                  <a
                    href="#"
                    class="social social-twitter"
                    aria-label="twitter"
                    title="twitter"
                    target="_blank"
                    ><i class="ui-twitter"></i
                  ></a>
                  <a
                    href="#"
                    class="social social-facebook"
                    aria-label="facebook"
                    title="facebook"
                    target="_blank"
                    ><i class="ui-facebook"></i
                  ></a>
                  <a
                    href="#"
                    class="social social-youtube"
                    aria-label="youtube"
                    title="google plus"
                    target="_blank"
                    ><i class="ui-youtube"></i
                  ></a>
                  <a
                    href="#"
                    class="social social-instagram"
                    aria-label="instagram"
                    title="instagram"
                    target="_blank"
                    ><i class="ui-instagram"></i
                  ></a>
                </div>
              </div>
            </nav>
            <!-- end nav-wrap -->

            <div class="nav__phone nav--align-right d-none d-lg-block">
              <span class="nav__phone-text">Call us:</span>
              <a href="tel:1-800-995-3959" class="nav__phone-number"
                >(+62) 878-9372-4186</a
              >
            </div>

            <div class="nav__socials d-none d-lg-block">
              <div class="socials">
                <a
                  href="https://twitter.com/IMKOBAL"
                  class="social social-twitter"
                  aria-label="twitter"
                  title="twitter"
                  target="_blank"
                  ><i class="ui-twitter"></i
                ></a>
                <a
                  href="https://www.facebook.com/profile.php?id=100069273786878&mibextid=ZbWKwL."
                  class="social social-facebook"
                  aria-label="facebook"
                  title="facebook"
                  target="_blank"
                  ><i class="ui-facebook"></i
                ></a>
                <a
                  href="https://youtube.com/@imkobalbaru5791"
                  class="social social-youtube"
                  aria-label="youtube"
                  title="google plus"
                  target="_blank"
                  ><i class="ui-youtube"></i
                ></a>
                <a
                  href="https://instagram.com/imkobal?igshid=YmMyMTA2M2Y="
                  class="social social-instagram"
                  aria-label="instagram"
                  title="instagram"
                  target="_blank"
                  ><i class="ui-instagram"></i
                ></a>
              </div>
            </div>
          </div>
          <!-- end flex-parent -->
        </div>
        <!-- end container -->
      </div>
    </header>
  </div>
</template>