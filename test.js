<!DOCTYPE html>
<html lang="en">
<head>
    <title>Basic Web PAge</title>
    <style>
        .highlight {
            background-color: #ffeb3b;
            padding: 5px;
            font-weight: bold;        }
    </style>
</head>
<body>


    <h1 id="main-title">Welcome to My Website</h1>
    <p id="description">Click the button below to see DOM manipulation in action.</p>

    <button id="action-btn">Click Me</button>

    <ul id="item-list">
        <li>Existing Item</li>
    </ul>

    <script>
        const button = document.getElementById('action-btn');
        const title = document.getElementById('main-title');
        const description = document.getElementById('description');
        const list = document.getElementById('item-list');

        button.addEventListener('click', function() {
            title.textContent = "Hello, Javascript World";
            description.classList.add('highlight');
            description.textContent = "The description and styling have been updated"
            const newItem = document.createElement('Li');
            newItem.textContent = "Newly added item!";
            List.appendChild(newItem);
            button.textContent = "Updated!";
            button.disabled = true;
        });
    </script>
</body>
</html>

