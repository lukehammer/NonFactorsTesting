
var CustomTextFilter = (function () {
    function CustomTextFilter() {
    }

    CustomTextFilter.prototype = {
        render: function (grid, popup, filter) {
            popup.html(
                '<div class="popup-arrow"></div>' +
                '<div class="popup-content">' +
                '<div class="first-filter popup-group">' +
                '<input class="mvc-grid-input" placeholder="Contains" type="text" value="' + filter.first.val + '">' +
                '</div>' +
                (filter.isMulti ?
                    '<div class="popup-group popup-group-operator">' +
                    '<select class="mvc-grid-operator">' +
                    '<option value=""></option>' +
                    '<option value="And"' + (filter.operator == 'And' ? ' selected="selected"' : '') + '>And</option>' +
                    '<option value="Or"' + (filter.operator == 'Or' ? ' selected="selected"' : '') + '>Or</option>' +
                    '</select>' +
                    '</div>' +
                    '<div class="second-filter popup-group">' +
                    '<input class="mvc-grid-input" placeholder="Contains" type="text" value="' + filter.second.val + '">' +
                    '</div>' :
                    '') +
                '<div class="popup-button-group">' +
                '<button class="btn btn-success mvc-grid-apply" type="button">✔</button>' +
                '<button class="btn btn-danger mvc-grid-cancel" type="button">✘</button>' +
                '</div>' +
                '</div>');
        },

        init: function (grid, column, popup) {
            this.bindValue(grid, column, popup);
            this.bindApply(grid, column, popup);
            this.bindCancel(grid, column, popup);
        },
        bindValue: function (grid, column, popup) {
            var inputs = popup.find('.mvc-grid-input');
            inputs.on('keyup.mvcgrid', function (e) {
                if (e.which == 13) {
                    popup.find('.mvc-grid-apply').click();
                }
            });
        },
        bindApply: function (grid, column, popup) {
            var apply = popup.find('.mvc-grid-apply');
            apply.on('click.mvcgrid', function () {
                popup.removeClass('open');
                column.filter.first.type = 'Contains';
                column.filter.second.type = 'Contains';
                column.filter.operator = popup.find('.mvc-grid-operator').val();
                column.filter.first.val = popup.find('.first-filter .mvc-grid-input').val();
                column.filter.second.val = popup.find('.second-filter .mvc-grid-input').val();

                grid.applyFilter(column);
                grid.reload();
            });
        },
        bindCancel: function (grid, column, popup) {
            var cancel = popup.find('.mvc-grid-cancel');
            cancel.on('click.mvcgrid', function () {
                popup.removeClass('open');

                if (column.filter.first.type || column.filter.second.type) {
                    grid.cancelFilter(column);
                    grid.reload();
                }
            });
        }
    };

    return CustomTextFilter;
})();

$('.mvc-grid').mvcgrid({
    filters: {
        'Custom': new CustomTextFilter()
    }
});
