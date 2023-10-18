document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.getElementById("dataList");

    // Функция, возвращающая промис для загрузки данных с сервера
    function fetchData() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    reject(new Error("Ошибка загрузки данных"));
                }
            };

            xhr.onerror = function () {
                reject(new Error("Ошибка сети"));
            };

            xhr.send();
        });
    }

    // Функция для отображения данных на странице
    function displayData(data) {
        data.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.title;
            dataList.appendChild(listItem);
        });
    }

    // Загрузка данных с использованием промисов
    fetchData()
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error("Ошибка:", error);
        });
});

