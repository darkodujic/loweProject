const dare = `data-sal-duration="1200"
data-sal="slide-left"
data-sal-delay="300"
data-sal-easing="ease-out-bounce"`;

export const pars = () => {
  const sonja = `
    <div class="newprop">
    <a href="/index.html"><img class="section__lo" src="/img/newshit.png"
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

        ></a>

    <div class="newprop__detail">
            <h3 class="newprop__heading"
           
            data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

         >Developments</h3>
            <span  data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1600"
        >From Pilsen to Lincoln Square, Streeterville to the West Loop, Lowe Group builds homes in Chicago's most vibrant neighborhoods. </span>
        </div>
</div>

<div class="wholeprop">
    
        <div class="wholeprop__detail"      data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1600">
            <div class="wholeprop__feature">Featured</div>
                <div class="wholeprop__detail__address">2241 W Wabansia Ave Unit 102</div>
                <div class="wholeprop__detail__active">&dollar;1,200,000 + &dollar;55,000 (garage parking)</div>
        
                <div class="wholeprop__detail__p">Rare opportunity to own this beautiful 2BR/2BA north facing home with private elevator entrance and roof feck!</div>
                <button class="wholeprop__detail__button">View Property</button>
            </div>
            
   
    <div class="prop__space"    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600">
            <img class="prop__space__img" src="/img/interior-2685522_960_720.jpg">
     
        <div class="prop__detail">
            <h4 class="prop__heading">Renelle on the River</h4>
            <span class="prop__span">River north / starting at &dollar;1.3 million</span>
            <div class="prop__dare">Deliveries Spring 2019. Development of the Year 2018. Situated in a peaceful residential enclave of River North.</div>
        </div>
    </div>

    <div class="wholeprop__detail wholeprop__detail__sad"            data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600">
            <div class="wholeprop__feature">Featured</div>
                <div class="wholeprop__detail__address">2333 S Sabansia Ave Unit 105</div>
                <div class="wholeprop__detail__active">&dollar;1,150,000 + &dollar;25,000 (garage parking)</div>

                <div class="wholeprop__detail__p">Rare opportunity to own this beautiful 2BR/2BA north facing home with private elevator entrance and roof feck!</div>
                <button class="wholeprop__detail__button">View Property</button>
            </div>
    <div class="prop__space prop__space__maki"
    data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
   >
            <img class="prop__space__img" src="img/pexels-photo-1884235.jpeg">
            <div class="prop__detail">
                <h4 class="prop__heading">Mike on the River</h4>
                <span class="prop__span">River north / starting at &dollar;1.3 million</span>
                <div class="prop__dare">Deliveries Spring 2019. Development of the Year 2018. Situated in a peaceful residential enclave of River North.</div>
            </div>
        </div>
        <div class="wholeprop__detail wholeprop__detail__fafa"
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1600"
       >
                <div class="wholeprop__feature">Featured</div>
                    <div class="wholeprop__detail__address">6521 A Labansia Ave Unit 112</div>
                    <div class="wholeprop__detail__active">&dollar;949,000 + &dollar;25,000 (garage parking)</div>
            
                    <div class="wholeprop__detail__p">Rare opportunity to own this beautiful 2BR/2BA north facing home with private elevator entrance and roof feck!</div>
                    <button class="wholeprop__detail__button">View Property</button>
                </div>

        <div class="prop__space prop__space__maki prop__space__daki"
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1600"
       >
                <img class="prop__space__img" src="img/pexels-photo-1571463.jpeg">
                <div class="prop__detail">
                    <h4 class="prop__heading">Marko on the River</h4>
                    <span class="prop__span">River north / starting at &dollar;1 million</span>
                    <div class="prop__dare">Deliveries Spring 2019. Development of the Year 2018. Situated in a peaceful residential enclave of River North.</div>
                </div>
            </div>

            <div class="wholeprop__detail wholeprop__detail__sasa"
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1600"
          >
                    <div class="wholeprop__feature">Featured</div>
                        <div class="wholeprop__detail__address">5231 F Labansia Ave Unit 457</div>
                        <div class="wholeprop__detail__active">&dollar;978,000 + &dollar;65,000 (garage parking)</div>
                
                        <div class="wholeprop__detail__p">Rare opportunity to own this beautiful 2BR/2BA north facing home with private elevator entrance and roof feck!</div>
                        <button class="wholeprop__detail__button">View Property</button>
                    </div>
            <div class="prop__space prop__space__maki prop__space__daki prop__space__saki"
            data-aos="fade-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1600"
            >
                    <img class="prop__space__img" src="img/photo-1545083036-b175dd155a1d.jpg">
                    <div class="prop__detail">
                        <h4 class="prop__heading">Darko on the River</h4>
                        <span class="prop__span">River north / starting at &dollar;1.1 million</span>
                        <div class="prop__dare">Deliveries Spring 2019. Development of the Year 2018. Situated in a peaceful residential enclave of River North.</div>
                    </div>
                </div>

</div>


`;
  document.querySelector(".btprop").insertAdjacentHTML("afterbegin", sonja);
};

export const deletepars = () => {
  document
    .querySelector(".btprop")
    .parentElement.removeChild(document.querySelector(".btprop"));
};
export const btn = () => {
  const all = `
    
    <div class="section">
    
    <a href="/index.html"><img class="section__lo" src="/img/newshit.png"
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

        ></a>
    <div class="section__first"
>
        

<nav class="section__first__head"
>
    <ul class="section__first__head__ul"             data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

>
        <li><a class="section__first" href="">Home</a></li>
        <li><a class="section__second" href="#">Properties</a></li>
        <li><a class="section__fourth" href="#">Question</a></li>
        <li><a class="section__fifth" href="#">Contact</a></li>
    </ul>

    <div class="section__first__head__sp"
                    
  >
            <span class="section__first__head__sp--1">&nbsp;</span>
            <span class="section__first__head__sp--2">&nbsp;</span>
            <span class="section__first__head__sp--3">&nbsp;</span>
    </div>


</nav>
        
    </div>
   <h2 class="section__heading"             data-aos="fade-down"
   data-aos-offset="200"
   data-aos-delay="50"
   data-aos-duration="1600"
>
       <span>Unique homes.</span>
       <span>Beautifully designed.</span>
       <span>Better living.</span>
   </h2>

</div>

<div class="second">
    
    <div class="second__detail"             data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
>
        <h3 class="second__heading">Aligning your goals with optimal outcomes since 2013.</h3>
<p>In this day and age everyone has access to the same information & listings.ibution is no longer a major value component that a real estate professional brings to the table. Without a doubt the most valuable thing in today’s real estate environment is proper counsel and representation. We are painstaking in our attention to detail when it comes to valuation, negotiation, and the marketing process.<br>
</br>
    It is very easy to overpay or overlook details that seem insignificant but actually can dramatically affect the value of your property in the long run. It’s also easy to miss opportunities to maximize the value of your home on a sale without the right marketing and pricing strategy. If you are a buyer we are going to help you understand the fair value of the home and will never be afraid to tell you to walk away if we can’t get the price right. If you are a seller we are going to assist in being as analytical as possible to justify the highest value for your home. We have a proprietary marketing process with proven results to position your property ahead of the competitors in the marketplace. Our philosophy is simple: we believe our primary responsibility is educating our clients by providing the advice and representation we’d provide our own family. We’ve sold over $80M in real estate and have helped hundreds of people buy and sell property in the Chicagoland area.</p>
    </div>
   <div class="logo">
<img class="second__logo" src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">

   </div>
    <div class="second__numbers"             data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
>
        <span class="second__numbers__years">70</span>
        <span class="second__numbers__description">Years of experience</span>

        <span class="second__numbers__years">2,300</span>
        <span class="second__numbers__description">Homes Developed</span>

        <span class="second__numbers__years">15</span>
        <span class="second__numbers__description">Chicago Neighborhoods</span>
    </div>
<div class="second__images">
<button class="second__images__btn second__images__btn__left" id="prevBtn">
    <i class="second__images__chevron second__images__chevron__left fas fa-chevron-left"></i>
    </button>


<figure class="sasa">
       
<img class="dare" src="/img/shameel-05254ce66f6394f0bd89c4fc6141947d.jpg"  id="lastChild">
<figcaption class="figcaption figcaptionnnnnnn">
        <span class="figcaption__name">Mike Tyson</span>
        <span class="figcaption__span">Manager</span>
    </figcaption>

        <img class="dare" src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">
        <figcaption class="figcaption">
                <span class="figcaption__name">Oliver Ingram</span>
                <span class="figcaption__span">Founder & CEO</span>
            </figcaption>


    <img class="dare" src="/img/lucy-b6d1334c90c1e9c3fc5f6ace9931c4d5.jpg">

    <figcaption class="figcaption figcaptionn">
            <span class="figcaption__name">Lisa Sharp</span>
            <span class="figcaption__span">CO-founder</span>
        </figcaption>
    

    <img src="img/oliver-a422085ddcdf7ed39e83d9bd14680cd5.jpg">
    <figcaption class="figcaption figcaptionnn">
            <span class="figcaption__name">Gray Stern</span>
            <span class="figcaption__span">Commercial</span>
        </figcaption>
    <img src="/img/fraser-3c4d971d436d5c47985c416c173e88bb.jpg">
    <figcaption class="figcaption figcaptionnnn">
            <span class="figcaption__name">Sham Khan</span>
            <span class="figcaption__span">Head of Interior</span>
        </figcaption>
    <img src="/img/mario-0c1eb17c9a1e8e5e69cb28d873a51498.jpg" id="firstChild">
    <figcaption class="figcaption figcaptionnnnn">
            <span class="figcaption__name">Mario Vaz</span>
            <span class="figcaption__span">Creative lead</span>
        </figcaption>
 
   <img src="/img/ruta-fad6dca2d46b92e242b8e68db36476dc.jpg">
    <figcaption class="figcaption figcaptionnnnnn">
            <span class="figcaption__name">Maria Mike</span>
            <span class="figcaption__span">Senior manager</span>
        </figcaption>
    <img src="/img/shameel-05254ce66f6394f0bd89c4fc6141947d.jpg" >
    <figcaption class="figcaption figcaptionnnnnnn">
            <span class="figcaption__name">Mike Tyson</span>
            <span class="figcaption__span">Manager</span>
        </figcaption>

        <img src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">
        <figcaption class="figcaption">
                <span class="figcaption__name">Oliver Ingram</span>
                <span class="figcaption__span">Founder & CEO</span>
            </figcaption>

    
</figure>
<button class="second__images__btn second__images__btn__right" id="nextBtn">
    <i class="second__images__chevron second__images__chevron__right fas fa-chevron-right"></i>
</button>


</div>


</div>
<div class="third">

<div class="third__first"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
    <h3 class="third__first__heading">Located on beautiful Goose Island in the heart of Chicago.</h3>

</div>
<img class="third__img" src="/img/kitchen-2486092_960_720.jpg"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
<div class="third__location"
>
    <h4 class="third__4">Visit us</h4>
    <span class="third__adress">1229 N Branch St #121</span>
    <span class="third__city">Chicago, IL 60642</span>
</div>
</div>
    `;
  document.querySelector(".sec").insertAdjacentHTML("afterbegin", all);
};
export const renderf = () => {
  const dare = `
    <div class="section">
    <a href="/index.html"><img class="section__lo" src="/img/newshit.png"
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

        ></a>
    <div class="section__first"
>
        

<nav class="section__first__head"
>
    <ul class="section__first__head__ul"             data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

>
        <li><a class="section__first" href="">Home</a></li>
        <li><a class="section__second" href="#">Properties</a></li>
        <li><a class="section__fourth" href="#">Question</a></li>
        <li><a class="section__fifth" href="#">Contact</a></li>
    </ul>

    <div class="section__first__head__sp"
                    
  >
            <span class="section__first__head__sp--1">&nbsp;</span>
            <span class="section__first__head__sp--2">&nbsp;</span>
            <span class="section__first__head__sp--3">&nbsp;</span>
    </div>


</nav>
        
    </div>
   <h2 class="section__heading"             data-aos="fade-down"
   data-aos-offset="200"
   data-aos-delay="50"
   data-aos-duration="1600"
>
       <span>Unique homes.</span>
       <span>Beautifully designed.</span>
       <span>Better living.</span>
   </h2>

</div>

<div class="second">
    
    <div class="second__detail"             data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
>
        <h3 class="second__heading">Aligning your goals with optimal outcomes since 2013.</h3>
<p>In this day and age everyone has access to the same information & listings.ibution is no longer a major value component that a real estate professional brings to the table. Without a doubt the most valuable thing in today’s real estate environment is proper counsel and representation. We are painstaking in our attention to detail when it comes to valuation, negotiation, and the marketing process.<br>
</br>
    It is very easy to overpay or overlook details that seem insignificant but actually can dramatically affect the value of your property in the long run. It’s also easy to miss opportunities to maximize the value of your home on a sale without the right marketing and pricing strategy. If you are a buyer we are going to help you understand the fair value of the home and will never be afraid to tell you to walk away if we can’t get the price right. If you are a seller we are going to assist in being as analytical as possible to justify the highest value for your home. We have a proprietary marketing process with proven results to position your property ahead of the competitors in the marketplace. Our philosophy is simple: we believe our primary responsibility is educating our clients by providing the advice and representation we’d provide our own family. We’ve sold over $80M in real estate and have helped hundreds of people buy and sell property in the Chicagoland area.</p>
    </div>
   <div class="logo">
<img class="second__logo" src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">

   </div>
    <div class="second__numbers"             data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
>
        <span class="second__numbers__years">70</span>
        <span class="second__numbers__description">Years of experience</span>

        <span class="second__numbers__years">2,300</span>
        <span class="second__numbers__description">Homes Developed</span>

        <span class="second__numbers__years">15</span>
        <span class="second__numbers__description">Chicago Neighborhoods</span>
    </div>
<div class="second__images">
<button class="second__images__btn second__images__btn__left" id="prevBtn">
    <i class="second__images__chevron second__images__chevron__left fas fa-chevron-left"></i>
    </button>


<figure class="sasa">
       
<img class="dare" src="/img/shameel-05254ce66f6394f0bd89c4fc6141947d.jpg"  id="lastChild">
<figcaption class="figcaption figcaptionnnnnnn">
        <span class="figcaption__name">Mike Tyson</span>
        <span class="figcaption__span">Manager</span>
    </figcaption>

        <img class="dare" src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">
        <figcaption class="figcaption">
                <span class="figcaption__name">Oliver Ingram</span>
                <span class="figcaption__span">Founder & CEO</span>
            </figcaption>


    <img class="dare" src="/img/lucy-b6d1334c90c1e9c3fc5f6ace9931c4d5.jpg">

    <figcaption class="figcaption figcaptionn">
            <span class="figcaption__name">Lisa Sharp</span>
            <span class="figcaption__span">CO-founder</span>
        </figcaption>
    

    <img src="img/oliver-a422085ddcdf7ed39e83d9bd14680cd5.jpg">
    <figcaption class="figcaption figcaptionnn">
            <span class="figcaption__name">Gray Stern</span>
            <span class="figcaption__span">Commercial</span>
        </figcaption>
    <img src="/img/fraser-3c4d971d436d5c47985c416c173e88bb.jpg">
    <figcaption class="figcaption figcaptionnnn">
            <span class="figcaption__name">Sham Khan</span>
            <span class="figcaption__span">Head of Interior</span>
        </figcaption>
    <img src="/img/mario-0c1eb17c9a1e8e5e69cb28d873a51498.jpg" id="firstChild">
    <figcaption class="figcaption figcaptionnnnn">
            <span class="figcaption__name">Mario Vaz</span>
            <span class="figcaption__span">Creative lead</span>
        </figcaption>
 
   <img src="/img/ruta-fad6dca2d46b92e242b8e68db36476dc.jpg">
    <figcaption class="figcaption figcaptionnnnnn">
            <span class="figcaption__name">Maria Mike</span>
            <span class="figcaption__span">Senior manager</span>
        </figcaption>
    <img src="/img/shameel-05254ce66f6394f0bd89c4fc6141947d.jpg" >
    <figcaption class="figcaption figcaptionnnnnnn">
            <span class="figcaption__name">Mike Tyson</span>
            <span class="figcaption__span">Manager</span>
        </figcaption>

        <img src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">
        <figcaption class="figcaption">
                <span class="figcaption__name">Oliver Ingram</span>
                <span class="figcaption__span">Founder & CEO</span>
            </figcaption>

    
</figure>
<button class="second__images__btn second__images__btn__right" id="nextBtn">
    <i class="second__images__chevron second__images__chevron__right fas fa-chevron-right"></i>
</button>


</div>


</div>
<div class="third">

<div class="third__first"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
    <h3 class="third__first__heading">Located on beautiful Goose Island in the heart of Chicago.</h3>

</div>
<img class="third__img" src="/img/kitchen-2486092_960_720.jpg"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
<div class="third__location"
>
    <h4 class="third__4">Visit us</h4>
    <span class="third__adress">1229 N Branch St #121</span>
    <span class="third__city">Chicago, IL 60642</span>
</div>
</div>
    `;

  document.querySelector(".sec").insertAdjacentHTML("afterbegin", dare);
};
export const renderProp = () => {
  const prop = `
    <div class="ceop">
    <a href="/index.html"><img class="section__lo" src="/img/newshit.png"
        data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1600"
    
            ></a>
<nav class="ceop__about">

    <ul class="ceop__about__ulara"   data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600">
        <li><a class="ceop__first" href="">Home</a></li>
        <li><a class="ceop__third" href="/about.html">About</a></li>
        <li><a class="ceop__fourth" href="#">Question</a></li>
        <li><a class="ceop__fifth" href="#">Contact</a></li>
    </ul>
    <div class="ceop__about__spl"
>
            <span class="ceop__about__spl--1">&nbsp;</span>
            <span class="ceop__about__spl--2">&nbsp;</span>
            <span class="ceop__about__spl--3">&nbsp;</span>
    </div>

</nav>
</div>


<div class="par">
<div class="par__detail">
    <h4 class="par__detail__heading">The building</h4>
    <div class="par__detail__p">Surrender to the pleasures of unencumbered city living at Renelle on the River. Hidden in plain sight along the glorious Chicago River, these luxury condominiums offer design that is as subtle as it is refined. Renelle is developed by an affiliate of Lowe Group; with its local roots and an outstanding reputation in Chicago, Belgravia Group continues to be an industry leader as it enters its eighth decade in business.</div>
</div>
<div class="par__span">
    <span>4 bedroom residences</span>
    <span>Starting at &dollar;1.3 million</span>
    <span>Ready for sale</span>
    <span>Delivering in early 2019</span>
</div> 

<div class="par__page"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600">
    <img class="par__page__img" src="img/bedroom-3778695_960_720.jpg">

</div>
<div class="par__g"
data-aos="fade-right"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600">
        Inspired by the word runnel — a delicate stream or brook — Renelle has emerged as the name for Lowe Group’s collection of 50 luxury condominiums along the Chicago River. This elegant name carries with it the fluidity and refinement of the building’s architecture and complements the sights and sounds of the grand waterway below. At the same time, Renelle is a derivation of Renaissance… reflecting the premise of a new beginning for this coveted site, transforming into a sleek, contemporary jewel.
</div>
</div>

<div class="some">
<div class="some__detail"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600">
    <img src="img/Renelle-Exterior.jpg">
    <p>The east façade overlooking a landscaped plaza and paths to Michigan Avenue and the River.</p>
</div>
</div>


<div class="res">
    <div class="par__detail res__detail"             data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600">
            <h4 class="par__detail__heading">The residenes</h4>
            <div class="par__detail__p res__p">This is a four-bedroom luxury condominiums in downtown Chicago, Renelle on the River offers gracious living with expansive views of the river and Chicago’s most treasured architecture.</div>
        </div>

        <div class="par__span res__span">
                <span>4 bedroom residences</span>
                <span>Starting at &dollar;1.3 million</span>
                <span>Ready for sale</span>
                <span>Delivering in early 2019</span>
            </div> 
        
</div>

<div class="apart">
    <div class="par__page apart__page"             data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600">
    <img class="par__page__img apart__img" src="img/kitchen-2400367_960_720.jpg">

</div>
<div class="par__g apart__g"             data-aos="fade-right"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600">
        Our talented designers curate an extensive catalog of refined fixtures and material finishes including Wolf and Sub-Zero appliances, Dornbracht fixtures, and Carlisle wood floors.
</div>
<div class="apart__s">
    <img class="apart__s__img" src="img/photo-1541453384904-208b45574f93.jpg">
    <p class="apart__s__d">Personalize your home with our array of finish options. </p>
    <button class="apart__btn">
            <i class="fas fa-arrow-right"></i>
    </button>
</div>

<div class="apart__lik">
    <div class="apart__lik__f">
        <img class="apart__lik__f__img" src="img/gal-8.jpeg">
        <p class="apart__lik__f__p">Personalize your home with our array of finish options.</p>

    </div>
</div>
<div class="apart__det">
        <div class="par__detail res__detail apart__det__det">
                <h4 class="par__detail__heading apart__det__heading">The residenes</h4>
                <div class="par__detail__p apart__det__p">With its private rooftop lounge, indoor and outdoor kitchens, outdoor terrace with fireplace, and private screening and game rooms, Renelle is synonymous with gracious living. Enhancing the Renelle experience are a 24-hour doorman, state-of-the-art fitness center with private yoga room, bicycle storage, individual storage lockers and an outdoor dog run.</div>
            </div>

            <div class="par__span res__span apart__det__span">
                    <span>Fitness Center </span>
                    <span>Yoga Room </span>
                    <span>Indoor & Outdoor Kitchens </span>
                    <span>Outdoor Terrace with Fireplace </span>
                    <span>Gameroom
                    </span>
                    <span>24 Hour Doorman </span>
                </div> 

</div>



<div class="apart__icon">

    <div class="apart__icon__det"             data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600">
        <div class="apart__icon__det__flex">
            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSI0NHB4IiB2aWV3Qm94PSIwIDAgNDQgNDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MyAoNzI1MjApIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjU5MjE1QUI3LThDNDYtNDg2Ny05RDdDLTExNTc5QUUxMENERDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iRG90LVdlYnNpdGUtLS1EZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvcGVydHktTGlzdGluZy1QYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQ5LjAwMDAwMCwgLTc2OC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ik92ZXJ2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzUuMDAwMDAwLCA3NTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9wb3VuZCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAwLjAwMDAwMCwgMC4wMDAwMDApIj4KICAgICAgICAgICAgICAgICAgICA8cmVjdCBpZD0iQm91bmQiIHg9IjAiIHk9IjAiIHdpZHRoPSI3MiIgaGVpZ2h0PSI3MiI+PC9yZWN0PgogICAgICAgICAgICAgICAgICAgIDxnIGlkPSJMYXllci0xMTQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0LjI2MDI0NCwgMTQuMjYwMjQ0KSIgZmlsbD0iIzI3MjcyNyIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIxLjczOTc1NTksMS43ODIxNDIzNiBDMTAuNjk5MzI0NCwxLjc4MjE0MjM2IDEuNzE3NDQwNzEsMTAuNzY0MDI2IDEuNzE3NDQwNzEsMjEuODA0NDU3NiBDMS43MTc0NDA3MSwzMi44NDQ2MzAzIDEwLjY5OTMyNDQsNDEuODI2NzcyOCAyMS43Mzk3NTU5LDQxLjgyNjc3MjggQzMyLjc4MDE4NzUsNDEuODI2NzcyOCA0MS43NjIwNzExLDMyLjg0NDYzMDMgNDEuNzYyMDcxMSwyMS44MDQ0NTc2IEM0MS43NjIwNzExLDEwLjc2NDAyNiAzMi43ODAxODc1LDEuNzgyMTQyMzYgMjEuNzM5NzU1OSwxLjc4MjE0MjM2IE0yMS43Mzk3NTQ3LDQzLjM3OTYxMDEgQzkuODQzMTkxNTgsNDMuMzc5NjEwMSAwLjE2NDYwMTAxMiwzMy43MDEwMTk2IDAuMTY0NjAxMDEyLDIxLjgwNDQ1NjQgQzAuMTY0NjAxMDEyLDkuOTA3ODkzMjMgOS44NDMxOTE1OCwwLjIyOTMwMjY2NiAyMS43Mzk3NTQ3LDAuMjI5MzAyNjY2IEMzMy42MzYzMTc5LDAuMjI5MzAyNjY2IDQzLjMxNDkwODUsOS45MDc4OTMyMyA0My4zMTQ5MDg1LDIxLjgwNDQ1NjQgQzQzLjMxNDkwODUsMzMuNzAxMDE5NiAzMy42MzYzMTc5LDQzLjM3OTYxMDEgMjEuNzM5NzU0Nyw0My4zNzk2MTAxIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjI0MTY5NzEsMjcuNDM5OTcxOCBMMTguNDk3OTQ0NCwyNy4xMjU3ODA2IEwxOC40OTc5NDQ0LDIyLjkxMjkyNjYgTDE3LjUxODYyMDIsMjIuOTEyOTI2NiBDMTcuMTY3Njc4NCwyMi45MTI5MjY2IDE2Ljg3MjEyMTIsMjIuNjM2MDAzNiAxNi44NzIxMjEyLDIyLjI4NDgwMyBDMTYuODcyMTIxMiwyMS45MzM4NjEyIDE3LjE2NzY3ODQsMjEuNjM4MDQ1MyAxNy41MTg2MjAyLDIxLjYzODA0NTMgTDE4LjQ5Nzk0NDQsMjEuNjM4MDQ1MyBMMTguNDk3OTQ0NCwxOS42NDIzODc1IEMxOC40OTc5NDQ0LDE4LjI3NTExMjIgMTguOTA0Nzg4NCwxNy4xMTEwMDAxIDE5LjY2MjMxNTQsMTYuMzUzNDczMSBDMjAuMzY0MTk4OSwxNS42NTEzMzA4IDIxLjM2MjE1NzIsMTUuMjQ0NzQ1NiAyMi41ODE2NTQsMTUuMjQ0NzQ1NiBDMjQuMzM3MTM5MiwxNS4yNDQ3NDU2IDI1LjQwODg1NzQsMTUuOTQ2ODg4IDI2LjIyMTc2OSwxNi44NzA4Mjc2IEMyNi4zNTExNzIzLDE3LjAxODYwNjEgMjYuNDQzNTY2MywxNy4xODUwMTg4IDI2LjQ0MzU2NjMsMTcuNDA2NTU3MiBDMjYuNDQzNTY2MywxNy44MTMxNDI0IDI2LjEyOTM3NTEsMTguMTA4Njk5NiAyNS43MjMwNDg3LDE4LjEwODY5OTYgQzI1LjQ2NDI0MjEsMTguMTA4Njk5NiAyNS4yOTgwODgyLDE3Ljk3OTI5NjMgMjUuMTg3MDYwMiwxNy44Njg3ODU4IEMyNC41MjE5MjcyLDE3LjExMTAwMDEgMjMuODAxNDA5NiwxNi41OTM2NDU3IDIyLjU2MzI3ODcsMTYuNTkzNjQ1NyBDMjEuODA1NzUxNywxNi41OTM2NDU3IDIxLjIxNDM3ODYsMTYuODM0MDc3IDIwLjc1MjQwODgsMTcuMjc3MTUzOSBDMjAuMjM1MDU0NCwxNy44MTMxNDI0IDE5Ljk1Nzg3MjUsMTguNjI2MDU0IDE5Ljk1Nzg3MjUsMTkuNjQyMzg3NSBMMTkuOTU3ODcyNSwyMS42MzgwNDUzIEwyNC41NTg2Nzc3LDIxLjYzODA0NTMgQzI0LjkwOTg3ODMsMjEuNjM4MDQ1MyAyNS4yMDU0MzU0LDIxLjkzMzg2MTIgMjUuMjA1NDM1NCwyMi4yODQ4MDMgQzI1LjIwNTQzNTQsMjIuNjM2MDAzNiAyNC45MDk4NzgzLDIyLjkxMjkyNjYgMjQuNTU4Njc3NywyMi45MTI5MjY2IEwxOS45NTc4NzI1LDIyLjkxMjkyNjYgTDE5Ljk1Nzg3MjUsMjcuMDcwMzk2IEwyNS45NDQ1ODcxLDI3LjA3MDM5NiBDMjYuMjk1NTI4OSwyNy4wNzAzOTYgMjYuNjA5NzIwMSwyNy4zNjYyMTIgMjYuNjA5NzIwMSwyNy43MTcxNTM3IEMyNi42MDk3MjAxLDI4LjA4NjcyOTYgMjYuMjk1NTI4OSwyOC4zNjM5MTE0IDI1Ljk0NDU4NzEsMjguMzYzOTExNCBMMTcuMzUyNDY2MywyOC4zNjM5MTE0IEMxNy4wNzUyODQ0LDI4LjM2MzkxMTQgMTYuODcyMTIxMiwyOC4xNjA3NDgzIDE2Ljg3MjEyMTIsMjcuOTAxOTQxNiBDMTYuODcyMTIxMiwyNy42OTg3Nzg1IDE3LjAwMTI2NTcsMjcuNTEzOTkwNSAxNy4yNDE2OTcxLDI3LjQzOTk3MTgiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" class="apart__icon__icon">
            <span>Property Price: &dollar;252,500</span>
            </div>
            <div class="apart__icon__det__flex">
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDRweCIgaGVpZ2h0PSIzMnB4IiB2aWV3Qm94PSIwIDAgNDQgMzIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MyAoNzI1MjApIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkJBN0U0MDdELTUyMkMtNEE2Ri05NzkyLUIzMkY4RDg1RjYwMTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iRG90LVdlYnNpdGUtLS1EZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvcGVydHktTGlzdGluZy1QYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQ5LjAwMDAwMCwgLTkzNC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ik92ZXJ2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzUuMDAwMDAwLCA3NTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9jaGFydC1jb3B5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDAuMDAwMDAwLCAxNjAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkJvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGF5ZXItMTE5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNC4yNjAyNDQsIDIwLjA4MzM5NCkiIGZpbGw9IiMyNzI3MjciIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xLjc4MzE3NzU5LDI3LjAwODAyMjcgTDYuNDY5OTA2NzksMjcuMDA4MDIyNyBMMTAuMTAyNzc1NCwxNC4yODIyNDI4IEwxLjc4MzE3NzU5LDEzLjYxNTgxNTcgTDEuNzgzMTc3NTksMjcuMDA3NzYzOSBMMS43ODMxNzc1OSwyNy4wMDgwMjI3IFogTTcuMDU1ODQ0NjQsMjguNTYwODYyIEwxLjAwNjc1NzcyLDI4LjU2MDg2MiBDMC41Nzc5MTUxNjksMjguNTYwODYyIDAuMjMwMzM3ODkxLDI4LjIxMzU0MzUgMC4yMzAzMzc4OTEsMjcuNzg0NDQyMiBMMC4yMzAzMzc4OTEsMTIuNzc0OTUzIEMwLjIzMDMzNzg5MSwxMi41NTgzMzE5IDAuMzIwOTIwMjA1LDEyLjM1MTgwNDIgMC40ODAwODYyNzEsMTIuMjA0NTQzMyBDMC42MzkyNTIzMzYsMTIuMDU3Nzk5OSAwLjg1MDk1NjE0NCwxMS45ODMwMDQ4IDEuMDY4NjEyNSwxMi4wMDExMjEzIEwxMS4xNzEzODc0LDEyLjgxMDQwOTUgQzExLjQwMzUzNjksMTIuODI4Nzg0OCAxMS42MTQ3MjMxLDEyLjk1MDQyMzkgMTEuNzQ3NDkwOSwxMy4xNDE0MjMyIEMxMS44ODAyNTg3LDEzLjMzMjk0MDEgMTEuOTIwMTE0OSwxMy41NzM2MzAyIDExLjg1NjE4OTcsMTMuNzk3MjM5MSBMNy44MDI1MDE3MSwyNy45OTc5NTc2IEM3LjcwNzI2MDg4LDI4LjMzMTA0MTcgNy40MDI2NDU1LDI4LjU2MDg2MiA3LjA1NTg0NDY0LDI4LjU2MDg2MiBMNy4wNTU4NDQ2NCwyOC41NjA4NjIgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMC40MTIzNjU4LDI0LjI1MDE3ODcgQzI5Ljk4MzUyMzIsMjQuMjUwMTc4NyAyOS42MzU5NDU5LDIzLjkwMjYwMTUgMjkuNjM1OTQ1OSwyMy40NzM3NTg5IEMyOS42MzU5NDU5LDIxLjA2NTgyMjMgMjcuMjgwNTQ2OCwyMC40NTMyMjcxIDI3LjE4MDY0NzUsMjAuNDI4MTIyOCBMMTAuNDg5NjkwNywxNi40NDI3NTk5IEMxMC4wNzI3NTMyLDE2LjM0MzExOTQgOS44MTU0OTk0MiwxNS45MjQxMTE1IDkuOTE1MTM5OTgsMTUuNTA3MTc0MSBDMTAuMDE1MDM5MywxNS4wODk3MTkgMTAuNDM1MDgyNSwxNC44MzMyNDE3IDEwLjg1MDcyNTksMTQuOTMyMzY0NiBMMjcuNTQ4MTUyOSwxOC45MTk1MzkxIEMyOC44MTE2NDY4LDE5LjIzMzIxMjcgMzEuMTg4Nzg1NiwyMC41ODY1MTI1IDMxLjE4ODc4NTYsMjMuNDczNzU4OSBDMzEuMTg4Nzg1NiwyMy45MDI2MDE1IDMwLjg0MTIwODQsMjQuMjUwMTc4NyAzMC40MTIzNjU4LDI0LjI1MDE3ODciIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNS45NDc5NTA1LDMxLjU5NDA3NzMgQzI1Ljg5MTc4OTQsMzEuNTk0MDc3MyAyNS44MzU2Mjg0LDMxLjU5Mjc4MzMgMjUuNzc5NDY3NCwzMS41ODk2Nzc2IEMyMy43NTQ1NjQ1LDMxLjQ4Nzk2NjYgMTYuNDY5OTM1LDMwLjgxNzEzOTggNy43NDAxMjk1MSwyNi40NjAzODkxIEM3LjM1NjU3ODEyLDI2LjI2ODg3MjIgNy4yMDA3NzY1NSwyNS44MDI3NjE1IDcuMzkyMjkzNDMsMjUuNDE4OTUxMyBDNy41ODM4MTAzMiwyNS4wMzUxNDExIDguMDQ5OTIxMDEsMjQuODc5MzM5NSA4LjQzMzczMTIsMjUuMDcwODU2NCBDMTYuODkzNjAxNCwyOS4yOTMwMjc2IDIzLjkwODgxMzIsMjkuOTQwODIwNiAyNS44NTczNjgxLDMwLjAzODkwODMgQzI2LjA5NTQ3MDIsMzAuMDUxMDcyMiAyNi4zMjk2OTAyLDMwLjAxNDU4MDUgMjYuNTUyMjYzOSwyOS45MzE1MDM2IEw0MS40NzkxOTM1LDI0LjM0NDkwMzggQzM5LjgyNDY0MjksMjEuODA2MjY5NyAzNy43OTYxMTY4LDIyLjQ0MjY3NTIgMzcuNzczNjAwNiwyMi40NDk2NjI5IEMzNy43NjAxNDI2LDIyLjQ1NDMyMTQgMzcuNzQ2NDI1OSwyMi40NTg0NjI0IDM3LjczMjQ1MDMsMjIuNDYyMDg1NiBMMjYuNTY0Njg2NiwyNS41MDE3Njk0IEMyNi40NDMwNDc1LDI1LjUzNDg5NjcgMjYuMzE1NDU1OCwyNS41Mzc3NDM1IDI2LjE5MjUyMjcsMjUuNTEwODI3NyBMMTcuMDU1ODczMiwyMy40ODM4NTQyIEMxNi42MzY4NjUzLDIzLjM5MDk0MjYgMTYuMzcyODgyNiwyMi45NzYzMzQ0IDE2LjQ2NTc5NDEsMjIuNTU3NTg1MyBDMTYuNTU4OTY0NSwyMi4xMzg4MzYyIDE2Ljk3MzgzMTUsMjEuODc0ODUzNCAxNy4zOTE4MDQyLDIxLjk2ODAyMzggTDI2LjM0MTU5NTMsMjMuOTUzMzI5NCBMMzcuMzA5NTYwMywyMC45Njc5OTUgQzM3LjQ5MjI3NzgsMjAuOTExODM0IDM4LjM2NDk3MzcsMjAuNjc4MTMxNiAzOS40OTMxMTE2LDIwLjk1OTQ1NDQgQzQwLjU3NzUxMTMsMjEuMjI5OTA3MyA0Mi4xMTc5MjgyLDIyLjA0NzIxODYgNDMuMjk4NjAzOSwyNC40MDUyMDU4IEM0My4zOTcyMDkzLDI0LjYwMTg5ODggNDMuNDA3NTYxNSwyNC44MzE3MTkxIDQzLjMyNjgxMzksMjUuMDM2NjkzOSBDNDMuMjQ2NTgzOCwyNS4yNDE2Njg4IDQzLjA4Mjc1OTIsMjUuNDAyNjQ2NSA0Mi44NzY0OTA0LDI1LjQ3OTc3MDkgTDI3LjA5NjUzNDIsMzEuMzg1NzM4IEMyNi43MjY2OTk1LDMxLjUyNDE5OTUgMjYuMzQxMDc3NywzMS41OTQwNzczIDI1Ljk0Nzk1MDUsMzEuNTk0MDc3MyIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIwLjI2NDU1ODIsNC43MTAyODAzNiBDMTkuNTc5MjM4Miw0LjcxMDI4MDM2IDE5LjAyMTUxLDUuMjY4MjY3NDEgMTkuMDIxNTEsNS45NTQzNjM3MyBDMTkuMDIxNTEsNi42Mzk5NDI0NCAxOS41NzkyMzgyLDcuMTk3NDExODggMjAuMjY0NTU4Miw3LjE5NzQxMTg4IEMyMC45NDk4NzgxLDcuMTk3NDExODggMjEuNTA3ODY1Miw2LjYzOTk0MjQ0IDIxLjUwNzg2NTIsNS45NTQzNjM3MyBDMjEuNTA3ODY1Miw1LjI2ODI2NzQxIDIwLjk0OTg3ODEsNC43MTAyODAzNiAyMC4yNjQ1NTgyLDQuNzEwMjgwMzYgTTIwLjI2NDU1ODIsOC43NTAyNTE1OCBDMTguNzIyODQ3MSw4Ljc1MDI1MTU4IDE3LjQ2ODY3MDMsNy40OTYwNzQ3MyAxNy40Njg2NzAzLDUuOTU0MzYzNzMgQzE3LjQ2ODY3MDMsNC40MTIxMzUxMiAxOC43MjI4NDcxLDMuMTU3NDQwNjYgMjAuMjY0NTU4MiwzLjE1NzQ0MDY2IEMyMS44MDYyNjkyLDMuMTU3NDQwNjYgMjMuMDYwNzA0OSw0LjQxMjEzNTEyIDIzLjA2MDcwNDksNS45NTQzNjM3MyBDMjMuMDYwNzA0OSw3LjQ5NjA3NDczIDIxLjgwNjI2OTIsOC43NTAyNTE1OCAyMC4yNjQ1NTgyLDguNzUwMjUxNTgiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMjAuMjcyMzIyLDEuNjYyNTczNyBDMTcuOTEwNzExNywxLjY2MjU3MzcgMTUuOTg5MzMxNSwzLjU4NzU3NzI4IDE1Ljk4OTMzMTUsNS45NTM4NDYxNCBDMTUuOTg5MzMxNSw4LjMxOTg1NjE5IDE3LjkxMDcxMTcsMTAuMjQ0ODU5OCAyMC4yNzIzMjIsMTAuMjQ0ODU5OCBDMjEuOTcwMzUyMSwxMC4yNDQ4NTk4IDIzLjUwODQzOTcsOS4yMzQyMTk5NSAyNC4xOTE2ODkyLDcuNjY5NzMzOTggQzI0LjMxNDg4MTEsNy4zODcxMTcxNiAyNC41OTQzOTIzLDcuMjA0MTQwODkgMjQuOTAzMTQ4NSw3LjIwNDE0MDg5IEwyNi42ODU1NDk2LDcuMjA0MTQwODkgTDI3LjUzNjc2NDUsNi43Nzk0MzkyMyBDMjcuNjQ0NDI4MSw2LjcyNTYwNzQ2IDI3Ljc2MzIyMDMsNi42OTc2NTYzNCAyNy44ODM1NjU0LDYuNjk3NjU2MzQgTDI4Ljg5ODYwNDksNi42OTc2NTYzNCBDMjkuMDE5MjA4OCw2LjY5NzY1NjM0IDI5LjEzNzc0MjIsNi43MjU2MDc0NiAyOS4yNDU2NjQ2LDYuNzc5NDM5MjMgTDMxLjExMTY2MDIsNy43MTE2NjA2NSBMMzEuNzYwMjI5NSw3LjcxMTY2MDY1IEwzMy42MjY0ODM5LDYuNzc5NDM5MjMgQzMzLjg3NTQ1NTksNi42NTUyMTIwNiAzNC4xNzE1MzA3LDYuNjczNTg3MzMgMzQuNDAzOTM5LDYuODI3ODM2MDcgTDM1LjczMDU4MTYsNy43MTE2NjA2NSBMMzYuNjQ0Njg2Niw3LjcxMTY2MDY1IEwzOC4xMzAyMzY1LDUuODU2NTM0ODUgTDM3LjU1MjgzODksNC43MDMyOTI1OSBMMjQuOTAzMTQ4NSw0LjcwMzI5MjU5IEMyNC41OTQzOTIzLDQuNzAzMjkyNTkgMjQuMzE0ODgxMSw0LjUyMDMxNjMyIDI0LjE5MTY4OTIsNC4yMzc2OTk0OSBDMjMuNTA4NDM5NywyLjY3MzIxMzUyIDIxLjk3MDM1MjEsMS42NjI1NzM3IDIwLjI3MjMyMiwxLjY2MjU3MzcgTTIwLjI3MjMyMjEsMTEuNzk3Njk5NyBDMTcuMDU0MzIwNywxMS43OTc2OTk3IDE0LjQzNjQ5MTgsOS4xNzYyNDc0NSAxNC40MzY0OTE4LDUuOTUzODQ2MjUgQzE0LjQzNjQ5MTgsMi43MzExODYyNCAxNy4wNTQzMjA3LDAuMTA5NzM0MDA1IDIwLjI3MjMyMjEsMC4xMDk3MzQwMDUgQzIyLjQxNDIwNTYsMC4xMDk3MzQwMDUgMjQuMzY5MjMwNywxLjI4NzU2MjkyIDI1LjM4NjM0MDcsMy4xNTA0NTI5NiBMMzguMDMyMTQ5NCwzLjE1MDQ1Mjk2IEMzOC4zMjYxNTM3LDMuMTUwNDUyOTYgMzguNTk0Nzk1LDMuMzE2MzQ4IDM4LjcyNjUyNzYsMy41NzkyOTU1MyBMMzkuNzQxNTY3MSw1LjYwNjAxMDE1IEMzOS44NzcxODE4LDUuODc3MjM5NDkgMzkuODQyNzYwNSw2LjIwMjU1OTQxIDM5LjY1MzMxNCw2LjQzOTEwODY2IEwzNy42MjM0OTM4LDguOTczMzQzMDYgQzM3LjQ3NjIzMjgsOS4xNTczNTQ1NyAzNy4yNTMxNDE1LDkuMjY0NTAwNTEgMzcuMDE3MzY4Nyw5LjI2NDUwMDUxIEwzNS40OTU4NDQ2LDkuMjY0NTAwNTEgQzM1LjM0MjYzMTEsOS4yNjQ1MDA1MSAzNS4xOTMwNDA5LDkuMjE5MjA5MzUgMzUuMDY1NDQ5Miw5LjEzNDMyMDc4IEwzMy45MTc2NDE5LDguMzY5ODA2MDMgTDMyLjI5MDUyNDcsOS4xODI3MTc2MiBDMzIuMTgyNjAyNCw5LjIzNjI5MDU5IDMyLjA2MzgxMDEsOS4yNjQ1MDA1MSAzMS45NDM0NjUxLDkuMjY0NTAwNTEgTDMwLjkyODQyNTUsOS4yNjQ1MDA1MSBDMzAuODA3ODIxNiw5LjI2NDUwMDUxIDMwLjY4OTI4ODIsOS4yMzYyOTA1OSAzMC41ODEzNjU5LDkuMTgyNDU4ODEgTDI4LjcxNTM3MDIsOC4yNTA0OTYxOCBMMjguMDY2NTQyLDguMjUwNDk2MTggTDI3LjIxNTMyNzEsOC42NzU0NTY2NCBDMjcuMTA3NjYzNSw4LjcyOTAyOTYxIDI2Ljk4ODg3MTMsOC43NTY5ODA3MyAyNi44Njg1MjYyLDguNzU2OTgwNzMgTDI1LjM4NjM0MDcsOC43NTY5ODA3MyBDMjQuMzY5MjMwNywxMC42MTk4NzA4IDIyLjQxNDIwNTYsMTEuNzk3Njk5NyAyMC4yNzIzMjIxLDExLjc5NzY5OTciIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+" class="apart__icon__icon">
                    <span>Price incl. all finance costs</span>
                    </div>
                    <div class="apart__icon__det__flex">
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMzRweCIgaGVpZ2h0PSI0OHB4IiB2aWV3Qm94PSIwIDAgMzQgNDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MyAoNzI1MjApIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPjkyRTY1QkFELUEyOTUtNDU5Ri04MzY4LTEwRTgxODVGNTM5MDwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iRG90LVdlYnNpdGUtLS1EZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvcGVydHktTGlzdGluZy1QYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODU0LjAwMDAwMCwgLTExNjYuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSJPdmVydmlldyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM1LjAwMDAwMCwgNzU0LjAwMDAwMCkiPgogICAgICAgICAgICAgICAgPGcgaWQ9Imljb25fY2hhcnQtY29weS00IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDAuMDAwMDAwLCA0MDAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkJvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGF5ZXItMTE4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxOS42OTUxODQsIDEyLjU3ODAwMikiIGZpbGw9IiMyNzI3MjciIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4yNDI3MDM4LDQ2LjcwMjk0ODIgQzE2LjAwMzU2NjUsNDYuNzAyOTQ4MiAxNS43Njc1MzQ5LDQ2LjU5Mjk1NTQgMTUuNjE1NjE1NCw0Ni4zODQ4NzQ5IEMxNC45Nzk3Mjc1LDQ1LjUxNjA2MSAwLjA0Njg0Mzk5NTksMjUuMDA0ODYwMiAwLjA0Njg0Mzk5NTksMTYuMjg5NTQ3MyBDMC4wNDY4NDM5OTU5LDcuMzEzODc1MDIgNy4zMTIwNjM1OSwwLjAxMTkwNTEwNDYgMTYuMjQyMTg2MiwwLjAxMTkwNTEwNDYgQzE2LjY3MTAyODgsMC4wMTE5MDUxMDQ2IDE3LjAxODYwNjEsMC4zNTk0ODIzOTIgMTcuMDE4NjA2MSwwLjc4ODMyNDk1OCBDMTcuMDE4NjA2MSwxLjIxNzE2NzUyIDE2LjY3MTAyODgsMS41NjQ3NDQ4MSAxNi4yNDIxODYyLDEuNTY0NzQ0ODEgQzguMTY4NDU0NzEsMS41NjQ3NDQ4MSAxLjU5OTY4Mzc1LDguMTcwMjY2MTEgMS41OTk2ODM3NSwxNi4yODk1NDczIEMxLjU5OTY4Mzc1LDI0LjUwMjUxNjUgMTYuNzE2MDYxMSw0NS4yNTkzMjQ5IDE2Ljg2ODc1Nyw0NS40NjgxODE4IEMxNy4xMjE4Njk5LDQ1LjgxNDIwNjMgMTcuMDQ2NTU3Miw0Ni4yOTk5ODYzIDE2LjcwMDc5MTUsNDYuNTUzMDk5MiBDMTYuNTYyMzMsNDYuNjU0MjkyNiAxNi40MDE4Njk5LDQ2LjcwMjk0ODIgMTYuMjQyNzAzOCw0Ni43MDI5NDgyIiBpZD0iUGF0aCI+PC9wYXRoPgogICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNMTYuMzY2OTMwMSw0Ni43MDI5NDgyIEMxNi4yMDc3NjQsNDYuNzAyOTQ4MiAxNi4wNDczMDM5LDQ2LjY1NDI5MjYgMTUuOTA4ODQyNCw0Ni41NTMwOTkyIEMxNS41NjMwNzY3LDQ2LjI5OTk4NjMgMTUuNDg3NzY0LDQ1LjgxNDIwNjMgMTUuNzQwODc2OSw0NS40NjgxODE4IEMxNS44OTM1NzI4LDQ1LjI1OTMyNDkgMzEuMDA5OTUwMiwyNC41MDA0NDYxIDMxLjAwOTk1MDIsMTYuMjg5NTQ3MyBDMzEuMDA5OTUwMiw4LjE3MDI2NjExIDI0LjQ0MTE3OTIsMS41NjQ3NDQ4MSAxNi4zNjc0NDc3LDEuNTY0NzQ0ODEgQzE1LjkzODYwNTEsMS41NjQ3NDQ4MSAxNS41OTEwMjc4LDEuMjE3MTY3NTIgMTUuNTkxMDI3OCwwLjc4ODMyNDk1OCBDMTUuNTkxMDI3OCwwLjM1OTQ4MjM5MiAxNS45Mzg2MDUxLDAuMDExOTA1MTA0NiAxNi4zNjc0NDc3LDAuMDExOTA1MTA0NiBDMjUuMjk3NTcwMywwLjAxMTkwNTEwNDYgMzIuNTYyNzg5OSw3LjMxMzg3NTAyIDMyLjU2Mjc4OTksMTYuMjg5NTQ3MyBDMzIuNTYyNzg5OSwyNS4wMDQ4NjAyIDE3LjYyOTkwNjQsNDUuNTE2MDYxIDE2Ljk5NDAxODUsNDYuMzg0ODc0OSBDMTYuODQyMDk5MSw0Ni41OTI5NTU0IDE2LjYwNjA2NzQsNDYuNzAyOTQ4MiAxNi4zNjY5MzAxLDQ2LjcwMjk0ODIiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNi4zMDQ4MTY4LDkuNzk0NTM2NzIgQzEzLjIzNzY5OTUsOS43OTQ1MzY3MiAxMC43NDI4MDM2LDEyLjI4OTE3MzYgMTAuNzQyODAzNiwxNS4zNTU1MTQzIEMxMC43NDI4MDM2LDE4LjQyMjM3MjYgMTMuMjM3Njk5NSwyMC45MTc1MjcgMTYuMzA0ODE2OCwyMC45MTc1MjcgQzE5LjM3MTkzNDEsMjAuOTE3NTI3IDIxLjg2NjgyOTksMTguNDIyMzcyNiAyMS44NjY4Mjk5LDE1LjM1NTUxNDMgQzIxLjg2NjgyOTksMTIuMjg5MTczNiAxOS4zNzE5MzQxLDkuNzk0NTM2NzIgMTYuMzA0ODE2OCw5Ljc5NDUzNjcyIE0xNi4zMDQ4MTY0LDIyLjQ3MDM2NyBDMTIuMzgxNTY3LDIyLjQ3MDM2NyA5LjE4OTk2MzkxLDE5LjI3ODUwNSA5LjE4OTk2MzkxLDE1LjM1NTUxNDQgQzkuMTg5OTYzOTEsMTEuNDMzMDQxNCAxMi4zODE1NjcsOC4yNDE2OTcwMyAxNi4zMDQ4MTY0LDguMjQxNjk3MDMgQzIwLjIyODA2NTgsOC4yNDE2OTcwMyAyMy40MTk2NjksMTEuNDMzMDQxNCAyMy40MTk2NjksMTUuMzU1NTE0NCBDMjMuNDE5NjY5LDE5LjI3ODUwNSAyMC4yMjgwNjU4LDIyLjQ3MDM2NyAxNi4zMDQ4MTY0LDIyLjQ3MDM2NyIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=" class="apart__icon__icon">
                            <span>Castlefield, M15 4LA</span>
                            </div>
                            <div class="apart__icon__det__flex">
                                   <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDhweCIgaGVpZ2h0PSI1MHB4IiB2aWV3Qm94PSIwIDAgNDggNTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogc2tldGNodG9vbCA1MyAoNzI1MjApIC0gaHR0cHM6Ly9za2V0Y2hhcHAuY29tIC0tPgogICAgPHRpdGxlPkVCQTNGNTY0LTA0OEItNEM3RS1CQUE5LTYxNUE4MTBERTk0OTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggc2tldGNodG9vbC48L2Rlc2M+CiAgICA8ZyBpZD0iRG90LVdlYnNpdGUtLS1EZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iUHJvcGVydHktTGlzdGluZy1QYWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODQ3LjAwMDAwMCwgLTg0NS4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9Ik92ZXJ2aWV3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzUuMDAwMDAwLCA3NTQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iaWNvbl9jaGFydCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzAwLjAwMDAwMCwgODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IkJvdW5kIiB4PSIwIiB5PSIwIiB3aWR0aD0iNzIiIGhlaWdodD0iNzIiPjwvcmVjdD4KICAgICAgICAgICAgICAgICAgICA8ZyBpZD0iTGF5ZXItMTE3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi40NDg1OTgsIDExLjU0Mjc3NSkiIGZpbGw9IiMyNzI3MjciIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00MS42MzkzOTU0LDQ0Ljc2NDQ4NjYgTDcuMTY5NzE5NTYsNDQuNzY0NDg2NiBDNS4wNzQ0MjEyNiw0NC43NjQ0ODY2IDQuMzEzNTI5ODMsNDMuMDU2MzYyOSA0LjMxMzUyOTgzLDQxLjkwODAzOCBMNC4zMTM1Mjk4Myw1Ljc1Mzc4ODY4IEM0LjMxMzUyOTgzLDUuMzI0OTQ2MTIgNC42NjExMDcxLDQuOTc3MzY4ODMgNS4wODk5NDk2NSw0Ljk3NzM2ODgzIEM1LjUxOTA1MTAxLDQuOTc3MzY4ODMgNS44NjYzNjk0OCw1LjMyNDk0NjEyIDUuODY2MzY5NDgsNS43NTM3ODg2OCBMNS44NjYzNjk0OCw0MS45MDgwMzggQzUuODcyMDYzMjIsNDIuMjA4NzcxMiA1Ljk4MjMxNDg0LDQzLjIxMTY0NjkgNy4xNjk3MTk1Niw0My4yMTE2NDY5IEw0MS42MzkzOTU0LDQzLjIxMTY0NjkgQzQyLjA2ODIzNzksNDMuMjExNjQ2OSA0Mi40MTU4MTUyLDQzLjU1OTIyNDIgNDIuNDE1ODE1Miw0My45ODgwNjY3IEM0Mi40MTU4MTUyLDQ0LjQxNjkwOTMgNDIuMDY4MjM3OSw0NC43NjQ0ODY2IDQxLjYzOTM5NTQsNDQuNzY0NDg2NiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIuODEwNjM5NzMsNC43NzI2NTI5IEw3LjM2ODIyNDM5LDQuNzcyNjUyOSBMNS4wODk2OTA4NywyLjMyMTQ5NTM4IEwyLjgxMDYzOTczLDQuNzcyNjUyOSBMMi44MTA2Mzk3Myw0Ljc3MjY1MjkgWiBNOS4xNTAzNjY0OSw2LjMyNTQ5MjQ5IEwxLjAyODQ5NzQ3LDYuMzI1NDkyNDkgQzAuNzE5NzQxMTg3LDYuMzI1NDkyNDkgMC40NDAyMzAwNDksNi4xNDIyNTc0MSAwLjMxNjc3OTI5Nyw1Ljg1OTEyMjk3IEMwLjE5MzU4NzM1MSw1LjU3NTk4ODUzIDAuMjQ5NDg5NTc4LDUuMjQ2Nzg2NTIgMC40NTk4OTkzNTIsNS4wMjAzMzA3MyBMNC41MjA4MzM4NiwwLjY1MjcxMDI5NCBDNC42Njc4MzYwMSwwLjQ5NDU3OTQ1MiA0Ljg3NDEwNDg4LDAuNDA1MDMyMzY0IDUuMDg5NjkwNzksMC40MDUwMzIzNjQgQzUuMzA1NTM1NSwwLjQwNTAzMjM2NCA1LjUxMTU0NTU2LDAuNDk0NTc5NDUyIDUuNjU4Mjg4OTEsMC42NTI3MTAyOTQgTDkuNzE4OTY0NjEsNS4wMjA1ODk1NCBDOS45MjkzNzQzOCw1LjI0Njc4NjUyIDkuOTg1NTM1NDEsNS41NzU5ODg1MyA5Ljg2MjA4NDY2LDUuODU5MTIyOTcgQzkuNzM4ODkyNzIsNi4xNDIyNTc0MSA5LjQ1OTEyMjc3LDYuMzI1NDkyNDkgOS4xNTAzNjY0OSw2LjMyNTQ5MjQ5IEw5LjE1MDM2NjQ5LDYuMzI1NDkyNDkgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00Mi40MjYxNjg5LDQxLjcwODc1NTEgTDQyLjQyNjE2ODksNDYuMjY2NTk4NSBMNDQuODc3MzI2NCw0My45ODc4MDYyIEw0Mi40MjYxNjg5LDQxLjcwODc1NTEgWiBNNDEuNjQ5NDkwMiw0OC44MjUxNjA1IEM0MS41NDQ5MzIzLDQ4LjgyNTE2MDUgNDEuNDM5MzM5Miw0OC44MDQxOTcyIDQxLjMzOTY5ODcsNDguNzYwNzE3NyBDNDEuMDU2NTY0Miw0OC42MzcyNjY5IDQwLjg3MzMyOTIsNDguMzU3NDk3IDQwLjg3MzMyOTIsNDguMDQ4NzQwNyBMNDAuODczMzI5MiwzOS45MjY4NzE2IEM0MC44NzMzMjkyLDM5LjYxNzg1NjUgNDEuMDU2MzA1NCwzOS4zMzgzNDU0IDQxLjMzOTY5ODcsMzkuMjE0ODk0NiBDNDEuNjIzMDkxOSwzOS4wOTE0NDM5IDQxLjk1MjI5MzksMzkuMTQ3ODYzNyA0Mi4xNzg0OTA5LDM5LjM1ODAxNDcgTDQ2LjU0NjM3MDEsNDMuNDE4OTQ5MiBDNDYuNzA0MjQyMiw0My41NjU5NTE0IDQ2Ljc5NDA0ODEsNDMuNzcxOTYxNCA0Ni43OTQwNDgxLDQzLjk4NzgwNjEgQzQ2Ljc5NDA0ODEsNDQuMjAzMzkyMSA0Ni43MDQyNDIyLDQ0LjQwOTQwMjEgNDYuNTQ2MzcwMSw0NC41NTY0MDQzIEw0Mi4xNzg0OTA5LDQ4LjYxNzMzODggQzQyLjAzMjAwNjQsNDguNzUzNzI5OSA0MS44NDIwNDIzLDQ4LjgyNTE2MDUgNDEuNjQ5NDkwMiw0OC44MjUxNjA1IEw0MS42NDk0OTAyLDQ4LjgyNTE2MDUgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xMS45MjMyMjA5LDI5LjgzODMzMjkgQzExLjkyMzIyMDksMjkuODM4MDc0MSA5Ljg0MzE5MjEsMjkuODM4MDc0MSA5Ljg0MzE5MjEsMzEuOTE3ODQ0IEw5Ljg0MzE5MjEsNDQuMjA0Njg3NyBMMTYuMDgyNzYwOSw0NC4yMDQ2ODc3IEwxNi4wODI3NjA5LDMxLjkxNzg0NCBDMTYuMDgyNzYwOSwzMS45MTc4NDQgMTYuMDgyNzYwOSwyOS44MzgwNzQxIDE0LjAwMjk5MDksMjkuODM4MDc0MSBMMTEuOTIzMjIwOSwyOS44MzgwNzQxIEwxMS45MjMyMjA5LDI5LjgzODMzMjkgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTIyLjIzNDA3NjksMjQuMDkxNTMxIEMyMi4yMzQwNzY5LDI0LjA5MTUzMSAyMC4xNTQwNDgyLDI0LjA5MTUzMSAyMC4xNTQwNDgyLDI2LjE3MTU1OTcgTDIwLjE1NDA0ODIsNDQuMjA0OTQ1MiBMMjYuMzkzNjE2OSw0NC4yMDQ5NDUyIEwyNi4zOTM2MTY5LDI2LjE3MTU1OTcgQzI2LjM5MzYxNjksMjYuMTcxNTU5NyAyNi4zOTM2MTY5LDI0LjA5MTUzMSAyNC4zMTM4NDY5LDI0LjA5MTUzMSBMMjIuMjM0MDc2OSwyNC4wOTE1MzEgTDIyLjIzNDA3NjksMjQuMDkxNTMxIFoiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMi41NDc1MTg2LDE2LjQyOTMwMTggQzMyLjU0NzUxODYsMTYuNDI5MzAxOCAzMC40Njc3NDg2LDE2LjQyOTMwMTggMzAuNDY3NzQ4NiwxOC41MDkzMzA2IEwzMC40Njc3NDg2LDQ0LjIwNDk0NTIgTDM2LjcwNzMxNzQsNDQuMjA0OTQ1MiBMMzYuNzA3MzE3NCwxOC41MDkzMzA2IEMzNi43MDczMTc0LDE4LjUwOTMzMDYgMzYuNzA3MzE3NCwxNi40MjkzMDE4IDM0LjYyNzU0NzQsMTYuNDI5MzAxOCBMMzIuNTQ3NTE4NiwxNi40MjkzMDE4IEwzMi41NDc1MTg2LDE2LjQyOTMwMTggWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjQ4MzgyNDQsMjcuMTQ2NzQzIEMxMy4yODYzNTQ5LDI3LjE0Njc0MyAxMy4wODkxNDQzLDI3LjA3MTk0NzkgMTIuOTM3NzQyNCwyNi45MjIwOTg5IEMxMi42MzI4NjgyLDI2LjYyMDMzMDQgMTIuNjMwMjgwMiwyNi4xMjg4NTY2IDEyLjkzMjA0ODcsMjUuODI0MjQxMyBMMjguNjc1NzcyNyw5LjkyMDA1NzkyIEMyOC45Nzc1NDEyLDkuNjE1MTgzNzQgMjkuNDY5MDE1LDkuNjEyODU0NDggMjkuNzczNjMwMyw5LjkxNDYyMjk4IEMzMC4wNzg1MDQ1LDEwLjIxNjM5MTUgMzAuMDgxMDkyNiwxMC43MDc4NjUyIDI5Ljc3OTMyNDEsMTEuMDEyNDgwNiBMMTQuMDM1NjAwMSwyNi45MTY0MDUxIEMxMy44ODM2ODA2LDI3LjA2OTg3NzUgMTMuNjgzNjIzMSwyNy4xNDY3NDMgMTMuNDgzODI0NCwyNy4xNDY3NDMiIGlkPSJQYXRoIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yOC4wODMxMDYzLDguMjkwODY5NzIgTDMxLjMzMDg3MDUsMTEuNDg3NjQ5MSBMMzEuNDI2MzcwMSw4LjE0MjU3MzUyIEwyOC4wODMxMDYzLDguMjkwODY5NzIgTDI4LjA4MzEwNjMsOC4yOTA4Njk3MiBaIE0zMi4wNTYzMDU2LDE0LjA2NzQzMzEgQzMxLjg1NTk4OTMsMTQuMDY3NDMzMSAzMS42NTkyOTYyLDEzLjk5MDA0OTkgMzEuNTExMjU4OCwxMy44NDQzNDE4IEwyNS43MjQwODQsOC4xNDc0OTA4MiBDMjUuNTAzODM5Niw3LjkzMDg2OTY5IDI1LjQzMzE4NTQsNy42MDQyNTU3NSAyNS41NDM2OTU4LDcuMzE1OTQ1MTkgQzI1LjY1NDQ2NTEsNy4wMjc2MzQ2MyAyNS45MjU2OTQ0LDYuODMyMjM1NjUgMjYuMjM0MTkxOSw2LjgxODUxODkgTDMyLjE5MTkyMDMsNi41NTQyNzczNSBDMzIuNDA4ODAwMiw2LjU0NjUxMzE1IDMyLjYxNzM5ODMsNi42MjU0NDkxNyAzMi43NzA4NzA3LDYuNzc2NTkyMjMgQzMyLjkyNDYwMTgsNi45Mjc5OTQwOSAzMy4wMDg0NTUxLDcuMTM2NTkyMjIgMzMuMDAyNTAyNiw3LjM1MjE3ODEyIEwzMi44MzIyMDc4LDEzLjMxMzI3MDcgQzMyLjgyMzE0OTYsMTMuNjIyMDI3IDMyLjYzMjE1MDMsMTMuODk2MTAzMSAzMi4zNDU2NTE0LDE0LjAxMTI3MjEgQzMyLjI1MTcwNDYsMTQuMDQ5MDU3OCAzMi4xNTM2MTY5LDE0LjA2NzQzMzEgMzIuMDU2MzA1NiwxNC4wNjc0MzMxIEwzMi4wNTYzMDU2LDE0LjA2NzQzMzEgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik00My4wNjI4MzEyLDguMDg2NjcxNTMgTDM5LjkwODIzNzMsOC4wODY2NzE1MyBDMzkuODA2Nzg1MSw4LjA4NjY3MTUzIDM5LjczMTk5LDguMDExODc2NDEgMzkuNzMxOTksNy45MTcxNTMxOSBDMzkuNzMxOTksNy44NDIzNTgwNyAzOS43NzkzNTE2LDcuNzc0NTUwNzQgMzkuODY3NjA0Nyw3Ljc0NzM3NjA0IEw0MC4zMjg3OTgxLDcuNjMyMjA3MSBMNDAuMzI4Nzk4MSw2LjA4NTU3ODcyIEwzOS45NjkzMTU3LDYuMDg1NTc4NzIgQzM5Ljg0MDY4ODgsNi4wODU1Nzg3MiAzOS43MzE5OSw1Ljk4Mzg2NzcxIDM5LjczMTk5LDUuODU0NzIzMjEgQzM5LjczMTk5LDUuNzI2MDk2MzIgMzkuODQwNjg4OCw1LjYxNzM5NzU0IDM5Ljk2OTU3NDUsNS42MTczOTc1NCBMNDAuMzI4Nzk4MSw1LjYxNzM5NzU0IEw0MC4zMjg3OTgxLDQuODg0NzE1OTkgQzQwLjMyODc5ODEsNC4zODI4ODk5NCA0MC40NzgzODgzLDMuOTU1NjAwMjEgNDAuNzU2MzQ2NiwzLjY3NzM4MzA5IEM0MS4wMTQxMTgsMy40MTk2MTE2OSA0MS4zODAzMjk0LDMuMjcwNTM5MDggNDEuODI3ODA2LDMuMjcwNTM5MDggQzQyLjQ3Mjc1MjEsMy4yNzA1MzkwOCA0Mi44NjYxMzgxLDMuNTI4MzEwNDcgNDMuMTY0ODAxLDMuODY3MzQ3MTUgQzQzLjIxMTkwMzgsMy45MjE2OTY1NCA0My4yNDU4MDc1LDMuOTgyNzc0OSA0My4yNDU4MDc1LDQuMDY0MDQwMTggQzQzLjI0NTgwNzUsNC4yMTMzNzE2IDQzLjEzMDYzODUsNC4zMjE4MTE1OCA0Mi45ODEzMDcxLDQuMzIxODExNTggQzQyLjg4NjA2NjMsNC4zMjE4MTE1OCA0Mi44MjUyNDY3LDQuMjc0NDQ5OTcgNDIuNzg0NjE0MSw0LjIzMzU1ODUyIEM0Mi41NDAzMDA2LDMuOTU1NjAwMjEgNDIuMjc1ODAwMiwzLjc2NTYzNjE1IDQxLjgyMTMzNTgsMy43NjU2MzYxNSBDNDEuNTQzMTE4NywzLjc2NTYzNjE1IDQxLjMyNTk4LDMuODUzODg5MjEgNDEuMTU2NzIwNCw0LjAxNjY3ODU3IEM0MC45NjY3NTY0LDQuMjEzMzcxNiA0MC44NjUwNDU0LDQuNTExNzc1NjQgNDAuODY1MDQ1NCw0Ljg4NDcxNTk5IEw0MC44NjUwNDU0LDUuNjE3Mzk3NTQgTDQyLjU1NDAxNzQsNS42MTczOTc1NCBDNDIuNjgyOTAzMSw1LjYxNzM5NzU0IDQyLjc5MTYwMTgsNS43MjYwOTYzMiA0Mi43OTE2MDE4LDUuODU0NzIzMjEgQzQyLjc5MTYwMTgsNS45ODM4Njc3MSA0Mi42ODI5MDMxLDYuMDg1NTc4NzIgNDIuNTU0MDE3NCw2LjA4NTU3ODcyIEw0MC44NjUwNDU0LDYuMDg1NTc4NzIgTDQwLjg2NTA0NTQsNy42MTE3NjEzNyBMNDMuMDYyODMxMiw3LjYxMTc2MTM3IEM0My4xOTE0NTgxLDcuNjExNzYxMzcgNDMuMzA2ODg1OCw3LjcyMDIwMTM1IDQzLjMwNjg4NTgsNy44NDkzNDU4NSBDNDMuMzA2NjI3LDcuOTg0OTYwNTIgNDMuMTkxNDU4MSw4LjA4NjY3MTUzIDQzLjA2MjU3MjQsOC4wODY2NzE1MyBNNDEuNTE5MzA4NSwwLjIxODk1MDM5OCBDMzguNTA0NzI5LDAuMjE4OTUwMzk4IDM2LjA1OTc4MjgsMi42NjM2Mzc2NiAzNi4wNTk3ODI4LDUuNjc4NDc1OSBDMzYuMDU5NzgyOCw4LjY5MzMxNDEzIDM4LjUwNDcyOSwxMS4xMzgyNjAyIDQxLjUxOTMwODUsMTEuMTM4MjYwMiBDNDQuNTM0NDA1NiwxMS4xMzgyNjAyIDQ2Ljk3OTM1MTgsOC42OTMzMTQxMyA0Ni45NzkzNTE4LDUuNjc4NDc1OSBDNDYuOTc5MDkzLDIuNjYzNjM3NjYgNDQuNTM0NDA1NiwwLjIxODk1MDM5OCA0MS41MTkzMDg1LDAuMjE4OTUwMzk4IiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==" class="apart__icon__icon">
                                    <span>780 sq ft</span>
                                    </div>

    </div>
    <div class="apart__icon__img">
   
    <a href="img/interior-1961070_960_720.jpg" data-lightbox="image-1"><img src="img/interior-1961070_960_720.jpg"></a>
    <a href="/img/interior-768526_960_720.jpg" data-lightbox="image-1"><img src="/img/interior-768526_960_720.jpg"></a>
    <a href="img/pexels-photo-2098443.jpeg" data-lightbox="image-1"><img src="img/pexels-photo-2098443.jpeg"></a>
    <a href="/img/pexels-photo-1884235.jpeg" data-lightbox="image-1"><img src="/img/pexels-photo-1884235.jpeg"></a>
    <a href="img/bedroom-1940169_960_720.jpg" data-lightbox="image-1"><img src="img/bedroom-1940169_960_720.jpg"></a>
    <a href="img/gal-5.jpeg" data-lightbox="image-1"><img src="img/gal-5.jpeg"></a>
            
       
</div>

</div>
</div>
    
    `;

  document.querySelector(".seep").insertAdjacentHTML("beforeend", prop);
};

export const deleteAbout = () => {
  document
    .querySelector(".header")
    .parentElement.removeChild(document.querySelector(".header"));

  document
    .querySelector(".about")
    .parentElement.removeChild(document.querySelector(".about"));
  document
    .querySelector(".default")
    .parentElement.removeChild(document.querySelector(".default"));

  document
    .querySelector(".question")
    .parentElement.removeChild(document.querySelector(".question"));
  document
    .querySelector(".footer")
    .parentElement.removeChild(document.querySelector(".footer"));
};

export const deleteProp = () => {
  document
    .querySelector(".header")
    .parentElement.removeChild(document.querySelector(".header"));
  document
    .querySelector(".about")
    .parentElement.removeChild(document.querySelector(".about"));
  document
    .querySelector(".default")
    .parentElement.removeChild(document.querySelector(".default"));
  document
    .querySelector(".question")
    .parentElement.removeChild(document.querySelector(".question"));
  document
    .querySelector(".footer")
    .parentElement.removeChild(document.querySelector(".footer"));
};

export const deleteP = () => {
  document
    .querySelector(".seep")
    .parentElement.removeChild(document.querySelector(".seep"));
};

export const renderQ = () => {
  const question = `
    <div class="contact">
    <a href="/index.html"><img class="header__pic" src="/img/newshit.png"
    data-aos="fade-down"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1600"></a>

<img class="contact__img--1" src="img/sirius-logo.svg">
<p class="contact__k--1">Development</p>
<img class="contact__img--2" src="img/allea-group-logo.svg">
<p class="contact__k--2">A project of</p>
<img class="contact__img--3" src="img/piment-logo.svg">
<p class="contact__k--3">Exclusive Sales</p>
<div class="contact__detail" data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600">
    <h3 class="contact__detail__heading">Contact us</h3>
    <p class="contact__detail__d">We are looking forward to your inquiry!</p>
    <input type="text" class="contact__detail__input" placeholder="Name" required id="name">
    <input type="text" class="contact__detail__input" placeholder="Last Name" required id="lastname">
    <input type="email" class="contact__detail__input" placeholder="e-mail address" required id="email">
    <span class="contact__detail__o">IN ORDER FOR US TO TAILOR OUR OFFER SPECIFICALLY TO YOUR NEEDS, PLEASE LET US KNOW WHICH LEVEL YOU ARE INTERESTED IN OR HOW MANY ROOMS YOU WILL NEED.</span>
<textarea class="contact__detail__input" placeholder="Question" required id="quest"></textarea>
<input type="checkbox" class="contact__detail__check" required name="check" id="check">
<label class="contact__detail__check__l" for="check">I agree with the General Terms and conditions of the protection of privacy declaration</label>


<button class="contact__detail__btn">Send inquiry</button>
</div>
</div>
    
    `;

  document.querySelector(".co").insertAdjacentHTML("beforeend", question);
};

export const deletehj = () => {
  document
    .querySelector(".seep")
    .parentElement.removeChild(document.querySelector(".seep"));
};

export const qw = () => {
  const q = `
    <div class="question">
    <a href="/index.html"><img class="header__pic" src="/img/newshit.png"></a>
    <div class="question__detail" 
    data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600">
        <div class="question__detail__first">
            <h3 class="question__detail__first__heading">Ask a question</h3>
            <span>Please feel free to ask any questioon and we will answer in short period of time.</span>
            <button class="question__detail__btn">Ask question</button>
        </div>
       <p class="question__detail__d">Our support</p>
        <p class="question__detail__f">When you need answers for questions you are wondering, you can always count on our friendly support agents. We provide assistance 24/7 via chat, phone, and tickets.</p>
      
    </div>
   
</div>
    
    `;
  document.querySelector(".qw").insertAdjacentHTML("beforeend", q);
};

export const deleteqw = () => {
  document
    .querySelector(".qw")
    .parentElement.removeChild(document.querySelector(".qw"));
};

export const asn = () => {
  const as = `
    <div class="answer">
      <a href="/index.html"><img class="header__pic" src="/img/newshit.png"></a>
    
    <img class="answer__img--1" src="img/sirius-logo.svg">
    <p class="answer__k--1">Development</p>
    <img class="answer__img--2" src="img/allea-group-logo.svg">
    <p class="answer__k--2">A project of</p>
    <img class="answer__img--3" src="img/piment-logo.svg">
    <p class="answer__k--3">Exclusive Sales</p>

<div class="answer__detail" data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
    <h3 class="answer__detail__heading">Thank you!</h3>
    <p class="answer__detail__d">Your inquiry will be answered as soon as possible.</p>
    <p class="answer__detail__num">&plus; 62 1 224 212 2</p>
</div>
</div>
    
    `;

  document.querySelector(".anr").insertAdjacentHTML("beforeend", as);
};

export const deleted = () => {
  document
    .querySelector(".sec")
    .parentElement.removeChild(document.querySelector(".sec"));
};

export const delPrs = () => {
  document
    .querySelector(".seep")
    .parentElement.removeChild(document.querySelector(".seep"));
};

export const deleteCont = () => {
  document
    .querySelector(".co")
    .parentElement.removeChild(document.querySelector(".co"));
};

export const deleteProperties = () => {
  document
    .querySelector(".seep")
    .parentElement.removeChild(document.querySelector(".seep"));
};

export const deleteff = () => {
  document
    .querySelector(".sec")
    .parentElement.removeChild(document.querySelector(".sec"));
};

export const renderA = () => {
  const ab = `

    <div class="section">
    <a href="/index.html"><img class="section__lo" src="/img/newshit.png"
    data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

        ></a>
    <div class="section__first"
>
        

<nav class="section__first__head"
>
    <ul class="section__first__head__ul"             data-aos="fade-down"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"

>
        <li><a class="section__first" href="">Home</a></li>
        <li><a class="section__second" href="">Properties</a></li>
        <li><a class="section__fourth" href="#">Question</a></li>
        <li><a class="section__fifth" href="#">Contact</a></li>
    </ul>

    <div class="section__first__head__sp"
                    
  >
            <span class="section__first__head__sp--1">&nbsp;</span>
            <span class="section__first__head__sp--2">&nbsp;</span>
            <span class="section__first__head__sp--3">&nbsp;</span>
    </div>


</nav>
        
    </div>
   <h2 class="section__heading"             data-aos="fade-down"
   data-aos-offset="200"
   data-aos-delay="50"
   data-aos-duration="1600"
>
       <span>Unique homes.</span>
       <span>Beautifully designed.</span>
       <span>Better living.</span>
   </h2>

</div>

<div class="second">
    
    <div class="second__detail"             data-aos="fade-right"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
>
        <h3 class="second__heading">Aligning your goals with optimal outcomes since 2013.</h3>
<p>In this day and age everyone has access to the same information & listings.ibution is no longer a major value component that a real estate professional brings to the table. Without a doubt the most valuable thing in today’s real estate environment is proper counsel and representation. We are painstaking in our attention to detail when it comes to valuation, negotiation, and the marketing process.<br>
</br>
    It is very easy to overpay or overlook details that seem insignificant but actually can dramatically affect the value of your property in the long run. It’s also easy to miss opportunities to maximize the value of your home on a sale without the right marketing and pricing strategy. If you are a buyer we are going to help you understand the fair value of the home and will never be afraid to tell you to walk away if we can’t get the price right. If you are a seller we are going to assist in being as analytical as possible to justify the highest value for your home. We have a proprietary marketing process with proven results to position your property ahead of the competitors in the marketplace. Our philosophy is simple: we believe our primary responsibility is educating our clients by providing the advice and representation we’d provide our own family. We’ve sold over $80M in real estate and have helped hundreds of people buy and sell property in the Chicagoland area.</p>
    </div>
   <div class="logo">
<img class="second__logo" src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">

   </div>
    <div class="second__numbers"             data-aos="fade-left"
    data-aos-offset="200"
    data-aos-delay="50"
    data-aos-duration="1600"
>
        <span class="second__numbers__years">70</span>
        <span class="second__numbers__description">Years of experience</span>

        <span class="second__numbers__years">2,300</span>
        <span class="second__numbers__description">Homes Developed</span>

        <span class="second__numbers__years">15</span>
        <span class="second__numbers__description">Chicago Neighborhoods</span>
    </div>
<div class="second__images">
<button class="second__images__btn second__images__btn__left" id="prevBtn">
    <i class="second__images__chevron second__images__chevron__left fas fa-chevron-left"></i>
    </button>


<figure class="sasa">
       
<img class="dare" src="/img/shameel-05254ce66f6394f0bd89c4fc6141947d.jpg"  id="lastChild">
<figcaption class="figcaption figcaptionnnnnnn">
        <span class="figcaption__name">Mike Tyson</span>
        <span class="figcaption__span">Manager</span>
    </figcaption>

        <img class="dare" src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">
        <figcaption class="figcaption">
                <span class="figcaption__name">Oliver Ingram</span>
                <span class="figcaption__span">Founder & CEO</span>
            </figcaption>


    <img class="dare" src="/img/lucy-b6d1334c90c1e9c3fc5f6ace9931c4d5.jpg">

    <figcaption class="figcaption figcaptionn">
            <span class="figcaption__name">Lisa Sharp</span>
            <span class="figcaption__span">CO-founder</span>
        </figcaption>
    

    <img src="img/oliver-a422085ddcdf7ed39e83d9bd14680cd5.jpg">
    <figcaption class="figcaption figcaptionnn">
            <span class="figcaption__name">Gray Stern</span>
            <span class="figcaption__span">Commercial</span>
        </figcaption>
    <img src="/img/fraser-3c4d971d436d5c47985c416c173e88bb.jpg">
    <figcaption class="figcaption figcaptionnnn">
            <span class="figcaption__name">Sham Khan</span>
            <span class="figcaption__span">Head of Interior</span>
        </figcaption>
    <img src="/img/mario-0c1eb17c9a1e8e5e69cb28d873a51498.jpg" id="firstChild">
    <figcaption class="figcaption figcaptionnnnn">
            <span class="figcaption__name">Mario Vaz</span>
            <span class="figcaption__span">Creative lead</span>
        </figcaption>
 
   <img src="/img/ruta-fad6dca2d46b92e242b8e68db36476dc.jpg">
    <figcaption class="figcaption figcaptionnnnnn">
            <span class="figcaption__name">Maria Mike</span>
            <span class="figcaption__span">Senior manager</span>
        </figcaption>
    <img src="/img/shameel-05254ce66f6394f0bd89c4fc6141947d.jpg" >
    <figcaption class="figcaption figcaptionnnnnnn">
            <span class="figcaption__name">Mike Tyson</span>
            <span class="figcaption__span">Manager</span>
        </figcaption>

        <img src="/img/gray-d51eab1f6172e46f0b8881edffd992ff.jpg">
        <figcaption class="figcaption">
                <span class="figcaption__name">Oliver Ingram</span>
                <span class="figcaption__span">Founder & CEO</span>
            </figcaption>

    
</figure>
<button class="second__images__btn second__images__btn__right" id="nextBtn">
    <i class="second__images__chevron second__images__chevron__right fas fa-chevron-right"></i>
</button>


</div>


</div>
<div class="third">

<div class="third__first"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
    <h3 class="third__first__heading">Located on beautiful Goose Island in the heart of Chicago.</h3>

</div>
<img class="third__img" src="/img/kitchen-2486092_960_720.jpg"             data-aos="fade-down"
data-aos-offset="200"
data-aos-delay="50"
data-aos-duration="1600"
>
<div class="third__location"
>
    <h4 class="third__4">Visit us</h4>
    <span class="third__adress">1229 N Branch St #121</span>
    <span class="third__city">Chicago, IL 60642</span>
</div>
</div>
`;

  document.querySelector(".sec").insertAdjacentHTML("beforeend", ab);
};
