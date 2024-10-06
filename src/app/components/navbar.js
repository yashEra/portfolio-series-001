import React,{useEffect, useState} from "react";
import Link from "next/link";
import Image from "next/image";

import {FiDribbble, FiLinkedin, FiGithub} from "../assets/icons/vander"

export default function Navbar(){
    
    const [isOpen, setMenu] = useState(true);
    const [scroll, setScroll] = useState(false);

  
    
    const getClosest = (elem, selector) => {

        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (s) {
                    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                        i = matches.length;
                    while (--i >= 0 && matches.item(i) !== this) { }
                    return i > -1;
                };
        }

        // Get the closest matching element
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;

    };

    const activateMenu = () => {
        var menuItems = document.getElementsByClassName("sub-menu-item");
        if (menuItems) {

            var matchingMenuItem = null;
            for (var idx = 0; idx < menuItems.length; idx++) {
                if (menuItems[idx].href === window.location.href) {
                    matchingMenuItem = menuItems[idx];
                }
            }

            if (matchingMenuItem) {
                matchingMenuItem.classList.add('active');


                var immediateParent = getClosest(matchingMenuItem, 'li');

                if (immediateParent) {
                    immediateParent.classList.add('active');
                }

                var parent = getClosest(immediateParent, '.child-menu-item');
                if (parent) {
                    parent.classList.add('active');
                }

                var parent = getClosest(parent || immediateParent, '.parent-menu-item');

                if (parent) {
                    parent.classList.add('active');

                    var parentMenuitem = parent.querySelector('.menu-item');
                    if (parentMenuitem) {
                        parentMenuitem.classList.add('active');
                    }

                    var parentOfParent = getClosest(parent, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                } else {
                    var parentOfParent = getClosest(matchingMenuItem, '.parent-parent-menu-item');
                    if (parentOfParent) {
                        parentOfParent.classList.add('active');
                    }
                }
            }
        }
    }
    useEffect(() => {
        activateMenu();
        const scrollHandler=()=>{
            setScroll(window.scrollY > 50);
        }
        window.addEventListener("scroll", scrollHandler);
        return()=>{
            window.removeEventListener("scroll", scrollHandler); 
        }
    });
    const toggleMenu = () => {
        setMenu(!isOpen)
        if (document.getElementById("navigation")) {
            const anchorArray = Array.from(document.getElementById("navigation").getElementsByTagName("a"));
            anchorArray.forEach(element => {
                element.addEventListener('click', (elem) => {
                    const target = elem.target.getAttribute("href")
                    if (target !== "") {
                        if (elem.target.nextElementSibling) {
                            var submenu = elem.target.nextElementSibling.nextElementSibling;
                            submenu.classList.toggle('open');
                        }
                    }
                })
            });
        }
    }
    return(
        <>
        <nav id="topnav" className={`${scroll ? "nav-sticky" : ""} defaultscroll is-sticky`}>
            <div className="container relative">
                <Link className="logo" href="/">
                    <Image src="/images/logo-dark.png" width={109} height={20} className="h-5 inline-block dark:hidden" alt=""/>
                    <Image src="/images/logo-white.png" width={109} height={20} className="h-5 hidden dark:inline-block" alt=""/>
                </Link>
                <div className="menu-extras">
                    <div className="menu-item">
                        <Link href="" className="navbar-toggle" id="isToggle" onClick={toggleMenu}>
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>
                <ul className="buy-button list-none mb-0 space-x-1">
                    <li className="inline mb-0">
                        <Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiDribbble className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                    <li className="inline mb-0">
                        <Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiLinkedin className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                    <li className="inline mb-0">
                        <Link href="" className="h-8 w-8 inline-flex items-center justify-center tracking-wide align-middle duration-500 text-[15px] text-center rounded-xl bg-orange-500 hover:bg-orange-600 border border-orange-500 hover:border-orange-600 text-white"><FiGithub className="h-[14px] w-[14px] align-middle"/></Link>
                    </li>
                </ul>
               

                <div id="navigation" className={`${isOpen === true ? 'hidden' : 'block'}`}> 
                    <ul className="navigation-menu justify-end">
                        <li className="has-submenu parent-menu-item">
                            <Link href="#">Home</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/" className="sub-menu-item">Hero One</Link></li>
                                <li><Link href="/index-two" className="sub-menu-item">Hero Two</Link></li>
                                <li><Link href="/index-three" className="sub-menu-item">Hero Three</Link></li>
                            </ul>
                        </li>
                
                        <li><Link href="/aboutus" className="sub-menu-item">About Us</Link></li>

                        <li><Link href="/services" className="sub-menu-item">Services </Link></li>
                
                        <li className="has-submenu parent-parent-menu-item">
                            <Link href="#">Portfolio</Link><span className="menu-arrow"></span>
                            <ul className="submenu megamenu">
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Modern Portfolio</li>
                                        <li><Link href="/portfolio-modern-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-modern-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-modern-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-modern-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-modern-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Classic Portfolio</li>
                                        <li><Link href="/portfolio-classic-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-classic-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-classic-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-classic-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-classic-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>

                                <li>
                                    <ul>
                                        <li className="megamenu-head">Creative Portfolio</li>
                                        <li><Link href="/portfolio-creative-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-creative-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-creative-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-creative-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-creative-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Masonry Portfolio</li>
                                        <li><Link href="/portfolio-masonry-two" className="sub-menu-item">Two Column</Link></li>
                                        <li><Link href="/portfolio-masonry-three" className="sub-menu-item">Three Column</Link></li>
                                        <li><Link href="/portfolio-masonry-four" className="sub-menu-item">Four Column</Link></li>
                                        <li><Link href="/portfolio-masonry-five" className="sub-menu-item">Five Column</Link></li>
                                        <li><Link href="/portfolio-masonry-six" className="sub-menu-item">Six Column</Link></li>
                                    </ul>
                                </li>
                
                                <li>
                                    <ul>
                                        <li className="megamenu-head">Portfolio Detail</li>
                                        <li><Link href="/portfolio-detail-one" className="sub-menu-item">Portfolio One</Link></li>
                                        <li><Link href="/portfolio-detail-two" className="sub-menu-item">Portfolio Two</Link></li>
                                        <li><Link href="/portfolio-detail-three" className="sub-menu-item">Portfolio Three</Link></li>
                                        <li><Link href="/portfolio-detail-four" className="sub-menu-item">Portfolio Four</Link></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li className="has-submenu parent-menu-item">
                            <Link href="#">Blog</Link><span className="menu-arrow"></span>
                            <ul className="submenu">
                                <li><Link href="/blogs" className="sub-menu-item">Blogs</Link></li>
                                <li><Link href="/blog-detail" className="sub-menu-item">Blog Detail</Link></li>
                            </ul>
                        </li>
                
                        <li><Link href="/contactus" className="sub-menu-item">Contact Us</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}