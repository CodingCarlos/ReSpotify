
angular.module('app').controller('PageController', function($state, $stateParams) {
    
	var self = this;    

    self.alert = function(message) {
        ons.notification.alert(message);
    };

    self.onChange = function(tabs) {
    	console.log('it changed!');
    	console.log(tabs.getActiveTabIndex());
    	goToTab(tabs.getActiveTabIndex());
    };

    console.log($stateParams);
    console.log($stateParams.tab);
    // goToTab($stateParams.tab);


    var tabs = ['home', 'friends', 'explore', 'radio', 'profile'];

    function goToTab(to) {
    	console.log(to);

    	var index = null;

    	if(typeof(to) === 'number' && to < tabs.length) {
    		index = tabs[to];
    	} else if(typeof(to) === 'string' && tabs.indexOf(to.toLowerCase) > -1) {
    		index = to;
    	}

    	if(index !== null) {
    		$state.go('tab', {tab: index});
    	} else {
    		$state.go('tab', {tab: tabs[0]});
    	}


    }

});