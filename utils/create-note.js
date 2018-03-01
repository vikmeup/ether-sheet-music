/**
 * Helper create test game
 */
"use strict";

var Contract = require( "../src/Contract.js" );

var RandomNote = require( "./lib/random-note.js" );

var SheetMusic = new Contract;

var web = SheetMusic.getWeb();

var creator = SheetMusic.instance;

var trans = {
    from: web.eth.accounts[ 0 ],
    value: web.toWei( 1, "ether" ),
    gas: 3000000
};

var note = RandomNote();

creator.createNote( note[ 0 ], note[ 1 ], trans, function( err, game ) {

    if( err ) {

        throw err;

    }

    console.log( game );

});

