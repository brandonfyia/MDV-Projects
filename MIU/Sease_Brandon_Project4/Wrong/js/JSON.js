/*
 	Brandon Sease
    MIU 11/12
    Project 4
*/

var json = {
			"gun1": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","SIG Sauer"],
				"gModel"  : ["Gun Model: ", "P220"],
				"gCal"    : ["Caliber: ", ".45 ACP"],
				"notes"   : ["Notes: ", "Elite"]
			},
			"gun2": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Rifle"],
				"gMake"   : ["Gun Make: ","Daniel Defence"],
				"gModel"  : ["Gun Model: ", "EZ Car AR 15"],
				"gCal"    : ["Caliber: ", "5.56"],
				"notes"   : ["Notes: ", "Several Upgrades"]
			},
			"gun3": {
				"gCat"    : ["Gun Type: ", "Auto-Loader Shotgun"],
				"gMake"   : ["Gun Make: ","Benneli"],
				"gModel"  : ["Gun Model: ", "M4"],
				"gCal"    : ["Caliber: ", "12 gauge"],
				"notes"   : ["Notes: ", "Added Rail"]
			},
			"gun4": {
				"gCat"    : ["Gun Type: ", "Revolver Pistol"],
				"gMake"   : ["Gun Make: ","Smith and Wesson"],
				"gModel"  : ["Gun Model: ", "Governor"],
				"gCal"    : ["Caliber: ", ".410 gauge"],
				"notes"   : ["Notes: ", "	"]
			},
			"gun5": {
				"gCat"    : ["Gun Type: ", "Bolt Rifle"],
				"gMake"   : ["Gun Make: ","Savage"],
				"gModel"  : ["Gun Model: ", "110 BA"],
				"gCal"    : ["Caliber: ", ".338 Lapua"],
				"notes"   : ["Notes: ", "Awesome"]
			},
			"gun6": {
				"gCat"    : ["Gun Type: ", "Pump Shotgun"],
				"gMake"   : ["Gun Make: ","Mossburg"],
				"gModel"  : ["Gun Model: ", "500"],
				"gCal"    : ["Caliber: ", "12 gauge"],
				"notes"   : ["Notes: ", "Chainsaw"]
			},
			"gun7": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","Springfield"],
				"gModel"  : ["Gun Model: ", "XD"],
				"gCal"    : ["Caliber: ", ".40 S&amp;W"],
				"notes"   : ["Notes: ", "Tactical"]
			},
			"gun8": {
				"gCat"    : ["Gun Type: ", "Auto-Loader Shotgun"],
				"gMake"   : ["Gun Make: ","Remington"],
				"gModel"  : ["Gun Model: ", "1187"],
				"gCal"    : ["Caliber: ", "12 gauge"],
				"notes"   : ["Notes: ", "Cammo"]
			},
			"gun9": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","Glock"],
				"gModel"  : ["Gun Model: ", "19"],
				"gCal"    : ["Caliber: ", "9mm"],
				"notes"   : ["Notes: ", "Fourth Gen."]
			},
			"gun10": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Rifle"],
				"gMake"   : ["Gun Make: ","Remington"],
				"gModel"  : ["Gun Model: ", "ACR"],
				"gCal"    : ["Caliber: ", "5.56"],
				"notes"   : ["Notes: ", ""]
			},
			"gun11": {
				"gCat"    : ["Gun Type: ", "Bolt Rifle"],
				"gMake"   : ["Gun Make: ","Remington"],
				"gModel"  : ["Gun Model: ", "700 TP"],
				"gCal"    : ["Caliber: ", ".308"],
				"notes"   : ["Notes: ", "10x Optic"]
			},
			"gun12": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","SIG Sauer"],
				"gModel"  : ["Gun Model: ", "P226"],
				"gCal"    : ["Caliber: ", "9mm"],
				"notes"   : ["Notes: ", "Tactical Opperations"]
			},
			"gun13": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","SIG Sauer"],
				"gModel"  : ["Gun Model: ", "P238"],
				"gCal"    : ["Caliber: ", ".380"],
				"notes"   : ["Notes: ", "Equinox"]
			},
			"gun14": {
				"gCat"    : ["Gun Type: ", "Revolver Pistol"],
				"gMake"   : ["Gun Make: ","Taurus"],
				"gModel"  : ["Gun Model: ", "Judge"],
				"gCal"    : ["Caliber: ", ".410 gauge"],
				"notes"   : ["Notes: ", ""]
			},
			"gun15": {
				"gCat"    : ["Gun Type: ", "Pump Shotgun"],
				"gMake"   : ["Gun Make: ","Remington"],
				"gModel"  : ["Gun Model: ", "870"],
				"gCal"    : ["Caliber: ", "12 gauge"],
				"notes"   : ["Notes: ", "Rails"]
			},
			"gun16": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","FNP"],
				"gModel"  : ["Gun Model: ", "45 Tactical"],
				"gCal"    : ["Caliber: ", ".45 ACP"],
				"notes"   : ["Notes: ", "Red Dot Sight"]
			},
			"gun17": {
				"gCat"    : ["Gun Type: ", "Revolver Pistol"],
				"gMake"   : ["Gun Make: ","Colt"],
				"gModel"  : ["Gun Model: ", "Sherrif's 45"],
				"gCal"    : ["Caliber: ", ".45 Colt"],
				"notes"   : ["Notes: ", "2 inch"]
			},
			"gun18": {
				"gCat"    : ["Gun Type: ", "Bolt Rifle"],
				"gMake"   : ["Gun Make: ","Blaser"],
				"gModel"  : ["Gun Model: ", "R-93"],
				"gCal"    : ["Caliber: ", ".300 Win Mag"],
				"notes"   : ["Notes: ", "First Gen."]
			},
			"gun19": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Rifle"],
				"gMake"   : ["Gun Make: ","Noveski"],
				"gModel"  : ["Gun Model: ", "AR 15"],
				"gCal"    : ["Caliber: ", ".300 BLK"],
				"notes"   : ["Notes: ", "SBR"]
			},
			"gun20": {
				"gCat"    : ["Gun Type: ", "Semi-Auto Pistol"],
				"gMake"   : ["Gun Make: ","Kimber"],
				"gModel"  : ["Gun Model: ", "1911"],
				"gCal"    : ["Caliber: ", ".45 ACP"],
				"notes"   : ["Notes: ", "Eclipse II"]
			}
	
		};