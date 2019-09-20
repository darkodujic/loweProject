import * as btnView from "./btnView";

const getExplore = function() {

  const askq = document.querySelector(".question__detail__btn");
  const foot = document.querySelector(".footer__btn");
  const second = document.querySelector(".footer__second");
  const third = document.querySelector(".footer__third");
  const fourth = document.querySelector(".footer__fourth");
  const fifth = document.querySelector(".footer__fifth");


  try {
    second.addEventListener("click", () => {
      setTimeout(() => {
        btnView.deleteAbout();
        btnView.btn();
      }, 1500);
    });

    third.addEventListener("click", () => {
      setTimeout(() => {
        btnView.deleteAbout();
        btnView.pars();
      }, 1500);
    });

    fourth.addEventListener("click", () => {
      setTimeout(() => {
        btnView.deleteAbout();
        btnView.qw();
      }, 1500);
    });

    fifth.addEventListener("click", () => {
      setTimeout(() => {
        btnView.deleteAbout();
        btnView.renderQ();
      }, 1500);
    });

    askq.addEventListener("click", e => {
      setTimeout(() => {
        e.preventDefault();

        btnView.deleteAbout();
      }, 1500);
    });

    foot.addEventListener("click", e => {
      setTimeout(() => {
        btnView.deleteAbout();
        btnView.pars();
      }, 1500);
    });
  } catch (error) {
    console.log();
  }
};

getExplore();

window.addEventListener("click", e => {
  if (e.target.matches(".default__arrow")) {
    setTimeout(() => {
      window.location.href = "properties.html";
    }, 1500);
  }
});

window.addEventListener("click", e => {
  if (
    e.target.matches(".wholeprop__detail__button, .wholeprop__detail__button *")
  ) {
    setTimeout(() => {
      window.location.href = "fullprop.html";
    }, 1000);
  }
});

window.addEventListener("click", e => {
  if (e.target.matches(".section__second, .section__second *")) {
    setTimeout(() => {
      btnView.deleted();
      btnView.pars();
    }, 1500);
  } else if (e.target.matches(".section__fifth, .section__fifth *")) {
    setTimeout(() => {
      btnView.deleteff();
      btnView.renderQ();
    }, 1500);
  } else if (e.target.matches(".section__fourth, .section__fourth *")) {
    setTimeout(() => {
      const dare = document.querySelector(".sec");
      dare.parentElement.removeChild(dare);

      btnView.qw();
    }, 1500);

    //btnView.deleted();
    //btnView.qw();
  } else if (
    e.target.matches(".contact__detail__btn, contact__detail__btn *")
  ) {
    try {
      setTimeout(() => {
        const nameFild = document.getElementById("name");
        const lastname = document.getElementById("lastname");
        const email = document.getElementById("email");
        const check = document.getElementById("check");
        const quest = document.getElementById("quest");

        const isValidLast = lastname.checkValidity();
        const isValidFild = nameFild.checkValidity();
        const isEmail = email.checkValidity();
        const isCheck = check.checkValidity();
        const isQuest = quest.checkValidity();

        if (isValidFild && isValidLast && isEmail && isQuest && isCheck) {
          btnView.deleteCont();
          btnView.asn();
        }
      }, 1500);
    } catch (error) {
      console.log();
    }
  } else if (e.target.matches(".section__third, .section__third *")) {
  } else if (
    e.target.matches(".question__detail__btn, question__detail__btn *")
  ) {
    setTimeout(() => {
      btnView.deleteqw();
      btnView.renderQ();
    }, 1500);
  } else if (
    e.target.matches(".header__splash__second, .header__splash__second *")
  ) {
    setTimeout(() => {
      btnView.deleteAbout();
      btnView.pars();
    }, 1500);
  } else if (e.target.matches(".ceop__second, .ceop__second *")) {
  } else if (e.target.matches(".ceop__third, .ceop__third *")) {
    setTimeout(() => {
      btnView.deleteProperties();
      btnView.renderf();
    }, 1500);
  } else if (e.target.matches(".ceop__fourth, .ceop__fourth *")) {
    setTimeout(() => {
      const mare = document.querySelector(".seep");
      mare.parentElement.removeChild(mare);
      btnView.qw();
    }, 1500);
  } else if (e.target.matches(".ceop__fifth, .ceop__fifth *")) {
    setTimeout(() => {
      btnView.deleteProperties();
      btnView.renderQ();
    }, 1500);
  } else if (
    e.target.matches(".header__splash__fourth, .header__splash__fourth *")
  ) {
    setTimeout(() => {
      btnView.deleteAbout();
      btnView.qw();
    }, 1500);
  } else if (
    e.target.matches(".header__splash__fifth, .header__splash__fifth *")
  ) {
    setTimeout(() => {
      btnView.deleteAbout();
      btnView.renderQ();
    }, 1500);
  } else if (e.target.matches(".wholeprop__detail__button")) {
    setTimeout(() => {
      btnView.deletepars();
      btnView.renderProp();
    }, 2500);
  }
});

//    }else if (e.target.matches('.header__splash__second, .header__splash__second *')) {

//setTimeout(() => {
// btnView.deleteAbout();
//btnView.pars();
//}, 1500);

const navSlide = () => {
  const burger = document.querySelector(".header__sp");
  const nav = document.querySelector(".header__splash");
  const navlinks = document.querySelectorAll(".header__splash__ul li a");
  const abotu = document.querySelector(".about__search");
  const fullArray = document.querySelectorAll(
    ".header__sp, .header__splash__third, .header__splash__second, .header__splash__fourth, .header__splash__fifth"
  );

  try {
    abotu.addEventListener("click", () => {
      setTimeout(() => {
        nav.classList.toggle("header__splash--acitve");

        navlinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navslide 0.5s ease backwards ${index / 7}s`;
          }
        });
        burger.classList.toggle("dare");
        burger.classList.toggle("toggle");
      }, 1000);
    });
  } catch (error) {
    console.log();
  }

  try {
    fullArray.forEach(el => {
      el.addEventListener("click", () => {
        nav.classList.toggle("header__splash--acitve");

        navlinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navslide 0.5s ease backwards ${index / 7}s`;
          }
        });
        burger.classList.toggle("dare");
        burger.classList.toggle("toggle");
      });
    });
  } catch (error) {
    console.log();
  }
};

navSlide();

window.addEventListener("mouseover", e => {
  if (e.target.matches(".section")) {
    const maki = () => {
      const burger = document.querySelector(".section__first__head__sp");
      const navbar = document.querySelector(".section__first__head");
      const navLinks = document.querySelectorAll(
        ".section__first__head__ul li a"
      );

      burger.addEventListener("click", () => {
        navLinks.forEach((link, index) => {
          if (link.style.animation) {
            link.style.animation = "";
          } else {
            link.style.animation = `navslide 0.5s ease backwards ${index / 7}s`;
          }
        });
        navbar.classList.toggle("section__first__head--clas");
        burger.classList.toggle("dare");
        burger.classList.toggle("toggle");
      });
    };
    maki();
  }
});

window.addEventListener("click", e => {
  if (e.target.matches(".section")) {
    const burger = document.querySelector(".section__first__head__sp");
    const navbar = document.querySelector(".section__first__head");

    navbar.classList.toggle("section__first__head--clas");
    burger.classList.toggle("dare");
    burger.classList.toggle("toggle");
  }
});

window.addEventListener("mouseover", e => {
  if (e.target.matches(".ceop")) {
    document.querySelector(".icon").addEventListener("click", () => {
      document
        .querySelector(".ceop__about")
        .classList.toggle("ceop__about__add");
      document.querySelector(".icon").classList.toggle("icon__clicked");
    });
  }
});

window.addEventListener("mouseover", e => {
  if (e.target.matches(".second")) {
    const allSlide = document.querySelector(".sasa");
    const allImage = document.querySelectorAll(".sasa img");

    const prevBtn = document.querySelector("#prevBtn");
    const nextBtn = document.querySelector("#nextBtn");

    const size = allImage[0].clientWidth;

    let counter = 1;

    allSlide.style.transform = "translateX(" + -size * counter + "px)";

    nextBtn.addEventListener("click", () => {
      if (counter >= allImage.length - 4) return;
      allSlide.style.transition = "transform 0.4s ease-in-out";
      counter++;
      allSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    prevBtn.addEventListener("click", () => {
      if (counter <= 0) return;

      allSlide.style.transition = "transform 0.4s ease-in-out";
      counter--;
      allSlide.style.transform = "translateX(" + -size * counter + "px)";
    });

    allSlide.addEventListener("transitionend", () => {
      if (allImage[counter].id === "lastChild") {
        allSlide.style.transition = "all 0.2s ease-in-out";
        counter = allImage.length - 5;
        allSlide.style.transform = "translateX(" + -size * counter + "px)";
      }

      if (allImage[counter].id === "firstChild") {
        allSlide.style.transition = "all 0.2s ease-in-out";
        counter = allImage.length - counter - 3;
        allSlide.style.transform = "translateX(" + -size * counter + "px)";
      }
    });
  }
});

/*
function scroll(target, duration) {
    var target = document.querySelector(target);

    var targetPosition = target.getBoundingClientRect().top + window.scrollY;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;

  var startTime = null;


  function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      var timeElapsed = currentTime - startTime;
      var run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0,run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }



  requestAnimationFrame(animation);
}

var section1 = document.querySelector('.header__arrow');

section1.addEventListener('click', () => {
    
scroll('.default', 1000);
});


var section2 = document.querySelector('.header__splash__third');
const nav = document.querySelector('.header__splash');

section2.addEventListener('click', () => {
    scroll('.about', 1000);
  
})

*/

function scroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top + window.scrollY;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animate(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animate);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animate);
}


try {

  
  const fullArray = document.querySelectorAll('.footer__second, .footer__third, .footer__fourth, .footer__fifth, .about__search, .wholeprop__detail__button, .header__sp');

  fullArray.forEach(el => {
    el.addEventListener('click', () => {
      setTimeout(() => {
        scroll(".header", 1000);
      }, 700);
    })
  })

  var section1 = document.querySelector(".header__arrow");

  section1.addEventListener("click", () => {
    scroll(".about", 1000);
  });

  var section2 = document.querySelector(".header__splash__third");

  section2.addEventListener("click", () => {
    scroll(".about", 1000);
  });

  var section3 = document.querySelector(".about__btn");

  section3.addEventListener("click", () => {
    setTimeout(() => {
      scroll(".header", 1000);
    }, 2000);
  });

  var section4 = document.querySelector(".default__arrow");

  section4.addEventListener("click", () => {
    setTimeout(() => {
      scroll(".header", 1000);
    }, 2000);
  });

} catch (error) {
  console.log();
}


window.addEventListener("mouseover", e => {
  if (e.target.matches(".btprop .wholeprop__detail")) {
    var section12 = document.querySelectorAll(".wholeprop__detail__button");

    section12.forEach(el => {
      el.addEventListener("click", () => {
        setTimeout(() => {
          scroll(".newprop", 1000);
        }, 800);
      });
    });
  }
});
