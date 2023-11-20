const StringFirst = prompt("Введіть перший рядок");
const StringSecond = prompt("Введіть другий рядок");
const StringThird = prompt("Введіть третій рядок");
const RandomValue = Math.random();

if (RandomValue <= 0.166) {
    alert(`${StringFirst} ${StringSecond} ${StringThird}`);
} else if(RandomValue <= 0.333){
    alert(`${StringFirst} ${StringThird} ${StringSecond}`);
} else if (RandomValue <= 0.5) {
    alert(`${StringSecond} ${StringFirst} ${StringThird}`);
} else if (RandomValue <= 0.666) {
    alert(`${StringSecond} ${StringThird} ${StringFirst}`);
} else if (RandomValue <= 0.833) {
    alert(`${StringThird} ${StringSecond} ${StringFirst}`);
} else {
    alert(`${StringThird} ${StringFirst} ${StringSecond}`);
}

const FiveDigitNumber = prompt("Введіть пятизначное число");
const StringSeparateNumbers = (FiveDigitNumber - FiveDigitNumber % 10000)/10000 + " " + (FiveDigitNumber % 10000 - FiveDigitNumber % 1000)/1000 + " " + (FiveDigitNumber % 1000 - FiveDigitNumber % 100)/100 + " " + (FiveDigitNumber % 100 - FiveDigitNumber % 10)/10 + " " + FiveDigitNumber % 10;
alert (StringSeparateNumbers); // выводим через матемематические преобразования
alert(FiveDigitNumber.split('').join(" ")); // выводим через разбитие строки на символы



