function formMəlumatlarınıKonsolaYazdır() {
  var form = document.getElementById("qeydiyyatFormu");
  var formMəlumatları = new FormData(form);

  console.clear();

  formMəlumatları.forEach(function (qiymət, açar) {
    console.log(açar + ": " + qiymət);
  });
}

function formuSıfırla() {
  var form = document.getElementById("qeydiyyatFormu");
  form.reset();
}

var form = document.getElementById("qeydiyyatFormu");

form.addEventListener("submit", function (hadisə) {
  hadisə.preventDefault();
  formMəlumatlarınıKonsolaYazdır();
  setTimeout(() => {
    window.location.href = "yeniseyfe.html";
  }, 2000);
});
