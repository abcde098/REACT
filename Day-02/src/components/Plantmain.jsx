import React from "react";
import './plantmain.css';
import MaterialUISidebar from './Sidebar';




const Plantmain = () => {
    return (
        <div>
            <MaterialUISidebar/>
            <header class="header" id="header">
                <nav class="nav container">
                    <a href="#" class="nav__logo">
                        <i class="ri-leaf-line nav__logo-icon"></i> FARM STAYS
                    </a>

                    <div class="nav__menu" id="nav-menu">
                        <ul class="nav__list">
                            <li class="nav__item">
                                <a href="#home" class="nav__link active-link">Home</a>
                            </li>
                            <li class="nav__item">
                                <a href="#about" class="nav__link">About</a>
                            </li>
                            {/* <li class="nav__item">
                                <a href="#products" class="nav__link">Products</a>
                            </li>
                            <li class="nav__item">
                                <a href="#faqs" class="nav__link">FAQs</a>
                            </li> */}
                            <li class="nav__item">
                                <a href="#contact" class="nav__link">Contact Us</a>
                            </li>
                        </ul>

                        <div class="nav__close" id="nav-close">
                            <i class="ri-close-line"></i>
                        </div>
                    </div>

                    <div class="nav__btns">

                        <i class="ri-moon-line change-theme" id="theme-button"></i>

                        <div class="nav__toggle" id="nav-toggle">
                            <i class="ri-menu-line"></i>
                        </div>
                    </div>
                </nav>
            </header>

            <main class="main" >

            <section class="home" id="home">
                <div class="home__container container grid">

                    <div class="home__data">
                        <h1 class="home__title">
                        Escape to the country! Farm stays for getting back to nature.
                        </h1>
                        <p class="home__description">
                        The Farm stay Company Welcomes You! 
                        </p>
                        <a href="#about" class="button button--flex">
                            Explore <i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>

                    <div class="home__social">
                        <span class="home__social-follow">Follow Us</span>

                        <div class="home__social-links">
                            <a href="https://www.facebook.com/" target="_blank" class="home__social-link">
                                <i class="ri-facebook-fill"></i>
                            </a>
                            <a href="https://www.instagram.com/" target="_blank" class="home__social-link">
                                <i class="ri-instagram-line"></i>
                            </a>
                            <a href="https://twitter.com/" target="_blank" class="home__social-link">
                                <i class="ri-twitter-fill"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about section container" id="about">
                <div class="about__container grid">
                <img src={require('./about.png').default} alt="" className="about__img" />

                    <div class="about__data">
                        <h2 class="section__title about__title">
                        Boasting air-conditioned accommodation with a rooftop pool, mountain view and a terrace, Seven Elements Resort is set in Ras al Khaimah.
                        </h2>

                        <p class="about__description">
                        Boasting a garden and views of garden, Midori Coffee Farm is a sustainable farm stay set in Da Lat, 19 km from Lam Vien Square. Featuring a shared kitchen, this property also provides guests with an outdoor fireplace. There is a sun terrace and guests can make use of free WiFi and free private parking.  
                        </p>

                        <div class="about__details">
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i>Our favourite cities for farm houses
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i>Our most searched: Top countries for farm houses
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i> We always come over for a check-up after sale.
                            </p>
                            <p class="about__details-description">
                                <i class="ri-checkbox-fill about__details-icon"></i>  Save time, save money!
                            </p>
                        </div>

                        <a href="#" class="button--link button--flex">
                            Explore<i class="ri-arrow-right-down-line button__icon"></i>
                        </a>
                    </div>
                </div>
            </section>

            <section class="steps section container">
                <div class="steps__bg">
                    <h2 class="section__title-center steps__title">
                    Sign up and we'll send the best deals to you 
                    </h2>

                    <div class="steps__container grid">
                        <div class="steps__card">
                            <div class="steps__card-number">01</div>
                            <h3 class="steps__card-title">Select Destination</h3>
                            <p class="steps__card-description">
                            Select Destination India is Leading Inbound Travel Company in India 
                            </p>
                        </div>

                        <div class="steps__card">
                            <div class="steps__card-number">02</div>
                            <h3 class="steps__card-title">Explore Maps</h3>
                            <p class="steps__card-description">
                            Snazzy Maps is a repository of different styles for Google Maps aimed towards web designers and developers.
                            </p>
                        </div>

                        <div class="steps__card">
                            <div class="steps__card-number">03</div>
                            <h3 class="steps__card-title">Nearby destinations</h3>
                            <p class="steps__card-description">
                            This immersive destination combines natural beauty and cutting-edge technology. UTAMO is set to revolutionize the events that push the limits of possibilty
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section class="product section container" id="products">
                <h2 class="section__title-center">
                The farmhouses are located inside a food forest
                </h2>

                <p class="product__description">
                Farm resorts are popular rural tourism destination characterized with exceptional accommodations and meal services.
                </p>
                <center>
                <a href="#" class="button button--flex">
                            
                Book Now <i class="ri-arrow-right-down-line button__icon"></i>
                           
                        </a>
                </center>
                </section>

            <section class="questions section" id="faqs">
                <h2 class="section__title-center questions__title container">
                    <center>Some common questions were often asked</center>
                </h2>

                <div class="questions__container container grid">
                    <div class="questions__group">
                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                What is the check-in and check-out time?
                                </h3>
                            </header>
                            </div>

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div> */}
                        </div>

                        {/* <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                How do I modify or cancel a reservation?
                                </h3>
                            </header> */}

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div> */}
                        {/* </div> */}

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                Is there a dress code for the restaurant?
                                </h3>
                            </header>

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div> */}
                        </div>
                    </div>

                    <div class="questions__group">
                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                What is the fuel policy for the rental car?
                                </h3>
                            </header>

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div> */}
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                What is the duration of the event or activity?
                                </h3>
                            </header>

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div> */}
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                Can I reschedule an appointment online?
                                </h3>
                            </header>

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div> */}
                        </div>
                    </div>
                    <div class="questions__group">
                        <div class="questions__item">
                            {/* <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                Can I reschedule an appointment online?
                                </h3>
                            </header> */}

                            {/* <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>
                        
                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    How do I change the pots?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div>

                        <div class="questions__item">
                            <header class="questions__header">
                                <i class="ri-add-line questions__icon"></i>
                                <h3 class="questions__item-title">
                                    Why are gnats flying around my plant?
                                </h3>
                            </header>

                            <div class="questions__content">
                                <p class="questions__description">
                                    Plants are easy way to add color energy and transform your space but which planet is for you. Choosing the right plant.
                                </p>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
                <section class="contact section container" id="contact">
                    <div class="contact__container grid">
                        <div class="contact__box">
                            <h2 class="section__title">
                            Our Farmstay Resort Offers An Excellent Birthday Parties Venue In Coimbatore.
                            </h2>

                            <div class="contact__data">
                                <div class="contact__information">
                                    <h3 class="contact__subtitle">Call us for support</h3>
                                    <span class="contact__description">
                                        <i class="ri-phone-line contact__icon"></i>
                                        +91 9345793293
                                    </span>
                                </div>

                                <div class="contact__information">
                                    <h3 class="contact__subtitle">Write us by mail</h3>
                                    <span class="contact__description">
                                        <i class="ri-mail-line contact__icon"></i>
                                        stay@gmail.com
                                    </span>
                                </div>
                            </div>
                        </div>

                        <form action="" class="contact__form">
                            <div class="contact__inputs">
                                <div class="contact__content">
                                    <input type="email" placeholder=" " class="contact__input" />
                                    <label for="" class="contact__label">From</label>
                                </div>

                                <div class="contact__content">
                                    <input type="text" placeholder=" " class="contact__input" />
                                    <label for="" class="contact__label">To</label>
                                </div>

                                <div class="contact__content contact__area">
                                    <textarea name="message" placeholder=" " class="contact__input"></textarea>
                                    <label for="" class="contact__label">Message</label>
                                </div>
                            </div>

                            <button class="button button--flex">
                                Send Message
                                <i class="ri-arrow-right-up-line button__icon"></i>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">
                            <i className="ri-leaf-line footer__logo-icon"></i> 
                             <center>FARM STAYS</center>
                        </a>

                        <h3 className="footer__title">
                        <center>Share Something</center>
                        </h3>

                        <div className="footer__subscribe">
                            <input type="email" placeholder="Enter your email" className="footer__input" />
                            <button className="button button--flex footer__button">
                               Share
                                <i className="ri-arrow-right-up-line button__icon"></i>
                            </button>
                        </div>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Our Address</h3>
                        <ul className="footer__data">
                            <li className="footer__information">SKCT</li>
                            <li className="footer__information">Coimbatore</li>
                            <li className="footer__information">9345411293</li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Contact Us</h3>
                        <ul className="footer__data">
                            <li className="footer__information">+91 6379390492</li>
                            <li className="footer__information">Mail: stay@gmail.com</li>
                            <li className="footer__information">Bookings.com</li>
                            
                        </ul>

                        
                    </div>

                   
                </div>
                 <div className="footer__copyright">
      &copy; {new Date().getFullYear()} Bookings.com. All rights reserved.
    </div>
            </footer>
                
            
        </div>

        
    

      

        



    );
};

export default Plantmain;




