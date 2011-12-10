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

var H  = new element( "H", "hydrogen", 1, [ 1, 2 ] );
var He = new element( "He", "helium", 2, [ 4, 3 ] );
var Li = new element( "Li", "lithium", 3, [ 7, 6 ] );
var Be = new element( "Be", "beryllium", 4, [ 9 ] );
var F  = new element( "F", "fluorine", 9, [ 19 ] );
var Ne = new element( "Ne", "neon", 10, [ 20, 22, 21 ] );
var Na = new element( "Na", "sodium", 11, [ 23 ] );
var Mg = new element( "Mg", "magnesium", 12, [ 24, 26, 25 ] );
var Cl = new element( "Cl", "chlorine", 17, [ 35, 37 ] );
var Ar = new element( "Ar", "argon", 18, [ 40, 36, 38 ] );
var K  = new element( "K", "potassium", 19, [ 39, 41 ] );
var Ca = new element( "Ca", "calcium", 20, [ 40, 44, 42, 43, 46 ] );
var Br = new element( "Br", "bromine", 35, [ 79, 81 ] );
var Kr = new element( "Kr", "krypton", 36, [ 84, 86, 82, 83, 80, 78 ] );

var group1 = [Li, Na, K];
var group2 = [Be, Mg, Ca];
var group7 = [F, Cl, Br];
var group8 = [He, Ne, Ar, Kr];
var elements = [H].concat( group1, group2, group7, group8 );

alert(elements[3].symbol);

} )();
