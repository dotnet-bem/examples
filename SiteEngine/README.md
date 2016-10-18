Чтобы собрать песочницу для блока, нужно:
- добавить папку с именем блока в папку `test.bundles`
- добавить в созданную папку декларацию, содержащую блок и страницу песочницы ([пример](https://github.com/dotnet-bem/examples/blob/bc8e34e378e99efa163e5f27651d866ed17942d3/SiteEngine/Bem/test.bundles/example/example.bemdecl.js))
- добавить для нужного блока реализацию в технологии `.sandbox.js` ([пример](https://github.com/dotnet-bem/examples/blob/bc8e34e378e99efa163e5f27651d866ed17942d3/SiteEngine/Bem/desktop.blocks/example/example.sandbox.js))
- собрать бандлы: `enb make --dir Bem`
- открыть в браузере собранный файл `Bem/test.bundles/example/example.sandbox.html`
