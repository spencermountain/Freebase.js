#Keep your pants on, javascript.
###don't __blow your stack__, or over-async a nice web service.

__slow is smooth, smooth is fast.__


it goes,

     npm install slow

```javascript
slow=require('slow');
slow.walk( [1,2,3,4], random_wait, console.log);//results, in order

function random_wait(i, callback){
  setTimeout(callbck(i), Math.random()*4000);
}
```

unlike the ___[other](https://github.com/tatumizer/mesh) [woderful](https://raw.github.com/caolan/async) [async](https://github.com/kriszyp/node-promise) [libraries](http://tamejs.org)___,
this one lets you set the pace.

so you don't _immediately do everything_ at once.

###like some fool.

you can be safe with memory and respect external services.
#the methods are:

##rate-limited
_explicitly set a pace, but respect a maximum current request rate (defaults to 10)_

_(it begins at this pace, but slows it down if callbacks begin to build-up)_

* __slow.pace__ ( _arr, fn, [options], callback_ ) _//60bpm_
* __slow.walk__ ( _arr, fn, [options], callback_ ) _//[120bpm](http://www.wolframalpha.com/input/?i=average+walking+pace)_
* __slow.jog__ ( _arr, fn, [options], callback_ ) _//150bpm_
* __slow.run__ ( _arr, fn, [options], callback_ ) _//180bpm_
* __slow.heartbeat__ ( _arr, fn, [options], callback_ ) _//72bpm_


##count-limited
_do only a few things at a time._
_(only go as fast as your callback does)_

* __slow.steady__ ( _arr, fn, [options], callback_ )  _//max=5_
* __slow.handful__ ( _arr, fn, [options], callback_ ) _//max=3_
* __slow.pocket__ ( _arr, fn, [options], callback_ )  _//max=7_
* __slow.backpack__ ( _arr, fn, [options], callback_ ) _//max=15_
* __slow.shovel__ ( _arr, fn, [options], callback_ ) _//max=35_

##the _options_ are:
```javascript
{
 debug: true, //understand when the requests are being fired
 verbose: true, //include the input in the results
 monitor: function(r){console.log(r.length)}, //watch the results coming in in real-time
 max: 10 //the most number of concurrent requests you're comfortable making
}
```
but you can just ignore those tho

##in the f-ing Browzers!1
(2.8k)
```html
<script src="https://raw.github.com/spencermountain/slow/master/slow.min.js"></script>
<script>
  slow.__walk__( [1,2,3,4,5,6,7], my_function, {max:3}, function(r){
    alert(r.join(', '))
  })
  function my_function(q, callback){
    var x=Math.floor(Math.random()*2000)
    setTimeout(function(){callback("finished "+q+" in "+x+"ms")}, x)
  }
</script>
```
##what about my craziness..
if you're in a situation that needs fancy paramaters, wrap them up like this:
```javascript
slow.steady( [1,2,3,4], whatev, console.log);
function whatev(i, callback){
  my_craziness(param1, param2, then_finally, a, callback) //works fine
}
```
or if your function returns __[errror, result]__  (i hate that)
```javascript
slow.steady( [1,2,3,4], whatev, console.log);
function whatev(i, callback){
  my_craziness(i, function(err, result){
    callback(result||err);//la de da;)
  })
}
```

## boogers
MIT