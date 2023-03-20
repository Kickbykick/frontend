"use client";

import React, {useEffect, useState} from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import classes from "./../styles/Navbar.module.scss";
import Link from 'next/link'
import { usePathname } from 'next/navigation';

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
        backgroundColor = "#202020";
        textColor = "#FFFFFF";
    } else if(pathname === "/products"){
        navNumber = 1;
        backgroundColor = "#202020";
        textColor = "#FFFFFF";
    } else if(pathname === "/expertise"){
        navNumber = 2;
        backgroundColor = "#E9E9E9";
        textColor = "#000000";
    } else if(pathname === "/blog"){
        navNumber = 3;
        backgroundColor = "#FFFFFF";
        textColor = "#000000";
    } else if(pathname === "/contact"){
        navNumber = 4;
        backgroundColor = "#FFFFFF";
        textColor = "#000000";
    }

    console.log("Current Path -> %s", pathname);
    console.log("This is index %d \n" , navNumber)

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() =>{
        if(size.width !== 0 && size.width > 768 && menuOpen){
            setMenuOpen(false);
        }
    }, [size.width, menuOpen]);

    const menuToggleHandler = (index: number, iconNav: boolean) => {
        if(iconNav){
            setMenuOpen((val) => !val);
        } else {
            // setNavNumber(() => index);
        }
        console.log("This is index %d \n" , index)
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
                        Tabularasa
                    </Link>
                </div>

                <nav className={`${classes.navbar__content__nav} ${menuOpen && size.width < 768 ? classes.isMenu : ""}`}>
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

                <div></div>

                {/* { !menuOpen &&
                    <p>
                        <Link href="/contact"
                            onClick={() => menuToggleHandler(4, false)}
                            className={`${classes.navbar__content__contact} ${(navNumber === 4) ? classes.navbar__content__nav__selected : ""}`}
                        >
                        </Link>
                    </p>
                } */}

                <div className={`${classes.navbar__content__toggle}`}>
                    {
                        !menuOpen? (
                            <BiMenuAltRight onClick={() => menuToggleHandler(-1, true)} />
                        ) : (
                            <AiOutlineClose onCanPlay={() => menuToggleHandler(-1, true)} />
                        )
                    }
                </div>

            </div>
        </header>
    )
}

export default NavBar