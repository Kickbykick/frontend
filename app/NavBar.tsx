"use client";

import React, {useEffect, useState} from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./../styles/Navbar.module.scss";
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import { logo_white, logo_black } from "../public";

interface ISize {
    width: number;
    height: number;
}

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);
    let navNumber:number = 0;
    let backgroundColor:string = "#202020";
    let textColor:string = "#FFFFFF";

    const pathname = usePathname();
    const [size, setSize] = useState<ISize>(
        {
            width: 0,
            height: 0,
        }
    )

    if(pathname === "/"){
        navNumber = 0;
        backgroundColor = "#000000";
        textColor = "#FFFFFF";
    } else if(pathname === "/products"){
        navNumber = 1;
        backgroundColor = "#202020";
        textColor = "#FFFFFF";
    } else if(pathname === "/expertise"){
        navNumber = 2;
        backgroundColor = "#000000";
        textColor = "#FFFFFF";
    } else if(pathname === "/blog"){
        navNumber = 3;
        backgroundColor = "#000000";
        textColor = "#FFFFFF";
    } 
    else if(pathname === "/contact"){
        navNumber = 4;
        backgroundColor = "#FFFFFF";
        textColor = "#000000";
    }

    // console.log("Current Path -> %s", pathname);
    // console.log("This is index %d \n" , navNumber)

    const updateWidthAndHeight = () => {
        // console.log("size.width => ", window.innerWidth)

        setSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });

        // If menu was open before changing to a bigger size, then set menu to false
        if(size.width !== 0 && size.width > 768 && menuOpen){
            setMenuOpen(false);
        }
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    });

    useEffect(() =>{
        if(size.width !== 0 && size.width > 768 && menuOpen){
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = (index: number, iconNav: boolean) => {
        if(iconNav){
            setMenuOpen((val) => !val);
        }

        // console.log("menu => ", menuOpen)
        // console.log("This is index %d \n" , index)
    };

    return (
        <header 
            className={`${classes.navbar}`}
            style={{
                backgroundColor: backgroundColor,
            }}
        >
            <div className={classes.navbar__content}
                style={{
                    color: textColor,
                }}
            >
                <div className={classes.navbar__content__box_logo}>
                    <Link href="/" className={classes.navbar__content__logo}>
                    <Image
                        src={(navNumber === 4) ? logo_black : logo_white}
                        alt="Picture of the author"
                        loading="lazy"
                    />
                    </Link>
                </div>

                {/* ${menuOpen && size.width < 768 ? classes.isMenu : ""} */}
                <nav className={`${classes.navbar__content__nav}`}>
                    <ul>
                        <li>
                            <Link href="/" 
                                className={navNumber === 0 ? classes.navbar__content__nav__selected : ""}
                            >
                                Our Identity
                            </Link>
                        </li>
                        <li>
                            <Link href="/products"
                                className={navNumber === 1 ? classes.navbar__content__nav__selected : ""}
                            >
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link href="/expertise"
                                className={navNumber === 2 ? classes.navbar__content__nav__selected : ""}
                            >
                                Expertise
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog"
                                className={navNumber === 3 ? classes.navbar__content__nav__selected : ""}
                            >
                                Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact"
                                className={navNumber === 4 ? classes.navbar__content__nav__selected : ""}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                {/* Used for Space between, empty 3rd element */}
                <div></div>
                
                <div 
                    className={`${classes.navbar__content__toggle}`}
                    style={(navNumber === 4 && menuOpen) ? {
                        color: "#FFFFFF",
                    } : {}}
                >
                    {
                        !menuOpen? (
                            <BiMenuAltRight onClick={() => menuToggleHandler(-1, true)} />
                        ) : (
                            <AiOutlineClose onClick={() => menuToggleHandler(-1, true)} />
                        )
                    }
                </div>

                <OverlayNavBar 
                    full={menuOpen}
                    navNumber={navNumber}
                    callback={() => setMenuOpen(false)}
                />

            </div>
        </header>
    )
}

function OverlayNavBar(props: any) {
    return (
        <>
        <div 
            className={classes.overlay}
            style={{
                height: props.full ? "100%" : "0%",
            }}
        >
            <div className={classes.overlay_content}>
                <Link href="/" 
                    style={(props.navNumber === 0) ? {
                        color: "#D90000",
                    } : {}}
                    onClick={() => props.callback()}
                >
                    Our Identity
                </Link>
                <Link href="/products"
                    style={(props.navNumber === 1) ? {
                        color: "#D90000",
                    } : {}}
                    onClick={() => props.callback()}
                >
                    Products
                </Link>
                <Link href="/expertise"
                    style={ (props.navNumber === 2) ? {
                        color: "#D90000",
                    } : {}}
                    onClick={() => props.callback()}
                >
                    Expertise
                </Link>
                <Link href="/blog"
                    style={ (props.navNumber === 3) ? {
                        color: "#D90000",
                    } : {}}
                    onClick={() => props.callback()}
                >
                    Blog
                </Link>
                <Link href="/contact"
                    style={ (props.navNumber === 4) ? {
                        color:  "#D90000",
                    } : {}}
                    onClick={() => props.callback()}
                >
                    Contact
                </Link>
            </div>
        </div>
        </>
    )
}

export default NavBar