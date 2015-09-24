define(['exports', 'jquery', './loading-mask.css!text', '../locale'], function (exports, _jquery, _loadingMaskCssText, _locale) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var _$ = _interopRequireDefault(_jquery);

  var LoadingMask = (function () {
    function LoadingMask(resources) {
      _classCallCheck(this, LoadingMask);

      this.loadingMask = undefined;
      this.dimScreen = undefined;
      this.dialog = undefined;
      this.loadingTitle = undefined;
      this.title = undefined;
      this.locale = _locale.Locale.Repository['default'];
      this._createLoadingMask();
    }

    _createClass(LoadingMask, [{
      key: '_createLoadingMask',
      value: function _createLoadingMask() {
        this.title = this.locale.translate('loading');
        this.dimScreen = '<div id="loadingMask" class="spinner"><div class="loadingTitle">' + this.title + '</div><div class="mask"></div></div>';
        (0, _$['default'])('body').append(this.dimScreen);
        this.loadingMask = (0, _$['default'])('#loadingMask');
        this.loadingTitle = (0, _$['default'])('.loadingTitle').css({
          color: '#ffffff',
          opacity: 1,
          fontSize: '2.5em',
          fontFamily: 'Roboto'
        });
      }
    }, {
      key: 'show',
      value: function show() {
        this.loadingMask.show();
      }
    }, {
      key: 'hide',
      value: function hide() {
        this.loadingMask.hide();
      }
    }]);

    return LoadingMask;
  })();

  exports.LoadingMask = LoadingMask;
});