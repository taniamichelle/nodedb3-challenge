const db = require('./db-config');

module.exports = {
    find,
    findById,
    findSteps,
    addScheme,
    update,
    remove
};

function find() {
    return db('schemes');
};

function findById(id) {
    return db('schemes')
        .where({ scheme_id: id })
        .first()
        .then(scheme => {
            return scheme;
        });
};

function findSteps(id) {
    return db('steps')
        .join('schemes.id', 'steps.id')
        .where({ scheme_id: id })
        .select('steps.id', 'schemes.scheme_name', 'steps.step_number', 'steps.instructions')
        .orderBy('id', 'asc')
        .then(steps => {
            return steps;
        });
};

function addScheme(scheme) {
    return db('schemes')
        .insert(scheme)
        .then(scheme => {
            return scheme;
        });
};

function update(id, changes) {
    return db('schemes')
        .where({ id })
        .update(changes);
};

function remove(id) {
    return db('schemes')
        .where('id', id)
        .del();
};

