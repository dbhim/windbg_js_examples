# Примеры js-скриптов для WinDbg

[https://github.com/dbhim/windbg_js_examples](https://github.com/dbhim/windbg_js_examples)\
[https://gitverse.ru/dbhim/windbg_js_examples](https://gitverse.ru/dbhim/windbg_js_examples)

На виртуальных машинах Win*ReVD примеры находятся в каталоге `C:\bh\tools\WinDbg\js\my_examples`. Для облегчения их запуска необходимые команды прописаны в `C:\bh\tools\WinDbg\Windbgtree.txt`, запуск которого прописан в ярлыке WinDbg.

js-скрипты запускаются в WinDbg с помощью стандартного плагина JsProvider.dll, который для работы со скриптами предоставляет команды:\
`.scriptload`\
`.scriptrun`\
`.scriptunload`\
`.scriptdebug`

Интерфейс js-скриптов предполагает некоторые предопределённые имена функций: `initializeScript`, `invokeScript`, `uninitializeScript`. Также возможно из консоли отладчика вызывать из загруженного скрипта функции по именам.

Доступ к отладочным интерфейсам (функциям и типам) осуществляется через глобальное имя `host`.


## Примеры

### Пример hello.js

[Стандартный пример от Microsoft](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/javascript-debugger-scripting).

Команда запуска:

`.scriptload hello.js; .scriptlist; dx -r3 Debugger.State.Scripts.hello; dx Debugger.State.Scripts.hello.Contents.RunCommands(); .scriptrun hello.js; .scriptunload hello.js`


### Пример help.js

Выводит некоторые интересные интерфейсы, доступные через имя `host` и все интерфейсы объекта типа host.Int64.
<details>
<summary>Пример вывода</summary>

`host.currentApiVersionSupported`\
`host.currentApiVersionInitialized`\
`host.diagnostics`\
`host.metadata`\
`host.typeSignatureRegistration`\
`host.typeSignatureExtension`\
`host.namedModelRegistration`\
`host.namedModelParent`\
`host.functionAlias`\
`host.namespacePropertyParent`\
`host.optionalRecord`\
`host.apiVersionSupport`\
`host.resourceFileName`\
`host.allowOutsidePropertyWrites`\
`host.Int64`\
`host.parseInt64`\
`host.namespace`\
`host.evaluateExpression`\
`host.evaluateExpressionInContext`\
`host.getModuleSymbol`\
`host.getModuleContainingSymbol`\
`host.getModuleContainingSymbolInformation`\
`host.getModuleSymbolAddress`\
`host.setModuleSymbol`\
`host.getModuleType`\
`host.createInstance`\
`host.createPointerObject`\
`host.createTypedObject`\
`host.indexedValue`\
`host.getNamedModel`\
`host.registerNamedModel`\
`host.unregisterNamedModel`\
`host.registerPrototypeForTypeSignature`\
`host.registerExtensionForTypeSignature`\
`host.unregisterPrototypeForTypeSignature`\
`host.unregisterExtensionForTypeSignature`\
`host.resourceLookup`\
`host.currentSession`\
`host.currentProcess`\
`host.currentThread`\
`host.memory`\
`host.typeSystem`\
`host.memory.collectGarbage`\
`host.memory.readWideString`\
`host.memory.readString`\
`host.memory.readMemoryValues`\
`host.memory.writeMemoryValues`\
`host.memory.physicalAddress`\
`host.namespace.Debugger`\
`host.namespace.toString`\
`host.namespace.addParentModel`\
`host.namespace.removeParentModel`\
`host.namespace.getDimensionality`\
`host.namespace.getValueAt`\
`host.namespace.setValueAt`\
`host.namespace.Debugger.Sessions`\
`host.namespace.Debugger.Settings`\
`host.namespace.Debugger.State`\
`host.namespace.Debugger.Utility`\
`host.namespace.Debugger.toString`\
`host.namespace.Debugger.addParentModel`\
`host.namespace.Debugger.removeParentModel`\
`host.namespace.Debugger.getDimensionality`\
`host.namespace.Debugger.getValueAt`\
`host.namespace.Debugger.setValueAt`\
`host.namespace.Debugger.Utility.Collections`\
`host.namespace.Debugger.Utility.Control`\
`host.namespace.Debugger.Utility.Objects`\
`host.namespace.Debugger.Utility.DbgDocumentation`\
`host.namespace.Debugger.Utility.Events`\
`host.namespace.Debugger.Utility.FileSystem`\
`host.namespace.Debugger.Utility.Code`\
`host.namespace.Debugger.Utility.Analysis`\
`host.namespace.Debugger.Utility.toString`\
`host.namespace.Debugger.Utility.addParentModel`\
`host.namespace.Debugger.Utility.removeParentModel`\
`host.namespace.Debugger.Utility.getDimensionality`\
`host.namespace.Debugger.Utility.getValueAt`\
`host.namespace.Debugger.Utility.setValueAt`\
`host.namespace.Debugger.Utility.Control.ExecuteCommand`\
`host.namespace.Debugger.Utility.Control.SetBreakpointAtSourceLocation`\
`host.namespace.Debugger.Utility.Control.SetBreakpointAtOffset`\
`host.namespace.Debugger.Utility.Control.SetBreakpointForReadWrite`\
`host.namespace.Debugger.Utility.Control.ChangeRegisterContext`\
`host.namespace.Debugger.Utility.Control.WalkStackForRegisterContext`\
`host.namespace.Debugger.Utility.Control.toString`\
`host.namespace.Debugger.Utility.Control.addParentModel`\
`host.namespace.Debugger.Utility.Control.removeParentModel`\
`host.namespace.Debugger.Utility.Control.getDimensionality`\
`host.namespace.Debugger.Utility.Control.getValueAt`\
`host.namespace.Debugger.Utility.Control.setValueAt`\
`host.Int64.Min`\
`host.Int64.Max`\
`host.Int64(1).toString`\
`host.Int64(1).valueOf`\
`host.Int64(1).asNumber`\
`host.Int64(1).convertToNumber`\
`host.Int64(1).getLowPart`\
`host.Int64(1).getHighPart`\
`host.Int64(1).add`\
`host.Int64(1).subtract`\
`host.Int64(1).multiply`\
`host.Int64(1).divide`\
`host.Int64(1).modulo`\
`host.Int64(1).bitwiseAnd`\
`host.Int64(1).bitwiseOr`\
`host.Int64(1).bitwiseXor`\
`host.Int64(1).bitwiseNot`\
`host.Int64(1).bitwiseShiftLeft`\
`host.Int64(1).bitwiseShiftRight`\
`host.Int64(1).compareTo`
</details>



### Пример user_mode.js

В примере демонстрируются некоторые возможности по расширению модели данных NatVis (для списка процессов), работе с 64-х битными целыми числами (через тип host.Int64), добавлению своих команд в отладчик, работе с символами и памятью.


### Пример breakpoints.js

Демонстрирует работу с точками останова из скрипта: список точек останова, установка, обработка.



### Пример hook_SendMessage.js

Демонстрирует перехват (через точки останова) функции SendMessage (SendMessageW, SendMessageA).
Из внешнего модуля winmsg.js вызывается функция `GetMsgNameByNumber` для получения строки с именем сообщения. Обычный механизм импорта не сработал. Поэтому приходится вызывать в js-скриптах сторонние функции через команды WinDbg.



### Пример kernel_mode.js

На примере ядерных переменных и структур данных демонстрируется интерфейс работы с указателями (`host.createPointerObject`), типами, типизированными переменными (`host.createTypedObject`), чтения памяти (`host.memory.readWideString`, `host.memory.readWideString`).



## Ссылки

* [javascript-debugger-scripting](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/javascript-debugger-scripting)
* [using-linq-with-the-debugger-objects](https://learn.microsoft.com/en-us/windows-hardware/drivers/debugger/using-linq-with-the-debugger-objects)
* [determining-process-architecture-with-javascript-and-linq](https://learn.microsoft.com/ru-ru/archive/blogs/windbg/determining-process-architecture-with-javascript-and-linq)
* [native-objects-in-javascript-extensions](https://learn.microsoft.com/en-GB/windows-hardware/drivers/debugger/native-objects-in-javascript-extensions)
* [native-objects-in-javascript-extensions-debugger-objects](https://learn.microsoft.com/ru-ru/windows-hardware/drivers/debugger/native-objects-in-javascript-extensions-debugger-objects)
* [javascript-debugger-example-scripts](https://learn.microsoft.com/ru-ru/windows-hardware/drivers/debugger/javascript-debugger-example-scripts)
* [https://github.com/microsoft/WinDbg-Samples](https://github.com/microsoft/WinDbg-Samples)
* [defcon_27_windbg_workshop](https://github.com/hugsy/defcon_27_windbg_workshop/tree/main)
* [https://doar-e.github.io/blog/2017/12/01/debugger-data-model/](https://doar-e.github.io/blog/2017/12/01/debugger-data-model/)
* [https://github.com/0vercl0k/windbg-scripts](https://github.com/0vercl0k/windbg-scripts)
* [https://www.osr.com/blog/2017/05/18/windbg-debugger-objects-javascript-oh/](https://www.osr.com/blog/2017/05/18/windbg-debugger-objects-javascript-oh/)
* [https://chentiangemalc.wordpress.com/2021/11/19/show-window-messages-sent-in-time-travel-trace/](https://chentiangemalc.wordpress.com/2021/11/19/show-window-messages-sent-in-time-travel-trace/)
* [https://doar-e.github.io/blog/2017/12/01/debugger-data-model/](https://doar-e.github.io/blog/2017/12/01/debugger-data-model/)
* [https://alecmaly.com/blog/2021/10/22/Exploring-the-WinDbg-Preview-JavaScript-API.html](https://alecmaly.com/blog/2021/10/22/Exploring-the-WinDbg-Preview-JavaScript-API.html)