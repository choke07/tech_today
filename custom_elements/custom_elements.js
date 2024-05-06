/* custom elements */

    /* top navigation bar */
    class topNav extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="topnav">
                <a href="index.html">Home</a>
                <a href="machine_learning.html">Machine Learning</a>
                <a href="ai.html">Artificial Intelligence</a>
                <a href="digital_tools.html">Digital Tools</a>
                <a href="other_new_tech.html">Other new tech</a>
                <a href="about.html">About</a>
                <a href="contact.html">Contact</a>
            </div>
            `
        }
    }
    customElements.define('topnav-cpn', topNav)

    /* web header */
    class webHeader extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="header">
            <h2>Technology Today</h2>
            </div>
            `
        }
    }
    customElements.define('web-header-cpn', webHeader)

    /* slide show */
        class slideshowhd extends HTMLElement {
            constructor() {
                super();
            }
            connectedCallback() {
                this.innerHTML = `
                    <div class="slideshow-container">

                        <!-- Full-width images with number and caption text -->
                        <div class="mySlides fade">
                            <div class="numbertext">1 / 4</div>
                            <img src="images/meta1.jpg" style="width:100%; height:300px">
                            <div class="text">Virtual World</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">2 / 4</div>
                            <img src="images/meta2.jpg" style="width:100%; height:300px">
                            <div class="text">Virtual Machine</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">3 / 4</div>
                            <img src="images/meta3.jpg" style="width:100%; height:300px">
                            <div class="text">Virtual Notebook</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">4 / 4</div>
                            <img src="images/keyboard.jpg" style="width:100%; height:300px">
                            <div class="text">Future Keyboard</div>
                        </div>

                        <!-- Next and previous buttons -->
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>

                    </div>
                `
            }
        }
        customElements.define('slideshow-cpn', slideshowhd)

    /* dot_circle */
    class dot_circle extends HTMLElement {
                constructor() {
                    super();
                }
                connectedCallback() {
                    this.innerHTML = `
                    <div class="dot_container" style="height: auto; text-align:center; border: 2px solid grey;">
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                        <span class="dot" onclick="currentSlide(4)"></span>
                    </div>
                    `
                }
            }
            customElements.define('dotcircle-cpn', dot_circle)
    
    /* left_col search_box */
    class sch_box extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="search_box">
                    <form>
                      <input type="text" name="search" placeholder="Search...">
                    </form>
                </div>
            `
        }
    }
    customElements.define('sch-box-cpn', sch_box)

    /* left_col nv_side */
   class lft_nv_side extends HTMLElement {
       constructor() {
           super();
       }
       connectedCallback() {
           this.innerHTML = `
           <div class="nav_side">
                    <a href="index.html">Home</a>
                    <a href="machine_learning.html">Machine Learning</a>
                    <a href="ai.html">Artificial Intelligence</a>
                    <a href="digital_tools.html">Digital Tools</a>
                    <a href="other_new_tech.html">Other new tech</a>
                    <a href="about.html">About</a>
                    <a href="contact.html">Contact</a>
            </div>
           `
       }
   }
   customElements.define('lft-nv-side-cpn', lft_nv_side) 
    
    /* left newsletter */
    class lft_nws_letter extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="news_letter_submit"> 
                    <form action="">
                        <div class="news_container">
                            <h4 style="text-align: center; font-size: 18px; margin: 20px auto">Subscribe to our Newsletter</h4>
                        </div>
                    <div class="news_container" style="background-color:white">
                        <input type="text" placeholder="Name" name="name" required style="font-size: 15px">
                        <input type="text" placeholder="Email address" name="mail" required style="font-size: 15px">
                        <label>
                        <input type="checkbox" checked="checked" name="subscribe"> Daily Newsletter
                        </label>
                    </div>
                    <div class="news_container">
                        <input type="submit" value="Subscribe">
                    </div> 
                    </form>
            </div>
            `
        }
    }
    customElements.define('lft-nws-letter-cpn', lft_nws_letter)

    /* right column social icon */
    class rght_clmn_scl_icn extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="icon-bar">
                <a href="https://m.facebook.com/login/?locale=th_TH" class="facebook">
                    <i class="fa fa-facebook"></i>
                </a>
                <a href="https://twitter.com/i/flow/login" class="twitter">
                    <i class="fa fa-twitter"></i>
                </a>
                <a href="https://www.google.co.th/?hl=th" class="google">
                    <i class="fa fa-google"></i>
                </a>
                <a href="https://www.linkedin.com/login/th" class="linkedin">
                    <i class="fa fa-linkedin"></i>
                </a>
                <a href="https://www.youtube.com/" class="youtube">
                    <i class="fa fa-youtube"></i>
                </a>
            </div>
            `
        }
    }
    customElements.define('rght-clmn-scl-icn-cpn', rght_clmn_scl_icn)

    /* right column images */
    class rght_clmn_img extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
                <div class="right_col_img">
                    <a href="machine_learning.html">
                        <img src="images/meta1.jpg" alt="">
                    </a>
                    <div class="text_in_image">Virtual World</div>
                </div>

                <div class="right_col_img">          
                    <a href="ai.html">
                        <img src="images/meta2.jpg" alt="">
                    </a> 
                    <div class="text_in_image">Virtual Machine</div>
                </div>

                <div class="right_col_img">
                    <a href="digital_tools.html">
                        <img src="images/meta3.jpg" alt="">
                    </a>
                    <div class="text_in_image">Virtual Notebook</div>
                </div>

                <div class="right_col_img">
                    <a href="other_new_tech.html">
                        <img src="images/keyboard.jpg" alt="">
                    </a>
                    <div class="text_in_image">Virtual Keyboard</div>
                </div>
            `
        }
    }
    customElements.define('rght-clmn-img-cpn', rght_clmn_img)

    /* ********** footer column ********** */
    class footer_img extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="footer_col">
                <a href="https://www.coursera.org/learn/learn-to-code-with-ai">
                <img src="images/coding.jpg" alt="">
                </a>
                <p><a href="https://www.coursera.org/learn/learn-to-code-with-ai">Learn to code with AI</a></p>
            </div>

            <div class="footer_col">
                <a href="https://www.diannackard.com/2013/wellness-vs-illness/">
                <img src="images/health_and_illness.jpg" alt="">
                </a>
                <p><a href="https://www.diannackard.com/2013/wellness-vs-illness/">Wellness or Illness </a></p>
            </div>

            <div class="footer_col">
                <a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-love-in-a-mist/&ved=2ahUKEwjP3auC2pmFAxX2bmwGHRsXA0kQFnoECC4QAQ&usg=AOvVaw0Mh2D6WexnyrmBO29tpEUo">
                <img src="images/love_in_the_mist.jpg" alt="">
                </a>
                <p><a href="https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://www.gardenersworld.com/how-to/grow-plants/how-to-grow-love-in-a-mist/&ved=2ahUKEwjP3auC2pmFAxX2bmwGHRsXA0kQFnoECC4QAQ&usg=AOvVaw0Mh2D6WexnyrmBO29tpEUo">How to grow Love-in-the-mist</a></p>
            </div>

            <div class="footer_col">
                <a href="https://www.cancer.gov/news-events/nca50/stories/technologies-and-innovations">
                <img src="images/cancer.jpg" alt="">
                </a>
                <p><a href="https://www.cancer.gov/news-events/nca50/stories/technologies-and-innovations">Cancer research and care</a></p>
            </div>
            `
        }
    }
    customElements.define('footer-img-cpn', footer_img)

    /* power by */
    class pwr_b extends HTMLElement {
        constructor() {
            super();
        }
        connectedCallback() {
            this.innerHTML = `
            <div class="power_by">
                <p>Power by SC_7</p>
            </div>
            `
        }
    }
    customElements.define('pwr-b-cpn', pwr_b)

class back_to_top_btn extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
            <div class="back_to_top_button">
                <button onclick="topFunction()" id="myBtn" title="Go to top">
                    <i class="fa fa-arrow-up" aria-hidden="true"></i>
                    <b>Top</b>
                <button>
            </div>        
        `
    }
}
customElements.define('back-to-top-cpn', back_to_top_btn)
