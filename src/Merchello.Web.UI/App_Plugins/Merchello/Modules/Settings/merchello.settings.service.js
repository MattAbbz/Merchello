﻿(function (merchelloServices, undefined) {

    /**
        * @ngdoc service
        * @name umbraco.resources.merchelloSettingsService
        * @description 
        * Loads in store settings and constants
        **/
    merchelloServices.MerchelloSettingsService = function ($q, $http, $cacheFactory, umbDataFormatter, umbRequestHelper) {

        /* cacheFactory instance for cached items in the merchelloSettingsService */
        var _settingsCache = $cacheFactory('merchelloSettings');

        /* helper method to get from cache or fall back to an http api call */
        function getCachedOrApi(cacheKey, apiMethod, entityName)
        {
            var deferred = $q.defer();

            var dataFromCache = _settingsCache.get(cacheKey);

            if (dataFromCache) {
                deferred.resolve(dataFromCache);
            }
            else {
                var promiseFromApi = umbRequestHelper.resourcePromise(
                   $http.get(
                        umbRequestHelper.getApiUrl('merchelloSettingsApiBaseUrl', apiMethod)
                    ),
                    'Failed to get all ' + entityName);

                promiseFromApi.then(function (dataFromApi) {
                    _settingsCache.put(cacheKey, dataFromApi);
                    deferred.resolve(dataFromApi);
                }, function (reason) {
                    deferred.reject(reason);
                });
            }

            return deferred.promise;
        }

        /**
        * @class merchelloSettingsService
        */
        return {

            /**
             * @ngdoc method
             * @name merchello.services.merchelloSettingsService#getAllCountries
             * @methodOf merchello.services.merchelloSettingsService
             * @function
             *
             * @description
             * Gets the supported countries / provinces from the merchello.config
             * 
             * @returns {object} an angularjs promise object
             */
            getAllCountries: function () {

                return getCachedOrApi("SettingsCountries", "GetAllCountries", "countries");

            },

            /**
             * @ngdoc method
             * @name merchello.services.merchelloSettingsService#save
             * @methodOf merchello.services.merchelloSettingsService
             * @function
             *
             * @description
             * Saves or updates a store setting value
             * 
             * @param {object} storeSettings StoreSettings object for the key/value pairs
             *
             * @returns {object} an angularjs promise object
             */
            save: function (storeSettings) {

                _settingsCache.remove("AllSettings");
                
                return umbRequestHelper.resourcePromise(
                   $http.post(
                        umbRequestHelper.getApiUrl('merchelloSettingsApiBaseUrl', 'PutSettings'),
                        storeSettings
                    ),
                    'Failed to save data for Store Settings');
            },

            /**
             * @ngdoc method
             * @name merchello.services.merchelloSettingsService#getAllSettings
             * @methodOf merchello.services.merchelloSettingsService
             * @function
             *
             * @description
             * Gets all store setting values
             * 
             * @returns {object} an angularjs promise object
             */
            getAllSettings: function () {

                return getCachedOrApi("AllSettings", "GetAllSettings", "settings");

            },

            /**
             * @ngdoc method
             * @name merchello.services.merchelloSettingsService#getAllCurrencies
             * @methodOf merchello.services.merchelloSettingsService
             * @function
             *
             * @description
             * Gets all the currencies
             * 
             * @returns {object} an angularjs promise object
             */
            GetAllCurrencies: function () {

                return getCachedOrApi("AllCurrency", "GetAllCurrencies", "settings");

            },

        };
    };

    angular.module('umbraco.resources').service('merchelloSettingsService', merchello.Services.MerchelloSettingsService);

}(window.merchello.Services = window.merchello.Services || {}));
