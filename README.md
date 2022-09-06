<h1 align="center"> Hello everyone!) </h1>


<style>
    .block {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .block__column {
        width: 100%;
    }

    .block__column--text {
        max-width: 30%;
    }

    .block__column--img {
        text-align: center;
    }
</style>
<div class="block">
    <div class="block__column block__column--text">
        <p>Adding pages is now automatic.</p>
        <ul>
            <li>To add a new page, you need to create a new folder with "page_name", as well as two mandatory files in
                this
                folder:
                "page_name-entry.js" and "page_name.hbs".(pic.1 - 1)</li>
            <li>Also, in order not to add a page to the build, you need to put _ : "_page_name" before the folder
                name.(pic.1
                - 2)</li>
            <li>Also, now to include global scripts and styles, you need to add them to "page_name-entry.js".(pic.1 - 3)
            </li>
        </ul>
    </div>
    <div class="block__column block__column--img">
        <img class="img" src="./readme_img/addPage.jpg" />
        <p>pic.1</p>
    </div>
</div>