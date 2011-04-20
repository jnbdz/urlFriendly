/*
---
description: Clean a string to make it friendly for the URL.

license: MIT-style

authors:
- Jean-Nicolas Boulay Desjardins (http://jean-nicolas.name/)

requires:
 core/1.2.1:   '*'

provides:
- urlFriendly

...
*/

var urlFriendly = new Class({

		initialize: function(val){

			this.val = val;

		},

                escape: function(){

                        return escape(this.val);
                },

                humanReadable: function(){

                        return this.val
                        .toLowerCase()
                        .replace(/^\s+|\s+$/g, "") // trim leading and trailing spaces
                        .replace(/[_|\s]+/g, "-") // change all spaces and underscores to a hyphen
                        .replace(/[^a-z0-9-]+/g, "") // remove all non-alphanumeric characters except the hyphen
                        .replace(/[-]+/g, "-") // replace multiple instances of the hyphen with a single instance
                        .replace(/^-+|-+$/g, ""); // trim leading and trailing hyphens
                }

        });
