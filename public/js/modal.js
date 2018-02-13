/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 15:
/***/ (function(module, exports) {

;(function () {

    var modalContent;
    var modal;

    $(document).ready(function () {
        injectTemplates();

        modal = $("#modalHolder");
        modalContent = modal.find(".modal-dialog");

        $(document).on('click', '.js-modal', onJsModalClick);
        $(document).on('submit', '.js-form', onJsFormSubmit);
        $(document).on('click', '.js-confirm', onJsConfirmClick);
        $(document).on('bsmodal.js-form.success', onJsFormSuccess);
        $(document).on('bsmodal.dialog-class', changeDialogClass);

        modal.on('hidden.bs.modal', destroyModalContent);
    });

    $.fn.loadModal = function (contentUrl) {
        destroyModalContent();
        loadModalContent(contentUrl);

        modal.modal('show');
    };

    $.fn.showModal = function (content, size) {
        destroyModalContent();
        changeDialogClass(null, size || '');
        displayContent(content);

        $(document).trigger('bsmodal.js-modal.loaded', [modalContent]);

        modal.modal('show');
    };

    function destroyModalContent() {
        displayDefaultContent($("#bsModalContent"));
    }

    function injectTemplates() {
        var modalTemplate = '<div class="modal fade message-modal" id="modalHolder" tabindex="-1" role="dialog" aria-hidden="true">' + '<div class="modal-dialog"></div>' + '</div>';

        if (!$('#bsModalContent').length) {
            modalTemplate += '<div id="bsModalContent" class="hidden"><div class="modal-body">Loading...</div></div>';
        }

        if (!$('#bsModalConfirmContent').length) {
            modalTemplate += '<div id="bsModalConfirmContent" class="hidden">' + '<div class="modal-header">' + '<button type="button" class="close" data-dismiss="modal" aria-label="Close">' + '<span aria-hidden="true">&times;</span>' + '</button>' + '<h4 class="modal-title" id="bsModalTitle"></h4>' + '</div>' + '<div class="modal-body"></div>' + '</div>';
        }

        if (!$('#bsModalConfirmButtons').length) {
            modalTemplate += '<div id="bsModalConfirmButtons" class="hidden">' + '<div class="clearfix">' + '<button class="btn btn-primary js-confirm-btn">Confirm</button>' + '<button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>' + '</div>' + '</div>';
        }

        $('body').append(modalTemplate);
    }

    function onJsModalClick(event) {
        var elem = $(this);
        var contentUrl = elem.data('url') || elem.attr('href');
        changeDialogClass(null, elem.data('size') || '');
        $(document).trigger('bsmodal.js-modal.clicked', [elem]);

        $.fn.loadModal(contentUrl);

        event.preventDefault();
    }

    function changeDialogClass(event, className) {
        modalContent.attr('class', 'modal-dialog ' + className);
    }

    function onJsFormSubmit(event) {
        var form = $(this);
        var formData = new FormData(this);

        $(document).trigger('bsmodal.js-form.submitted', [form, formData]);

        $.ajax({
            url: this.action,
            type: this.method,
            data: this.method == "get" ? form.serialize() : formData,
            processData: false,
            contentType: false,
            success: function success(data, status, xhr) {
                $(document).trigger('bsmodal.js-form.success', [data, status, xhr, form]);
            },
            complete: function complete() {
                $(document).trigger('bsmodal.js-form.completed', [form]);
            }
        });

        event.preventDefault();
    }

    function onJsFormSuccess(event, data, status, xhr, form) {
        if (xhr.status == 201) {
            modal.modal('hide');

            onHttpResponse(data);
        } else {
            if (modal.hasClass('in') && modal.find('.js-form')) {
                displayContent(data);
                $(document).trigger('bsmodal.js-form.loaded', [modalContent]);
            } else if (form.attr('id')) {
                form.html($("<div>" + data + "</div>").find('#' + form.attr('id')).html());
                $(document).trigger('bsmodal.js-form.loaded', [form]);
            } else {
                console.debug(".js-form must have an id attribute or be in modal window");
            }
        }
    }

    function onHttpResponse(data) {
        if (data.redirect) {
            window.location = data.redirect;
        } else if (data.event) {
            $(document).trigger(data.event, [data.data]);
        } else {
            window.location.reload();
        }
    }

    function onJsConfirmClick(event) {
        var that = $(this);
        var title = that.data('title') || 'Delete';
        var text = that.data('text') || 'Are you sure you want to remove this item?';
        var buttons = $('#bsModalConfirmButtons');

        displayDefaultContent($('#bsModalConfirmContent'));

        modalContent.find('#bsModalTitle').html(title);

        if (buttons.data('append')) {
            modalContent.find('.modal-body').html(text);
            modalContent.find('.modal-content').append(buttons.html());
        } else {
            modalContent.find('.modal-body').html(text + buttons.html());
        }

        changeDialogClass(null, that.data('size') || '');
        modal.modal('show');

        modalContent.find('.js-confirm-btn').off().on('click', function () {
            var url = that.data('url') || that.attr('href');

            if (that.data('no-ajax') || that.hasClass('js-no-ajax')) {
                return window.location.href = url;
            }

            $.ajax({
                url: url,
                type: that.data('method') || "GET",
                success: onHttpResponse
            });
        });

        event.preventDefault();
    }

    function loadModalContent(contentUrl) {
        $.get(contentUrl, function (data) {
            displayContent(data);

            $(document).trigger('bsmodal.js-modal.loaded', [data, contentUrl]);
        });
    }

    function displayDefaultContent(element) {
        displayContent(element ? element.html() : '');
    }

    function displayContent(content) {
        var element = $('<div class="modal-content"></div>');
        modalContent.html(element.append(content));
    }
})();

/***/ })

/******/ });