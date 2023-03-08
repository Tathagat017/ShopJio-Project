// DONT RUN AGAIN

let fetchedData = [];

fetch("seeJio/db/db.json")
  .then((responseObject) => {
    return responseObject.json();
  })
  .then((acctualData) => {
    fetchedData = acctualData;
    fetchedData2 = acctualData;
    console.log(fetchedData);
    // Display(acctualData);

    for (let i = 19; i <= fetchedData.length - 1; i++) {
      fetch("https://639f6b485eb8889197fc63dd.mockapi.io/tagShop/api/seeJIO", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fetchedData[i]),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => console.log("error"));
    }
  })
  .catch((error) => {
    console.log(error);
  });

window.addEventListener("load", () => {
  //Display(fetchedData);
});
