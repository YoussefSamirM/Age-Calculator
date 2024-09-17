let day = document.querySelector(".day");
let month = document.querySelector(".month");
let year = document.querySelector(".year");
let arrow = document.querySelector(".arrow");
let days = document.querySelector(".result .days span");
let months = document.querySelector(".result .months span");
let years = document.querySelector(".result .years span");

let allInputs = document.querySelectorAll("input");

arrow.addEventListener("click", function () {
  let nowDate = new Date();
  if (year.value == "" || day.value == "" || month.value == "") {
    allInputs.forEach((x) => {
      x.style.border = "hsl(0, 100%, 67%) 1px solid";
    });
  }
  allInputs.forEach((e) => {
    if (e.value == "") {
      e.style.border = "hsl(0, 100%, 67%) 1px solid";

      document.querySelectorAll(".content .date p").forEach((d) => {
        d.style.color = "hsl(0, 100%, 67%)";
        years.innerHTML = `--`;
        months.innerHTML = `--`;
        days.innerHTML = `--`;
      });
    }
    if (e.value !== "") {
      function calc(myDate) {
        let myYears = nowDate.getFullYear() - myDate.getFullYear();
        let myMonths = nowDate.getMonth() - myDate.getMonth();
        let myDays = nowDate.getDate() - myDate.getDate();
        if (myDays < 0) {
          myMonths--;
          let perv = new Date(myDate.getFullYear(), myDate.getMonth(), 0);
          myDays += perv.getDate();
        }

        if (myMonths < 0) {
          myYears--;
          myMonths += 12;
        }

        return { myYears, myDays, myMonths };
      }

      var myDate = new Date(`${year.value}-${month.value}-${day.value}`);
      let age = calc(myDate);

      years.innerHTML = age.myYears;
      months.innerHTML = age.myMonths;
      days.innerHTML = age.myDays;

      e.style.border = "1px solid hsl(0, 0%, 86%)";

      document.querySelectorAll(".content .date p").forEach((d) => {
        d.style.color = " hsl(0, 1%, 44%)";
      });
    }

    if (
      myDate.getFullYear() > nowDate.getFullYear() ||
      year.value <= 1900 ||
      years.innerHTML == "-1" ||
      month.value >= 13 ||
      month.value <= 0 ||
      day.value <= 0 ||
      day.value > 31 ||
      (day.value == 31 &&
        (month.value == 4 ||
          month.value == 9 ||
          month.value == 11 ||
          month.value == 6))
    ) {
      e.style.border = "hsl(0, 100%, 67%) 1px solid";

      document.querySelectorAll(".content .date p").forEach((d) => {
        d.style.color = "hsl(0, 100%, 67%)";
        years.innerHTML = `--`;
        months.innerHTML = `--`;
        days.innerHTML = `--`;
      });
    }
  });
});
