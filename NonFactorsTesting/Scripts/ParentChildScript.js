// JavaScript source code

//Used with the parent child buttons on the gird pages
$(document).ready(function () {
    $("span[name=ParentChildButton]").on("click", function () {

        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-header').empty();
        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-header').remove();
        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-body').remove();
        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.modal-header').append("<div class=\"dynamic-modal-header\"></div>");
        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.modal-body').append("<div class=\"dynamic-modal-body\"></div>");

        //create
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var ParentPORequestDescription = $(this).closest('tr').find("#Description").text();
        var ParentPORequestCost = $(this).closest('tr').find("#Amount").val();
        var ParentPORequestFunded = $(this).closest('tr').find("#Funded").val();
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            minimumFractionDigits: 2,
        });
        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-header').append("<h4 class=\"modal-title\">" + "<a href=\"/PORequests/Details/" + ParentPORequestID + "\" style=\"font-size: 18px;\" title=\"View details\">" + ParentPORequestID + "</a>" + " <a class=\"glyphicon glyphicon-file\" href=\"/PORequests/Details/" + ParentPORequestID + "\" style=\"font-size: 18px; color: #444;\" title=\"View details\"> </a> <br>" + ParentPORequestDescription + "  </h4>" );
        if(ParentPORequestCost != 0 )
            $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-header').append("<div class=\"pull-left\"><br> <b>Total Cost </b> <span >" + formatter.format(ParentPORequestCost) + "</span></div>" + "<div class=\"pull-right\"><br> <b>Funded </b> <span>" + formatter.format(ParentPORequestFunded) + "</span></div>");
        var url = $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').data('url');
        url += "?ParentPORequestID=" + ParentPORequestID;
        $.get(url, function (data) {
            
            $('.dynamic-modal-body').html(data);

        });
        $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').modal('show');
        //Desrtory

    });
    $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').on('hidden.bs.modal', function () {
            $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-header').empty();
            $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-header').remove();
            $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.dynamic-modal-body').remove();
            $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.modal-header').append("<div class=\"dynamic-modal-header\"></div>");
            $('#ModalDisplayParentAndChildrenIndexConfirmPopUp').find('.modal-body').append("<div class=\"dynamic-modal-body\"></div>");
    });
    
});