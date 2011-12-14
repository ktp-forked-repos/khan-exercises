(function() {

// Elements
// There must be a more efficient way to do this, to avoid having to generate all the chemicals upfront.
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
var Cu = new element( 29, "Cu", "copper", [ 34, 36 ] );
var Ga = new element( 31, "Ga", "gallium", [ 38, 40 ] );
var Ge = new element( 32, "Ga", "germanium", [ 42, 40, 38, 44, 41 ] );
var As = new element( 33, "As", "arsenic", [ 42 ] );
var Se = new element( 34, "Se", "selenium", [ 46, 44, 42, 48, 43, 40 ] );
var Br = new element( 35, "Br", "bromine", [ 44, 46 ] );
var Kr = new element( 36, "Kr", "krypton", [ 48, 50, 46, 47, 44, 42 ] );
var Ag = new element( 47, "Ag", "silver", [ 60, 62 ] );
var Pt = new element( 78, "Pt", "platinum", [ 117, 116, 118, 120, 114 ] );
var Au = new element( 79, "Au", "gold", [ 118 ] );


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

// Molecules
// Molecules are defined by their molecular formula which is a passed as an array of alternating and numbers
// e.g. Water is  molecule( [ H, 2, O, 1 ] )
// Atomic mass units assume that molecules consist of the most abundant isotopes

function molecule( components, commonName) {
	this.commonName = commonName;
	this.molecularFormula = "";
	this.amu = 0;
	
	for(var i = 0; i < components.length; i += 2) {
		this.amu += ( components[i].protons +  components[i].neutrons[0] ) * components[ i + 1 ];
		this.molecularFormula += components[i].symbol;
		if ( components[ i + 1 ] > 1 ) {
			this.molecularFormula += "_{" + components[ i + 1 ] + "}";
		}
	}
}

H2 = new molecule( [ H, 2 ], "hydrogen gas" );
H2O = new molecule( [ H, 2, O, 1 ], "water" );
CO2 = new molecule( [ C, 1, O, 2 ], "carbon dioxide" );
NH3 = new molecule( [ N, 1, H, 3 ], "ammonia" );
CH4 = new molecule( [ C, 1, H, 1 ], "methane" );
H2SO4 = new molecule( [ H, 2, S, 1, O, 4 ], "sulfuric acid" );
HCl = new molecule( [ H, 1, Cl, 1 ], "hydrochloric acid" );
NaOH = new molecule( [ Na, 1, O, 1, H, 1 ], "hydrochloric acid" );
MgCl2 = new molecule( [ Mg, 1, Cl, 2 ], "magnesium chloride" );
NaCl = new molecule( [ Na, 1, Cl, 1 ], "sodium chloride" );
KCl = new molecule( [ K, 1, Cl, 1 ], "potassium chloride" );
KCN = new molecule( [ K, 1, C, 1, N, 1 ], "potassium cyanide" );

all_compounds = [ H2O, CO2, CH4, H2SO4, HCl, NaOH, MgCl2, NaCl ];

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
		return KhanUtil.randFromArray( all_compounds );
	}
} );

} )();
