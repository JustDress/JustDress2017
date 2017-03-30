var LayoutController = function($scope) {
    $scope.footerInfos = [{
            category: 'Just Dress',
            items: [{
                subCategory: 'About',
                url: '/about'
            }, {
                subCategory: 'Termini e Condizioni',
                url: '/terms'
            }, {
                subCategory: 'Lavora con Noi',
                url: '/withUs'
            }, {
                subCategory: 'Contatti',
                url: '/contacts'
            }, ]
        },
        {
            category: 'Aiuto',
            items: [{
                subCategory: 'FAQ',
                url: '/faq'
            }, {
                subCategory: 'Consegna',
                url: '/delivery'
            }, {
                subCategory: 'Spedizione',
                url: '/shipment'
            }, {
                subCategory: 'Rimborso',
                url: '/refund'
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
}

LayoutController.$inject = ['$scope'];