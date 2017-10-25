var Person = artifacts.require("Person");
expect = require("chai").expect;

contract("Testing the Person contract", function(accounts){
  describe("Deploy the Person contract", function(){
    it("Get an instance the Person contract", function(){
      return Person.new().then(function(instance){
        personContract = instance;
      });
    });
  });
  describe("Test the contract variables", function(){
    it("The name variable is Diego", function(){
      return personContract.name().then(function(response){
        expect(response.toString()).to.be.equal("Diego");
      });
    });
  });
});
