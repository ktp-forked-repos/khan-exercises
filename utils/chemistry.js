(function() {

// Elements
// There's probably a more efficient way to do this, perhaps index by proton number.
// The attribute 'neutrons' gives the number of nuetrons in stable isotopes, in order of abundance.

function element( protons, symbol, fullname, neutrons) {
	this.symbol = symbol;
	this.fullname = fullname;
	this.protons = protons;
	this.neutrons = neutrons;
}

var H  = new element( 1, "H", "hydrogen", [ 0, 1 ] );
var He = new element( 2, "He", "helium", [ 2, 1 ] );
var Li = new element( 3, "Li", "lithium", [ 4, 3 ] );
var Be = new element( 4, "Be", "beryllium", [ 5 ] );
var B  = new element( 5, "B", "boron", [ 6, 5 ] );
var C  = new element( 6, "C", "carbon", [ 6, 7 ] );
var N  = new element( 7, "N", "nitrogen", [ 7, 8 ] );
var O  = new element( 8, "O", "oxygen", [ 8, 10, 9 ] );
var F  = new element( 9, "F", "fluorine", [ 10 ] );
var Ne = new element( 10, "Ne", "neon", [ 10, 12, 11 ] );
var Na = new element( 11, "Na", "sodium", [ 12 ] );
var Mg = new element( 12, "Mg", "magnesium", [ 12, 14, 13 ] );
var Al = new element( 13, "Al", "aluminium", [ 14 ] );
var Si = new element( 14, "Si", "silicon", [ 14, 15, 16 ] );
var P  = new element( 15, "P", "phosphorus", [ 16 ] );
var S  = new element( 16, "S", "sulfur", [ 16, 18, 17, 20 ] );
var Cl = new element( 17, "Cl", "chlorine", [ 18, 20 ] );
var Ar = new element( 18, "Ar", "argon", [ 22, 18, 20 ] );
var K  = new element( 19, "K", "potassium", [ 20, 22 ] );
var Ca = new element( 20, "Ca", "calcium", [ 20, 24, 22, 23, 26 ] );
var Br = new element( 35, "Br", "bromine", [ 44, 46 ] );
var Kr = new element( 36, "Kr", "krypton", [ 48, 50, 46, 47, 44, 42 ] );

// Groups in the periodic table
var group1 = [ Li, Na, K ];
var group2 = [ Be, Mg, Ca ];
var group3 = [ B, Al ];
var group4 = [ C, Si ];
var group5 = [ N, P ];
var group6 = [ O, S ];
var group7 = [ F, Cl, Br ];
var group8 = [ He, Ne, Ar, Kr ];

var periodic_groups = [ group1, group2, group3, group4, group5, group6, group7, group8 ];
var all_elements = [ H ].concat( group1, group2, group3, group4, group5, group6, group7, group8 );

// Molecules
// Molecules are defined by their molecular formula which is a passed as an array of alternating and numbers
// e.g. Water is  molecule( [ H, 2, O, 1 ] )

function molecule( components, commonName, molecularFormula) {
	this.commonName = commonName;
	this.molecularFormula = molecularFormula;
}

// H2O = molecule( [ H, 2, O, 1 ] )

jQuery.extend(KhanUtil, {
	// Get a random element
	randElement: function( ) {
		return KhanUtil.randFromArray( all_elements );
	},
	
	// Get a random isotope of an element, i.e. it has a specific number of neutrons
	randIsotope: function( ) {
		selected_element = KhanUtil.randFromArray( all_elements );
		selected_element.neutrons = KhanUtil.randFromArray( selected_element.neutrons );
		return selected_element;
	},
	
	// Get a random element from a specific group in periodic table
	randElementFromGroup: function( n ) {
		return KhanUtil.randFromArray(  periodic_groups[ n - 1 ] );
	}
} );

} )();
