# jquery.bart.dropdown

This is jQuery dropdown menu plugin.

# Install

```
<script  src="https://code.jquery.com/jquery-3.6.0.min.js"  integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="  crossorigin="anonymous"></script>
<script  src="./jquery.bart.dropdown.js"></script>
```

## Live Demo

https://hyuk-june.github.io/jquery.bart.dropdown/

## How to use

```
<div class="dropdown">
  <button type="button">Click me</button>
  <ul>
    <li><a href="#">item 1</a></li>
    <li><a href="#">item 2</a></li>
    <li><a href="#">item 3</a></li>
    <li><a href="#">item 4</a></li>
    <li><a href="#">item 5</a></li>
  </ul>
</div>

<script>
// basic
$('.dropdown').dropdown()

// or
$('.dropdown').dropdown({
  options: {
    trigger: 'over',
    bgColor: '#fff',
  },
  callback: (idx, ele) => {
    console.log(idx)
  }
})
</script>
```

## Options

| name            | type   | explain                        | example                                            |
| --------------- | ------ | ------------------------------ | -------------------------------------------------- |
| trigger         | string | event method                   | 'click' or 'over'                                  |
| bgColor         | string | background color               | '#fff'                                             |
| border          | string | border style                   | '1px solid #ddd'                                   |
| zIndex          | number | z-index                        | 99                                                 |
| pos             | string | show position                  | 'bottom','top','left','right','leftTop','rightTop' |
| itemBgColor     | string | item's normal background color | '#fff'                                             |
| itemOverBgColor | string | item's over background color   | '#2b82f6'                                          |
| itemColor       | string | item's normal text color       | '#000'                                             |
| itemOverColor   | string | item's over test color         | '#fff'                                             |

※ Options can also be given in the html attribute as shown below.

```
<div class="dropdown" data-trigger="over" data-item-bg-color="#fff" data-xxx="...">
```

※ Because stylesheet is minimized, it is recommended to use it with a separate css framework.
