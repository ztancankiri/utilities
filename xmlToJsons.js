const xml2js = require("xml2js-es6-promise");
const fs = require("fs");

async function parse() {
	const content = fs.readFileSync("/Users/ztan/Desktop/HapagLloyd.xml").toString();

	const objects = await xml2js(content, {
		normalizeTags: true,
		explicitArray: false,
		mergeAttrs: true,
		normalize: true,
		explicitRoot: false,
	});

	for (const ship of objects.ship) {
		for (const trip of ship.trip) {
			delete trip.remark_en;
			delete trip.remark_de;
			delete trip.category;
			delete trip?.arrival?.person;
			delete trip?.departure?.person;
		}

		fs.writeFileSync("/Users/ztan/Desktop/sails/" + ship.shipcode + ".json", JSON.stringify(ship, null, "\t"));
	}

	console.log(objects);
}

parse();
