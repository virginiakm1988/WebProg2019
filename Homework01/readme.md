####開了一個todo_list_data array來存放所有的 to-do list item，包含了`{ node: input.value , isComplete: false }`，存儲每一個項目的內容與完成的狀態。

##```addElements(input)```
####增加一個文字內容為`input`的項目在list當中，同時於`todo_list_data`array增加一個為內容為`input`的newItem。
##```deleteElement()```
####從X按鈕刪除ITEM，監聽所有的`"todo-app__item-x"`，如果有任何一個按鈕被點到，將會從螢幕上與todo list data array中刪除那個item。
##```itemCompleted()```
####當有項目完成後，改變CSS以及改變item_list_data中的屬性。
##```addNewElements(list,item_text,isCompleted)```
####將項目繪製到HTML上面。list要傳入的是在HTML中的`<div id = "todo-app_list>`，才能夠用list來`append Child`。item_text要傳入的是你想增加的項目的文字訊息，isCompleted則是項目的完成狀態，以便在HTML上根據完成狀態顯示不同CSS。
##```showElements(status)```
####會根據點選的按鈕傳入不同的status，裡面使用addNewElements來將不同項目秀出來。
1 status`"Completed"`，會顯示已完成的項目
2 `"active"`會顯示未完成項目
3 `"all"`則是顯示所有項目。

##```deleteAll()```
####當按下新的按鈕會把所有項目清空，一切歸0
##```count()```
####計數、並且更改total 的innerHTML