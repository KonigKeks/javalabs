document.addEventListener("DOMContentLoaded", function () {
    const dataList = document.getElementById("dataList");

    // �������, ������������ ������ ��� �������� ������ � �������
    function fetchData() {
        return new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);

            xhr.onload = function () {
                if (xhr.status === 200) {
                    const data = JSON.parse(xhr.responseText);
                    resolve(data);
                } else {
                    reject(new Error("������ �������� ������"));
                }
            };

            xhr.onerror = function () {
                reject(new Error("������ ����"));
            };

            xhr.send();
        });
    }

    // ������� ��� ����������� ������ �� ��������
    function displayData(data) {
        data.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item.title;
            dataList.appendChild(listItem);
        });
    }

    // �������� ������ � �������������� ��������
    fetchData()
        .then(data => {
            displayData(data);
        })
        .catch(error => {
            console.error("������:", error);
        });
});

