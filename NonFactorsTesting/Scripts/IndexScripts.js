$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('#back-to-top').tooltip('hide');
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });

    $('#back-to-top').tooltip('show');

});
function splitTextFunc(text, len) {
    var substring = text.substring(0, len);
    var lastIndex = substring.lastIndexOf(" "); //doesnt remove the last period
    var splitText = substring.substring(0, lastIndex);
    return splitText;
}

//These are used when the grid is loaded to do styling on the index grid
$(document).ready(function () {
    /**********FOR THE LONG TEXT FIELDS********************************************/
    $('.lrg-text-description-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var DescriptionText = $(this).closest('tr').find('#Description').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID);
        if (DescriptionText.length > 120) {
            var splitText = splitTextFunc(DescriptionText, 110);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });
    $('.lrg-text-dynamic-justification-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var DynamicCostJustificationText = $(this).closest('tr').find('#DynamicCostJustification').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID);
        if (DynamicCostJustificationText.length > 120) {
            var splitText = splitTextFunc(DynamicCostJustificationText, 110);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });
    $('.lrg-text-engineering-justification-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var EngineeringJustificationText = $(this).closest('tr').find('#EngineeringJustification').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID);
        if (EngineeringJustificationText.length > 120) {
            var splitText = splitTextFunc(EngineeringJustificationText, 110);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });
    $('.lrg-text-procurement-justification-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var ProcurementJustificationText = $(this).closest('tr').find('#ProcurementJustification').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID);
        if (ProcurementJustificationText.length > 120) {
            var splitText = splitTextFunc(ProcurementJustificationText, 110);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });
    $('.lrg-text-construction-justification-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var ConstructionJustificationText = $(this).closest('tr').find('#ConstructionJustification').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID, 110);
        if (ConstructionJustificationText.length > 120) {
            var splitText = splitTextFunc(ConstructionJustificationText);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });

    $('.lrg-text-comments-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var CommentsField = $(this).closest('tr').find('#Comments').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID);
        if (CommentsField.length > 120) {
            var splitText = splitTextFunc(CommentsField, 110);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });


    $('.lrg-text-PRNumber-td').each(function () {
        var ParentPORequestID = $(this).closest('tr').find("#PORequestID").val();
        var PRNumber = $(this).closest('tr').find('#PRNumber').text();
        var linkText = "...";
        var link = linkText.link("/PORequests/Details/" + ParentPORequestID);
        if (PRNumber.length > 60) {
            var splitText = splitTextFunc(PRNumber, 60);
            $(this).html("<p>" + splitText + "<span title=\"View details\">" + link + "</span></p>");
        }
    });

    /************************END LONG TEXT FEILDS***********************************************************/
    
    $('.approval-need-by-date').each(function () {
        var needByDate = $(this).closest('tr').find("#ApprovalNeedByDate").text();
        var dateApproved = $(this).closest('tr').find('#DateApproved').text();
        var needByDateTime = new Date(needByDate);
        var now = new Date().getTime();
        var aWeekFromNow = new Date().getTime() + (7 * 24 * 60 * 60 * 1000);
        if (dateApproved == " ") {
            if (now > needByDateTime.getTime()) {
                $(this).html("<strong>" + needByDate + "</strong>");
            }
            else if (aWeekFromNow > needByDateTime.getTime()) {
                $(this).html("<span>" + needByDate + "</span>");
            }
        }
    });
});