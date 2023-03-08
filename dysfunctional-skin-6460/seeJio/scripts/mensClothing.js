//Price Slider
const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 1000;
priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }

    let priceSorted2 = sortedData1;
    console.log(maxPrice, minPrice);
    priceSorted2 = priceSorted2.filter((el) => {
      if (el.price >= minPrice && el.price <= maxPrice) {
        return true;
      } else {
        return false;
      }
    });

    if (!filter1.checked) {
      priceSorted2 = priceSorted2.filter((el) => {
        if (el.Gender == "Men") {
          return true;
        } else {
          return false;
        }
      });
    }
    console.log(priceSorted2);
    Display(priceSorted2);
  });
});
rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);
    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

// Modal
const modal = document.querySelector(".modal");
const trigger = document.querySelector(".trigger");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);

//Modal 2

const modal2 = document.querySelector(".modal2");
const trigger2 = document.querySelector(".trigger2");
const closeButton2 = document.querySelector(".close-button2");

function toggleModal2() {
  modal2.classList.toggle("show-modal2");
}

function windowOnClick2(event) {
  if (event.target === modal2) {
    toggleModal2();
  }
}

trigger2.addEventListener("click", toggleModal2);
closeButton2.addEventListener("click", toggleModal2);
window.addEventListener("click", windowOnClick2);

// Modal 3
const modal3 = document.querySelector(".modal3");
const trigger3 = document.querySelector(".trigger3");
const closeButton3 = document.querySelector(".close-button3");

function toggleModal3() {
  modal3.classList.toggle("show-modal3");
}

function windowOnClick3(event) {
  if (event.target === modal3) {
    toggleModal3();
  }
}

trigger3.addEventListener("click", toggleModal3);
closeButton3.addEventListener("click", toggleModal3);
window.addEventListener("click", windowOnClick3);

// Toggler for Dropping down filter - Refine in sideNav
let drop = document.getElementsByClassName("dropdown");

drop[0].addEventListener("click", () => {
  document.querySelector(".toggleThis1").classList.toggle("hidden");
});

drop[1].addEventListener("click", () => {
  document.querySelector(".toggleThis2").classList.toggle("hidden");
});

drop[2].addEventListener("click", () => {
  document.querySelector(".toggleThis3").classList.toggle("hidden");
});

drop[3].addEventListener("click", () => {
  document.querySelector(".toggleThis4").classList.toggle("hidden");
});

drop[4].addEventListener("click", () => {
  document.querySelector(".toggleThis5").classList.toggle("hidden");
});

drop[5].addEventListener("click", () => {
  document.querySelector(".toggleThis6").classList.toggle("hidden");
});

drop[6].addEventListener("click", () => {
  document.querySelector(".toggleThis7").classList.toggle("hidden");
});

drop[7].addEventListener("click", () => {
  document.querySelector(".toggleThis8").classList.toggle("hidden");
});

// Dynamic Display

let container = document.querySelector("#fetchedDisplay");
let paginationWrapper = document.getElementById("pagination-wrapper");
let cartData = JSON.parse(localStorage.getItem("cart")) || [];
let favData = JSON.parse(localStorage.getItem("favourites")) || [];
let fetchedData = [];
let fetchedData2 = [];
let sortedData1 = [];
let filter1 = document.getElementById("Gender");
window.addEventListener("load", () => {
  fetchAndRender(fetchedData);
});

function fetchAndRender(Gender = "Men") {
  fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
    .then((responseObject) => {
      return responseObject.json();
    })
    .then((acctualData) => {
      fetchedData = acctualData;
      fetchedData2 = acctualData;
      sortedData1 = acctualData;
      fetchedData = fetchedData.filter((el) => {
        if (el.Gender == Gender) {
          return true;
        } else {
          return false;
        }
      });

      //renderPaginationButtons(totalCount);
      Display(fetchedData);
    })
    .catch((error) => {
      console.log(error);
    });
  // }
  function Display(data) {
    //container.innerHTML = null;
    let itemsFound = document.getElementById("itemsFound");
    data.forEach((element) => {
      let card = document.createElement("div");
      card.setAttribute("class", "displayMain");
      let pic = document.createElement("img");
      pic.setAttribute("src", element.image);

      let brand = document.createElement("h2");
      brand.innerText = element.Brand;

      let price = document.createElement("h3");
      price.innerText = "₹ " + element.price;

      let details = document.createElement("p");
      details.innerText = element.Gender;

      let category = document.createElement("p");
      category.innerText = element.category;

      let addToCart = document.createElement("button");
      addToCart.innerText = "Add To Cart";
      addToCart.setAttribute("id", "cartButton");

      let favourites = document.createElement("button");
      favourites.innerText = "Favourites";

      let description = document.createElement("p");
      description.innerText = element.description;

      let rating = document.createElement("p");
      rating.innerText = "⭐" + element.rating.rate;

      let discount = document.createElement("p");
      discount.innerText = "Offer Discount :" + element.Discount;

      addToCart.addEventListener("click", () => {
        let cartData = JSON.parse(localStorage.getItem("cart"));

        if (cartData === null) cartData = [];

        let isAdleadyInCart = false;
        for (let i = 0; i < cartData.length; i++) {
          if (cartData[i].id === element.id) {
            isAdleadyInCart = true;
            break;
          }
        }

        if (isAdleadyInCart === true) {
          alert("Product Already in Cart");
        } else {
          cartData.push({ ...element, quantity: 1 });
          localStorage.setItem("cart", JSON.stringify(cartData));
          alert("Product Added To Cart");
        }
      });

      favourites.addEventListener("click", () => {
        if (favData === null) cartData = [];

        let isAdleadyInFav = false;
        for (let i = 0; i < favData.length; i++) {
          if (favData[i].id === element.id) {
            isAdleadyInFav = true;
            break;
          }
        }

        if (isAdleadyInFav === true) {
          alert("Product Already in Favourites");
        } else {
          favData.push({ ...element, quantity: 1 });
          localStorage.setItem("favourites", JSON.stringify(favData));
          alert("Product Added To favourites");
        }
      });

      card.append(
        pic,
        brand,
        description,
        price,
        details,
        category,
        rating,
        discount,
        addToCart,
        favourites
      );
      container.append(card);
      itemsFound.innerText = data.length + " Items found";
    });
  }
}

fetchAndRender();
// //!test Infinite scrolling
window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop;
  var clientHeight = document.documentElement.clientHeight;
  let counter = 1;
  if (scrollTop + clientHeight > scrollHeight - 5) {
    if (counter === 2) {
      counter = 0;
    }
    let Gen = "";
    if (filter1.checked == true) {
      Gen = "women";
    } else {
      Gen = "Men";
    }
    setTimeout(fetchAndRender(Gen), 0);
  }
});

//!end infinite scrolling

// ?Regular pagination
// function renderPaginationButtons(totalCount) {
//   let totalNumberOfButtons = Math.ceil(totalCount / 10);

//   function asListOfButtons() {
//     let arr = [];
//     for (let i = 1; i <= totalNumberOfButtons; i++) {
//       arr.push(getAsButton(i, "pagination-btn button", i));
//     }
//     return arr.join("");
//   }

//   paginationWrapper.innerHTML = `
//     <div class="pagination-btn-list">
//       ${asListOfButtons()}
//       totalCount: ${totalCount}
//     </div>
//   `;
//   let paginationButtons = document.querySelectorAll(".pagination-btn");

//   for (let paginationButton of paginationButtons) {
//     paginationButton.addEventListener("click", function (e) {
//       let dataId = e.target.dataset.id;
//       fetchAndRenderIngredients(
//         `${recipeIngredientURL}?_limit=10&_page=${dataId}`
//       );
//       resetPrimaryClassInPaginationButtons();
//       e.target.classList.add("button-primary");
//     });
//   }

//   function resetPrimaryClassInPaginationButtons() {
//     for (let paginationButton of paginationButtons) {
//       paginationButton.classList.remove("button-primary");
//     }
//   }
// }

// function getAsButton(text, cls, dataId) {
//   return `<button class="${cls}" ${
//     dataId ? `data-id = ${dataId}` : ""
//   } >${text}</button>`;
// }

//outside display to get sorted data
function Display(data) {
  container.innerHTML = null;
  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "displayMain");
    let pic = document.createElement("img");
    pic.setAttribute("src", element.image);

    let brand = document.createElement("h2");
    brand.innerText = element.Brand;

    let price = document.createElement("h3");
    price.innerText = "Rs " + element.price;

    let details = document.createElement("p");
    details.innerText = element.Gender;

    let category = document.createElement("p");
    category.innerText = element.category;

    let addToCart = document.createElement("button");
    addToCart.innerText = "Add To Cart";

    let favourites = document.createElement("button");
    favourites.innerText = "Favourites";

    let description = document.createElement("p");
    description.innerText = element.description;

    let rating = document.createElement("p");
    rating.innerText = "⭐" + element.rating.rate;

    let discount = document.createElement("p");
    discount.innerText = "Offer Discount : " + element.Discount;

    addToCart.addEventListener("click", () => {
      let cartData = JSON.parse(localStorage.getItem("cart"));

      if (cartData === null) cartData = [];

      let isAdleadyInCart = false;
      for (let i = 0; i < cartData.length; i++) {
        if (cartData[i].id === element.id) {
          isAdleadyInCart = true;
          break;
        }
      }

      if (isAdleadyInCart === true) {
        alert("Product Already in Cart");
      } else {
        cartData.push({ ...element, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(cartData));
        alert("Product Added To Cart");
      }
    });

    favourites.addEventListener("click", () => {
      if (favData === null) cartData = [];

      let isAdleadyInFav = false;
      for (let i = 0; i < favData.length; i++) {
        if (favData[i].id === element.id) {
          isAdleadyInFav = true;
          break;
        }
      }

      if (isAdleadyInFav === true) {
        alert("Product Already in Favourites");
      } else {
        favData.push({ ...element, quantity: 1 });
        localStorage.setItem("favourites", JSON.stringify(favData));
        alert("Product Added To favourites");
      }
    });

    card.append(
      pic,
      brand,
      description,
      price,
      details,
      category,
      rating,
      discount,
      addToCart,
      favourites
    );
    container.append(card);
  });
}

//filter1 for Gender

filter1.addEventListener("change", (e) => {
  if (e.target.checked) {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;
        fetchedData2 = acctualData;

        fetchedData = fetchedData.filter((el) => {
          if (el.Gender == "women") {
            return true;
          } else {
            return false;
          }
        });

        Display(fetchedData);
      })
      .catch((error) => {
        console.log(error);
      });
  } else {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;
        fetchedData2 = acctualData;

        fetchedData = fetchedData.filter((el) => {
          if (el.Gender == "Men") {
            return true;
          } else {
            return false;
          }
        });

        Display(fetchedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

//filter2 : Categories "Shirt"
let filter2 = document.getElementById("categories1");
filter2.addEventListener("change", (e) => {
  if (e.target.checked) {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;
        fetchedData2 = acctualData;

        fetchedData = fetchedData.filter((el) => {
          if (el.category == "Shirt" && el.Gender == "Men") {
            return true;
          } else {
            return false;
          }
        });

        Display(fetchedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

//filter3 categories "Trouser"
let filter3 = document.getElementById("categories2");
filter3.addEventListener("change", (e) => {
  if (e.target.checked) {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;

        fetchedData = fetchedData.filter((el) => {
          if (
            (el.category == "Trousers" ||
              el.category == "Pant" ||
              el.category == "Trouser") &&
            el.Gender === "Men"
          ) {
            return true;
          } else {
            return false;
          }
        });

        Display(fetchedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

//filter4 for Jackets
let filter4 = document.getElementById("categories3");
filter4.addEventListener("change", (e) => {
  if (e.target.checked) {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;

        fetchedData = fetchedData.filter((el) => {
          if (
            (el.category == "Jacket" || el.category == "Jackets") &&
            el.Gender === "Men"
          ) {
            return true;
          } else {
            return false;
          }
        });

        Display(fetchedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

// !PRICE
//filter5 for Price
let filter5 = document.getElementById("LessThan500");
filter5.addEventListener("change", (e) => {
  if (e.target.checked) {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;

        fetchedData = fetchedData.filter((el) => {
          if (el.price <= 500) {
            return true;
          } else {
            return false;
          }
        });

        if (document.getElementById("Gender").checked) {
          fetchedData = fetchedData.filter((ele) => {
            if (ele.Gender == "women") {
              return true;
            } else {
              return false;
            }
          });
        } else {
          fetchedData = fetchedData.filter((ele) => {
            if (ele.Gender == "Men") {
              return true;
            } else {
              return false;
            }
          });
        }

        Display(fetchedData);
      })
      .catch((error) => {});
  }
});

let completeData = [];

// filter 6 price 1000-15000

let filter6 = document.getElementById("1000to1500");
filter6.addEventListener("change", (e) => {
  if (e.target.checked) {
    fetch(`https://63ca6469f36cbbdfc7574d92.mockapi.io/seeJio/seeJio`)
      .then((responseObject) => {
        return responseObject.json();
      })
      .then((acctualData) => {
        fetchedData = acctualData;
        completeData = acctualData;
        fetchedData = fetchedData.filter((el) => {
          if (el.price >= 1000 && el.price <= 1500) {
            return true;
          } else {
            return false;
          }
        });

        if (document.getElementById("Gender").checked) {
          fetchedData = fetchedData.filter((ele) => {
            if (ele.Gender == "women") {
              return true;
            } else {
              return false;
            }
          });
        } else {
          fetchedData = fetchedData.filter((ele) => {
            if (ele.Gender == "Men") {
              return true;
            } else {
              return false;
            }
          });
        }

        Display(fetchedData);
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

// filter7 for price 1000-1500
let filter7 = document.getElementById("1500to2500");
filter7.addEventListener("click", () => {
  if (filter7.checked) {
    let filter7Data = completeData.filter((ele) => {
      if (ele.price > 1500 && ele.price < 2500) {
        return true;
      } else {
        return false;
      }
    });
  }
  Display(filter7Data);
});

// sort
let sorted = document.getElementById("sort");

sorted.addEventListener("change", sort);

function sort() {
  let sortedData2 = sortedData1;
  let selected = document.getElementById("sort").value;

  if (filter1.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.Gender == "women") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (!filter1.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.Gender == "Men") {
        return true;
      } else {
        return false;
      }
    });
  }

  if (filter2.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.category == "Shirt") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (filter3.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.category == "Trouser") {
        return true;
      } else {
        return false;
      }
    });
  }
  if (filter4.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.category == "Jacket") {
        return true;
      } else {
        return false;
      }
    });
  }

  if (filter5.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.price <= 500) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (filter6.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.price >= 1000 && el.price <= 1500) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (filter7.checked) {
    sortedData2 = sortedData2.filter((el) => {
      if (el.price >= 1500 && el.price <= 2500) {
        return true;
      } else {
        return false;
      }
    });
  }

  if (selected == "LTH") {
    sortedData2 = sortedData2.sort((a, b) => {
      if (a.price > b.price) {
        return 1;
      }
      if (a.price < b.price) {
        return -1;
      }
    });
    Display(sortedData2);
  }
  if (selected == "HTL") {
    sortedData2 = sortedData2.sort((a, b) => {
      if (a.price > b.price) {
        return -1;
      }
      if (a.price < b.price) {
        return 1;
      }
    });
    Display(sortedData2);
  }
}

// SLIDER
const minRangeInput = document.querySelector(".range-min");
const maxRangeInput = document.querySelector(".range-max");

minRangeInput.addEventListener("input", function () {
  let PriceSorted = sortedData1.filter((el) => {
    if (el.price >= this.value) {
      return true;
    } else {
      return false;
    }
  });
  if (!filter1.checked) {
    PriceSorted = PriceSorted.filter((el) => {
      if (el.Gender == "Men") {
        return true;
      } else {
        return false;
      }
    });
  } else {
    PriceSorted = PriceSorted.filter((el) => {
      if (el.Gender == "women") {
        return true;
      } else {
        return false;
      }
    });
  }
  Display(PriceSorted);
});

maxRangeInput.addEventListener("input", function () {
  let PriceSorted = sortedData1.filter((el) => {
    if (el.price < this.value) {
      return true;
    } else {
      return false;
    }
  });
  if (!filter1.checked) {
    PriceSorted = PriceSorted.filter((el) => {
      if (el.Gender == "Men") {
        return true;
      } else {
        return false;
      }
    });
  } else {
    PriceSorted = PriceSorted.filter((el) => {
      if (el.Gender == "women") {
        return true;
      } else {
        return false;
      }
    });
  }
  Display(PriceSorted);
});

let cartButton = document.querySelector(".cartButon");
cartButton.addEventListener("click", function () {
  window.location.pathname = "cart.html";
});

let favButton = document.querySelector(".favButton");
favButton.addEventListener("click", function () {
  window.location.pathname = "favourites.html";
});

let sideNav = document.querySelector("#sideNav");
sideNav.style.width = "30vw";
let h4 = document.querySelectorAll("h4");
h4.forEach((h) => {
  h.style.color = "black";
});
