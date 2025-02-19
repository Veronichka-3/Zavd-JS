let country = prompt("Введіть країну доставки:");

if (country === null) {
    alert("Скасовано користувачем!");
} else {
    country = country.trim().toLowerCase();

    let price;

    switch (country) {
        case "китай":
            price = 100;
            country = "Китай";
            break;
        case "чилі":
            price = 250;
            country = "Чилі";
            break;
        case "австралія":
            price = 170;
            country = "Австралія";
            break;
        case "індія":
            price = 80;
            country = "Індія";
            break;
        case "ямайка":
            price = 120;
            country = "Ямайка";
            break;
        default:
            alert("У вашій країні доставка недоступна");
            price = null;
    }

    if (price !== null) {
        alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
    }
}