import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from "gsap";
import {
    enterPageHome,
    enterPageAbout,
    enterPageProductGallery,
    enterPageProduct,
    enterPageShop,
    enterPageDownloads,
    enterPageContacts,
    enterPageBlog
} from "./res";
import {slider, modalOrder, tabToggle, menuMobile} from "./res";

/*
slider();
tabToggle();
modalOrder();
menuMobile();
*/

let lastClicked;

barba.hooks.afterLeave(data => {
    lastClicked = data.trigger;
});

barba.hooks.enter(data => {
    window.scrollTo(0,0);
    let target = data.next.container;
    console.log(target);
    menuMobile(target);
    modalOrder(target);
    tabToggle(target);
    slider(target);
});

barba.hooks.once(data => {
    window.scrollTo(0,0);
    let target = data.next.container;
    menuMobile(target);
    modalOrder(target);
    tabToggle(target);
    slider(target);
});

barba.use(barbaCss);

barba.init({

    transitions: [
        {
            name: 'default',
            leave: ({current, next}) => {
                return gsap.to(current.container,{ opacity: 0, duration: 0.5 });
            },
        },

        {
            name: 'homePage',
            to: {
                namespace: ['home']
            },
            once({next}) {
                enterPageHome(next.container)
            },
            enter({next}) {
                enterPageHome(next.container)
            },
        },

        {
            name: 'fromProductsToItem',
            from: {
                namespace: ['home','products']
            },
            to: {
                namespace: ['prod']
            },
            afterLeave: ({current, next}) => {
                return new Promise( resolve => {
                    const  zoom = () => {

                        let tl = gsap.timeline();
                        let left = lastClicked.getBoundingClientRect().left;
                        let top = lastClicked.getBoundingClientRect().top;
                        let width = lastClicked.clientWidth;
                        let height = lastClicked.clientHeight;
                        let clonedElement = lastClicked.cloneNode(true);

                        console.log('cloned: ', clonedElement);

                        clonedElement.classList.add('is-cloned');

                        current.container.appendChild(clonedElement);

                        let screenWidth = window.innerWidth;
                        let screenHeight = window.innerHeight;

                        let setWidth = width + left;
                        let setHeight = height + top;

                        let rzLeft = (screenWidth - left) / 2;

                        console.log(top, 'left:', left);
                        console.log(top, 'rz:', rzLeft);

                        tl.set(clonedElement, { x: left, y: top, width: width, height: height});
                        tl
                            .fromTo(clonedElement, {
                                    x: left,
                                    y: top,
                                    width: width,
                                    height: height,
                                    duration: 1.5,
                                },
                                {
                                height: screenHeight,
                                width: screenWidth,

                                onComplete: function () {
                                    resolve();
                                }
                            })
                    }

                    zoom();

                  /*  gsap
                        .to(current.container, {
                            duration: 5,
                            onComplete: () => {
                                zoom();
                                resolve();
                            }
                        })*/
                });
            },
            once({next, current}) {
                enterPageProduct(next.container)
            },
            enter({next}) {
                enterPageProduct(next.container)
            }
        },
        {
            name: 'pageAbout',
            to: {
                namespace: ['about'],
            },
            once({next}) {
                enterPageAbout(next.container)
            },
            enter({next}) {
                enterPageAbout(next.container)
            }
        },

        {
            name: 'pageProductsGallery',
            to: {
                namespace: ['products'],
            },
            once({next}) {
                enterPageProductGallery(next.container)
            },
            enter({next}) {
                enterPageProductGallery(next.container)
            }

        },

        {
            name: 'pageProductsBlog',
            to: {
                namespace: ['blog'],
            },
            once({next}) {
                enterPageBlog(next.container)
            },
            enter({next}) {
                enterPageBlog(next.container)
            }

        },

        {
            name: 'pageProductsShop',
            to: {
                namespace: ['shop', 'contacts'],
            },
            once({next}) {
                enterPageShop(next.container)
            },
            enter({next}) {
                enterPageShop(next.container)
            }

        },

        {
            name: 'pageProductsDownloads',
            to: {
                namespace: ['downloads'],
            },
            once({next}) {
                enterPageDownloads(next.container)
            },
            enter({next}) {
                enterPageDownloads(next.container)
            }

        },
    ],

    views: [
        {
/*            namespace: ['home', 'about', 'products', 'prod', 'blog', 'shop', 'downloads', 'contacts'],
            beforeEnter(data) {
                menuMobile(data.next.container);
            }*/

        }
    ]
});


