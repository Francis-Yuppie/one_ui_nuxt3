/*
 * Main and demo navigation arrays
 *
 * 'to' attribute points to the route name, not the path url
 */

export default {
  main: [
    {
      name: "Dashboard",
      to: "/",
      icon: "si si-speedometer",
    },
   // You can also set an external link to your main navigation and it will render as a link
    {
      name: "Link Name",
      to: "https://example.com",
      icon: "si si-link",
      target: "_blank", // You can also set its target property
    },
    {
      name: "Page Packs",
      icon: "si si-layers",
      subActivePaths: "/backend/page-packs",
      // sub: [
      //   {
      //     name: "Blog",
      //     icon: "si si-pencil",
      //     subActivePaths: "/backend/page-packs/blog",
      //     sub: [
      //       {
      //         name: "Classic",
      //         to: "backend-blog-classic",
      //       },
      //       {
      //         name: "List",
      //         to: "backend-blog-list",
      //       },
      //       {
      //         name: "Grid",
      //         to: "backend-blog-grid",
      //       },
      //       {
      //         name: "Story",
      //         to: "backend-blog-story",
      //       },
      //       {
      //         name: "Story Cover",
      //         to: "backend-blog-story-cover",
      //       },
      //     ],
      //   },
      //   {
      //     name: "e-Learning",
      //     icon: "si si-graduation",
      //     subActivePaths: "/backend/page-packs/elearning",
      //     sub: [
      //       {
      //         name: "Courses",
      //         to: "backend-elearning-courses",
      //       },
      //       {
      //         name: "Course",
      //         to: "backend-elearning-course",
      //       },
      //       {
      //         name: "Lesson",
      //         to: "backend-elearning-lesson",
      //       },
      //     ],
      //   },
      //   {
      //     name: "Forum",
      //     icon: "si si-bubbles",
      //     subActivePaths: "/backend/page-packs/forum",
      //     sub: [
      //       {
      //         name: "Categories",
      //         to: "backend-forum-categories",
      //       },
      //       {
      //         name: "Topics",
      //         to: "backend-forum-topics",
      //       },
      //       {
      //         name: "Discussion",
      //         to: "backend-forum-discussion",
      //       },
      //     ],
      //   },
      //   {
      //     name: "Boxed Backend",
      //     icon: "si si-magnet",
      //     subActivePaths: "/backend-boxed",
      //     sub: [
      //       {
      //         name: "Dashboard",
      //         to: "backend-boxed-dashboard",
      //       },
      //       {
      //         name: "Search",
      //         to: "backend-boxed-search",
      //       },
      //       {
      //         name: "Simple 1",
      //         to: "backend-boxed-simple1",
      //       },
      //       {
      //         name: "Simple 2",
      //         to: "backend-boxed-simple2",
      //       },
      //       {
      //         name: "Image 1",
      //         to: "backend-boxed-image1",
      //       },
      //       {
      //         name: "Image 2",
      //         to: "backend-boxed-image2",
      //       },
      //     ],
      //   },
      // ],
    },
    {
      name: "User Interface",
      heading: true,
    },
    {
      name: "Blocks",
      icon: "si si-energy",
      subActivePaths: "/backend/blocks",
      sub: [
        {
          name: "Styles",
          to: "/backend/blocks/stylesview",
        },
        {
          name: "Options",
          to: "/backend/blocks/optionsview",
        },
        {
          name: "Forms",
          to: "/backend/blocks/formsview",
        },
        {
          name: "Themed",
          to: "/backend/blocks/themedview",
        },
        {
          name: "API",
          to: "/backend/blocks/apiview",
        },
      ],
    },
    {
      name: "Elements",
      icon: "si si-badge",
      subActivePaths: "/backend/elements",
      sub: [
        {
          name: "Grid",
          to: "/backend/elements/gridview",
        },
        {
          name: "Typography",
          to: "/backend/elements/typographyview",
        },
        {
          name: "Icons",
          to: "/backend/elements/iconsview",
        },
        {
          name: "Buttons",
          to: "/backend/elements/buttonsview",
        },
        {
          name: "Button Groups",
          to: "/backend/elements/buttongroupsview",
        },
        {
          name: "Dropdowns",
          to: "/backend/elements/dropdownsview",
        },
        {
          name: "Tabs",
          to: "/backend/elements/tabsview",
        },
        {
          name: "Navigation",
          to: "/backend/elements/navigationview",
        },
        {
          name: "Horizontal Navigation",
          to: "/backend/elements/navigationhorizontalview",
        },
        {
          name: "Mega Menu",
          to: "/backend/elements/megamenuview",
        },
        {
          name: "Progress",
          to: "/backend/elements/progressview",
        },
        {
          name: "Alerts",
          to: "/backend/elements/alertsview",
        },
        {
          name: "Tooltips",
          to: "/backend/elements/tooltipsview",
        },
        {
          name: "Popovers",
          to: "/backend/elements/popoversview",
        },
        {
          name: "Modals",
          to: "/backend/elements/modalsview",
        },
        {
          name: "Images Overlay",
          to: "/backend/elements/imagesoverlayview",
        },
        {
          name: "Timeline",
          to: "/backend/elements/timelineview",
        },
        {
          name: "Ribbons",
          to: "/backend/elements/ribbonsview",
        },
        {
          name: "Steps",
          to: "/backend/elements/stepsview",
        },
        {
          name: "Animations",
          to: "/backend/elements/animationsview",
        },
        {
          name: "Color Themes",
          to: "/backend/elements/colorthemesview",
        },
      ],
    },
    {
      name: "Tables",
      icon: "si si-grid",
      subActivePaths: "/backend/tables",
      sub: [
        {
          name: "Styles",
          to: "/backend/tables/stylesview",
        },
        {
          name: "Responsive",
          to: "/backend/tables/responsiveview",
        },
        {
          name: "Helpers",
          to: "/backend/tables/helpersview",
        },
      ],
    },
    {
      name: "Forms",
      icon: "si si-note",
      subActivePaths: "/backend/forms",
      sub: [
        {
          name: "Elements",
          to: "/backend/form/elementsview",
        },
        {
          name: "Layouts",
          to: "/backend/form/layoutsview",
        },
        {
          name: "Input Groups",
          to: "/backend/form/inputgroupsview",
        },
        {
          name: "Plugins",
          to: "/backend/form/pluginsview",
        },
        {
          name: "Editors",
          to: "/backend/form/editorsview",
        },
        {
          name: "Validation",
          to: "/backend/form/validationview",
        },
      ],
    },
    {
      name: "Develop",
      heading: true,
    },
    {
      name: "Plugins",
      icon: "si si-wrench",
      subActivePaths: "/backend/plugins",
      sub: [
        {
          name: "Image Cropper",
          to: "/backend/plugins/imagecropperview",
        },
        {
          name: "Charts",
          to: "/backend/plugins/chartsview",
        },
        {
          name: "Calendar",
          to: "/backend/plugins/calendarview",
        },
        {
          name: "Carousel",
          to: "/backend/plugins/carouselview",
        },
        {
          name: "Offcanvas",
          to: "/backend/plugins/offcanvasview",
        },
        {
          name: "Syntax Highlighting",
          to: "/backend/plugins/syntaxhighlightingview",
        },
        {
          name: "Rating",
          to: "/backend/plugins/ratingview",
        },
        {
          name: "Dialogs",
          to: "/backend/plugins/dialogsview",
        },
        {
          name: "Notifications",
          to: "/backend/plugins/notificationsview",
        },
        {
          name: "Gallery",
          to: "/backend/plugins/galleryview",
        },
      ],
    },
    {
      name: "Layout",
      icon: "si si-magic-wand",
      subActivePaths: "/backend/layout",
      sub: [
        {
          name: "Page",
          subActivePaths: "/backend/layout/page",
          sub: [
            {
              name: "Default",
              to: "/backend/layout/page/defaultview",
            },
            {
              name: "Flipped",
              to: "/backend/layout/page/flippedview",
            },
          ],
        },
        {
          name: "Dark Mode",
          subActivePaths: "/backend/layout/dark-mode",
          sub: [
            {
              name: "On",
              to: "/backend/layout/dark-mode/onview",
            },
            {
              name: "Off",
              to: "/backend/layout/dark-mode/offview",
            },
            {
              name: "System",
              to: "/backend/layout/dark-mode/systemview",
            },
          ],
        },
        {
          name: "Main Content",
          subActivePaths: "/backend/layout/main-content",
          sub: [
            {
              name: "Full Width",
              to: "/backend/layout/main-content/fullwidthview",
            },
            {
              name: "Narrow",
              to: "/backend/layout/main-content/narrowview",
            },
            {
              name: "Boxed",
              to: "/backend/layout/main-content/boxedview",
            },
          ],
        },
        {
          name: "Header",
          subActivePaths: "/backend/layout/header",
          sub: [
            {
              name: "Fixed",
              heading: true,
            },
            {
              name: "Light",
              to: "/backend/layout/header/fixedlightview",
            },
            {
              name: "Dark",
              to: "/backend/layout/header/fixeddarkview",
            },
            {
              name: "Static",
              heading: true,
            },
            {
              name: "Light",
              to: "/backend/layout/header/staticlightview",
            },
            {
              name: "Dark",
              to: "/backend/layout/header/staticdarkview",
            },
          ],
        },
        {
          name: "Sidebar",
          subActivePaths: "/backend/layout/sidebar",
          sub: [
            {
              name: "Mini",
              to: "/backend/layout/sidebar/miniview",
            },
            {
              name: "Light",
              to: "/backend/layout/sidebar/lightview",
            },
            {
              name: "Dark",
              to: "/backend/layout/sidebar/darkview",
            },
            {
              name: "Hidden",
              to: "/backend/layout/sidebar/hiddenview",
            },
          ],
        },
        {
          name: "Side Overlay",
          subActivePaths: "/backend/layout/side-overlay",
          sub: [
            {
              name: "Visible",
              to: "/backend/layout/side-overlay/visibleview",
            },
            {
              name: "Hover Mode",
              to: "/backend/layout/side-overlay/hovermodeview",
            },
            {
              name: "No Page Overlay",
              to: "/backend/layout/side-overlay/nopageoverlayview",
            },
          ],
        },
        {
          name: "Loaders",
          to: "/backend/layout/loadersview",
        },
        {
          name: "API",
          to: "/backend/layout/apiview",
        },
      ],
    },
    {
      name: "Multi Level Menu",
      icon: "si si-puzzle",
      sub: [
        {
          name: "Link 1-1",
          to: "#",
        },
        {
          name: "Link 1-2",
          to: "#",
        },
        {
          name: "Sub Level 2",
          sub: [
            {
              name: "Link 2-1",
              to: "#",
            },
            {
              name: "Link 2-2",
              to: "#",
            },
            {
              name: "Sub Level 3",
              sub: [
                {
                  name: "Link 4-1",
                  to: "#",
                },
                {
                  name: "Link 4-2",
                  to: "#",
                },
                {
                  name: "Sub Level 5",
                  sub: [
                    {
                      name: "Link 5-1",
                      to: "#",
                    },
                    {
                      name: "Link 5-2",
                      to: "#",
                    },
                    {
                      name: "Sub Level 6",
                      sub: [
                        {
                          name: "Link 6-1",
                          to: "#",
                        },
                        {
                          name: "Link 6-2",
                          to: "#",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Pages",
      heading: true,
    },
    {
      name: "Authentication",
      icon: "si si-lock",
      subActivePaths: "/backend/pages/auth",
      sub: [
        {
          name: "All",
          to: "/backend/pages/authview",
        },
        {
          name: "Sign In",
          to: "/auth/signinview",
        },
        {
          name: "Sign In 2",
          to: "/auth/signin2view",
        },
        {
          name: "Sign In 3",
          to: "/auth/signin3view",
        },
        {
          name: "Sign Up",
          to: "/auth/signupview",
        },
        {
          name: "Sign Up 2",
          to: "/auth/signup2view",
        },
        {
          name: "Sign Up 3",
          to: "/auth/signup3view",
        },
        {
          name: "Lock Screen",
          to: "/auth/lockview",
        },
        {
          name: "Lock Screen 2",
          to: "/auth/lock2view",
        },
        {
          name: "Lock Screen 3",
          to: "/auth/lock3view",
        },
        {
          name: "Pass Reminder",
          to: "/auth/reminderview",
        },
        {
          name: "Pass Reminder 2",
          to: "/auth/reminder2view",
        },
        {
          name: "Pass Reminder 3",
          to: "/auth/reminder3view",
        },
        {
          name: "Two Factor",
          to: "/auth/twofactorview",
        },
        {
          name: "Two Factor 2",
          to: "/auth/twofactor2view",
        },
        {
          name: "Two Factor 3",
          to: "/auth/twofactor3view",
        },
      ],
    },
    {
      name: "Error Pages",
      icon: "si si-fire",
      subActivePaths: "/backend/pages/errors",
      sub: [
        {
          name: "All",
          to: "/backend/pages/errors",
        },
        {
          name: "400",
          to: "/errors/400view",
        },
        {
          name: "401",
          to: "/errors/401view",
        },
        {
          name: "403",
          to: "/errors/403view",
        },
        {
          name: "404",
          to: "/errors/404view",
        },
        {
          name: "500",
          to: "/errors/500view",
        },
        {
          name: "503",
          to: "/errors/503view",
        },
      ],
    },
  ],
  boxed: [
    {
      name: "Dashboard",
      to: "/backend-boxed/dashboardview",
      icon: "si si-compass",
    },
    {
      name: "Pages",
      heading: true,
    },
    {
      name: "Variations",
      icon: "si si-puzzle",
      sub: [
        {
          name: "Simple 1",
          to: "/backend-boxed/simple1view",
        },
        {
          name: "Simple 2",
          to: "/backend-boxed/simple2view",
        },
        {
          name: "Image 1",
          to: "/backend-boxed/image1view",
        },
        {
          name: "Image 2",
          to: "/backend-boxed/image2view",
        },
      ],
    },
    {
      name: "Search",
      to: "backend-boxed-search",
      icon: "si si-magnifier",
    },
    {
      name: "Go Back",
      to: "backend-dashboard",
      icon: "si si-action-undo",
    },
  ],
  demo: [
    {
      name: "Home",
      to: "#",
      icon: "fa fa-home",
      badge: 5,
    },
    {
      name: "Manage",
      heading: true,
    },
    {
      name: "Products",
      icon: "fa fa-briefcase",
      sub: [
        {
          name: "HTML Templates",
          icon: "fab fa-html5",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt",
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line",
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 320,
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 18,
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 32,
            },
          ],
        },
        {
          name: "WordPress Themes",
          icon: "fab fa-wordpress",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt",
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line",
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 680,
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 15,
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 20,
            },
          ],
        },
        {
          name: "Web Applications",
          icon: "fab fa-medapps",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt",
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line",
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 158,
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 65,
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 78,
            },
          ],
        },
        {
          name: "Video Templates",
          icon: "fab fa-youtube",
          sub: [
            {
              name: "Description",
              to: "#",
              icon: "fa fa-pencil-alt",
            },
            {
              name: "Statistics",
              to: "#",
              icon: "fa fa-chart-line",
            },
            {
              name: "Sales",
              to: "#",
              icon: "fa fa-chart-area",
              badge: 920,
            },
            {
              name: "Media",
              to: "#",
              icon: "far fa-images",
              badge: 7,
            },
            {
              name: "Files",
              to: "#",
              icon: "far fa-file-alt",
              badge: 19,
            },
          ],
        },
        {
          name: "Add Product",
          to: "#",
          icon: "fa fa-plus",
        },
      ],
    },
    {
      name: "Payments",
      icon: "fa fa-money-bill-wave",
      sub: [
        {
          name: "Scheduled",
          to: "#",
          badge: 3,
          "badge-variant": "success",
        },
        {
          name: "Recurring",
          to: "#",
        },
        {
          name: "Manage",
          to: "#",
        },
        {
          name: "New Payment",
          to: "#",
          icon: "fa fa-plus",
        },
      ],
    },
    {
      name: "Services",
      icon: "fa fa-globe-americas",
      sub: [
        {
          name: "Hosting",
          to: "#",
        },
        {
          name: "Web Design",
          to: "#",
        },
        {
          name: "Web Development",
          to: "#",
        },
        {
          name: "Graphic Design",
          to: "#",
        },
        {
          name: "Legal",
          to: "#",
        },
        {
          name: "Consulting",
          to: "#",
        },
      ],
    },
    {
      name: "Personal",
      heading: true,
    },
    {
      name: "Profile",
      icon: "far fa-user",
      sub: [
        {
          name: "Edit",
          to: "#",
        },
        {
          name: "Settings",
          to: "#",
        },
        {
          name: "Log out",
          to: "#",
        },
      ],
    },
  ],
};
