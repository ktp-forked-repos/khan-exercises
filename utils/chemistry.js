(function() {

// Elements
// There's probably a better way to do this, perhaps index by proton number.
// The attribute 'neutrons' gives the number of nuetrons in stable isotopes, in order of abundance.

function element( symbol, fullname, protons, neutrons) {
	this.symbol = symbol;
	this.fullname = fullname;
	this.protons = protons;
	this.neutrons = neutrons;
}

var H  = new element( "H", "hydrogen", 1, [ 0, 1 ] );
var He = new element( "He", "helium", 2, [ 2, 1 ] );
var Li = new element( "Li", "lithium", 3, [ 4, 3 ] );
var Be = new element( "Be", "beryllium", 4, [ 5 ] );
var F  = new element( "F", "fluorine", 9, [ 10 ] );
var Ne = new element( "Ne", "neon", 10, [ 10, 12, 11 ] );
var Na = new element( "Na", "sodium", 11, [ 12 ] );
var Mg = new element( "Mg", "magnesium", 12, [ 12, 14, 13 ] );
var Cl = new element( "Cl", "chlorine", 17, [ 18, 20 ] );
var Ar = new element( "Ar", "argon", 18, [ 22, 18, 20 ] );
var K  = new element( "K", "potassium", 19, [ 20, 22 ] );
var Ca = new element( "Ca", "calcium", 20, [ 20, 24, 22, 23, 26 ] );
var Br = new element( "Br", "bromine", 35, [ 44, 46 ] );
var Kr = new element( "Kr", "krypton", 36, [ 48, 50, 46, 47, 44, 42 ] );

var group1 = [Li, Na, K];
var group2 = [Be, Mg, Ca];
var group7 = [F, Cl, Br];
var group8 = [He, Ne, Ar, Kr];
var elements = [H].concat( group1, group2, group7, group8 );

jQuery.extend(KhanUtil, {
	// Get a random element
	randElement: function( ) {
		return KhanUtil.randFromArray( elements );
	}
} );

} )();
