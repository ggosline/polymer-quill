agGrid.initialiseAgGridWithWebComponents();

var columnDefs = [
   {headerName: "Taxonno", field: "taxonNo"},
{headerName: "Flora", field: "flora"},
{headerName: "Family", field: "family"},
{headerName: "Taxon", field: "taxon"},
{headerName: "Mainsubject", field: "mainsubject"},
{headerName: "Subject", field: "subject"},
{headerName: "Subpart", field: "subpart"},
{headerName: "Category", field: "category"},
{headerName: "Value", field: "value"},
{headerName: "Mod", field: "mod"},
{headerName: "Posit", field: "posit"},
{headerName: "Phase", field: "phase"},
{headerName: "Presence", field: "presence"},
{headerName: "Start", field: "start"},
{headerName: "End", field: "end"},
];

var rowData = [
	{
		"taxonNo": 666,
		"flora": null,
		"family": "testfam",
		"taxon": "Test run",
		"mainsubject": "nerve",
		"subject": "nerve",
		"subpart": null,
		"category": "subject",
		"value": "nerve",
		"mod": "lateral",
		"posit": null,
		"phase": null,
		"presence": null,
		"start": 0,
		"end": 28
	},
	{
		"taxonNo": 666,
		"flora": null,
		"family": "testfam",
		"taxon": "Test run",
		"mainsubject": "nerve",
		"subject": "nerve",
		"subpart": "grouping",
		"category": "grouping",
		"value": "pairs",
		"mod": "8\u201310",
		"posit": null,
		"phase": null,
		"presence": null,
		"start": 15,
		"end": 28
	}
];

var gridOptions = {
    columnDefs: columnDefs,
    rowData: rowData
};

// wait for the document to be loaded, otherwise
// grid will not find the div in the document.
document.addEventListener("DOMContentLoaded", function() {
    var myAgileGrid = document.querySelector('#myGrid');
    myAgileGrid.setGridOptions(gridOptions);
});
