<template>
  <div class="wrapper">
    <!--you can swap "threeD" for "twoD" -->
    <section id="container" class="threeD">
      <figure id="carousel" class=""></figure>
    </section>
  </div>
  <section id="ctrls">
    <div id="dots"></div>
    <div>
      <div>
        Total: <label id="nodeCountLbl" for="nodeCountCtrl"></label>
        <input id="nodeCountCtrl" type="number" />
      </div>
      <div>
        Position:<label id="posCtrlLbl" for="posCtrl">Position</label>
        <input id="posCtrl" type="range" />
      </div>
    </div>
    <div>
      <button id="prev" data-increment="-1">Previous</button>
      <button id="next" data-increment="1">Next</button>
      <button id="axisCtrl">Toggle Carousel Axis</button>
      <button id="backfaceCtrl">Backface</button>
      <button id="3DCtrl">3D Toggle</button>
    </div>
  </section>
</template>

<script>
var Carousel = (function ($) {
  var modTransform = Modernizr.prefixed("transform");
  //config
  var _obj = {
    elem: undefined,
    nodes: 10,
    max: 20,
    radius: 100,
    axis: "y",
    nodeCtrl: undefined,
    nodeCtrlLbl: undefined,
    axisCtrl: undefined,
    nextBtnCtrl: undefined,
    previousBtnCtrl: undefined,
    backfaceCtrl: undefined,
    posCtrl: undefined,
    posCtrlLbl: undefined,
    generateElems: false,
    dotsCtrl: false,
    nodeName: "",
    displayBackface: true,
    generateColors: false,
  };
  var _rotations = { x: "rotateX", y: "rotateY" };
  var _rotOpp = { x: "y", y: "x" };
  function enableAxisCtrl() {
    if (_obj.axisCtrl !== undefined)
      _obj.axisCtrl.click(function () {
        toggleAxis();
      });
  }
  function enableBackfaceCtrl() {
    if (_obj.backfaceCtrl !== undefined)
      _obj.backfaceCtrl.click(function () {
        toggleBackface();
      });
  }
  function enableNextCtrl() {
    if (_obj.nextBtnCtrl !== undefined)
      _obj.nextBtnCtrl.click(function () {
        move(_obj.axis === "y" ? ~_obj.pos + 2 : _obj.pos + 1);
      });
  }
  function enableDots() {
    if (_obj.dotsCtrl !== undefined) {
      var i,
        l,
        tmp = document.createDocumentFragment();
      for (i = 0, l = len(); i < l; i += 1) {
        tmp.appendChild($("<figure>").addClass("dotOff").get(0));
        console.log("loop " + i);
      }
      _obj.dotsCtrl
        .empty()
        .html(tmp)
        .children()
        .on("click", function () {
          var idx = $(this).index();
          _obj.posCtrl ? _obj.posCtrl.val(idx).change() : move(idx);
          dotPos(idx);
        });
    }
  }
  this.dotPos = function (pos) {
    _obj.dotsCtrl.children().removeClass("dotOn").eq(pos).addClass("dotOn");
  };
  function enablePrevCtrl() {
    if (_obj.previousBtnCtrl !== undefined)
      _obj.previousBtnCtrl.click(function () {
        move(_obj.axis === "y" ? ~_obj.pos : _obj.pos - 1);
      });
  }
  function enablePosCtrl() {
    if (_obj.posCtrl !== undefined) {
      _obj.posCtrl
        .attr({ max: _obj.nodes - 1 })
        .val(_obj.pos)
        .on("change", function () {
          move(this.value);
          if (posCtrlLbl !== undefined) {
            _obj.posCtrlLbl.text(this.value);
          }
        });
    }
  }
  function enableCountCtrl() {
    if (_obj.nodeCtrl !== undefined) {
      //validate and correct: max input
      _obj.nodeCtrl
        .val(_obj.nodes > _obj.max ? _obj.max : _obj.nodes)
        .attr({ max: _obj.max, step: "1", min: "2" });
      _obj.nodeCtrl.change(function (event) {
        //validate and correct: /*odd and*/ max
        var val = this.value > _obj.max ? _obj.max : this.value; //>>1<<1;
        if (_obj.nodeCtrlLbl !== undefined)
          //update label
          _obj.nodeCtrlLbl.text(val + " " + _obj.nodeName);
        if (val !== this.value)
          //update input if invalid
          _obj.nodeCtrl.val(val);
        len(val);
      });
      //init the CtrlLbl
      if (_obj.nodeCtrlLbl !== undefined) {
        _obj.nodeCtrlLbl.text(_obj.nodes + " " + _obj.nodeName);
      }
    }
  }
  this.toggleBackface = function () {
    _obj.elem.toggleClass("backface");
  };
  this.init = function (_opts) {
    if (_opts.elem === undefined || _opts.elem === null)
      throw new Error(
        "Carousel.init(object): Requires object.elem type HTML elemtent"
      );
    $.extend(true, _obj, _opts);
    _obj.elem.addClass("carousel");
    //Generate new children with pos + click event if resetflag
    if (_obj.generateElems) {
      var tmp = document.createDocumentFragment();
      for (var i = 0, l = _obj.max; i < l; ++i) {
        tmp.appendChild($("<figure>").attr({ "data-pos": i }).html(i).get(0));
      }
      _obj.elem.empty().html(tmp);
      _obj.nodes = _obj.nodes;
    } else {
      _obj.nodes = _obj.max = _obj.elem.children().length;
      _obj.elem.children().each(function (n) {
        $(this).attr({ "data-pos": n });
      });
    }
    if (!_obj.displayBackface) _obj.elem.toggleClass("backface");
    $.extend(_obj, {
      pos: 0,
      mid: _obj.nodes >> 1,
      rot: 0,
      nodeSlice: 360 / _obj.nodes,
    });
    morph();
    enablePosCtrl();
    enableCountCtrl();
    enableAxisCtrl();
    enableBackfaceCtrl();
    enableNextCtrl();
    enablePrevCtrl();
    $("body").addClass("ready");
    console.log("Ready");
    return this;
  };
  function morph() {
    enableDots();
    var e = _obj.elem[0];
    var nodeSize = e[_obj.axis == "x" ? "offsetHeight" : "offsetWidth"];
    var nodeSlice = 360 / _obj.nodes;
    _obj.radius = Math.round((nodeSize >> 1) / Math.tan(Math.PI / _obj.nodes));
    for (i = 0, ang = 0, l = _obj.nodes; i < l; i++) {
      ang = nodeSlice * i;
      if (_obj.generateColors)
        $(e.children[i]).css({
          display: "block",
          "background-color": "hsla(" + ang + ", 100%, 50%, 1)",
        })[0].style[modTransform] =
          _rotations[_obj.axis] +
          "(" +
          (ang *= _obj.axis === "y" ? 1 : -1) +
          "deg) translateZ(" +
          _obj.radius +
          "px)";
      else
        $(e.children[i]).css({ display: "block" })[0].style[modTransform] =
          _rotations[_obj.axis] +
          "(" +
          (ang *= _obj.axis === "y" ? 1 : -1) +
          "deg) translateZ(" +
          _obj.radius +
          "px)";
    }
    for (
      l = _obj.max;
      i <= l;
      i++ //hide unused nodes
    )
      $(e.children[i]).css({ display: "none" });
    e.style[modTransform] =
      "translateZ(-" +
      _obj.radius +
      "px) " +
      _rotations[_obj.axis] +
      "(" +
      _obj.rot +
      "deg)";
    dotPos(Math.abs(_obj.pos) % len());
    if (posCtrlLbl !== undefined) {
      _obj.posCtrlLbl.text(Math.abs(_obj.pos));
    }
    console.log(_obj.pos);
  }
  this.toggleAxis = function () {
    _obj.axis = _rotOpp[_obj.axis];
    var pos = _obj.pos;
    this.len(_obj.nodes);
    move(pos);
    return this;
  };
  this.len = function (val) {
    if (val == undefined) return _obj.nodes;
    console.log("len");
    _obj.nodes = val;
    _obj.pos = 0;
    _obj.rot = (360 / _obj.nodes) * _obj.pos;
    _obj.nodeSlice = 360 / _obj.nodes;
    enablePosCtrl();
    move(0);
    return this;
  };
  this.move = function (n) {
    n = _obj.axis == "y" ? ~n + 1 : n;
    _obj.pos = n;
    _obj.rot = (360 / _obj.nodes) * _obj.pos;
    morph();
    return this;
  };
  $(window).resize(function () {
    morph();
  });
  return this;
})(jQuery);
$(document).ready(function () {
  Carousel.init({
    elem: $("#carousel"),
    nodeCtrl: $("#nodeCountCtrl"),
    nodeCtrlLbl: $("#nodeCountLbl"),
    posCtrl: $("#posCtrl"),
    posCtrlLbl: $("#posCtrlLbl"),
    previousBtnCtrl: $("#prev"),
    nextBtnCtrl: $("#next"),
    axisCtrl: $("#axisCtrl"),
    backfaceCtrl: $("#backfaceCtrl"),
    nodes: 11,
    max: 1000,
    dotsCtrl: $("#dots"),
    generateElems: true,
    generateColors: true,
    displayBackface: true,
  });
});
$("#3DCtrl").click(function () {
  $("#container").toggleClass("twoD threeD");
});
</script>

<style>
.carousel * {
  max-width: 100%;
  max-height: 100%;
}
.carousel {
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
}
.carousel > * {
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.carousel.backface > * {
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.carousel {
  -webkit-transition: -webkit-transform 1s;
  transition: transform 1s;
}
.carousel > * {
  -webkit-transition: opacity 1s, -webkit-transform 1s;
  transition: opacity 1s, transform 1s;
}
/**/
.floatleft {
  float: left;
}
.floatright {
  float: right;
}
.textalignleft {
  text-align: left;
}
#ctrls {
  position: fixed;
  bottom: 0;
}
figure {
  display: block;
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
  -webkit-margin-start: 0;
  -webkit-margin-end: 0;
}
.wrapper {
  width: 100%;
  overflow: hidden;
}
#dots {
  width: 100%;
  float: left;
}
.dotOff {
  width: 15px;
  height: 15px;
  background-color: gray;
  float: left;
  border-radius: 100%;
  margin: 1%;
  position: relative;
}
.dotOn {
  background-color: blue;
}
.container,
#container {
  width: 40%;
  position: relative;
  margin: 50px 30%;
}
#container::after,
.dotOff ::after {
  content: "";
  display: block;
  padding-top: 100%;
}
.carousel > * {
  /* opacity:0.8;    */
  background-color: radial-gradient(rgb(240, 240, 240), rgb(190, 190, 190));
  text-align: center;
  width: 90%;
  height: 90%;
  left: 5%;
  top: 5%;
  border-radius: 0 25px 25px 25px;
  box-shadow: 1px 1px 1px 1px #999;
}
.threeD {
  -webkit-perspective: 800px;
  perspective: 800px;
}
.twoD {
  border: 1px solid;
  overflow: hidden;
}
.twoD > * > * {
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 0;
}
</style>
