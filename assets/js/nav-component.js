// import permissions from "../assets/js/permissions.js";

class Headerr extends HTMLElement {
  constructor() {
    super();
    // this.attachShadow({ mode: 'open' }); // Attach Shadow DOM
  }

  connectedCallback() {
    this.innerHTML = `
      <style>

      /* Initially hide submenus */
.dropdown-sub-menu {
  display: none;
  list-style: none;
  padding: 0;
  margin: 0;
}


/* Position relative for parent li to align submenu */
li {
  position: relative;
}

      
     .navbar-menu li:nth-child(5) .dropdown-menu .dropdown-toggle:hover .dropdown-menu {
    position: fixed !important;
    top: initial !important;
    left: initial !important;
}

      .tamil-font .navbar-menu>li>a {
    font-size: 11px;
}
    .tamil-font .dropdown a.dropdown-toggle {
    top: 3px;
    position: relative;
}

       .active-page {
    border-bottom: 2px solid white;
    color: white;
  }
    .active-parent {
    border-bottom: 2px solid white;
    color: white !important;
    } 
  
    .navbar {
      background-color: #0a077a;
      /* Dark Blue */
      padding: 0;
    }

    .navbar-menu {
      list-style: none;
      display: flex;
      margin: 0;
      padding: 0;
      justify-content: center;
    }

    .navbar-menu li {
      position: relative;
    }

    .navbar-menu>li>a {
      display: block;
      padding: 10px 8px;
      color: white;
      text-decoration: none;
      font-weight: bold;
      text-transform: uppercase;
      font-size: 13.5px;
    }

    .navbar-menu>li>a:hover {
      border-bottom: 2px solid white;
    }

    .dropdown:hover .dropdown-menu {
      display: block;
    }

    .dropdown-menu {
      /* display: none;
      position: absolute;
      background: #0a077a;
      top: 100%;
      min-width: 220px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 0 0 6px 6px;
      overflow: hidden; */
      display: none;
      position: absolute;
      background: #0a077a;
      top: 27px;
      left: 0;
      min-width: 220px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      border-radius: 0 0 6px 6px;
      overflow: hidden;
      margin-left: 0;
      z-index: 999;
    }

    .navbar-menu .arrow {
      color: white;
      margin-left: 4px;
    }

    .navbar-menu .dropdown-toggle {
      line-height: 1.2;
    }

    .dropdown {
      float: left;
      overflow: initial !important;
    }

    .dropdown-menu li a {
      display: block;
      padding: 12px 16px;
      color: white;
      text-decoration: none;
      font-size: 14px;
    }

    .dropdown-menu li:first-child a {
      background-color: #0073cf;
      /* Light Blue */
    }

    .dropdown-menu li:nth-child(2) a {
      background-color: #0a077a;
      /* Dark Blue */
    }

    .dropdown-menu li a:hover {
      background-color: #005bb5;
    }

    .tamil-padding {
      padding: 14px 10px !important;
      font-size: 12px;
    }
    
    .admin-class{
           right: 0rem;
    left: auto;
}
        }
      </style>

       <nav class="navbar">
        <ul class="navbar-menu">
          <li><a href="index.html" data-i18n="menu-home">Home</a></li>

          <li class="dropdown">
            <a data-i18n="menu-about" class="dropdown-toggle">
              <span class="text"></span> <span class="arrow">▾</span>
            </a>

            <ul class="dropdown-menu">
              <li><a href="about-us218d.html" data-i18n="about-chairperson">Chairperson and Members</a></li>
              <li><a href="former-chairperson218d.html" data-i18n="about-former">Former Chairpersons</a></li>
            </ul>
          </li>


          <li><a href="acts-rules-regulations218d.html" data-i18n="menu-acts">Acts1, Rules and Regulations</a></li>
          <li><a href="notification218d.html" data-i18n="menu-notifications">Notifications</a></li>
          <li class="dropdown">
            <a data-i18n="menu-downloads" class="dropdown-toggle">
              <span class="text"></span> <span class="arrow">▾</span>
            </a>
            <ul class="dropdown-menu">
              <li><a href="download218d.html" data-i18n="menu-sub-downloads">Downloads</a></li>
              <li>
                <a data-i18n="menu-links" class="dropdown-toggle">
                  <span class="text"></span> <span class="arrow">▾</span>
                </a>
                <ul class="dropdown-sub-menu">
                  <li><a href="https://tcp.tn.gov.in/home" target="_blank" data-i18n="sub-menu-dtcp">DTCP</a></li>
                  <li><a href="https://www.cmdachennai.gov.in/" target="_blank" data-i18n="sub-menu-cmda">CMDA</a></li>
                  <li><a href="https://rera.tn.gov.in/" target="_blank" data-i18n="sub-menu-rera">RERA</a></li>
                  <li><a href="https://mohua.gov.in/" target="_blank" data-i18n="sub-menu-mohua">MOHUA</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="cause-list218d.html" data-i18n="menu-causelist">Cause List</a></li>
          <li><a href="case-information218d.html" data-i18n="menu-caseinfo">Case Information</a></li>
          <li><a href="orders218d.html" data-i18n="menu-orders">Orders</a></li>
          <li><a href="contactus218d.html" data-i18n="menu-contact">Contact Us</a></li>

         <li class="dropdown" id="admin-menu" style="display: none;">
            <a data-i18n="menu-admin" class="dropdown-toggle">
              <span class="text"></span> <span class="arrow">▾</span>
            </a>

            <ul class="dropdown-menu admin-class" >
              <li><a data-i18n="menu-admin-notifications" href="admin-notification.html">Notification</a></li>
              <li><a data-i18n="menu-admin-causelist" href="admin-causelist.html">Cause List</a></li>
              <li><a data-i18n="menu-admin-caseinfo" href="admin-case-information.html">Case Information</a></li>
              <li><a data-i18n="menu-admin-orders" href="admin-orders.html">Orders</a></li>
              <li><a data-i18n="menu-admin-acts" href="admin-acts-rules-regulation.html">Acts Rules and Regulation</a>
              </li>
              <li><a data-i18n="menu-admin-downloads" href="admin-download.html">Downloads</a></li>
              <li><a data-i18n="menu-admin-chairperson" href="admin-chairperson-and-members-admin.html">Chairperson and
                  Members</a>
              </li>
              <li><a data-i18n="menu-admin-former" href="admin-former-chairpersons.html">Former Chairpersons</a></li>
              <li><a data-i18n="menu-admin-virtual-report" href="admin-virtual-meeting-report.html">Virtual Meeting
                  Report</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    `;
  }
}


customElements.define("header-component", Headerr);


$(document).ready(function () {
  var currentUrl = window.location.href;

  $('.navbar-menu a').each(function () {
    var linkUrl = this.href;

    // if (currentUrl === linkUrl) {
    //     $(this).addClass('active-page'); // Add class to active link
    // }

    if (currentUrl === linkUrl) {
      $(this).addClass('active-page');
      var parentLi = $(this).closest('.dropdown');
      if (parentLi.length) {
        parentLi.find('> a').addClass('active-parent');
      }
    }

  });
});

$(document).ready(function () {
  const userDetails = localStorage.getItem("userDetails");

  if (userDetails) {
    $("#admin-menu").show();  // Show only if userDetails exist
  } else {
    $("#admin-menu").hide();  // Hide otherwise
  }
});

$(document).ready(function () {
  
  // Show submenu on hover
  $('.dropdown-toggle').hover(
    function () {
      $(this).next('.dropdown-sub-menu').stop(true, true).slideDown(200);
    },
    function () {
      $(this).next('.dropdown-sub-menu').stop(true, true).slideUp(200);
    }
  );

  // Also hide submenu if mouse leaves submenu itself
  $('.dropdown-sub-menu').hover(
    function () {
      $(this).stop(true, true).show();
    },
    function () {
      $(this).stop(true, true).slideUp(200);
    }
  );
});
