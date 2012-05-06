function(doc) {
  if (doc._id.substr(0, 7) === "Gun:PS:") {
    emit(doc._id.substr(7), {
    	"gCat": doc.gCat,
    	"gMake": doc.gMake,
    	"gModel": doc.gModel,
    	"gCal": doc.gCal,
    	"notes": doc.notes
    });
  }
};