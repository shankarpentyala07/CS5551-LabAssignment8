describe('Controllers',function()
        {
    var scope;
    
    beforeEach(module('starter.controllers'));
    
    beforeEach(inject(function($rootScope,$controller)
                     {
        scope = $rootScope.$new();
        $controller('PlaylistsCtrl',{$scope:scope});
    }));
    
    it('should have results',function()
      {
       expect(scope.posterimg).toEqual('abcd');  
    });
    
});
