'use strict'
require('./index.css')

var _mm = require('util/mm.js')
// 通用页面头部
var header = {
    init:function () {
        this.onLoad();
        this.bindEvent();
    },
    onLoad:function () {
        var keyword = _mm.getUrlParam('keyword');
        // keyword存在，则回填输入框
        if(keyword) {
            $('#search-input').val(keyword)
        }
    },
    bindEvent: function () {
        var _this = this;
        // 点击搜索按钮后，提交搜索
        $('#search-btn').click(function () {
            _this.searchSubmit();
        });
        // 输入回车后，提交搜索
        $('#search-input').keyup(function (e) {
            if(e.keyCode === 13) {
                _this.searchSubmit();
            }
        })
    },
    // 搜索提交
    searchSubmit:function () {
        var keyword = $.trim($('#search-input').val());
        // 提交时有keyword，正常跳转到list页
        if(keyword) {
            window.location.href = './list.html?keyword='+keyword
        }else {
            _mm.goHome()
        }
    }
};
header.init();