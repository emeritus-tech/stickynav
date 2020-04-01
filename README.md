# Stickynav

## Instructions
* Install dependencies - `yarn`
* Start the server - `yarn start` to see a live example
* Build the library - `yarn build`
* Enjoy!

## Usage

### In browsers
```javascript
<script>
    new stickynav({
        { 
            scrollThreshold: 300, 
            elementClass: 'this-is-sticky', 
            desktopPosition: 'top',
            mobilePosition: 'bottom'
        }
    });
</script>
```

### In node environments

#### Install
`yarn add @emeritus-tech/stickynav`

#### Import

##### js:
```javascript
    import Stickynav from 'stickynav';

    let stickynav = new Stickynav({
        { 
            scrollThreshold: 300, 
            elementClass: 'this-is-sticky', 
            desktopPosition: 'top',
            mobilePosition: 'bottom'
        }
    });
```

##### scss:
```javascript
    import '~stickynav/stickynav';
```

