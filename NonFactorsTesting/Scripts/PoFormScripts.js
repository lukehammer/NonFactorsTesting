/*******************************************************************
This is a file that will be the main scripts for the create and edit
    forms
    *******************************************************************/

/**********************STAR OF DATE PICKERS***************************/
$(document).ready(function () {

    /*DATE FIELDS*/
    /*Validator for the date fields in our forms*/
    $('#ApprovalNeedByDate').datepicker({
        todayHighlight: true,
        onClose: function () {
            $(this).valid();
        }
    });
    $('#SubmittedforWarpApprovalDate').datepicker({
        onClose: function () {
            $(this).valid();
        }
    });
    $('#WARPApprovalDate').datepicker({
        onClose: function () {
            $(this).valid();
        }
    });
    $('#WOIssuedDate').datepicker({
        onClose: function () {
            $(this).valid();
        }
    });

});
/**********************END OF DATE PICKER********************************/


function disableFields(fields) {
    for (var i = 0; i < fields.length; i++) {
        fields[i].disabled = true;
    }
}
function hideFields(fields) {
    for (var i = 0; i < fields.length; i++) {
        $(fields[i]).parent().parent().addClass("hidden");
    }
}
function enableFields(fields) {
    for (var i = 0; i < fields.length; i++) {
        fields[i].enabled = true;
    }
}
/*****************END FIELDS FOR EDIT PAGE********************************/

//This is the script used for form data validation
$(function () {
    // update validation fields on submission of form
    $('form').submit(function () {
        if ($('#combobox').val() !== '' || $('combobox').text()!== '') {

            $('#SupplierError').hide();
            $(this).find('div.supplier').removeClass('has-error');
            $(this).find('div.supplier').addClass('has-success');
        }
        if ($('#EngineeringJustification').val() != '' || $('#ProcurementJustification').val() != '' || $('#ConstructionJustification').val() != '') {
            $('#justificationError').hide();
            $(this).find('div.epc-feilds').removeClass('has-error');
            $(this).find('div.epc-feilds').addClass('has-success');
        }

   
        if ($('#EngineeringJustification').val() == '' && $('#ProcurementJustification').val() == '' && $('#ConstructionJustification').val() == '' || $('#combobox').val() == '') {
            if ($('#EngineeringJustification').val() == '' && $('#ProcurementJustification').val() == '' && $('#ConstructionJustification').val() == '' && $('#combobox').val() == '') {
                $(this).find('div.supplier').addClass('has-error');
                $('#SupplierError').show();
                $(this).find('div.epc-feilds').addClass('has-error');
                $('#justificationError').show();
                return false;
            } else if ($('#combobox').val() == '') {
                $(this).find('div.supplier').addClass('has-error');
                $('#SupplierError').show();
                return false;
            } else {
                $(this).find('div.epc-feilds').addClass('has-error');
                $('#justificationError').show();
                return false;
            }
        } else {
            if ($(this).valid()) {
                $(this).find('div.control-group').each(function () {
                    if ($(this).find('span.field-validation-error').length == 0) {
                        $(this).removeClass('has-error');
                        $(this).addClass('has-success');
                    }
                });

                //use if the form is valid, then show loading button
                if ($('#Save') != null) {
                    if ($('#RevisedCost[data-val-required]').length > 0) {
                        // element with that attribute exists
                        $('#RevisedCost').addClass('has-error');
                    }
                    if ($('#RevisedCost').find('span.field-validation-error').length == 0) {
                        $('#RevisedCost').removeClass('has-error');
                        $('#RevisedCost').addClass('has-success');
                        $('#Save').hide();
                        $('#working-message-Save').show();
                    }

                }
                if ($('#Create') != null) {
                    $('#Create').hide();
                    $('#Create').prop('disabled', true);
                    $('#working-message-Create').show();
                }
                if ($('#Resubmitt') != null) {
                    $('#Resubmitt').hide();
                    $('#working-message-Resubmitt').show();
                }
            }

            else {
                $(this).find('div.control-group').each(function () {
                    if ($(this).find('span.field-validation-error').length > 0) {
                        $(this).removeClass('has-success');
                        $(this).addClass('has-error');
                    }
                });
            }
           
        }
        if ($('#combobox').val() !== '' && ($('#EngineeringJustification').val() !== '' || $('#ProcurementJustification').val() !== '' || $('#ConstructionJustification').val() !== ''))
        {
            escapeWbs();
        }
    });

    // check each form-group for errors on ready
    $('form').each(function () {
        $(this).find('div.form-group').each(function () {
            if ($(this).find('span.field-validation-error').length > 0) {
                $(this).addClass('has-error');
            }
        });
    });
  
});

var page = function () {
    //Update the validator
    $.validator.setDefaults({
        highlight: function (element) {
            $(element).closest('.form-group').addClass('has-error');
            $(element).closest('.form-group EPC').addClass('has-error');
            $(element).closest('.form-group').removeClass('has-success');
            $(element).closest('.form-group EPC').removeClass('has-success');
        },
        unhighlight: function (element) {
            $(element).closest('.form-group').removeClass('has-error');
            $(element).closest('.form-group EPC').removeClass('has-error');
            $(element).closest('.form-group').addClass('has-success');
            $(element).closest('.form-group EPC').addClass('has-success');
        }
    });
}();

//This is the script to populate text from the dropdown box to the text field
//$(document).ready(function () {
//    $('#SupplierDropdown li').on('click', function () {
//        $('#SupplierName').val($(this).text());
//    });
//});

// This is used for the changeorder dropdown in the create and edit for po requests
$(document).ready(function () {
    $('select[id=PORequestType]').change(function () {
        if ($(this).val() == 'Change Order') {
            $('#PORequestIDField').show();
            $('#PORequestIDField').prop('required', true);
        } else {
            $('#PORequestIDField').prop('required', false);
            $('#PORequestIDField').hide();
        }
    });
});

// This is used for the changeorder dropdown in the create and edit for po requests
$(document).ready(function () {
    $('select[id=PriorityID]').change(function () {
        if ($(this).val() === '6') {
            $('#RiskPercentField').show();
            $('#RiskPercentField').prop('required', true);
        } else {
            $('#RiskPercentField').prop('required', false);
            $('#RiskPercentField').hide();
        }
    });
});
//combo box data
(function ($) {
    $.widget('custom.combobox', {
        _create: function () {
            this.wrapper = $('<span>')
          .addClass('custom-combobox')
          .insertAfter(this.element);

            this.element.hide();
            this._createAutocomplete();
            this._createShowAllButton();
        },

        _createAutocomplete: function () {
            var selected = this.element.children(':selected'),
          value = selected.val() ? selected.text() : '';

            this.input = $('<input>')
          .appendTo(this.wrapper)
          .val(value)
          .attr('id', 'supplier')
          .attr('title', '')
          .attr('maxLength', 200)
          .addClass('custom-combobox-input ui-widget ui-widget-content ui-state-default ui-corner-left')
          .autocomplete({
              delay: 0,
              minLength: 0,
              source: $.proxy(this, '_source')
          })
          .tooltip({
              tooltipClass: 'ui-state-highlight'
          });

            this._on(this.input, {
                autocompleteselect: function (event, ui) {
                    ui.item.option.selected = true;
                    this._trigger('select', event, {
                        item: ui.item.option
                    });
                },

                autocompletechange: '_removeIfInvalid'
            });
        },

        _createShowAllButton: function () {
            var input = this.input,
          wasOpen = false;

            $('<a>')
          .attr('tabIndex', -1)
          .tooltip()

          .appendTo(this.wrapper)
          .button({
              icons: {
                  primary: 'ui-icon-triangle-1-s'
              },
              text: false
          })
          .removeClass('ui-corner-all')
          .addClass('custom-combobox-toggle ui-corner-right')
          .mousedown(function () {
              wasOpen = input.autocomplete('widget').is(':visible');
          })
          .click(function () {
              input.focus();

              // Close if already visible
              if (wasOpen) {
                  return;
              }

              // Pass empty string as value to search for, displaying all results
              input.autocomplete('search', '');
          });
        },

        _source: function (request, response) {
            var matcher = new RegExp($.ui.autocomplete.escapeRegex(request.term), 'i');
            response(this.element.children('option').map(function () {
                var text = $(this).text();
                if (this.value && (!request.term || matcher.test(text)))
                    return {
                        label: text,
                        value: text,
                        option: this
                    };
            }));
        },

        _removeIfInvalid: function (event, ui) {

            // Selected an item, nothing to do
            if (ui.item) {
                return;
            }

            // Search for a match (case-insensitive)
            var value = this.input.val(),
          valueLowerCase = value.toLowerCase(),
          valid = false;
            this.element.children('option').each(function () {
                if ($(this).text().toLowerCase() === valueLowerCase) {
                    this.selected = valid = true;
                    return false;
                }
            });

            // Found a match, nothing to do
            if (valid) {
                return;
            }

            this.element.append('<option value=\'' + this.input.val() + '\'>' + this.input.val() + '</option>'); //Add the new option
            this.element.val(this.input.val()); //select the new option
        },

        _destroy: function () {
            this.wrapper.remove();
            this.element.show();
        }
    });
})(jQuery);


//WBS Logic Start


$(document).ready(function() {
    var scope = function() { return $('#ScopeTypeID').val(); };
    var budget = function() { return $('#BudgetCodeID').val(); };
    var costCenter = function() { return $('#CostCenterID').val(); };
    var toolScope = function() { return $('#ToolScopeName').val(); };

    $('select[id=ScopeTypeID]').change(function () {
        ajaxGetWbs(scope(), budget(), costCenter(), toolScope());
    });

    $('select[id=BudgetCodeID]').change(function () {
        ajaxGetWbs(scope(), budget(), costCenter(), toolScope());
    });

    $('select[id=CostCenterID]').change(function () {
        $('#BudgetCodeID').val('');
        //After a change in cost center Null out Budget code
        UpdateBudgetCodes(costCenter());
        ajaxGetWbs(scope(), null, costCenter(), toolScope());
    });
    $('#ToolScopeName').keyup(function() {
        ajaxGetWbs(scope(), budget(), costCenter(), toolScope());
    });
    

});
function ajaxGetWbs(scope, budget, costCenter, toolScopeName) {
    $.ajax({
        url: '/PORequests/GetWBSString',
        data: JSON.stringify({
            'ScopeTypeID': scope,
            'BudgetCodeID': budget,
            'CostCenterID': costCenter,
            'ToolScopeName': toolScopeName
        }),

        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $('#WBS').val(data);
        },
        error: function (passParams) {
            console.log('Error is ' + passParams);
        }
    });
};
function escapeWbs() {
    var wbs = $('#WBS').val();
    wbs = escape(wbs);
    $('#WBS').val(wbs);
}


function UpdateBudgetCodes(costCenter) {
    if (costCenter === '')
        {
        $('#BudgetCodeID').html('');
        $('#BudgetCodeID').append(
            $('<option></option>').val('').html('Please Select A Cost Center First'));
        return;
        }
    $.ajax({
        url: '/PORequests/GetBudgetCodeJsonResult',
        data: JSON.stringify({'CostCenterID': costCenter}),
        type: 'POST',
        contentType: 'application/json; charset=utf-8',
        success: function(data) {
            $('#BudgetCodeID').attr('readonly', false);
            var jsonData = JSON.parse(data);
            $('#BudgetCodeID').html('');
            $('#BudgetCodeID').append(
                $('<option></option>').val('').html('Select a Budget Code'));
            for (var i = 0; i < jsonData.budgetCodes.length; i++) {
                var item = jsonData.budgetCodes[i];
                $('#BudgetCodeID').append(
                    $('<option></option>').val(item.budgetCodeID)
                    .html(item.budgetCodeNumber + '  -  ' + item.budgetCodeDescription)
                );
            };
        },
        error: function(passParams) { console.log('error ajax Cost Center ') }

    });
}

