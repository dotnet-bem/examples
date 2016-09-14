# vCard

The virtual business card (vCard) is a demo project on ASP.NET MVC that demonstrates how to use BEM tools for solving ordinary tasks.

[LIVE DEMO](http://bemtest.ecm7.ru/)

## How it works

The user sees a form for personal data (first and last name, job title, and contact information). When the user fills in the form and submits it, the information is stored on the server. Then another page opens that shows a Yandex vCard with the information that the user entered in the first step.

## Backend
All of the server logic is implemented in a single controller ([HomeController.cs](Controllers/HomeController.cs)).

Controller methods:
- `Index` (GET) – Displays the form.
- `Index` (POST) – Accepts the submitted form and stores the data in `Session`.
- `Vcard` (GET) – Retrieves the session data by key and displays the vCard.

The model of the `Index` method (POST) is automatically filled in with the form data using standard [ASP.NET MVC Binders](https://docs.asp.net/en/latest/mvc/models/model-binding.html) (the names of the form fields match the names of the model fields).

## Frontend

The application interface is implemented using the [BEM](https://en.bem.info) methodology. BEM infrastructure for the project: [System.Web.Bem](https://github.com/dotnet-bem/system-web-bem).

The project uses the block libraries [bem-core](https://github.com/bem/bem-core) and [bem-components](https://github.com/bem/bem-components) (they are integrated into the project from NuGet and added to the [levels.js](Bem/levels.js) file as redefinition levels).

Application blocks:
- [b-page](Bem/desktop.blocks/b-page) – Common part for all application pages.
- [b-form](Bem/desktop.blocks/b-form) – The form for entering personal data.
- [b-vcard](Bem/desktop.blocks/b-vcard) – The vCard.
- [link](Bem/desktop.blocks/link) – Extension of the `link` block from the previous redefinition levels (changes the link color).

The common part of the pages is defined in the [b-page](Bem/desktop.blocks/b-page) block. The content of each page is defined by a separate block. A [separate redefinition level](Bem/page.blocks) describes the page blocks that contain the `b-page` block and sets the necessary content for it.

Page blocks:
- [p-vcard-form](Bem/page.blocks/p-vcard-form) – The form for entering personal data.
- [p-vcard-preview](Bem/page.blocks/p-vcard-preview) – The vCard.
