const menu = [
    {
      id: 1,
      title: "turntables",
      category: "equipment",
      price: 100,
      img: "./images/item-1.jpeg",
      desc: `Rent these awesome turntables that comes with a microphone and headphones to get your party started!`,
    },
    {
      id: 2,
      title: "hip hop playlist",
      category: "playlists",
      price: 20,
      img: "./images/item-2.jpeg",
      desc: `Want a hip hop playlistt for your party? Buy now and keep forever!`,
    },
    {
      id: 3,
      title: "birthday event",
      category: "planning",
      price: 500,
      img: "./images/item-3.jpeg",
      desc: `Need help planning your birthday party? This will come with all equipment and we have a wide range of decorations to choose from.`,
    },
    {
      id: 4,
      title: "speakers",
      category: "equipment",
      price: 100,
      img: "./images/item-4.jpeg",
      desc: `Two jumbo speakers to rent for a day.`,
    },
    {
      id: 5,
      title: "RnB Playlist",
      category: "playlists",
      price: 20,
      img: "./images/item-5.jpeg",
      desc: `RnB playlist that will feature the top RnB songs of today!`,
    },
    {
      id: 6,
      title: "Wedding Event",
      category: "planning",
      price: 600,
      img: "./images/item-6.jpeg",
      desc: `Weddings are alot to handle so hire a planner to help! We offer a range of decorations to choose from. We will make sure your day is special.`,
    },
    {
      id: 7,
      title: "lighting equipment",
      category: "equipment",
      price: 150,
      img: "./images/item-7.jpeg",
      desc: `This lighting equipment features alot of colors and effects!`,
    },
    {
      id: 8,
      title: "custom playlist",
      category: "playlists",
      price: 50,
      img: "./images/item-8.jpeg",
      desc: `Select this option to have a custom playlist made for your event! A representative will reach out to you.`,
    },
    {
      id: 9,
      title: "any event",
      category: "planning",
      price: 400,
      img: "./images/item-9.jpeg",
      desc: `The starting price is 400 but depending on the size of the party it will increase. A representative will reach out to you for more details.`,
    },
    {
      id: 10,
      title: "installation",
      category: "installation",
      price: 100,
      img: "./images/item-10.jpeg",
      desc: `The starting price is 100 but depending on the amount on equipment it will increase. A representative will reach out to you for more details.`,
    },
  ];
  // get parent element
  const sectionCenter = document.querySelector(".section-center");
  const btnContainer = document.querySelector(".btn-container");
  // display all items when page loads
  window.addEventListener("DOMContentLoaded", function () {
    diplayMenuItems(menu);
    displayMenuButtons();
  });
  
  function diplayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
      // console.log(item);
  
      return `<article class="menu-item">
            <img src=${item.img} alt=${item.title} class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">
                ${item.desc}
              </p>
            </div>
          </article>`;
    });
    displayMenu = displayMenu.join("");
    // console.log(displayMenu);
  
    sectionCenter.innerHTML = displayMenu;
  }
  function displayMenuButtons() {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      },
      ["all"]
    );
    const categoryBtns = categories
      .map(function (category) {
        return `<button type="button" class="filter-btn" data-id=${category}>
            ${category}
          </button>`;
      })
      .join("");
  
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filter-btn");
    console.log(filterBtns);
  
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        // console.log(e.currentTarget.dataset);
        const category = e.currentTarget.dataset.id;
        const menuCategory = menu.filter(function (menuItem) {
          // console.log(menuItem.category);
          if (menuItem.category === category) {
            return menuItem;
          }
        });
        if (category === "all") {
          diplayMenuItems(menu);
        } else {
          diplayMenuItems(menuCategory);
        }
      });
    });
  }