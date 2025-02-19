const credits = 23580;
const pricePerDroid = 3000;

const quantity = prompt("Скільки ремонтних дроїдів ви хочете купити?");

if (quantity === null) {
    console.log("Скасовано користувачем!");
} else {
    const totalPrice = pricePerDroid * Number(quantity);

    if (totalPrice > credits) {
        console.log("Недостатньо коштів на рахунку!");
    } else {
        const remainingCredits = credits - totalPrice;
        console.log(`Ви купили ${quantity} дроїдів, на рахунку залишилося ${remainingCredits} кредитів.`);
    }
}