sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"nw/northwindproducts/test/integration/pages/ProductsList",
	"nw/northwindproducts/test/integration/pages/ProductsObjectPage"
], function (JourneyRunner, ProductsList, ProductsObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('nw/northwindproducts') + '/test/flpSandbox.html#nwnorthwindproducts-tile',
        pages: {
			onTheProductsList: ProductsList,
			onTheProductsObjectPage: ProductsObjectPage
        },
        async: true
    });

    return runner;
});

