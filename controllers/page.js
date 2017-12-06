
angular.module('app').controller('PageController', ['$state', PageController]);

function PageController($state) {
    
	var self = this;    

    self.alert = function(message) {
        ons.notification.alert(message);
    };

    self.onChange = function(tabs) {
    	console.log('it changed!');
    	console.log(tabs.getActiveTabIndex());
    	goToTab(tabs.getActiveTabIndex());
    };


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

}