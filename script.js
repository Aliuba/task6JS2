// --створити масив та вивести його в консоль:
//     -з 5 числових значень -
//     з 5 стічкових значень -
//     з 5 значень стрічкового, числового та булевого типу
let a = [2, 3, 4, 5, 6];
console.log(a);
let s = ["f", "ff", "d", "fthy", "jrgkf"];
console.log(s);
let d = [4, "errr", false, true, "ffff"];
console.log(d);

// --Створити пустий масив.Наповнити його будь - якими значеннями звертаючись до конкретного індексу.Вивести в консоль

let a = [];
a[1] = "ggff";
a[0] = 2;
a[2] = "ffhj";
a[3] = true;
console.log(a);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

for (let i = 0; i < 10; ++i) {
    document.write('<div> gfjkgj </div>');
}

// -За допомогою циклу
// for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; ++i) {
    document.write('<div> gfjkgj  ');
    document.write(i);
    document.write('</div>');
}

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

let i = 0;
while (i < 20) {
    document.write('<h1>fhkfdhkld</h1>');
    i++;
}

// -За допомогою циклу
// while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let i = 0;
while (i < 20) {
    document.write('<h1>fhkfdhkld  ');
    document.write(i);
    document.write("</h1>");
    i++;
}

// -Створити масив з 10 числових елементів.Вивести в консоль всі його елементи в циклі.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
arr.forEach(element => {
    console.log(element);
});

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let arr = ["1", "2", "3", "4", "5", "6", "7", " 8", " 9", "10"]
arr.forEach(element => {
    console.log(element);
});

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі


let arr = ["1", "2", false, "4", true, "6", undefined, 8, NaN, 10]
arr.forEach(element => {
    console.log(element);
});

// -Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки булеві елементи

let arr = ["1", 2, false, "4", true, "6", undefined, 8, NaN, 10]
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "boolean") {
        console.log(arr[i] + " -index " + i);
    }
}

// -Створити масив з 10 елементів числового, стірчкового і булевого типу.За допомогою
// if та typeof вивести тільки числові елементи
let arr = ["1", 2, false, "4", true, "6", undefined, 8, NaN, 10]
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "number") {
        console.log(arr[i] + " -index " + i);
    }
}

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let arr = ["1", 2, false, "4", true, "6", undefined, 8, NaN, 10]
for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "string") {
        console.log(arr[i] + " -index " + i);
    }
}

// -Створити порожній масив.Наповнити його 10 елементами(різними за типами) через звернення
// до конкретних індексів.Вивести в консоль всі його елементи в циклі.

let arr = [];
arr[0] = 0;
arr[1] = false;
arr[2] = true;
arr[3] = NaN;
arr[4] = undefined;
arr[5] = null;
arr[6] = { fggfhf: "fgf", fdhgf: "dgfdhf", ghfhf: "gfhfg" };
arr[7] = "dgdfgd";
arr[8] = "gfg";
arr[9] = 90;
arr.forEach(element => {
    console.log(element + " " + typeof(element))
});

// -Створити цикл
// for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(i + "<br/>");
}

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(i);
}
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i);
    document.write(i);
}

// -Створити цикл
// for на 100 ітерацій.Вивести тільки непарні кроки.через console.log + document.write
for (let i = 0; i < 100; i += 2) {
    console.log(i + 1);
    document.write(i + 1);
}

// -Відтворити роботу годинника, відрахувавши 2 хвилини(2 цикли!1 й - хвилини, 2 й - секунди)
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 60; j++) {
        console.log(i + ':' + j)
    }
}

// - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

labelCancelLoops: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 60; j++) {
        for (let s = 0; s < 60; s++) {
            console.log(i + ':' + j + " :" + s)
            if (i == 2 && j == 20 && s == 0) {
                break labelCancelLoops;
            }

        }
    }
}

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.

let arr = ['a', 'b', 'c']
let s = "";
for (const i of arr) {
    s = s + i;
}
console.log(s);

// -Дано масив: ['a', 'b', 'c'].За допомогою циклу
// while зібрати всі букви в слово.
let arr = ['a', 'b', 'c']
let s = "";
let i = 0;
while (i < arr.length) {
    s = s + arr[i];
    i++;
}
console.log(s);

// -Дан масив['a', 'b', 'c'].Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
let arr = ['a', 'b', 'c']
for (let i = 1; i < 4; i++) {
    arr.push(i)
}
console.log(arr);

// Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let arr = [1, 2, 3]
arr.reverse();
console.log(arr)

// -Дан масив[1, 2, 3].Додайте йому в кінець елементи 4, 5, 6. -
//     Дан масив[1, 2, 3].Додайте йому в початок елементи 4, 5, 6.

let arr = [1, 2, 3];
arr.unshift(4, 5, 6);
arr.push(4, 5, 6);
console.log(arr);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let arr = ['js', 'css', 'jq'];
console.log(arr.shift(0));

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
let arr = ['js', 'css', 'jq'];
console.log(arr.pop(arr.length));

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].
let arr = [1, 2, 3, 4, 5];
console.log(arr.slice(3, 5));
console.log(arr.slice(0, 2));
console.log(arr.splice(1, 2))
console.log(arr)

// -Дан масив[1, 2, 3, 4, 5].За допомогою методу / функції splice зробіть з нього масив[1, 2, 3, 'a', 'b', 'c', 4, 5]

let arr = [1, 2, 3, 4, 5];
arr.splice(3, 0, 'a', 'b', 'c');
console.log(arr)

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let arr = [1, 2, 3, 4, 5];
arr.splice(1, 0, 'a', 'b');
arr.splice(6, 0, 'c')
arr.splice(8, 0, 'e')
console.log(arr)

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr = [2, 23, 25, 14, 16, 159, 18, 23, 12, 25]
for (const iterator of arr) {
    if (iterator % 2 == 0) { console.log(iterator) }

}

// Взяти масив з 10 чисел або створити його. Створити 2й порожній масив.
//  За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
let arr1 = [2, 23, 25, 14, 16, 159, 18, 23, 12, 25];
let arr2 = [];
for (const iterator of arr1) {
    arr2.push(iterator)

}
console.log(arr2)

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
// 2. перебрати його циклом for
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// 7. замінити кожне число кратне 3 на слово "okten"
// 8. вивести масив в зворотньому порядку.
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

let arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++
}
for (const iterator of arr) {
    console.log(iterator);
}
while (i < arr.length) {
    if (i % 2 == 1) { console.log(arr[i]); }

    i++
}
for (let j = 0; j < arr.length; j++) {
    if (j % 2 == 1) { console.log(arr[j]); }

}
while (i < arr.length) {
    if (arr[i] % 2 == 0)
        console.log(arr[i])
    i++
}
замінити кожне число кратне 3 на слово "okten"
while (i < arr.length) {
    if (arr[i] % 3 == 0)
        arr[i] = "okten"
    i++
}
console.log(arr)

// //  створити пустий масив та :
// // - заповнити його 50 парними числами за допомоги циклу.
// // - заповнити його 50 непарними числами за допомоги циклу.

let a1 = [];
let a2 = [];
while (a1.length < 50) {
    let k = parseInt(Math.random() * 500);
    if (k % 2 == 0) {
        a1.push(k)
        a2.push(k + 1)
    }
}

console.log(a1, a2)

// 3. используя Math.random заполнить массив из ? ? ? (сколько хотите) элементов.
// диапазон рандома 8 до 732.(но сначала пробуйте БЕЗ ДИАПАЗОНА!)
// 2. вывести на консоль каждый третий елемент
// 3. вывести на консоль каждый третий елемент
// но при условии что его значение является парным.
// 4. вывести на консоль каждый третий елемент
// но при условии что он имеет парное значение и
// записать их в другой массив.

let a1 = [];

while (a1.length < 50) {
    let k = parseInt(Math.random() * (732 - 8) + 8);
    a1.push(k);
}
console.log(a1)
    //     // 2. вывести на консоль каждый третий елемент
for (let i = 0; i < a1.length; i++) {
    if (i % 3 == 0) {
        console.log(a1[i]);
    }
}
// // 3. вывести на консоль каждый третий елемент
// // но при условии что его значение является парным.
for (let i = 0; i < a1.length; i++) {
    if ((i % 3 == 0) && (a1[i] % 2 == 0)) {
        console.log(a1[i]);
    }
}
// // 4. вывести на консоль каждый третий елемент
// // но при условии что он имеет парное значение и
// // записать их в другой массив.
let a2 = []
for (let i = 0; i < a1.length; i++) {
    if ((i % 3 == 0) && (a1[i] % 2 == 0)) {
        a2.push(a1[i]);
    }
}
console.log(a2)

// 5. Вывести каждый елемент массива у которого соседний с права элемент - парный

let a1 = [25, 2, 3, 45, 44, 56, 87, 88, 455, 444]
for (let i = 0; i < a1.length; i++) {
    if (a1[i + 1] % 2 == 0) {
        console.log(a1[i]);
    }
}

// 5 масив з числами[100, 250, 50, 168, 120, 345, 188],
//     Які характеризують вартість окремої покупки.обрахувати середній чек.
let a = [100, 250, 50, 168, 120, 345, 188];
let s = 0;
for (let i = 0; i < a.length; i++) {
    s = s + a[i]
}
console.log(s / a.length)

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let a1 = [];
let a2 = [];

while (a1.length < 10) {
    let k = parseInt(Math.random() * (20 - 10) + 10);
    a1.push(k);
}
for (const iterator of a1) {
    a2.push(iterator * 5)

}
console.log(a2)
console.log(a1)

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

let arr = ["1", "2", false, "4", true, "6", undefined, 8, "nhhh", 10]
let arr2 = [];
for (const iterator of arr) {
    console.log(typeof(iterator));
    if (typeof(iterator) == 'number') {
        arr2.push(iterator);
    }
}
console.log(arr2)