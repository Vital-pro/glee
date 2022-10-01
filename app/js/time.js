document.addEventListener("DOMContentLoaded", function () {
  let today = new Date();
  const monthTitle = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря'
];

let time = document.querySelectorAll('time');

// for (i = 0; i < 3; i++) {
//   time[0].innerText = formatTimePost1(today);
//   time[1].innerText = formatTimePost2(today);
//   time[2].innerText = formatTimePost3(today);
// }

for (let i = 0; i < time.length; i++) {
  if (i === 0) {
    time[i].innerText = formatTimePost1(today);
  } else if (i === 1) {
    time[i].innerText = formatTimePost2(today);
  } else if (i === 2) {
    time[i].innerText = formatTimePost3(today);
  } else if (i === 3) {
    time[i].innerText = formatTimePost4(today);
  } else if (i === 4) {
    time[i].innerText = formatTimePost1(today);
  } else if (i === 5) {
    time[i].innerText = formatTimePost2(today);
  } else if (i === 6) {
    time[i].innerText = formatTimePost3(today);
  } else if (i === 7) {
    time[i].innerText = formatTimePost4(today);
  } 
}

// time[0].innerText = formatTimePost1(today);
// time[1].innerText = formatTimePost1(today);
// time[2].innerText = formatTimePost3(today);
// time[4].innerText = formatTimePost1(today);
// time[5].innerText = formatTimePost2(today);
// time[i].innerText = formatTimePost3(today);
// time[++i].innerText = formatTimePost4(today);


  function formatTimePost1(today) {
    const date = (today.getDate()).toString().padStart(2, '0');
    // const month = (today.getMonth() + 1).toString().padStart(2, '0'); так цифрами
    const month = today.getMonth();  // 0 - 11 номер месяца
    const year = today.getFullYear();

    return `${date} ${monthTitle[month]} ${year}`
  };


  // console.log(formatTimePost1(today));
  // document.getElementById("current_date").innerText = formatTimePost1(today);
  // document.getElementById("current_date-aside").innerText = formatTimePost1(today);


  function formatTimePost2(today) {
    today = new Date();
    const date = (today.getDate(today.setDate((0)))).toString().padStart(2, '0');
    // const date = (today.getDate()).toString().padStart(2, '0');
    // const month = (today.getMonth() + 1).toString().padStart(2, '0'); так цифрами
    const month = today.getMonth();  // 0 - 11 номер месяца
    const year = today.getFullYear();

    return `${date} ${monthTitle[month]} ${year}`
  };

  // console.log(formatTimePost2(today));
  // document.getElementById("current_date1").innerText = formatTimePost2(today);
  // document.getElementById("current_date-aside1").innerText = formatTimePost2(today);


  function formatTimePost3(today) {
    today = new Date();
    const date = (today.getDate(today.setDate((-15)))).toString().padStart(2, '0');
    const month = today.getMonth();  // 0 - 11 номер месяца
    const year = today.getFullYear();

    return `${date} ${monthTitle[month]} ${year}`
  };

  // console.log(formatTimePost3(today));
  // document.getElementById("current_date2").innerText = formatTimePost3(today);
  // document.getElementById("current_date-aside2").innerText = formatTimePost3(today);



  function formatTimePost4(today) {
    today = new Date();
    const date = (today.getDate(today.setDate((-22)))).toString().padStart(2, '0');
    const month = today.getMonth();  // 0 - 11 номер месяца
    const year = today.getFullYear();

    return `${date} ${monthTitle[month]} ${year}`
  };

  // console.log(formatTimePost4(today));
  // document.getElementById("current_date3").innerText = formatTimePost4(today);
  // document.getElementById("current_date-aside3").innerText = formatTimePost4(today);



  // today.setDate(today.getDate() - 05)
  // console.log(today);



  // document.getElementById("current_date").innerText = formatTimePost1(today);
  // document.getElementById("current_date1").innerText = formatTimePost2(today);
  // document.getElementById("current_date2").innerText = formatTimePost3(today);
  // document.getElementById("current_date3").innerText = formatTimePost4(today);

  // document.getElementById("current_date-aside").innerText = formatTimePost1(today);
  // document.getElementById("current_date-aside1").innerText = formatTimePost2(today);
  // document.getElementById("current_date-aside2").innerText = formatTimePost3(today);
  // document.getElementById("current_date-aside3").innerText = formatTimePost4(today);



  // --start--РАБОЧАЯ--actual date start-------------

  // let today = new Date();

  // let date =
  //   today.getDate() +
  //   ". " +
  //   ("0" + (new Date().getMonth() + 1)).slice(-2) +
  //   ". " +
  //   today.getFullYear();
  // let date1 =
  //   today.getDate() -
  //   2 +
  //   ". " +
  //   ("0" + (new Date().getMonth() + 0)).slice(-2) +
  //   ". " +
  //   today.getFullYear();
  // let date2 =
  //   today.getDate() -
  //   4 +
  //   ". " +
  //   ("0" + (new Date().getMonth() - 1)).slice(-2) +
  //   ". " +
  //   today.getFullYear();
  // let date3 =
  //   today.getDate() +
  //   ". " +
  //   ("0" + (new Date().getMonth() - 2)).slice(-2) +
  //   ". " +
  //   today.getFullYear();

  // document.getElementById("current_date").innerText = date;
  // document.getElementById("current_date1").innerText = date1;
  // document.getElementById("current_date2").innerText = date2;
  // document.getElementById("current_date3").innerText = date3;

  // document.getElementById("current_date-aside").innerText = date;
  // document.getElementById("current_date-aside1").innerText = date1;
  // document.getElementById("current_date-aside2").innerText = date2;
  // document.getElementById("current_date-aside3").innerText = date3;

  // --finish--РАБОЧАЯ --actual date -------------

  // https://javascript.ru/forum/misc/65647-vyvod-nazvaniya-mesyaca.html  вывод названия месяца??
});
