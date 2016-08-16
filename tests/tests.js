
exports.defineAutoTests = function() {
  describe('cordova-plugin-htmltopdf object existance check', function() {

    it("cordova-plugin-htmltopdf", function () {
      expect( cordova-plugin-htmltopdf).toBeDefined();
    });

    it("cordova-plugin-htmltopdf.coolMethod", function() {
      expect( cordova-plugin-htmltopdf.coolMethod ).toBeDefined();
    });
  });

  describe('coolMethod call test', function() {

    var value;
    var callbacks;

    beforeEach(function(done) {
      callbacks = {
        win: function(arg){
          value = arg;
          done();
        },
        fail: function(err){
          console.log("callbacks.fail");
          done();
        }
      };

      spyOn(callbacks, 'win').and.callThrough();
      spyOn(callbacks, 'fail').and.callThrough();
      
      cordova-plugin-htmltopdf.coolMethod("test", callbacks.win, callbacks.fail);
    });

    it("to have been called", function() {
      expect(callbacks.win).toHaveBeenCalled();
    });

    it("check return value", function() {
      expect(value).toBe("test");
    });

  });
};
