/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/_main.js":
/*!****************************!*\
  !*** ./assets/js/_main.js ***!
  \****************************/
/***/ (() => {

eval("/* ==========================================================================\n   jQuery plugin settings and other scripts\n   ========================================================================== */\n\n$(function () {\n  // FitVids init\n  $(\"#main\").fitVids();\n\n  // Sticky sidebar\n  var stickySideBar = function stickySideBar() {\n    var show = $(\".author__urls-wrapper\").find(\"button\").length === 0 ? $(window).width() > 1024 // width should match $large Sass variable\n    : !$(\".author__urls-wrapper\").find(\"button\").is(\":visible\");\n    if (show) {\n      // fix\n      $(\".sidebar\").addClass(\"sticky\");\n    } else {\n      // unfix\n      $(\".sidebar\").removeClass(\"sticky\");\n    }\n  };\n  stickySideBar();\n  $(window).resize(function () {\n    stickySideBar();\n  });\n\n  // Follow menu drop down\n  $(\".author__urls-wrapper\").find(\"button\").on(\"click\", function () {\n    $(\".author__urls\").toggleClass(\"is--visible\");\n    $(\".author__urls-wrapper\").find(\"button\").toggleClass(\"open\");\n  });\n\n  // Close search screen with Esc key\n  $(document).keyup(function (e) {\n    if (e.keyCode === 27) {\n      if ($(\".initial-content\").hasClass(\"is--hidden\")) {\n        $(\".search-content\").toggleClass(\"is--visible\");\n        $(\".initial-content\").toggleClass(\"is--hidden\");\n      }\n    }\n  });\n\n  // Search toggle\n  $(\".search__toggle\").on(\"click\", function () {\n    $(\".search-content\").toggleClass(\"is--visible\");\n    $(\".initial-content\").toggleClass(\"is--hidden\");\n    // set focus on input\n    setTimeout(function () {\n      $(\".search-content\").find(\"input\").focus();\n    }, 400);\n  });\n\n  // Smooth scrolling\n  var scroll = new SmoothScroll('a[href*=\"#\"]', {\n    offset: 20,\n    speed: 400,\n    speedAsDuration: true,\n    durationMax: 500\n  });\n\n  // Gumshoe scroll spy init\n  if ($(\"nav.toc\").length > 0) {\n    var spy = new Gumshoe(\"nav.toc a\", {\n      // Active classes\n      navClass: \"active\",\n      // applied to the nav list item\n      contentClass: \"active\",\n      // applied to the content\n\n      // Nested navigation\n      nested: false,\n      // if true, add classes to parents of active link\n      nestedClass: \"active\",\n      // applied to the parent items\n\n      // Offset & reflow\n      offset: 20,\n      // how far from the top of the page to activate a content area\n      reflow: true,\n      // if true, listen for reflows\n\n      // Event support\n      events: true // if true, emit custom events\n    });\n  }\n\n  // add lightbox class to all image links\n  $(\"a[href$='.jpg'],a[href$='.jpeg'],a[href$='.JPG'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']\").has(\"> img\").addClass(\"image-popup\");\n\n  // Magnific-Popup options\n  $(\".image-popup\").magnificPopup({\n    // disableOn: function() {\n    //   if( $(window).width() < 500 ) {\n    //     return false;\n    //   }\n    //   return true;\n    // },\n    type: \"image\",\n    tLoading: \"Loading image #%curr%...\",\n    gallery: {\n      enabled: true,\n      navigateByImgClick: true,\n      preload: [0, 1] // Will preload 0 - before current, and 1 after the current image\n    },\n    image: {\n      tError: '<a href=\"%url%\">Image #%curr%</a> could not be loaded.'\n    },\n    removalDelay: 500,\n    // Delay in milliseconds before popup is removed\n    // Class that is added to body when popup is open.\n    // make it unique to apply your CSS animations just to this exact popup\n    mainClass: \"mfp-zoom-in\",\n    callbacks: {\n      beforeOpen: function beforeOpen() {\n        // just a hack that adds mfp-anim class to markup\n        this.st.image.markup = this.st.image.markup.replace(\"mfp-figure\", \"mfp-figure mfp-with-anim\");\n      }\n    },\n    closeOnContentClick: true,\n    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.\n  });\n\n  // Add anchors for headings\n  $('.page__content').find('h1, h2, h3, h4, h5, h6').each(function () {\n    var id = $(this).attr('id');\n    if (id) {\n      var anchor = document.createElement(\"a\");\n      anchor.className = 'header-link';\n      anchor.href = '#' + id;\n      anchor.innerHTML = '<span class=\\\"sr-only\\\">Permalink</span><i class=\\\"fas fa-link\\\"></i>';\n      anchor.title = \"Permalink\";\n      $(this).append(anchor);\n    }\n  });\n});\n\n//# sourceURL=webpack://kraye/./assets/js/_main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/_main.js"]();
/******/ 	
/******/ })()
;