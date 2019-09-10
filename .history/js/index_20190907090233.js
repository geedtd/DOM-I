const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//#region nav
const nav = document.getElementsByTagName('nav');
let nav_links = nav[0].querySelectorAll('a');
for (e = 0; e < nav_links.length; e++) {
  let t = e+1;
  nav_links[e].text = siteContent["nav"]["nav-item-"+t];
}
const home = document.createElement('a');
const gallery = document.createElement('a');
home.textContent = "Home";
home.setAttribute('href', '#');
gallery.textContent = "Gallery";
gallery.setAttribute('href', '#');
nav[0].prepend(home);
nav[0].appendChild(gallery);
nav_links = nav[0].querySelectorAll('a');
nav_links.forEach((a) => a.style.color = 'cyan');
//#endregion nav

//#region cta
const cta = document.getElementsByClassName('cta')[0];
const cta_text = cta.getElementsByClassName('cta-text')[0];
const cta_h1 = cta_text.querySelector('h1');
const cta_button = cta_text.querySelector('button');
const cta_image = cta.querySelector('img');

cta_h1.innerHTML = siteContent["cta"]["h1"].split(' ').join('<br/> ');
cta_button.textContent = siteContent["cta"]["button"];
cta_image.setAttribute('src', siteContent["cta"]["img-src"]);
//#endregion cta

//#region main-content
const main_content = document.getElementsByClassName('main-content')[0];
const top_content = main_content.querySelector('div.top-content');
const middle_image = main_content.querySelector('img.middle-img');
const bottom_content = main_content.querySelector('div.bottom-content');

let divs = top_content.querySelectorAll('div.text-content');
divs[0].querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
divs[0].querySelector('p').textContent = siteContent["main-content"]["features-content"];
divs[1].querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
divs[1].querySelector('p').textContent = siteContent["main-content"]["about-content"];

middle_image.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

divs = bottom_content.querySelectorAll('div.text-content');
divs[0].querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
divs[0].querySelector('p').textContent = siteContent["main-content"]["services-content"];
divs[1].querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
divs[1].querySelector('p').textContent = siteContent["main-content"]["product-content"];
divs[2].querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
divs[2].querySelector('p').textContent = siteContent["main-content"]["vision-content"];

divs = undefined;
//#endregion main-content

//#region contact
const contact = document.getElementsByClassName('contact')[0];
contact.querySelector('h4').textContent = siteContent["contact"]["contact-h4"];
const paragraphs = contact.querySelectorAll('p');
const address = siteContent["contact"]["address"];
let last_space = address.lastIndexOf(" ");
last_space = address.lastIndexOf(" ", last_space-1);
const address_multiline = address.slice(0, last_space) + "<br/>" + address.slice(last_space+1);
paragraphs[0].innerHTML = address_multiline;
paragraphs[1].textContent = siteContent["contact"]["phone"];
paragraphs[2].textContent = siteContent["contact"]["email"];
//#endregion contact

//#region footer
const footer = document.getElementsByTagName('footer')[0];
footer.querySelector('p').textContent = siteContent["footer"]["copyright"];
//#endregion footer

