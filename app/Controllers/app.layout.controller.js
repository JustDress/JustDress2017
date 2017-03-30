var LayoutController = function($scope) {
    $scope.footerInfos = [{
            category: 'Just Dress',
            items: [{
                subCategory: 'About',
                url: '/pages/about'
            }, {
                subCategory: 'Termini e Condizioni',
                url: '/pages/terms'
            }, {
                subCategory: 'Lavora con Noi',
                url: '/pages/withUs'
            }, {
                subCategory: 'Contatti',
                url: '/pages/contacts'
            }, ]
        },
        {
            category: 'Aiuto',
            items: [{
                subCategory: 'FAQ',
                url: '/pages/faq'
            }, {
                subCategory: 'Consegna',
                url: '/pages/delivery'
            }, {
                subCategory: 'Spedizione',
                url: '/pages/shipment'
            }, {
                subCategory: 'Rimborso',
                url: '/pages/refund'
            }, ]
        }, {
            category: 'Seguici',
            items: [{
                subCategory: 'Facebook',
                // url: 'path' //todo
            }, {
                subCategory: 'Twitter',
                // url: 'path' //todo
            }, {
                subCategory: 'Instagram',
                // url: 'path' //todo
            }]
        }
    ];

    var brandItems = [];
    for (var i = 0; i < 6; i++) {
        var obj = [];
        for (var j = 0; j < 5; j++) {
            obj.push({ subCategory: 'Lorem ipsum' });
        }
        brandItems.push(obj);
    }

    $scope.brands = [{
        category: "Our Brands",
        items: brandItems
    }]
    debugger;
}

LayoutController.$inject = ['$scope'];