const db = require('../data/db-config');

module.exports = {
    find,
    findById,
    findSteps,
    add,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes')
        .where({ id })
        .first()
};

function findSteps(id) {
    return db('steps')
        .select([
            'steps.id',
            'schemes.scheme_name',
            'steps.step_number',
            'steps.instructions'
        ])
        .where({ "schemes.id": id })
        .join('schemes', 'schemes.id', 'steps.id')
        .orderBy('steps.id', 'asc')
};

function add(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(scheme => {
            return scheme;
        });
};

// function add(schemes) {
//     return db('schemes')
//         .insert(scheme, 'id')
//         .then(([id]) => findById(id));
// };

function update(changes, id) {
    return db('schemes')
        .update(changes)
        .where('id', Number(id))
};

function remove(id) {
    return db('schemes')
        .where('id', id)
        .first()
        .del();
};
