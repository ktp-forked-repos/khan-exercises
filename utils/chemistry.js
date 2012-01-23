(function() {

var element_objects = {
	H:  { protons: 1, symbol: "H", name: "hydrogen", mass: 1.008, neutrons: [ 0, 1 ], oxidationStates: [ 1, 0, -1 ] },
	He: { protons: 2, symbol: "He", name: "helium", mass: 4.003, neutrons: [ 2, 1 ], oxidationStates: [ 0 ] },
	Li: { protons: 3, symbol: "Li", name: "lithium", mass: 6.941, neutrons: [ 4, 3 ], oxidationStates: [ 0, 1 ] },
	Be: { protons: 4, symbol: "Be", name: "beryllium", mass: 9.012, neutrons: [ 5 ], oxidationStates: [ 0, 2 ] },
	B:  { protons: 5, symbol: "B", name: "boron", mass: 10.811, neutrons: [ 6, 5 ], oxidationStates: [ 0, 3 ] },
	C:  { protons: 6, symbol: "C", name: "carbon", mass: 12.011, neutrons: [ 6, 7 ], oxidationStates: [ -4, 0, 2, 4 ] },
	N:  { protons: 7, symbol: "N", name: "nitrogen", mass: 14.007, neutrons: [ 7, 8 ], oxidationStates: [ -3, -2, -1, 0, 1, 2, 3, 4, 5 ] },
	O:  { protons: 8, symbol: "O", name: "oxygen", mass: 15.999, neutrons: [ 8, 10, 9 ], oxidationStates: [ -2, 0 ] },
	F:  { protons: 9, symbol: "F", name: "fluorine", mass: 18.998, neutrons: [ 10 ], oxidationStates: [ -1, 0 ] },
	Ne: { protons: 10, symbol: "Ne", name: "neon", mass: 20.180, neutrons: [ 10, 12, 11 ], oxidationStates: [ 0 ] },
	Na: { protons: 11, symbol: "Na", name: "sodium", mass: 22.990, neutrons: [ 12 ], oxidationStates: [ 0, 1 ] },
	Mg: { protons: 12, symbol: "Mg", name: "magnesium", mass: 24.305, neutrons: [ 12, 14, 13 ], oxidationStates: [ 0, 2 ] },
	Au: { protons: 79, symbol: "Au", name: "gold", mass: 196.967, neutrons: [ 118 ], oxidationStates: [ 0, 1, 3 ] }
}

var elements = [ "H", "He", "Li", "Be", "B", "C", "N", "O", "F" ];

/*
var Al = new element( 13, "Al", "aluminium", [ 14 ] );
var Si = new element( 14, "Si", "silicon", [ 14, 15, 16 ] );
var P  = new element( 15, "P", "phosphorus", [ 16 ] );
var S  = new element( 16, "S", "sulfur", [ 16, 18, 17, 20 ] );
var Cl = new element( 17, "Cl", "chlorine", [ 18, 20 ] );
var Ar = new element( 18, "Ar", "argon", [ 22, 18, 20 ] );
var K  = new element( 19, "K", "potassium", [ 20, 22 ] );
var Ca = new element( 20, "Ca", "calcium", [ 20, 24, 22, 23, 26 ] );
var Cu = new element( 29, "Cu", "copper", [ 34, 36 ] );
var Ga = new element( 31, "Ga", "gallium", [ 38, 40 ] );
var Ge = new element( 32, "Ga", "germanium", [ 42, 40, 38, 44, 41 ] );
var As = new element( 33, "As", "arsenic", [ 42 ] );
var Se = new element( 34, "Se", "selenium", [ 46, 44, 42, 48, 43, 40 ] );
var Br = new element( 35, "Br", "bromine", [ 44, 46 ] );
var Kr = new element( 36, "Kr", "krypton", [ 48, 50, 46, 47, 44, 42 ] );
var Ag = new element( 47, "Ag", "silver", [ 60, 62 ] );
var Pt = new element( 78, "Pt", "platinum", [ 117, 116, 118, 120, 
*/


// --- Compounds ---
// Compounds are defined by their molecular formula which is a passed as an array of alternating and numbers
// e.g. Water is  molecule( [ H, 2, O, 1 ] )

function Compound( components, commonName ) {
	this.commonName = commonName;
	this.molecularFormula = "";
	this.mass = 0;
	
	for ( var i = 0; i < components.length; i += 2 ) {
		var element = element_objects[ components[ i ] ];
		this.mass += element.mass * components[ i + 1 ];
		this.molecularFormula += element.symbol;
		if ( components[ i + 1 ] > 1 ) {
			this.molecularFormula += "_{" + components[ i + 1 ] + "}";
		}
	}
}

var compounds = [
	new Compound( [ "H", 2 ], "hydrogen gas" ),
	new Compound( [ "H", 2, "O", 1 ], "water" ),
	new Compound( [ "C", 1, "O", 2 ], "carbon dioxide" ),
	new Compound( [ "N", 1, "H", 3 ], "ammonia" ),
	new Compound( [ "C", 1, "H", 4 ], "methane" ),
	new Compound( [ "Na", 1, "O", 1, "H", 1 ], "sodium hydroxide" ),
	new Compound( [ "Mg", 1, "O", 1 ], "magnesium oxide" ),
];


/*

// Groups in the periodic table
var group1 = [ Li, Na, K ];
var group2 = [ Be, Mg, Ca ];
var group3 = [ B, Al, Ga ];
var group4 = [ C, Si, Ge ];
var group5 = [ N, P, As ];
var group6 = [ O, S, Se ];
var group7 = [ F, Cl, Br ];
var group8 = [ He, Ne, Ar, Kr ];
var metals = [ Cu, Ag, Pt, Au ];

var periodic_groups = [ group1, group2, group3, group4, group5, group6, group7, group8 ];
var all_elements = [ H ].concat( group1, group2, group3, group4, group5, group6, group7, group8, metals );

H2SO4 = new molecule( [ H, 2, S, 1, O, 4 ], "sulfuric acid" );
HCl = new molecule( [ H, 1, Cl, 1 ], "hydrochloric acid" );
MgCl2 = new molecule( [ Mg, 1, Cl, 2 ], "magnesium chloride" );
NaCl = new molecule( [ Na, 1, Cl, 1 ], "sodium chloride" );
KCl = new molecule( [ K, 1, Cl, 1 ], "potassium chloride" );
KCN = new molecule( [ K, 1, C, 1, N, 1 ], "potassium cyanide" );

all_compounds = [ H2O, CO2, CH4, H2SO4, HCl, NaOH, MgCl2, NaCl ];
*/

jQuery.extend( KhanUtil, {
	// Get a random element
	randElement: function() {
		return element_objects[ KhanUtil.randFromArray( elements ) ];
	},
	
	// Get a random isotope of an element, i.e. it has a specific number of neutrons
	randIsotope: function( ) {
		selected_element =  element_objects[ KhanUtil.randFromArray( elements ) ];
		selected_element.neutrons = KhanUtil.randFromArray( selected_element.neutrons );
		return selected_element;
	},
	
	// Get all elements from a given group
	getElementsFromGroup: function( n ) {
		return periodic_groups[ n - 1 ];
	},
	
	getRandElementOfType: function( type ) {
		if( type == "metal" ){
			return KhanUtil.randFromArray( metals );
		}
		else {
			return KhanUtil.randFromArray( all_elements );
		}
	},
	
	// Get a random element from a given group in periodic table
	randElementFromGroup: function( n ) {
		return KhanUtil.randFromArray(  periodic_groups[ n - 1 ] );
	},
	
	// Test molecule properties
	randCompound: function( ) {
		return KhanUtil.randFromArray( compounds );
	}
} );

} )();
