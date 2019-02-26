'use strict'
require('./index.css')
require('page/common/header/index.js');
var nav = require('page/common/nav/index.js');
var _mm = require('util/mm.js');
var _cart = require('service/cart-service.js');
var templateIndex = require('./index.string');

var page = {
    data:{},
    init:function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad:function () {
        this.loadCart();
    },
    bindEvent:function () {
        var _this = this;
        
    }
}