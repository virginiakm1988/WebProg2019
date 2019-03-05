# Web programming Practice02 comment

## 完成度
60% 

## Code quality
HTML排版整齊，不過下面塞了一串js，建議可以改成從外部嵌入

## 正確性

#### 有些bug，建議可以再稍微修改

1. 這次應該是要做一個圖片不會無限循環的網頁，要implement button disabled的部份（按鈕變灰，圖片不會循環）

2. pizza圖片沒有放到array裡，導致他只會在剛開始出現，之後循環時會找不到

3. Source應該寫在main外，否則會疊在圖片上，且會隨著圖片縮放。

4. 隨著圖片改變，source的innerhtml應該要跟著改變

5. button hover後會不自然地放大 

6. id = display 應該是要寫在```<div class="image-viewer__display">``` 裡的 ```<img>```中

## 值得學習之處
學到了setTimeout()這個js內建函式

## 建議
1. 可參考一下網路上div跟span的用法差異 － https://dotblogs.com.tw/brooke/2014/07/11/145905

2. 在 ```<head> </head>``` 中加入以下語法，即可從外部嵌入js
   ```
   <script src="main.js"></script>
   ```
    
3. 剛開始的畫面完全擠在一起，縮小視窗後有變正常，可能是老師原本給的code沒處理好的關係



## 其他
meme很好看
