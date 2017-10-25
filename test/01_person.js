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
    describe("Variable: name", function(){})
      it("Use setName to set the first name", function(){
        return personContract.setName("Fabian").then(function(response){
          expect(response).to.not.be.an("error");
        });
      });

      it("Check the first name was set properly", function(){
        return personContract.name().then(function(response){
          expect(response.toString()).to.be.equal("Fabian");
        });
      });

    it("Use setName to set the second name", function(){
      return personContract.setName("Pedro").then(function(response){
        expect(response).to.not.be.an("error");
      });
    });

    it("Check the second name was set properly", function(){
      return personContract.name().then(function(response){
        expect(response.toString()).to.be.equal("Pedro");
      });
    });
  });
});
