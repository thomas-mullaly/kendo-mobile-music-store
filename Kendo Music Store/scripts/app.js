define(["jQuery", "kendo", "kendoIndexedListView", "data", "config", "utils", "cart", "home-layout", "base-layout", "artists-view", "genres-view", "albums-view", "search-view", "cart-view", "checkout-view", "account-view", "about-view"],
       function($, kendo,  x,                       data,   config,   utils,   cart,   homeLayout,    baseLayout,    artistsView,    genresView,    albumsView,    searchView,    cartView,    checkoutView,    accountView, aboutView) {

    var _onError = function (error, url, line) {
        utils.showError(error);
    };

    var init = function () {
        //window.onerror = _onError;

        var options = {
            transition: "fade",
            initial: "about-view",
            loading: '<h1 class="loading-message">Loading...</h1>'
        };
        
        if (kendo.support.mobileOS.name === "ios") {
            options.skin = "ios";
        }
        var kendoApp = new kendo.mobile.Application(document.body, options);
        utils.init(kendoApp);
        cart.items.bind("change", function () { utils.updateCartBadges($, cart); });
    };

    return {
        closeErrorModal: utils.closeError,
        config: config,
        init: init,
        homeLayout: homeLayout,
        baseLayout: baseLayout,
        albumsView: albumsView,
        artistsView: artistsView,
        genresView: genresView,
        searchView: searchView,
        cartView: cartView,
        checkoutView: checkoutView,
        accountView: accountView,
        aboutView: aboutView
    };
});