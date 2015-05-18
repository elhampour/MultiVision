var mongoose = require('mongoose');

var courseSchema = mongoose.Schema({
    title: {type: String, required: '{PATH} is required.'},
    featured: {type: Boolean, required: '{PATH} is required.'},
    published: {type: Date, required: '{PATH} is required.'},
    tags: [String]
});
var Course = mongoose.model('Course', courseSchema);

function createDefaultCourses() {
    Course.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Course.create({title: "JavaScript1", featured: false, published: new Date('2/5/2015'), tags: ['JavaScript1','ClientSide']});
            Course.create({title: "JavaScript2", featured: true, published: new Date('5/8/2015'), tags: ['JavaScript2','ClientSide']});
            Course.create({title: "JavaScript3", featured: true, published: new Date('7/12/2015'), tags: ['JavaScript3','ClientSide']});
            Course.create({title: "JavaScript4", featured: true, published: new Date('15/2/2015'), tags: ['JavaScript4','ClientSide']});
            Course.create({title: "JavaScript5", featured: false, published: new Date('1/3/2015'), tags: ['JavaScript5','ClientSide']});
            Course.create({title: "JavaScript6", featured: false, published: new Date('5/3/2015'), tags: ['JavaScript6','ClientSide']});
            Course.create({title: "JavaScript7", featured: true, published: new Date('1/20/2015'), tags: ['JavaScript7','ClientSide']});
            Course.create({title: "JavaScript8", featured: true, published: new Date('1/3/2015'), tags: ['JavaScript8','ClientSide']});
            Course.create({title: "JavaScript9", featured: true, published: new Date('5/22/2015'), tags: ['JavaScript9','ClientSide']});
            Course.create({title: "JavaScript10", featured: false, published: new Date('7/20/2015'), tags: ['JavaScript10','ClientSide']});
            Course.create({title: "JavaScript11", featured: false, published: new Date('7/3/2015'), tags: ['JavaScript11','ClientSide']});
            Course.create({title: "JavaScript12", featured: true, published: new Date('2/2/2015'), tags: ['JavaScript12','ClientSide']});
            Course.create({title: "JavaScript13", featured: false, published: new Date('2/3/2015'), tags: ['JavaScript13','ClientSide']});
            Course.create({title: "JavaScript14", featured: true, published: new Date('1/12/2015'), tags: ['JavaScript14','ClientSide']});
            Course.create({title: "JavaScript15", featured: false, published: new Date('3/3/2015'), tags: ['JavaScript15','ClientSide']});
            Course.create({title: "JavaScript16", featured: true, published: new Date('1/18/2015'), tags: ['JavaScript16','ClientSide']});
            Course.create({title: "JavaScript17", featured: false, published: new Date('6/3/2015'), tags: ['JavaScript17','ClientSide']});
            Course.create({title: "JavaScript18", featured: true, published: new Date('1/12/2015'), tags: ['JavaScript18','ClientSide']});
            Course.create({title: "JavaScript19", featured: true, published: new Date('8/3/2015'), tags: ['JavaScript19','ClientSide']});
        }
    });
}

exports.createDefaultCourses = createDefaultCourses;