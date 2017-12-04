/// <reference path="knockout-3.4.1.js" />
var PORequestViewModel = function(data)  {
    var self = this;

    self.isChecked = ko.observable(data.isChecked); //add the isChecked field, this field may need to be changed later

    //self.attribute = ko.observable(data.attribute)

    return self;
}
function mainViewModel() {
    var self = this;

    self.PORequests = ko.observableArray([]);

    $.ajax({
        type: 'GET',
        url: "GetPORequestList",
        dataType: "json",
        contentType: 'application/json; charset=utf-8',
        traditional: true, //// traditional option to true
        success: function (result) {
            ko.utils.arrayForEach(jsonResult, function (data) {
                self.PORequests.push(new PORequestViewModel(data));
            });
        }
    });
}