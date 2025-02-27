import "./style.css";
import "./style.scss";

document.addEventListener("DOMContentLoaded", function () {
  const englishText = document.getElementById("englishtext");
  const arabicText = document.getElementById("arabtext");
  const container2 = document.querySelector(".container2");
  let screen_threeEle = document.querySelector(".screen_three");
  let title_scr = document.querySelector(".title-scr");
  const firstPage = document.querySelector("#firstpage");
  const secondPage = document.querySelector("#secondpage");
  const langSwitch = document.querySelector(".lang-switch");

  const instructionImg = document.querySelector(".instruct1");
  const leftCookie = document.querySelector("#leftcokie");
  const rightCookie = document.querySelector("#rightcokie");
  const text1 = document.querySelector(".text1");
  const star1 = document.querySelector(".star1");
  const text2 = document.querySelector(".text2");
  const star2 = document.querySelector(".star2");
  const text3 = document.querySelector(".text3");

  const selectionPage = document.querySelector("#selectionpage");
  const instructionPage = document.querySelector("#instructionpage");
  const recipePage = document.querySelector("#recipepage1");

  //btn clicks
  const letsGoBtn = document.querySelector(".letsgobtn");
  const selectionbckbtn = document.querySelector("#selectionbckbtn");
  const instructionbckbtn = document.querySelector("#instructionbckbtn");
  const allsetbtn = document.querySelector(".allsetbtn");
  const twistonitbtn = document.querySelector(".twistonitbtn");
  const reciepebckbtn = document.querySelector("#reciepebckbtn");

  const youGotThis = document.querySelector(".yougotthis");
  const together = document.querySelector(".together");

  //recipeclicks
  const belvitaclick = document.querySelector("#belvita");
  const Fudgeclick = document.querySelector("#Fudge");
  const peanutclick = document.querySelector("#peanut");
  const pistachioclick = document.querySelector("#pistachio");
  const Smoreclick = document.querySelector("#smores");
  const Strawberryclick = document.querySelector("#Strawberry");

  // Set English as default
  englishText.classList.add("active");
  let currentLang = "en";

  // Function to switch language
  function switchLanguage(lang) {
    let titleImage = document.querySelector(".titleimg img");

    currentLang = lang;

    if (lang === "en") {
      //firstpage changes
      document.querySelector(".titleimg img").src = "assets/Title.png";

      //secondpagechanges
      document.querySelector(".text1").innerHTML = "Gather the ingredients";
      document.querySelector(".text2").innerHTML =
        "Let the creme guide you <br> through every step";
      document.querySelector(".text3").innerHTML =
        "Finish desserts <br> with an Oreo twist";
      // Change font to English font
      document.querySelector(".instructionblock").style.fontFamily =
        "Plutoregular";
      document.querySelector(".instruct1 img").src =
        "assets/Instruction-text.png";
      document.querySelector(".letsgobtn img").src = "assets/Let's-go.png";

      //selectionpage change
      document.querySelector("#selectionbckbtn img").src = "assets/Back.png";
      document.querySelector("#selectionhmbtn img").src = "assets/Home.png";

      //instructionpagechnages
      document.querySelector(".getyour").innerHTML =
        "GET YOUR<br>INGREDIENTS READY";
      document.querySelector(".getyour").style.fontFamily = "PlutoBold";

      document.querySelector("#instructionbckbtn img").src = "assets/Back.png";
      document.querySelector("#instructionhmbtn img").src = "assets/Home.png";

      document.querySelector(".ingredientsimg img").src =
        "assets/English-Ingredients.png";
      document.querySelector(".allsetbtn img").src =
        "assets/All-set-button.png";

      //reciption page changes
      document.querySelector("#reciepebckbtn img").src = "assets/Back.png";
      document.querySelector("#recipehomebtn img").src = "assets/Home.png";
      document.querySelector(".twistonitbtn img").src =
        "assets/Twist-on-it.png";
      document.querySelector(".commonline").innerHTML =
        "LET ME TAKE YOU <br> TO WHAT'S NEXT";
      document.querySelector(".commonline").style.fontFamily = "PlutoBold"; // English font

      document.querySelector(".descriptiondiv1").style.fontFamily =
        "Plutoregular";
      document.querySelector(".descriptiondiv2").style.fontFamily =
        "Plutoregular";
      document.querySelector(".descriptiondiv3").style.fontFamily =
        "Plutoregular";
      document.querySelector(".descriptiondiv4").style.fontFamily =
        "Plutoregular";
      document.querySelector(".descriptiondiv5").style.fontFamily =
        "Plutoregular";
      document.querySelector(".descriptiondiv6").style.fontFamily =
        "Plutoregular";

      document.querySelector(".yougotthis img").src =
        "assets/You-got-this_E.png";
      document.querySelector(".together img").src =
        "assets/Its-coming-together_E.png";
    } else {
      //firstpage changes
      document.querySelector(".titleimg img").src = "assets/titleArab.png";

      //secondpagechanges
      document.querySelector(".text1").innerHTML = "اجمع المكونات";
      document.querySelector(".text2").innerHTML =
        "دع الكريمة ترشدك في كل خطوة";
      document.querySelector(".text3").innerHTML = "أنهي الحلويات بلمسة أوريو";
      // Change font to English font
      document.querySelector(".instructionblock").style.fontFamily =
        "ArabMedium1";
      document.querySelector(".instruct1 img").src =
        "assets/Instruction-text_A.png";
      document.querySelector(".letsgobtn img").src = "assets/Lets-go.png";

      //selectionpage change
      document.querySelector("#selectionbckbtn img").src = "assets/Back_A.png";
      document.querySelector("#selectionhmbtn img").src = "assets/Home_A.png";

      //instructionpage changes
      document.querySelector(".getyour").innerHTML = "جهّز مكوناتك";
      document.querySelector(".getyour").style.fontFamily = "ArabBold";

      document.querySelector("#instructionbckbtn img").src =
        "assets/Back_A.png";
      document.querySelector("#instructionhmbtn img").src = "assets/Home_A.png";
      document.querySelector(".ingredientsimg img").src =
        "assets/Arabic-Ingredients.png";
      document.querySelector(".allsetbtn img").src = "assets/All-set_A.png";

      //reciption page changes

      document.querySelector("#reciepebckbtn img").src = "assets/Back_A.png";
      document.querySelector("#recipehomebtn img").src = "assets/Home_A.png";
      document.querySelector(".twistonitbtn img").src =
        "assets/Twist-on-it_A.png";
      document.querySelector(".commonline").innerHTML =
        "دعني أساعدك في معرفة الخطوات التالية";
      document.querySelector(".commonline").style.fontFamily = "ArabBold";

      document.querySelector(".descriptiondiv1").style.fontFamily =
        "ArabMedium1";
      document.querySelector(".descriptiondiv2").style.fontFamily =
        "ArabMedium1";
      document.querySelector(".descriptiondiv3").style.fontFamily =
        "ArabMedium1";
      document.querySelector(".descriptiondiv4").style.fontFamily =
        "ArabMedium1";
      document.querySelector(".descriptiondiv5").style.fontFamily =
        "ArabMedium1";
      document.querySelector(".descriptiondiv6").style.fontFamily =
        "ArabMedium1";

      document.querySelector(".yougotthis img").src =
        "assets/You-got-this_A.png";
      document.querySelector(".together img").src =
        "assets/Its-coming-together_A.png";
    }

    titleImage.style.animation = "none";
    setTimeout(() => {
      titleImage.style.animation = "zoomBounce 1.2s ease-out";
    }, 10);
    titleImage.style.filter = "drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.4))";

    // Toggle active class
    if (lang === "en") {
      englishText.classList.add("active");
      arabicText.classList.remove("active");
    } else {
      arabicText.classList.add("active");
      englishText.classList.remove("active");
    }
  }

  function updateDescriptions(lang) {
    currentLang = lang; // Update the global language variable

    let descriptions = {
      en: {
        description1: [
          "1. Preheat your oven to 180 degrees",
          "2. Line your split Oreo’s cream side up on a baking tray",
          "1. Cut chocolate into chunks & place them on Oreo cream",
          "1. After topping Oreo with Marshmallow, close it with remaining Oreo half",
          "2. Bake for 5 mins & enjoy your gooey Oreo S'mores",
        ],
        description2: [
          "1. Preheat your oven to 180 degrees",
          "2. Line your split Oreo’s cream side up on a baking tray",
          "1. After taking 50g of Kunafa dough, add a tbsp of melted butter on top",
          "2. Bake for 15 minutes until golden. After that let it COOL",
          "1. Add 25g to 50g of pistachio paste to a piping bag and cut the tip. If you don’t have a piping bag you can also use a spoon.",
          "1. Line your split Oreos cream side up on a tray and pipe or place a large tbsp of pistachio paste in the middle.",
          "2. Top with Kunafa crumble and top with the remaining Oreo half to make a sandwich & Enjoy",
          "3. Addition: Sprinkle toasted pistachios",
        ],
        description3: [
          "1. Add 50g of peanut butter and 50g of cream cheese to your crushed Oreos and form into a dough.",
          "2. Dough might be sticky, pop it in the fridge for 5 min to ensure better handling",
          "1. Spread your dough into the bottom of a cake or tart pan with a removable base",
          "1. Add a layer of 4 tbsp of Strawberry jam.",
          "1. In a bowl, soften 250g of cream cheese, and add 100g of softly whipped cream and 40g of icing sugar to the cream cheese.",
          "2. Mix well until smooth and add a teaspoon of vanilla extract.",
          "3. Spread the cheesecake mixture into the base and freeze for 30 min.",
          "4. Decorate with Strawberries & Oreo to WOW your guests",
        ],
        description4: [
          "1. Add 50g of peanut butter and 50g of cream cheese to your crushed Oreos and form into a dough.",
          "2. Dough might be sticky, pop it in the fridge for 5 min to ensure better handling",
          "1. Roll your dough into bite-size balls. Freeze for 10 min",
          "1. Dip into your melted chocolate of choice and enjoy your Peanut Butter Oreo Truffles",
        ],
        description5: [
          "1. Line a square baking tray with parchment paper and keep the crushed Oreo on the side.",
          "1. Add 1 tbsp of melted butter and mix it into the Oreos.",
          "1. Add 1 can of condensed milk to 400g of Dark chocolate to a bowl",
          "2. Melt in the microwave.",
          "1. Add your crushed Oreos into the bowl with melted chocolate and condensed milk and mix well.",
          "2. Pour the mixture into a square tray",
          "3. Decorate the top with Golden Oreos and Milk Oreos and let it cool in the fridge for 30 min.",
          "4. Cut into squares, drizzle with caramel and enjoy your Oreo Fudge Squares",
        ],
        description6: [
          "1. Take some nice serving cups and sprinkle a good layer of Oreo crumble to the bottom.",
          "1. Add 1 tbsp of melted butter and mix it into the Oreos.",
          "1. Add a layer of caramel on top of the crushed Oreo",
          "1. Crush a pack of Belvita cookies into fine crumbs",
          "2. Add your crushed Belvita biscuits on top of the caramel to form a crunchy layer",
          "1. Add a layer of sliced bananas and top with whipped cream, Oreo biscuit and Belvita biscuits.",
          "2. Dig a spoon all the way to the bottom and savor the delicious Oreo Banoffee Cups.",
        ],
      },

      ar: {
        description1: [
          "١. سخِّن الفرن على حرارة 180 درجة",
          "٢. ضع بسكويت اوريو على صينية الخبز مع جهة الكريمة إلى الأعلى ",
          "٣. قطِّع الشوكولاتة إلى قطع وضعها على الكريمة",
          "٤. بعد إضافة المارشميلو إلى النصف الأول من اوريو، اجمعها بالنصف الثاني ",
          "٥. اخبزها لمدّة 5 دقائق واستمتع بأشهى سمورز مع بسكويت اوريو ",
        ],
        description2: [
          "١. سخّن الفرن على حرارة 180 درجة ",
          "٢. ضَع قطع الاوريو على صينية الخبز بحيث تكون جهة الكريمة للأعلى.",
          "٣. خذ 50 غرام من عجينة الكنافة وأضف ملعقة كبيرة من الزبدة المذابة",
          "٤. اخبزها لمدة 15 دقيقة حتى تصبح ذهبية اللون، ثم اتركها تبرد تمامًا",
          "٥. ضع 25 إلى 50 غرام من كريمة الفستق الحلبي في كيس تزيين، وقم بقصّ طرفه. إذا لم يتوفر لديك كيس تزيين، يمكنك استخدام ملعقة عادية",
          "٦. ضع قطع الاوريو على صينية بحيث تكون جهة الكريمة للأعلى، ثم أضف ملعقة كبيرة من كريمة الفستق الحلبي في منتصف الصينية",
          "٧. رشّ فتات الكنافة فوق الكريمة، ثم أغلق الساندويتش بالنصف الآخر من الاوريو واستمتع بالمذاق الرائع! ❤️",
          "٨. إضافة لذيذة: رش القليل من الفستق المحمّص على الوجه لمزيد من القرمشة",
        ],
        description3: [
          "١. امزج 50 غرام من زبدة الفول السوداني مع 50 غرام من الجبنة الكريمية، واخلطهما جيدًا مع الاوريو المطحون حتى تتشكل لديك عجينة",
          "٢. إذا كانت العجينة لزجة، ضعها في الثلاجة لمدة 5 دقائق لتسهيل التعامل معها",
          "٣. افرد العجينة في قاع قالب تارت أو كيك قابل للإزالة، واضغط عليها حتى تتماسك",
          "٤. ضع 4 ملاعق كبيرة من مربى الفراولة ووزّعها بالتساوي فوق القاعدة",
          "٥. في وعاء، اخفق 250 غرام من الجبنة الكريمية حتى تصبح ناعمة، أضف 100 غرام من الكريمة المخفوقة برفق و40 غرام من السكر البودرة",
          "٦. اخلط جيدًا حتى يصبح المزيج كريميًا ثم أضف ملعقة صغيرة من مستخلص الفانيليا وامزج جيدًا",
          "٧. وزّع مزيج التشيز كيك فوق القاعدة بالتساوي، ثم ضعها في الفريزر لمدة 30 دقيقة حتى تتماسك",
          "٨. زيّنها بشرائح الفراولة وقطع الاوريو لتحصل على حلوى تبهر ضيوفك",
        ],
        description4: [
          "١. امزج 50 غرام من زبدة الفول السوداني مع 50 غرام من الجبنة الكريمية، واخلطهما جيدًا مع الاوريو المطحون حتى تتشكل لديك عجينة",
          "٢. إذا كانت العجينة لزجة، ضعها في الثلاجة لمدة 5 دقائق لتسهيل التعامل معها",
          "٣. خذ أجزاء صغيرة من العجينة ولفّها بين يديك لتشكيل كرات صغيرة بحجم اللقمة، ثم ضعها في الفريزر لمدة 10 دقائق حتى تتماسك",
          "٤. قم بإذابة الشوكولاتة المفضلة لديك، ثم غمّس الكرات فيها حتى تتغطى بالكامل واستمتع بترافل زبدة الفول السوداني واوريو اللذيذ",
        ],
        description5: [
          "١. ضع ورق زبدة في صينية مربعة واترك فتات الاوريو جانبًا",
          "٢. ذوِّب ملعقة كبيرة من الزبدة ثم امزجها جيدًا مع فتات الاوريو",
          "٣. في وعاء، امزج 400 غرام من الشوكولاتة الداكنة مع علبة واحدة من الحليب المكثّف المحلى",
          "٤. ذوِّب الخليط في المايكرويف",
          "٥. أضف الاوريو المطحون إلى خليط الشوكولاتة والحليب المكثف، وحرّكه جيدًا حتى يمتزج تمامًا",
          "٦. اسكب الخليط في الصينية المبطنة ووزّعه بالتساوي",
          "٧. زيّن السطح بقطع اوريو الذهبية واوريو بالحليب ثم ضع الصينية في الثلاجة لمدة 30 دقيقة حتى تتماسك",
          "٨. قطّع الفادج إلى مربعات متساوية، ثم أضف بعض الكراميل لمذاق أغنى واستمتع بقطعة شهية من اوريو فادج سكويرز",
        ],
        description6: [
          "١. ضع كؤوس تقديم جميلة، ورشّ طبقة سخية من فتات الاوريو في القاع",
          "٢. ذوِّب ملعقة كبيرة من الزبدة ثم امزجها جيدًا مع فتات الاوريو",
          "٣. ضع طبقة من الكراميل فوق فتات الاوريو في الكأس",
          "٤. اطحن علبة من بسكويت بيلفيتا حتى تصبح قطعًا صغيرة",
          "٥. رشّ بسكويت بيلفيتا المطحون فوق طبقة الكراميل لتشكيل طبقة مقرمشة",
          "٦. قطّع الموز إلى شرائح رقيقة، ثم ضع طبقة منها على بسكويت اوريو وبسكويت بيلفيتا",
          "٧. خذ ملعقتك واغرفها إلى قاع الكأس معًا للاستمتاع بهذه الحلوى الشهية",
        ],
      },
    };

    // Function to update elements dynamically
    function updateText(selector, texts) {
      let elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        if (texts[index]) {
          element.textContent = texts[index];
        }
      });
    }

    // Ensure the DOM is ready before applying font-family
    updateText(
      ".descriptiondiv1 .Otext1, .Otext2, .Otext3, .Otext4, .Otext5",
      descriptions[lang].description1
    );
    updateText(
      ".descriptiondiv2 .Dtext1, .Dtext2, .Dtext3, .Dtext4, .Dtext5, .Dtext6, .Dtext7, .Dtext8",
      descriptions[lang].description2
    );
    updateText(
      ".descriptiondiv3 .Stext1, .Stext2, .Stext3, .Stext4, .Stext5, .Stext6, .Stext7, .Stext8",
      descriptions[lang].description3
    );
    updateText(
      ".descriptiondiv4 .Ptext1, .Ptext2, .Ptext3, .Ptext4",
      descriptions[lang].description4
    );
    updateText(
      ".descriptiondiv5 .Ftext1, .Ftext2, .Ftext3, .Ftext4, .Ftext5, .Ftext6, .Ftext7, .Ftext8",
      descriptions[lang].description5
    );
    updateText(
      ".descriptiondiv6 .Btext1, .Btext2, .Btext3, .Btext4, .Btext5, .Btext6, .Btext7",
      descriptions[lang].description6
    );
  }

  // Event Listeners
  englishText.addEventListener("click", function () {
    switchLanguage("en");
    updateDescriptions("en");
  });

  arabicText.addEventListener("click", function () {
    switchLanguage("ar");
    updateDescriptions("ar");
  });

  document.querySelector(".discover").addEventListener("click", function () {
    let firstPage = document.getElementById("firstpage");
    // let discoverPage = document.getElementById("discoverpage");
    screen_threeEle.classList.remove("active");
    document.querySelector(".container2").style.display = "block";
    // Show first page and hide discover page
    firstPage.style.display = "flex";
    // discoverPage.style.display = "none";

    // Restart animation flow
    setTimeout(() => {
      firstPage.classList.add("fade-out");

      setTimeout(() => {
        firstPage.style.display = "none";
        document.querySelector(".lang-switch").style.display = "none";
        document.querySelector(".logo").style.display = "none";

        document.querySelector(".container2").style.backgroundImage =
          "url('./assets/Instruction-Base-bg-placeholder.png')";
        document.getElementById("secondpage").style.display = "flex";
        document.getElementById("secondpage").classList.add("fade-in");

        // Restart animations step by step
        setTimeout(
          () => document.querySelector(".instruct1").classList.add("fade-in"),
          200
        );
        setTimeout(
          () => document.querySelector("#leftcokie").classList.add("shake-in"),
          400
        );
        setTimeout(
          () => document.querySelector("#rightcokie").classList.add("shake-in"),
          400
        );
        setTimeout(
          () => document.querySelector(".text1").classList.add("fade-in"),
          700
        );
        setTimeout(
          () => document.querySelector(".star1").classList.add("fade-in"),
          900
        );
        setTimeout(
          () => document.querySelector(".text2").classList.add("fade-in"),
          1100
        );
        setTimeout(
          () => document.querySelector(".star2").classList.add("fade-in"),
          1300
        );
        setTimeout(
          () => document.querySelector(".text3").classList.add("fade-in"),
          1500
        );
        setTimeout(
          () => document.querySelector(".letsgobtn").classList.add("fade-in"),
          1700
        );
      }, 500);
    }, 2000);
  });

  letsGoBtn.addEventListener("click", function () {
    secondPage.classList.remove("fade-in");
    secondPage.classList.add("fade-out");

    setTimeout(() => {
      secondPage.style.display = "none";
      selectionPage.style.display = "flex";
      container2.style.backgroundImage = "url('./assets/BG.png')";

      // Ensure page fades in correctly
      selectionPage.classList.remove("fade-out");
      selectionPage.classList.add("fade-in");

      setTimeout(() => {
        const images = document.querySelectorAll(".withscrolldiv img");

        // Track whether the image has already been animated
        images.forEach((img, index) => {
          if (!img.dataset.animated) {
            // Only animate if not already done
            setTimeout(() => {
              img.classList.add("fade-in");
              img.dataset.animated = "true"; // Mark as animated
            }, index * 400);
          }
        });
      }, 300);
    }, 200);
  });

  selectionbckbtn.addEventListener("click", function () {
    selectionPage.classList.remove("fade-in");
    selectionPage.classList.add("fade-out");

    setTimeout(() => {
      selectionPage.style.display = "none";
      secondPage.style.display = "flex";
      container2.style.backgroundImage =
        "url('./assets/Instruction-Base-bg-placeholder.png')";

      // Reset animations
      selectionPage.classList.remove("fade-out");
      secondPage.classList.remove("fade-out");
      secondPage.classList.add("fade-in");
    }, 500);
  });

  instructionbckbtn.addEventListener("click", function () {
    instructionPage.classList.remove("fade-in");
    instructionPage.classList.add("fade-out");

    setTimeout(() => {
      instructionPage.style.display = "none";
      selectionPage.style.display = "flex";
      document.querySelector(".logo").style.display = "none";
      container2.style.backgroundImage = "url('./assets/BG.png')";

      // Reset animations
      instructionPage.classList.remove("fade-out");
      selectionPage.classList.remove("fade-out");
      selectionPage.classList.add("fade-in");
    }, 500);
  });

  allsetbtn.addEventListener("click", function () {
    instructionPage.classList.add("zoom-fade-out");

    setTimeout(() => {
      instructionPage.style.display = "none";

      recipePage.style.display = "flex";
      recipePage.classList.add("slide-up-fade-in");
      document.querySelector(".logo").style.display = "block";

      const elements = document.querySelectorAll(".recipepage1container > div");

      elements.forEach((el, index) => {
        setTimeout(() => {
          el.classList.add("slide-in-staggered");
        }, index * 200);
      });

      let titleAnim = document.querySelector("#leftright");
      let TittleAnimCount = 1;

      titleAnim.style.animation = "none";
      titleAnim.offsetHeight;
      titleAnim.style.animation = "";

      function TitlteAnimStart() {
        if (TittleAnimCount <= 9) {
          titleAnim.className = "oreo-left-to-right-0" + TittleAnimCount;
        } else {
          titleAnim.className = "oreo-left-to-right-" + TittleAnimCount;
        }

        if (TittleAnimCount === 18) {
          TittleAnimCount = 1;
        }

        TittleAnimCount++;
      }

      if (window.animationInterval) clearInterval(window.animationInterval);
      window.animationInterval = setInterval(TitlteAnimStart, 100);
    }, 700);
  });
  function handleSelectionClick(imageId, descriptionDivClass) {
    const selectedImage = document.getElementById(imageId);
    const descriptionDiv = document.querySelector(descriptionDivClass);
    const allImages = document.querySelectorAll(".withscrolldiv img");
    const allDescriptionDivs = document.querySelectorAll(
      "[class^='descriptiondiv']"
    ); // Select all description divs

    if (!selectedImage) {
      console.error("Selected image not found:", imageId);
      return;
    }

    allImages.forEach((img) => img.classList.remove("selected-effect"));
    selectedImage.classList.add("selected-effect");

    allImages.forEach((img) => {
      if (img !== selectedImage) {
        img.style.pointerEvents = "none";
        img.style.opacity = "0.5";
      }
    });

    setTimeout(() => {
      selectionPage.classList.add("fade-out");

      setTimeout(() => {
        selectionPage.style.display = "none";
        container2.style.backgroundImage =
          "url('./assets/BG-landing-page.png')";

        instructionPage.style.display = "flex";
        instructionPage.classList.add("show-instruction");

        allDescriptionDivs.forEach((div) => (div.style.display = "none"));

        if (descriptionDiv) {
          descriptionDiv.style.display = "block";
        } else {
          console.error("Description div not found:", descriptionDivClass);
        }

        setTimeout(() => {
          allImages.forEach((img) => {
            img.style.pointerEvents = "auto";
            img.style.opacity = "1";
            document.querySelector(".logo").style.display = "block";
          });
        }, 500);
      }, 500);
    }, 1000);
  }

  // Event listeners for each selection
  document.getElementById("belvita").addEventListener("click", function () {
    handleSelectionClick("belvita", ".descriptiondiv6");
    document.querySelector(".cokiename").textContent =
      "OREO x Belvita Banoffee Cups";
  });

  document.getElementById("Fudge").addEventListener("click", function () {
    handleSelectionClick("Fudge", ".descriptiondiv5");
    document.querySelector(".cokiename").textContent = "Oreo Fudge Squares";
  });

  document.getElementById("peanut").addEventListener("click", function () {
    handleSelectionClick("peanut", ".descriptiondiv4");
    document.querySelector(".cokiename").textContent =
      "Peanut Butter Oreo Truffles";
  });

  document.getElementById("pistachio").addEventListener("click", function () {
    handleSelectionClick("pistachio", ".descriptiondiv2");
    document.querySelector(".cokiename").textContent = "Oreo Dubai Chocolate";
  });

  document.getElementById("smores").addEventListener("click", function () {
    handleSelectionClick("smores", ".descriptiondiv1");
    document.querySelector(".cokiename").textContent = "Oreo Smore's";
  });

  document.getElementById("Strawberry").addEventListener("click", function () {
    handleSelectionClick("Strawberry", ".descriptiondiv3");
    document.querySelector(".cokiename").textContent =
      "Oreo Strawberry Cheesecake";
  });

  let twistcount = 0;
  let twistTapped = false;
  let toggleState = true; // For alternating the images

  twistonitbtn.addEventListener("click", function () {
    twistcount++;
    twistTapped = true;

    let animationtitile = document.querySelector("#leftright");
    animationtitile.style.display = "none";

    if (toggleState) {
      youGotThis.style.display = "block";
      together.style.display = "none";
    } else {
      youGotThis.style.display = "none";
      together.style.display = "block";
    }
    toggleState = !toggleState;

    const activeDescriptionDiv = document.querySelector(
      "[class^='descriptiondiv'][style*='display: block']"
    );

    if (!activeDescriptionDiv) {
      console.error("No active description div found.");
      return;
    }

    const scrolldivs = activeDescriptionDiv.querySelectorAll(
      "[class^='scrolldiv']"
    );

    scrolldivs.forEach((div) => (div.style.display = "none"));

    if (twistcount === 1) {
      const firstDivToHide = document.querySelector(".commonline");
      if (firstDivToHide) {
        firstDivToHide.style.display = "none";
      }
    }

    if (twistcount <= scrolldivs.length) {
      scrolldivs[twistcount - 1].style.display = "block";

      let isLeftAnimation = twistcount % 2 === 1;
      let animationId = isLeftAnimation ? "leftanima" : "rightanima";
      let animationType = isLeftAnimation ? "left" : "right";

      let leftAnim = document.querySelector("#leftanima");
      let rightAnim = document.querySelector("#rightanima");

      document.querySelector(".twistleft").style.display = "none";
      document.querySelector(".twistright").style.display = "none";

      leftAnim.style.display = isLeftAnimation ? "block" : "none";
      rightAnim.style.display = isLeftAnimation ? "none" : "block";

      let titleAnim = document.querySelector(`#${animationId}`);
      let animCount = 1;

      function startAnimation() {
        let classSuffix = animCount <= 9 ? "0" + animCount : animCount;
        titleAnim.className = `oreo-${animationType}-${classSuffix}`;

        if (animCount === 20) {
          clearInterval(animationInterval);
          updateTwistImage();
        }

        animCount++;
      }

      let animationInterval = setInterval(startAnimation, 100);
      function updateTwistImage() {
        let twistDiv = document.querySelector(
          isLeftAnimation ? ".twistleft" : ".twistright"
        );
        let twistImage = twistDiv ? twistDiv.querySelector("img") : null;

        if (!twistDiv || !twistImage) return;

        let recipeImages = {
          en: {
            1: [
              "Recipie-01_Step-1.png",
              "Recipie-01_Step-2.png",
              "Recipie-01_Step-3.png",
            ],
            2: [
              "Recipie-02_Step-1.png",
              "Recipie-02_Step-2.png",
              "Recipie-02_Step-3.png",
              "Recipie-02_Step-4.png",
            ],
            3: [
              "Recipie-03_Step-1.png",
              "Recipie-03_Step-2.png",
              "Recipie-03_Step-3.png",
              "Recipie-03_Step-4.png",
              "Recipie-03_Step-5.png",
            ],
            4: [
              "Recipie-04_Step-1.png",
              "Recipie-04_Step-2.png",
              "Recipie-04_Step-3.png",
              "Recipie-04_Step-4.png",
            ],
            5: [
              "Recipie-05_Step-1.png",
              "Recipie-05_Step-2.png",
              "Recipie-05_Step-3.png",
              "Recipie-05_Step-4.png",
            ],
            6: [
              "Recipie-06_Step-1.png",
              "Recipie-06_Step-2.png",
              "Recipie-06_Step-3.png",
              "Recipie-06_Step-4.png",
              "Recipie-06_Step-5.png",
            ],
          },
          ar: {
            1: [
              "Recipie-01_Step-1_A.png",
              "Recipie-01_Step-2_A.png",
              "Recipie-01_Step-3_A.png",
            ],
            2: [
              "Recipie-02_Step-1_A.png",
              "Recipie-02_Step-2_A.png",
              "Recipie-02_Step-3_A.png",
              "Recipie-02_Step-4_A.png",
            ],
            3: [
              "Recipie-03_Step-1_A.png",
              "Recipie-03_Step-2_A.png",
              "Recipie-03_Step-3_A.png",
              "Recipie-03_Step-4_A.png",
              "Recipie-03_Step-5_A.png",
            ],
            4: [
              "Recipie-04_Step-1_A.png",
              "Recipie-04_Step-2_A.png",
              "Recipie-04_Step-3_A.png",
              "Recipie-04_Step-4_A.png",
            ],
            5: [
              "Recipie-05_Step-1_A.png",
              "Recipie-05_Step-2_A.png",
              "Recipie-05_Step-3_A.png",
              "Recipie-05_Step-4_A.png",
            ],
            6: [
              "Recipie-06_Step-1_A.png",
              "Recipie-06_Step-2_A.png",
              "Recipie-06_Step-3_A.png",
              "Recipie-06_Step-4_A.png",
              "Recipie-06_Step-5_A.png",
            ],
          },
        };

        let currentRecipe = parseInt(
          activeDescriptionDiv.className.match(/\d+/)[0]
        );

        if (
          recipeImages[currentLang][currentRecipe] &&
          twistcount <= recipeImages[currentLang][currentRecipe].length
        ) {
          let newImageSrc = `assets/${
            recipeImages[currentLang][currentRecipe][twistcount - 1]
          }`;

          setTimeout(() => {
            twistImage.src = newImageSrc;
            twistDiv.style.display = "block";
          }, 200);
        }
      }
    } else {
      toggleState = false; // For alternating the images

      console.log("✅ All steps are completed.");
    }
  });
  reciepebckbtn.addEventListener("click", function () {
    const instructionPage = document.getElementById("instructionpage");
    const recipePage = document.getElementById("recipepage1");

    const activeDescriptionDiv = document.querySelector(
      "[class^='descriptiondiv'][style*='display: block']"
    );

    if (!activeDescriptionDiv) {
      console.error("No active description div found.");
      return;
    }

    const scrolldivs = activeDescriptionDiv.querySelectorAll(
      "[class^='scrolldiv']"
    );

    if (!twistTapped) {
      recipePage.style.display = "none";
      instructionPage.style.display = "flex";
    } else if (twistcount === 1) {
      const allScrollDivs = document.querySelectorAll("[class^='scrolldiv']");
      allScrollDivs.forEach((div) => {
        div.style.display = "none";
      });

      const firstDivToShow = document.querySelector(".commonline");
      if (firstDivToShow) {
        firstDivToShow.style.display = "block";
      }

      let leftAnim = document.querySelector("#leftanima");
      let rightAnim = document.querySelector("#rightanima");

      // ✅ **Hide twist images before animation**
      document.querySelector(".twistleft").style.display = "none";
      document.querySelector(".twistright").style.display = "none";

      if (leftAnim) {
        leftAnim.style.display = "block";
        leftAnim.className = "oreo-left-01";
      }

      if (rightAnim) {
        rightAnim.style.display = "none";
        rightAnim.className = "oreo-right-01";
      }

      // ✅ **Show the twist image only after animation completes**
      setTimeout(() => {
        if (twistcount % 2 === 1) {
          document.querySelector(".twistleft").style.display = "block";
        } else {
          document.querySelector(".twistright").style.display = "block";
        }
      }, 2000); // Adjust this time to match animation duration

      twistcount = 0;
      twistTapped = false;
    } else if (twistcount > 1 && twistcount <= scrolldivs.length) {
      scrolldivs[twistcount - 1].style.display = "none";
      twistcount--;

      scrolldivs[twistcount - 1].style.display = "block";

      let isLeftAnimation = twistcount % 2 === 1;
      let animationId = isLeftAnimation ? "leftanima" : "rightanima";
      let animationType = isLeftAnimation ? "left" : "right";

      let leftAnim = document.querySelector("#leftanima");
      let rightAnim = document.querySelector("#rightanima");

      // ✅ **Hide twist images before animation starts**
      document.querySelector(".twistleft").style.display = "none";
      document.querySelector(".twistright").style.display = "none";

      leftAnim.style.display = isLeftAnimation ? "block" : "none";
      rightAnim.style.display = isLeftAnimation ? "none" : "block";

      let titleAnim = document.querySelector(`#${animationId}`);
      let TitleAnimCount = 1;

      function TitleAnimStart() {
        let classSuffix =
          TitleAnimCount <= 9 ? "0" + TitleAnimCount : TitleAnimCount;
        titleAnim.className = `oreo-${animationType}-${classSuffix}`;

        if (TitleAnimCount === 20) {
          clearInterval(Intervals);

          // ✅ **After animation, show correct twist image**
          setTimeout(() => {
            if (isLeftAnimation) {
              document.querySelector(".twistleft").style.display = "block";
            } else {
              document.querySelector(".twistright").style.display = "block";
            }
          }, 200);
        }

        TitleAnimCount++;
      }

      const Intervals = setInterval(TitleAnimStart, 100);
    } else if (twistcount >= scrolldivs.length) {
      console.log("🔄 Resetting everything...");

      twistcount = 0;
      twistTapped = false;

      scrolldivs.forEach((div) => (div.style.display = "none"));

      const firstDivToShow = document.querySelector(".commonline");
      if (firstDivToShow) {
        firstDivToShow.style.display = "block";
      }

      let leftAnim = document.querySelector("#leftanima");
      let rightAnim = document.querySelector("#rightanima");

      if (leftAnim) {
        leftAnim.style.display = "none";
      }

      if (rightAnim) {
        rightAnim.style.display = "none";
      }

      document.querySelector(".twistleft").style.display = "none";
      document.querySelector(".twistright").style.display = "none";

      let animationTitle = document.querySelector("#leftright");
      animationTitle.style.display = "block";

      console.log("✅ Everything reset to start fresh.");
    }
  });

  //   reciepebckbtn.addEventListener("click", function () {
  //     const instructionPage = document.getElementById("instructionpage");
  //     const recipePage = document.getElementById("recipepage1");

  //     const activeDescriptionDiv = document.querySelector(
  //       "[class^='descriptiondiv'][style*='display: block']"
  //     );

  //     if (!activeDescriptionDiv) {
  //       console.error("No active description div found.");
  //       return;
  //     }

  //     const scrolldivs = activeDescriptionDiv.querySelectorAll(
  //       "[class^='scrolldiv']"
  //     );

  //     if (!twistTapped) {
  //       recipePage.style.display = "none";
  //       instructionPage.style.display = "flex";
  //     } else if (twistcount === 1) {
  //       const allScrollDivs = document.querySelectorAll("[class^='scrolldiv']");
  //       allScrollDivs.forEach((div) => {
  //         div.style.display = "none";
  //       });

  //       const firstDivToShow = document.querySelector(".commonline");
  //       if (firstDivToShow) {
  //         firstDivToShow.style.display = "block";
  //       }

  //       let leftAnim = document.querySelector("#leftanima");
  //       let rightAnim = document.querySelector("#rightanima");

  //       if (leftAnim) {
  //         leftAnim.style.display = "block";
  //         leftAnim.className = "oreo-left-01";
  //       }

  //       if (rightAnim) {
  //         rightAnim.style.display = "none";
  //         rightAnim.className = "oreo-right-01";
  //       }

  //       document.querySelector(".twistleft").style.display = "none";
  //       document.querySelector(".twistright").style.display = "none";

  //       twistcount = 0;
  //       twistTapped = false;
  //     } else if (twistcount > 1 && twistcount <= scrolldivs.length) {
  //       scrolldivs[twistcount - 1].style.display = "none";
  //       twistcount--;

  //       scrolldivs[twistcount - 1].style.display = "block";

  //       let isLeftAnimation = twistcount % 2 === 1;
  //       let animationId = isLeftAnimation ? "leftanima" : "rightanima";
  //       let animationType = isLeftAnimation ? "left" : "right";

  //       let leftAnim = document.querySelector("#leftanima");
  //       let rightAnim = document.querySelector("#rightanima");

  //       leftAnim.style.display = isLeftAnimation ? "block" : "none";
  //       rightAnim.style.display = isLeftAnimation ? "none" : "block";

  //       let twistLeft = document.querySelector(".twistleft");
  //       let twistRight = document.querySelector(".twistright");

  //       twistLeft.style.display = isLeftAnimation ? "block" : "none";
  //       twistRight.style.display = isLeftAnimation ? "none" : "block";

  //       let titleAnim = document.querySelector(`#${animationId}`);
  //       let TitleAnimCount = 1;

  //       function TitleAnimStart() {
  //         let classSuffix =
  //           TitleAnimCount <= 9 ? "0" + TitleAnimCount : TitleAnimCount;
  //         titleAnim.className = `oreo-${animationType}-${classSuffix}`;

  //         if (TitleAnimCount === 20) {
  //           clearInterval(Intervals);
  //         }
  //         TitleAnimCount++;
  //       }

  //       const Intervals = setInterval(TitleAnimStart, 100);
  //     } else if (twistcount >= scrolldivs.length) {
  //       console.log("🔄 Resetting everything...");

  //       twistcount = 0;
  //       twistTapped = false;

  //       scrolldivs.forEach((div) => (div.style.display = "none"));

  //       const firstDivToShow = document.querySelector(".commonline");
  //       if (firstDivToShow) {
  //         firstDivToShow.style.display = "block";
  //       }

  //       let leftAnim = document.querySelector("#leftanima");
  //       let rightAnim = document.querySelector("#rightanima");

  //       if (leftAnim) {
  //         leftAnim.style.display = "none";
  //       }

  //       if (rightAnim) {
  //         rightAnim.style.display = "none";
  //       }

  //       document.querySelector(".twistleft").style.display = "none";
  //       document.querySelector(".twistright").style.display = "none";

  //       let animationTitle = document.querySelector("#leftright");
  //       animationTitle.style.display = "block";

  //       console.log("✅ Everything reset to start fresh.");
  //     }
  //   });
  function goToDiscover() {
    document.getElementById("firstpage").style.display = "none";
    document.getElementById("secondpage").style.display = "none";
    document.getElementById("selectionpage").style.display = "none";
    document.getElementById("instructionpage").style.display = "none";
    document.getElementById("recipepage1").style.display = "none";
    document.querySelector(".lang-switch").style.display = "block";
    document.querySelector(".container2").style.display = "none";
    title_scr.classList.add("active");
    document.querySelector(".logo").style.display = "block";
    container2.style.backgroundImage = "url('./assets/BG-landing-page.png')";
    screen_threeEle.classList.add("active");
    document.querySelector(".header").classList.add("active");
    resetEverything();
  }

  document
    .querySelector("#selectionhmbtn")
    .addEventListener("click", goToDiscover);
  document
    .querySelector("#instructionhmbtn")
    .addEventListener("click", goToDiscover);
  document
    .querySelector("#recipehomebtn")
    .addEventListener("click", goToDiscover);

  function resetEverything() {
    console.log("🔄 Resetting everything for Discover Page...");

    twistcount = 0;
    twistTapped = false;
    toggleState = true;

    document.querySelector("#leftright").style.display = "block";
    document.querySelector(".yougotthis").style.display = "none";
    document.querySelector(".together").style.display = "none";
    document.querySelector(".twistleft").style.display = "none";
    document.querySelector(".twistright").style.display = "none";

    document.querySelectorAll("[class^='scrolldiv']").forEach((div) => {
      div.style.display = "none";
    });

    const firstDivToShow = document.querySelector(".commonline");
    if (firstDivToShow) {
      firstDivToShow.style.display = "block";
    }

    let leftAnim = document.querySelector("#leftanima");
    let rightAnim = document.querySelector("#rightanima");

    if (leftAnim) leftAnim.style.display = "none";
    if (rightAnim) rightAnim.style.display = "none";

    let elementsToReset = document.querySelectorAll(
      ".fade-in, .fade-out, .shake-in, .zoom-fade-out, .slide-up-fade-in"
    );
    elementsToReset.forEach((el) =>
      el.classList.remove(
        "fade-in",
        "fade-out",
        "shake-in",
        "zoom-fade-out",
        "slide-up-fade-in"
      )
    );

    console.log("✅ Reset complete. Everything is fresh.");
  }
  //   function goToDiscover() {
  //     document.getElementById("firstpage").style.display = "none";
  //     document.getElementById("secondpage").style.display = "none";
  //     document.getElementById("selectionpage").style.display = "none";
  //     document.getElementById("instructionpage").style.display = "none";
  //     document.getElementById("recipepage1").style.display = "none";
  //     document.querySelector(".lang-switch").style.display = "block";
  //     document.querySelector(".container2").style.display = "none";
  //     document.querySelector(".header").classList.add("active");
  //     // document.getElementById("discoverpage").style.display = "flex";
  //     document.querySelector(".logo").style.display = "block";
  //     container2.style.backgroundImage = "url('./assets/BG-landing-page.png')";
  //     screen_threeEle.classList.add("active");
  //     resetAnimations();
  //   }

  //   document
  //     .querySelector("#selectionhmbtn")
  //     .addEventListener("click", goToDiscover);
  //   document
  //     .querySelector("#instructionhmbtn")
  //     .addEventListener("click", goToDiscover);
  //   document
  //     .querySelector("#recipehomebtn")
  //     .addEventListener("click", goToDiscover);

  //   function resetAnimations() {
  //     let elementsToReset = document.querySelectorAll(
  //       ".fade-in, .fade-out, .shake-in, .zoom-fade-out, .slide-up-fade-in"
  //     );

  //     elementsToReset.forEach((el) => {
  //       el.classList.remove(
  //         "fade-in",
  //         "fade-out",
  //         "shake-in",
  //         "zoom-fade-out",
  //         "slide-up-fade-in",
  //         "selected-effect"
  //       );
  //     });
  //   }
});
