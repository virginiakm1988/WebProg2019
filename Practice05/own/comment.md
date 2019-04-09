# Practice05.comments

## 完程度(0~100%)
95%
雖然有bug的是多寫的功能不過一旦crash就沒辦法用了！！

## coding quality(自由作答)
- 有不小心把`===`打成`==`的地方ＸＤ（line 40）
- `inputOperators`這個函式應該有一些可以拆成function的地方，比如說判斷operator的那串if else

## 正確性

- 應該不能打00.0000吧ＸＤ
 （赫然發現自己有可能也沒顧到這點ＱＱ）
  ![](https://i.imgur.com/xGhP3V4.png)


## 值得學習的地方
- +/-, % 這些功能都有implement～

## 建議改進的地方

- 🐛
算完一個算式，按下等於後再按小數點會crash
(ex: "1+2=.")
![](https://i.imgur.com/msy9OvL.png)
    - <b><i>可能原因：</i></b> 可能是因為按完`=`後，你在126, 128行給`input`存的數值型別都是Number，但是`indexOf()`是針對string或是array的，所以才會出現這樣的error。
    - <b><i>建議改進：</i></b> 把129行改成這樣
    ``` js
    input: num + ""
    ```
    - <b><i>建議改進：</i></b> 發現上面那樣還是會有問題ＸＤ直接把`inputDot()`改成這樣啦！！
    ```js
    var str = (this.state.input).toString()
    if(str.indexOf('.')===-1){
      this.setState({
        input: this.state.input + '.'
      })
    }
    ```

## 其他心得