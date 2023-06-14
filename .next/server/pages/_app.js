"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2609:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ _app)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
var styled_default = /*#__PURE__*/__webpack_require__.n(styled_);
;// CONCATENATED MODULE: ./public/images/contents/footprint.js

const FootprintIcon = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
        width: 20,
        height: 20,
        className: "w-5 inline-block transition-transform group-hover:rotate-[20deg]",
        viewBox: "0 0 40 40",
        fill: "currentColor",
        ...props,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("g", {
                transform: "matrix(1.07541,0,0,1.1001,-1.05651,-0.978215)",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    fill: "currentColor",
                    d: "M13.319,4.13C13.319,4.13 10.313,4.08 9.501,9.535C9.133,13.546 12.568,15.516 14.12,15.497C15.556,15.495 17.638,14.151 17.486,9.765C17.334,5.38 14.98,4.15 13.319,4.13"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M3.12,15.575C2.626,16.02 0.637,18.024 3.508,22.915C6.379,27.806 8.628,23.888 8.923,23.455C9.218,23.021 11.41,20.306 8.664,16.924C5.918,13.543 3.12,15.575 3.12,15.575Z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("g", {
                transform: "matrix(1.00722,0,0,0.981856,-0.205441,0.281328)",
                children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                    d: "M24.03,4.13C22.048,4.309 20.472,5.325 20.922,9.814C21.373,14.304 24.4,15.613 25.402,15.499C26.404,15.385 28.84,12.521 28.427,9.814C28.013,7.107 26.837,4.296 24.03,4.13Z"
                })
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M32.114,11.35C32.114,11.35 29.196,13.155 30.864,16.589C32.532,20.023 34.677,19.25 36,18.588C37.322,17.927 38.02,14.778 35.931,12.665C33.843,10.551 32.114,11.35 32.114,11.35Z"
            }),
            /*#__PURE__*/ jsx_runtime.jsx("path", {
                d: "M19.212,17.136C19.212,17.136 12.651,19.306 12.84,25.174C12.888,28.022 10.569,28.548 11.073,32.567C11.727,34.322 12.649,36.92 15.89,36.85C19.131,36.781 19.603,34.354 23.377,32.97C27.151,31.586 31.009,33.828 33.802,31.213C36.596,28.598 35.188,24.468 31.876,22.731C28.564,20.995 24.793,16.327 19.212,17.136Z"
            })
        ]
    });
};
/* harmony default export */ const footprint = (FootprintIcon);

// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(9034);
;// CONCATENATED MODULE: ./components/logo.js







const LogoBox = (styled_default()).span`
font-weight: bold;
font-size: 18px;
display: inline-flex;
align-items: center;
height: 30px;
line-height: 20px;
padding: 10px;

> svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`;
const Logo = ()=>{
    const colorMode = (0,react_.useColorModeValue)("", "-dark");
    return /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
        href: "/",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(LogoBox, {
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(footprint, {
                    width: 20,
                    height: 20,
                    style: {
                        color: {
                            colorMode
                        }
                    }
                }),
                /*#__PURE__*/ jsx_runtime.jsx(react_.Text, {
                    color: (0,react_.useColorModeValue)("gray.800", "whiteAlpha.900"),
                    fontFamily: "M PLUS Rounded 1c",
                    fontWeight: "bold",
                    ml: 3,
                    children: "Emin Atalay"
                })
            ]
        })
    });
};
/* harmony default export */ const logo = (Logo);

// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./components/layouts/theme-toggle-button.js




const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.AnimatePresence, {
        mode: "wait",
        initial: false,
        children: /*#__PURE__*/ jsx_runtime.jsx(external_framer_motion_.motion.div, {
            style: {
                display: "inline-block"
            },
            initial: {
                y: -20,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1
            },
            exit: {
                y: 20,
                opacity: 0
            },
            transition: {
                duration: 0.2
            },
            children: /*#__PURE__*/ jsx_runtime.jsx(react_.IconButton, {
                "aria-label": "Toggle theme",
                colorScheme: (0,react_.useColorModeValue)("purple", "orange"),
                icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime.jsx(icons_.MoonIcon, {}), /*#__PURE__*/ jsx_runtime.jsx(icons_.SunIcon, {})),
                onClick: toggleColorMode
            })
        }, (0,react_.useColorModeValue)("light", "dark"))
    });
};
/* harmony default export */ const theme_toggle_button = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/navbar.js







const LinkItem = ({ href , path , children  })=>{
    const active = path == href;
    const inactiveColor = (0,react_.useColorModeValue)("gray200", "whiteAlpha.900");
    const [domLoaded, setDomLoaded] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
        children: domLoaded && /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
            href: href,
            children: /*#__PURE__*/ jsx_runtime.jsx(react_.Link, {
                p: 2,
                bg: active ? "glassTeal" : undefined,
                color: active ? "#202023" : inactiveColor,
                children: children
            })
        })
    });
};
const NavBar = (props)=>{
    const { path  } = props;
    const [domLoaded, setDomLoaded] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    return /*#__PURE__*/ jsx_runtime.jsx(react_.Box, {
        position: "fixed",
        as: "nav",
        w: "100%",
        bg: (0,react_.useColorModeValue)("#ffffff40", "20202380"),
        css: {
            backdropFilter: "blur(10px)"
        },
        zIndex: 2,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Container, {
            display: "flex",
            p: 2,
            maxW: "container.md",
            wrap: "wrap",
            align: "center",
            justify: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx(react_.Flex, {
                    align: "center",
                    mr: 5,
                    children: /*#__PURE__*/ jsx_runtime.jsx(react_.Heading, {
                        as: "h1",
                        size: "lg",
                        letterSpacing: "tighter",
                        children: /*#__PURE__*/ jsx_runtime.jsx(logo, {})
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Stack, {
                    direction: {
                        base: "column",
                        md: "row"
                    },
                    display: {
                        base: "none",
                        md: "flex"
                    },
                    width: {
                        base: "full",
                        md: "auto"
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        nmd: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(LinkItem, {
                            href: "/",
                            path: path,
                            children: "Works"
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx(LinkItem, {
                            href: "/",
                            path: path,
                            children: "Posts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx(theme_toggle_button, {}),
                        /*#__PURE__*/ jsx_runtime.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: "inline-block",
                                md: "none"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        icon: /*#__PURE__*/ jsx_runtime.jsx(icons_.HamburgerIcon, {}),
                                        variant: "outline",
                                        "aria-label": "Options"
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(jsx_runtime.Fragment, {
                                        children: domLoaded && /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.MenuList, {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(react_.MenuItem, {
                                                        as: react_.Link,
                                                        children: "About"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(react_.MenuItem, {
                                                        as: react_.Link,
                                                        children: "Works"
                                                    })
                                                }),
                                                /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/",
                                                    passHref: true,
                                                    children: /*#__PURE__*/ jsx_runtime.jsx(react_.MenuItem, {
                                                        as: react_.Link,
                                                        children: "Posts"
                                                    })
                                                })
                                            ]
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const navbar = (NavBar);

;// CONCATENATED MODULE: ./components/layouts/main.js




const Main = ({ children , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: " Emin Atalay - Homepage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ jsx_runtime.jsx(react_.Container, {
                maxW: "container.md",
                pt: 14,
                children: children
            })
        ]
    });
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: ./libs/theme.js
var theme = __webpack_require__(2278);
// EXTERNAL MODULE: ./components/fonts.js + 1 modules
var fonts = __webpack_require__(4102);
;// CONCATENATED MODULE: ./pages/_app.js






const Website = ({ Component , pageProps , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(fonts/* default */.Z, {}),
            /*#__PURE__*/ jsx_runtime.jsx(main, {
                router: router,
                children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                    ...pageProps,
                    key: router.route
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (Website);

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader.js?page=%2F_app&absolutePagePath=private-next-pages%2F_app.js&preferredRegion=!

        // Next.js Route Loader
        
        
    

/***/ }),

/***/ 4102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ fonts)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(5893);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/fonts.js


const Fonts = ()=>jsx_runtime.jsx((style_default()), {
        id: "d3e55ab2e52a121",
        children: '@import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");'
    });
/* harmony default export */ const fonts = (Fonts);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 1480:
/***/ ((module) => {

module.exports = require("@emotion/styled");

/***/ }),

/***/ 9034:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [893,664,44,675,278], () => (__webpack_exec__(2609)));
module.exports = __webpack_exports__;

})();