var key="https://docs.google.com/spreadsheets/d/1csm8rCsZoqlvciuwrAj36tJBTdauygkhGS0dLdwawf8/pubhtml",columns=[{data:"name",title:"Blood Bank"},{data:"date",title:"Date of Last Inspection"},{data:"state",title:"State"},{data:"city",title:"City"}];$(document).ready(function(){function e(){Tabletop.init({key:key,callback:function(e,a){t(e)},simpleSheet:!0,debug:!1})}function t(e){$("#graphic").html('<table cellpadding="0" cellspacing="0" border="0" class="table table-condensed table-bordered table-striped table-hover" id="mySelection"></table>'),$("#mySelection").DataTable({data:e,columns:columns,order:[[0,"asc"]],pagingType:"simple"})}e()});