var rakamekle = false
var oncekisonuc = 0
var islem = "="
function temizle()
{
  document.hesapmakinesi.sonuc.value = 0
  oncekisonuc = 0
  rakamekle = false
  islem = "="
} 

function hesapla(yeniislem)
{
 
  var yenisayi = eval(document.hesapmakinesi.sonuc.value)
 
  if (islem == "+") {
    oncekisonuc = oncekisonuc + yenisayi
  }
  else if (islem == "-") {
    oncekisonuc = oncekisonuc - yenisayi
  }
  else if (islem == "/") {
    oncekisonuc = oncekisonuc / yenisayi
  }
  else if (islem == "*") {
    oncekisonuc = oncekisonuc * yenisayi
  }
  else if (islem == "=") {
    oncekisonuc = yenisayi
  }
  else { 
    oncekisonuc = yenisayi
  }
   
  document.hesapmakinesi.sonuc.value = oncekisonuc
  rakamekle = false
  islem = yeniislem
} 
 
function sayiyaz(rakam)
{
  if (rakamekle) {
    document.hesapmakinesi.sonuc.value += rakam
  }
  else {
    document.hesapmakinesi.sonuc.value = rakam
    rakamekle = true
  } }